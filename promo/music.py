#!/usr/bin/env python3
"""Original 30 s promo score + sound design, synthesized from scratch (no samples).

128 BPM, 4/4, C major, 16 bars = exactly 30.000 s. Every event is placed on the
sample grid (1 beat = 22,500 samples at 48 kHz), so cues land sample-accurately.

Run from the repo root:
    PYTHONPATH=/tmp/claude-0/pylib python3 promo/music.py
Output: promo/audio/music.wav  (48 kHz, stereo, 24-bit PCM, 1,440,000 samples)
"""
import os
import struct

import numpy as np
from scipy.ndimage import minimum_filter1d
from scipy.signal import butter, fftconvolve, lfilter, resample_poly, sosfilt, sosfiltfilt
import pedalboard as pb

SR = 48000
N = 30 * SR                      # 1,440,000 samples
BEAT = 60 / 128                  # 0.46875 s
S16 = BEAT / 4                   # 16th note
BAR = 4 * BEAT                   # 1.875 s
OUT = os.path.join('promo', 'audio', 'music.wav')
TARGET_LUFS = -14.0
CEIL_DBTP = -1.3                 # limiter ceiling (spec: <= -1.0 dBTP)


# ------------------------------------------------------------------ basics
def S(t):
    """seconds -> sample index"""
    return int(round(t * SR))


def T(bar, slot=0.0):
    """time of a 16th-note slot (0..15) in a 1-based bar"""
    return (bar - 1) * BAR + slot * S16


def mtof(m):
    return 440.0 * 2.0 ** ((np.asarray(m, float) - 69.0) / 12.0)


def db(x):
    return 10.0 ** (x / 20.0)


def rc(n):
    """raised-cosine ramp 0 -> 1 over n samples"""
    n = max(int(n), 1)
    return 0.5 - 0.5 * np.cos(np.pi * np.arange(n) / n)


def edges(y, a=0.003, r=0.01):
    """click-free attack / release ramps on both ends"""
    y = np.array(y, float)
    na, nr = max(1, S(a)), max(1, S(r))
    y[..., :na] *= rc(na)
    y[..., -nr:] *= rc(nr)[::-1]
    return y


def tt(n):
    return np.arange(n) / SR


def pan2(y, pan):
    """equal-power pan, centre = unity on both sides; pan may be an array"""
    th = (np.clip(pan, -1, 1) + 1) * np.pi / 4
    return np.vstack([y * np.cos(th), y * np.sin(th)]) * np.sqrt(2)


def curve(points, log=False, n=N):
    """piecewise-linear automation from (time, value) breakpoints"""
    t = np.arange(n) / SR
    xs = np.array([p[0] for p in points], float)
    ys = np.array([p[1] for p in points], float)
    if log:
        return np.exp(np.interp(t, xs, np.log(ys)))
    return np.interp(t, xs, ys)


# ------------------------------------------------------------------ filters
def filt(x, kind, fc, order=2):
    btype = {'lp': 'lowpass', 'hp': 'highpass', 'bp': 'bandpass'}[kind]
    return sosfilt(butter(order, fc, btype, fs=SR, output='sos'), x, axis=-1)


def tv_filter(x, fc, kind='lp', q=0.707, block=64, stages=1):
    """time-varying RBJ biquad (cutoff automation), coefficients per 64-sample block"""
    x = np.asarray(x, float)
    mono = x.ndim == 1
    x = np.atleast_2d(x)
    n = x.shape[-1]
    fc = np.broadcast_to(np.asarray(fc, float), (n,))
    nb = (n + block - 1) // block
    f = np.clip(fc[np.minimum(np.arange(nb) * block + block // 2, n - 1)], 15, 0.45 * SR)
    w0 = 2 * np.pi * f / SR
    cw, alpha = np.cos(w0), np.sin(w0) / (2 * q)
    if kind == 'lp':
        b = np.stack([(1 - cw) / 2, 1 - cw, (1 - cw) / 2])
    elif kind == 'hp':
        b = np.stack([(1 + cw) / 2, -(1 + cw), (1 + cw) / 2])
    else:                                    # band-pass, 0 dB peak
        b = np.stack([alpha, 0 * alpha, -alpha])
    a = np.stack([1 + alpha, -2 * cw, 1 - alpha])
    b, a = b / a[0], a / a[0]
    y = x.copy()
    for _ in range(stages):
        for c in range(y.shape[0]):
            z = np.zeros(2)
            out = np.empty(n)
            for i in range(nb):
                s = slice(i * block, min(n, (i + 1) * block))
                out[s], z = lfilter(b[:, i], a[:, i], y[c, s], zi=z)
            y[c] = out
    return y[0] if mono else y


def region_tv(x, t0, t1, fc, kind='lp', q=0.707, stages=2, xf=0.02):
    """apply tv_filter only inside [t0, t1] with crossfades (fc: array over the region)"""
    s0, s1 = S(t0), S(t1)
    seg = tv_filter(x[:, s0:s1], fc, kind, q, stages=stages)
    w = np.ones(s1 - s0)
    nx = S(xf)
    w[:nx] = rc(nx)
    w[-nx:] = rc(nx)[::-1]
    x[:, s0:s1] = x[:, s0:s1] * (1 - w) + seg * w
    return x


# ------------------------------------------------------------------ oscillators
def phase_of(freq, n, phase0=0.0):
    dt = np.broadcast_to(np.asarray(freq, float) / SR, (n,))
    return phase0 + np.concatenate([[0.0], np.cumsum(dt[:-1])]), dt


def blep_saw(freq, n, phase0=0.0):
    """band-limited (polyBLEP) sawtooth"""
    ph, dt = phase_of(freq, n, phase0)
    ph = ph % 1.0
    y = 2 * ph - 1
    m = ph < dt
    x = ph[m] / dt[m]
    y[m] -= x + x - x * x - 1
    m = ph > 1 - dt
    x = (ph[m] - 1) / dt[m]
    y[m] -= x * x + x + x + 1
    return y


def osc_sin(freq, n, phase0=0.0):
    ph, _ = phase_of(freq, n, phase0)
    return np.sin(2 * np.pi * ph)


def partials(f, dur, ratios, amps, taus, att=0.003, rel=0.02, detune=1.0):
    """additive inharmonic tone (bells, pings) - alias-free by construction"""
    n = S(dur)
    t = tt(n)
    y = np.zeros(n)
    for r, a, tau in zip(ratios, amps, taus):
        fr = f * r * detune
        if fr < 18000:
            y += a * np.sin(2 * np.pi * fr * t) * np.exp(-t / tau)
    return edges(y, att, rel)


# ------------------------------------------------------------------ instruments
def pluck(f, dur=0.5, bright=1.0, body=0.35, fmax=14000, square=0.35):
    """additive saw/square pluck; upper partials decay faster = filter envelope"""
    n = S(dur)
    t = tt(n).astype(np.float32)
    K = max(1, int(fmax * min(bright, 1.3) / f))
    k = np.arange(1, K + 1, dtype=np.float32)[:, None]
    fk = f * k
    amp = (1 / k) * (1 + square * (k % 2)) / (1 + (fk / (2600 * bright)) ** 2)
    rate = 1 / body + 20.0 * (fk / 1000) / bright
    y = (amp * np.exp(-rate * t) * np.sin(2 * np.pi * fk * t)).sum(0)
    return edges(y.astype(float), 0.003, 0.02) * 0.55


def bell(f, dur=2.5, soft=1.0):
    """glassy bell, stereo via tiny L/R detune"""
    R = [1, 2.0, 3.0, 4.2, 5.4, 6.8, 8.9]
    A = [1, .42, .22, .16, .09, .05, .03]
    TA = [1.8, 1.0, .6, .42, .3, .2, .14]
    A = [a * (soft if i > 2 else 1) for i, a in enumerate(A)]
    l = partials(f, dur, R, A, TA, att=0.004, detune=0.9993)
    r = partials(f, dur, R, A, TA, att=0.004, detune=1.0007)
    return np.vstack([l, r]) * 0.5


def glass(f, dur=1.2, vel=1.0):
    """top-line motif voice: pluck body + bell shimmer"""
    y = 0.75 * pluck(f, dur, bright=0.75, body=0.55, square=0.15)
    y += partials(f, dur, [1, 2, 3.99, 6.1], [.42, .2, .08, .03], [.9, .5, .3, .18], att=0.003)
    return y * vel


def kick(vel=1.0, f_hi=170, f_lo=48, ptau=0.03, atau=0.21, dur=0.5, click=1.0, seed=0):
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    f = f_lo + (f_hi - f_lo) * np.exp(-t / ptau)
    body = osc_sin(f, n) * np.exp(-np.maximum(t - 0.02, 0) / atau)
    body = np.tanh(1.7 * body) / np.tanh(1.7)
    nz = filt(rng.standard_normal(n), 'bp', [1200, 7000]) * np.exp(-t / 0.003)
    tok = np.sin(2 * np.pi * 1450 * t) * np.exp(-t / 0.004)
    y = body + click * (0.35 * nz + 0.12 * tok)
    return edges(y, 0.0006, 0.04) * vel * 0.9


def snare(vel=1.0, tone=195, seed=0, dur=0.28, snap=1.0):
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    f = tone * (1 + 0.35 * np.exp(-t / 0.012))
    body = osc_sin(f, n) * np.exp(-t / 0.045)
    nz = filt(rng.standard_normal(n), 'bp', [1600, 9000]) * np.exp(-t / 0.075)
    y = 0.55 * body + 0.6 * snap * nz
    return edges(y, 0.0008, 0.03) * vel


def clap(vel=1.0, seed=0, dur=0.5):
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    env = np.zeros(n)
    for i, d in enumerate([0.0, 0.0075, 0.0155, 0.0245]):
        x = t - d
        m = x >= 0
        tau = 0.0045 if i < 3 else 0.13
        env[m] += (0.75 if i < 3 else 1.0) * np.exp(-x[m] / tau) * np.minimum(1, x[m] / 0.0004)
    common = rng.standard_normal(n)
    y = np.vstack([0.8 * common + 0.45 * rng.standard_normal(n),
                   0.8 * common + 0.45 * rng.standard_normal(n)]) * env
    y = filt(y, 'bp', [850, 7500])
    y += 0.5 * filt(y, 'bp', [1100, 1900])        # body resonance
    return edges(y, 0.0005, 0.04) * vel * 0.55


def hat(vel=1.0, decay=0.05, seed=0, dur=0.3):
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    nz = filt(rng.standard_normal(n), 'hp', 7200, 4)
    metal = sum(np.sin(2 * np.pi * f * t + p) for f, p in
                [(5410, .3), (6880, 1.1), (8330, 2.0), (9770, .7), (11240, 1.6)]) * 0.12
    y = filt(nz + metal, 'lp', 15500) * np.exp(-t / decay)
    return edges(y, 0.0006, 0.02) * vel * 0.45


def shaker(vel=1.0, seed=0, dur=0.12):
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    y = filt(rng.standard_normal(n), 'bp', [4200, 10500], 2)
    env = np.minimum(1, t / 0.007) * np.exp(-t / 0.028)
    return edges(y * env, 0.002, 0.01) * vel * 0.35


def rim(vel=1.0, seed=0):
    rng = np.random.default_rng(seed)
    n = S(0.12)
    t = tt(n)
    y = (np.sin(2 * np.pi * 1720 * t) * np.exp(-t / 0.010)
         + 0.6 * np.sin(2 * np.pi * 480 * t) * np.exp(-t / 0.018)
         + 0.7 * filt(rng.standard_normal(n), 'bp', [2000, 6500]) * np.exp(-t / 0.004))
    return edges(y, 0.0005, 0.01) * vel * 0.4


def snap(vel=1.0, seed=0):
    rng = np.random.default_rng(seed)
    n = S(0.15)
    t = tt(n)
    y = filt(rng.standard_normal(n), 'bp', [1700, 5200]) * np.exp(-t / 0.016)
    y += 0.3 * np.sin(2 * np.pi * 2650 * t) * np.exp(-t / 0.006)
    return edges(y, 0.0007, 0.01) * vel * 0.6


def crash(vel=1.0, seed=0, dur=3.0, tau=1.1):
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    nz = rng.standard_normal((2, n))
    y = filt(nz, 'hp', 4200) * np.exp(-t / tau) + 0.5 * filt(nz, 'bp', [2200, 6000]) * np.exp(-t / (tau * 0.3))
    fr = rng.uniform(3000, 9500, 14)
    ring = sum(np.sin(2 * np.pi * f * t + rng.uniform(0, 6.28)) * np.exp(-t / rng.uniform(0.5, 1.3) / tau)
               for f in fr) * 0.06
    y = filt(y + ring, 'lp', 13000)
    return edges(y, 0.001, 0.3) * vel * 0.3


def boom(vel=1.0, f0=105, f1=36, ptau=0.2, atau=0.85, dur=3.0):
    """sub boom with pitch drop"""
    n = S(dur)
    t = tt(n)
    f = f1 + (f0 - f1) * np.exp(-t / ptau)
    y = osc_sin(f, n) * np.exp(-t / atau)
    y = np.tanh(1.6 * y) / np.tanh(1.6)            # 3rd harmonic so phones hear it
    return edges(y, 0.003, 0.3) * vel


def pop(f, vel=1.0, dur=0.13, rise=1.5):
    """UI bubble pop: sine, pitch rising, ~80 ms"""
    n = S(dur)
    t = tt(n)
    fr = f * (1 + (rise - 1) * (1 - np.exp(-t / 0.022)))
    ph, _ = phase_of(fr, n)
    y = np.sin(2 * np.pi * ph) + 0.12 * np.sin(4 * np.pi * ph)
    y *= np.exp(-t / 0.032)
    return edges(y, 0.003, 0.02) * vel * 0.5


def boing(f, vel=1.0, dur=0.4):
    """playful bloop: pitch scoop + decaying wobble"""
    n = S(dur)
    t = tt(n)
    fr = f * (0.78 + 0.22 * (1 - np.exp(-t / 0.018))) * (1 + 0.05 * np.exp(-t / 0.12) * np.sin(2 * np.pi * 13 * t))
    ph, _ = phase_of(fr, n)
    y = np.sin(2 * np.pi * ph) + 0.08 * np.sin(6 * np.pi * ph)
    y *= np.exp(-t / 0.09)
    return edges(y, 0.004, 0.03) * vel * 0.4


def tick(vel=1.0, f=3100, seed=0):
    rng = np.random.default_rng(seed)
    n = S(0.05)
    t = tt(n)
    y = np.sin(2 * np.pi * f * t) * np.exp(-t / 0.006) + 0.5 * filt(rng.standard_normal(n), 'hp', 5000) * np.exp(-t / 0.0015)
    return edges(y, 0.0005, 0.01) * vel * 0.3


def stab(midis, vel=1.0, dur=0.9, seed=0):
    """supersaw chord stab with filter envelope"""
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    out = np.zeros((2, n))
    for m in midis:
        for cents, p in [(-14, -0.8), (-6, -0.35), (0, 0), (6, 0.35), (14, 0.8)]:
            out += pan2(blep_saw(mtof(m + cents / 100), n, rng.random()), p)
    out *= np.exp(-t / 0.22) / (5 * len(midis)) ** 0.5
    out = tv_filter(out, 700 + 6500 * np.exp(-t / 0.09), 'lp', 0.8, stages=2)
    return edges(out, 0.003, 0.05) * vel


def swoosh(rise=0.24, fall=0.15, seed=0, pan_from=1.0, pan_to=-1.0):
    """page swipe: band-passed noise sweep, panning right -> left"""
    rng = np.random.default_rng(seed)
    n1, n2 = S(rise), S(fall)
    n = n1 + n2
    env = np.concatenate([np.linspace(0, 1, n1) ** 2.2, np.exp(-np.linspace(0, 4, n2))])
    fc = np.concatenate([np.geomspace(700, 3600, n1), np.geomspace(3600, 1500, n2)])
    y = tv_filter(rng.standard_normal(n), fc, 'bp', q=1.1) * 2.2
    y += 0.25 * filt(rng.standard_normal(n), 'hp', 6500)
    y = edges(y * env, 0.003, 0.01)
    return pan2(y, np.linspace(pan_from, pan_to, n)), rise


def riser(dur, f_noise=(350, 9000), tone=(60, 84), seed=0, tone_gain=0.3, power=2.2):
    """filtered-noise sweep + gliding detuned-saw tone + accelerating tremolo"""
    rng = np.random.default_rng(seed)
    n = S(dur)
    x = np.arange(n) / n
    nz = tv_filter(rng.standard_normal((2, n)), f_noise[0] * (f_noise[1] / f_noise[0]) ** (x ** 1.2), 'bp', q=1.4)
    env = x ** power
    y = nz * env * 1.6
    if tone_gain > 0:
        f = mtof(tone[0] + (tone[1] - tone[0]) * x ** 1.6)
        s = 0.5 * (blep_saw(f * 2 ** (-0.1 / 12), n, 0.1) + blep_saw(f * 2 ** (0.1 / 12), n, 0.6))
        s = filt(s, 'lp', 2800)
        ph, _ = phase_of(3 + 13 * x, n)
        trem = 1 - 0.35 * (0.5 + 0.5 * np.sin(2 * np.pi * ph))
        y += np.vstack([s, s]) * (env ** 1.2) * trem * tone_gain
    return edges(y, 0.01, 0.004)


def shimmer(dur, seed=0, notes=(84, 86, 88, 91, 93), pan=(-0.8, 0.8), grains=22):
    """light glint across a product: rising pentatonic sparkle grains + airy noise sweep"""
    rng = np.random.default_rng(seed)
    n = S(dur + 0.6)
    out = np.zeros((2, n))
    for i in range(grains):
        x = (i + rng.uniform(0, 0.6)) / grains
        oct_ = 12 * int(x * 2 > 1)
        m = notes[int(x * 2 * len(notes)) % len(notes)] + oct_
        g = partials(mtof(m), 0.45, [1, 2.0, 3.01], [1, .25, .08], [.2, .09, .05], att=0.003)
        a = np.sin(np.pi * min(x * 1.15, 1.0)) ** 1.2 * rng.uniform(0.6, 1.0)
        s0 = S(x * dur * 0.95)
        seg = pan2(g, pan[0] + (pan[1] - pan[0]) * x) * a
        L = min(seg.shape[1], n - s0)
        out[:, s0:s0 + L] += seg[:, :L]
    m = S(dur)
    x = np.arange(m) / m
    air = tv_filter(rng.standard_normal(m), 3500 * (11000 / 3500) ** x, 'bp', q=2.0) * np.sin(np.pi * x) ** 2
    out[:, :m] += pan2(air, pan[0] + (pan[1] - pan[0]) * x) * 0.85
    return edges(out * 0.22, 0.004, 0.05)


def reverse_swell(midis, dur, ir, seed=0):
    """reverb of a chord hit, reversed: swells and 'sucks' into the next downbeat"""
    rng = np.random.default_rng(seed)
    n = S(0.4)
    t = tt(n)
    hit = sum(partials(mtof(m), 0.4, [1, 2, 3], [1, .3, .1], [.3, .2, .1]) for m in midis)
    hit = hit + 0.5 * filt(rng.standard_normal(n), 'hp', 2500) * np.exp(-t / 0.08)
    m = S(dur)
    wet = np.vstack([fftconvolve(hit, ir[0])[:m], fftconvolve(hit, ir[1])[:m]])
    wet = wet[:, ::-1] / (np.max(np.abs(wet)) + 1e-9)
    wet *= np.linspace(0, 1, m) ** 1.5
    return edges(wet, 0.02, 0.003)


def sonar(f, dur=2.2):
    n = S(dur)
    t = tt(n)
    fr = f * (1 - 0.012 * (1 - np.exp(-t / 0.4)))
    y = osc_sin(fr, n) * np.exp(-t / 0.55) + 0.12 * osc_sin(2 * fr, n) * np.exp(-t / 0.2)
    return edges(y, 0.004, 0.2) * 0.35


# ------------------------------------------------------------------ reverb / delay
def make_ir(rt60, dur, seed, predelay=0.018, damp=0.45, lo=180, hi=11000):
    """stereo decorrelated noise IR with frequency-dependent decay"""
    rng = np.random.default_rng(seed)
    n = S(dur)
    t = tt(n)
    nz = rng.standard_normal((2, n))
    low = filt(nz, 'lp', 900)
    high = filt(nz, 'hp', 4500)
    mid = nz - low - high
    d = lambda rt: np.exp(-6.908 * t / rt)
    ir = low * d(rt60 * 1.05) + mid * d(rt60) + high * d(rt60 * damp)
    ir *= 1 - np.exp(-t / 0.01)
    ir = filt(filt(ir, 'hp', lo), 'lp', hi)
    ir = np.pad(ir, ((0, 0), (S(predelay), 0)))[:, :n]
    return ir / np.sqrt(np.sum(ir ** 2, axis=1, keepdims=True))


def convolve(send, ir):
    return np.vstack([fftconvolve(send[0], ir[0])[:N], fftconvolve(send[1], ir[1])[:N]])


def pingpong(x, delay, fb=0.42, taps=6, fc=5200):
    """dotted-8th ping-pong: taps alternate R/L and darken"""
    mono = x.mean(axis=0)
    wet = np.zeros((2, N))
    d = S(delay)
    cur = filt(filt(mono, 'hp', 300), 'lp', fc)
    for i in range(1, taps + 1):
        if i > 1:
            cur = filt(cur, 'lp', fc * 1.3)
        wet[i % 2, i * d:] += fb ** (i - 1) * cur[:N - i * d]
    return wet


# ------------------------------------------------------------------ mixing buses
class Bus:
    def __init__(self):
        self.x = np.zeros((2, N))

    def add(self, sig, t, gain=1.0, pan=0.0):
        sig = np.asarray(sig, float)
        if sig.ndim == 1:
            sig = pan2(sig, pan)
        i0 = S(t)
        j0 = max(0, -i0)
        i0 = max(0, i0)
        L = min(sig.shape[1] - j0, N - i0)
        if L > 0:
            self.x[:, i0:i0 + L] += gain * sig[:, j0:j0 + L]


def put(sig, t, sends, pan=0.0):
    """add one event to several buses: sends = [(bus, gain), ...]"""
    for bus, g in sends:
        if g:
            bus.add(sig, t, g, pan)


def duck(times, depth, release, n=N):
    """sidechain gain curve triggered by kick times (fast dip, smooth recovery)"""
    g = np.ones(n)
    na, nr = S(0.004), S(release)
    shape = 1 - depth * np.concatenate([rc(na), (1 - np.arange(nr) / nr) ** 2])
    for tk in times:
        s0 = S(tk) - S(0.002)
        L = min(len(shape), n - s0)
        g[s0:s0 + L] = np.minimum(g[s0:s0 + L], shape[:L])
    return g


# ------------------------------------------------------------------ harmony / arrangement
# (bar, slot, name, 5-voice pad voicing, bass root) - voices move by step / common tones
CHORDS = [
    (1, 0, 'Fmaj9', [53, 60, 64, 67, 69], 29),
    (2, 0, 'Gsus4', [55, 60, 62, 67, 72], 31),
    (2, 12, 'G', [55, 59, 62, 67, 71], 31),
    (3, 0, 'Cadd9', [55, 60, 64, 67, 74], 36),
    (4, 0, 'G/B', [55, 59, 62, 67, 74], 35),
    (5, 0, 'Am7', [55, 60, 64, 69, 72], 33),
    (6, 0, 'Fmaj7', [53, 60, 64, 69, 72], 29),
    (7, 0, 'C/E', [55, 60, 64, 67, 72], 40),
    (8, 0, 'Dm7', [57, 60, 62, 65, 69], 38),
    (9, 0, 'Gsus4', [55, 60, 62, 67, 72], 31),
    (9, 12, 'G', [55, 59, 62, 67, 71], 31),
    (10, 0, 'Am7', [55, 60, 64, 69, 72], 33),
    (11, 0, 'Fmaj7', [53, 60, 64, 69, 72], 29),
    (12, 0, 'G', [55, 59, 62, 67, 71], 31),
    (13, 0, 'C', [55, 60, 64, 67, 72], 36),
    (14, 0, 'Am7', [55, 60, 64, 69, 72], 33),
    (15, 0, 'Fmaj7', [53, 60, 64, 69, 72], 29),
    (16, 0, 'Csus2', [55, 60, 62, 67, 72], 36),
    (16, 4, 'C', [55, 60, 64, 67, 72], 36),
]
POOLS = {   # arp note pools (6 chord tones, spread)
    'Fmaj9': [65, 69, 72, 76, 79, 81], 'Gsus4': [67, 72, 74, 79, 84, 86],
    'G': [67, 71, 74, 79, 83, 86], 'Cadd9': [67, 72, 74, 76, 79, 84],
    'G/B': [67, 71, 74, 79, 83, 86], 'Am7': [69, 72, 76, 79, 81, 84],
    'Fmaj7': [65, 69, 72, 76, 81, 84], 'C/E': [64, 67, 72, 76, 79, 84],
    'Dm7': [65, 69, 72, 74, 77, 81], 'C': [64, 67, 72, 76, 79, 84],
    'Csus2': [67, 72, 74, 79, 84, 86],
}
ARP_IDX = [0, 2, 4, 5, 4, 2, 3, 1, 0, 2, 4, 5, 4, 3, 2, 1]
ARP_VEL = [1.0, .62, .78, .66, .9, .6, .74, .58, 1.0, .62, .78, .66, .88, .6, .72, .56]

# top-line motif: fixed rhythm (slot, length in 16ths), pitches per bar
RHY = [(0, 2), (3, 1), (4, 2), (6, 4), (10, 2), (12, 4)]
MOTIF = {
    3: [79, 76, 79, 81, 79, 76],     # Cadd9
    4: [74, 71, 74, 79],             # G/B   (number ticks answer)
    5: [76, 72, 76, 79],             # Am7   (shimmer answers)
    6: [76, 72, 76, 81],             # Fmaj7 (light, softer)
    8: [77, 74, 77, 81, 79, 77],     # Dm7
    9: [79, 74, 79, 81, 79, 74],     # Gsus4 -> G
    10: [76, 72, 76, 84, 83, 79],    # Am7
    13: [79, 76, 79, 81, 79, 76],    # C
    14: [76, 72, 76, 79],            # Am7
    15: [81, 77, 81, 84],            # Fmaj7 (last note rings under the logo shimmer)
}


def chord_at(t):
    cur = CHORDS[0]
    for c in CHORDS:
        if T(c[0], c[1]) <= t + 1e-9:
            cur = c
    return cur


# kick pattern per bar (slots)
KICKS = {3: [0, 4, 8, 12], 4: [0, 4, 8, 12], 5: [0, 4], 6: [10], 7: [0, 10],   # bar 6 beat 1 = airy flash, no kick
         8: [0, 4, 8, 12], 9: [0, 4, 8, 12], 10: [0, 4, 8, 12], 11: [0, 4, 8, 12],
         12: [0, 4], 13: [0, 4, 8, 12], 14: [0, 4, 8, 12], 15: [0, 4, 8, 12], 16: [0]}
FULL = {3, 4, 8, 9, 10, 11, 13, 14, 15}           # bars with the full groove
IMPACTS = [T(3), T(6), T(8), T(13), T(15)]         # 3.75, 9.375, 13.125, 22.5, 26.25


# ------------------------------------------------------------------ render parts
def render_drums(drums, kicks, room, hall):
    """kicks (own bus, for sidechain), claps, hats, shaker, light-section rim/snap, build rolls"""
    rng = np.random.default_rng(101)
    kick_times = []
    for bar, slots in KICKS.items():
        for s in slots:
            t0 = T(bar, s)
            light = bar in (6, 7)
            big = any(abs(t0 - x) < 1e-6 for x in IMPACTS) or t0 == T(16)
            v = 0.98 * (1.12 if big else (0.9 if bar in (13, 14) else 1.0)) * (0.6 if light else 1.0) * rng.uniform(0.97, 1.0)
            k = kick(v, click=0.7 if light else 1.0, seed=int(rng.integers(1 << 30)))
            put(k, t0, [(kicks, 1.0)])
            kick_times.append(t0)
    # claps (beats 2 & 4) with a light snare layer
    for bar in range(3, 16):
        slots = [4, 12] if bar in FULL else ([4] if bar in (5, 12) else [])
        for s in slots:
            sd = int(rng.integers(1 << 30))
            c = clap(rng.uniform(0.92, 1.0) * (0.85 if bar in (13, 14) else 1.0), sd)
            put(c, T(bar, s), [(drums, 1.0), (room, 0.35), (hall, 0.08)])
            put(snare(0.35, seed=sd + 1), T(bar, s), [(drums, 1.0), (room, 0.2)])
    # offbeat open-ish hats + 16th shaker
    for bar in range(3, 16):
        if bar in FULL or bar in (5,):
            last = {5: 8, 14: 11, 15: 13}.get(bar, 16)
            for s in (2, 6, 10, 14):
                if s < last:
                    h = hat(rng.uniform(0.75, 0.9) * (0.75 if bar in (13, 14) else 1.0), decay=0.075, seed=int(rng.integers(1 << 30)))
                    put(h, T(bar, s), [(drums, 1.0), (room, 0.12)], pan=-0.25)
            if bar != 14:
                for s in range(16):
                    if s < last and s % 4 != 2 and not (7.45 < T(bar, s) < 8.3 or 27.05 < T(bar, s) < 27.8):
                        acc = [0.55, 0.85, 0, 0.75][s % 4]
                        sh = shaker(acc * rng.uniform(0.8, 1.15) * (0.6 if bar == 13 else 1.0), int(rng.integers(1 << 30)))
                        put(sh, T(bar, s), [(drums, 1.0), (room, 0.1)], pan=0.35)
        elif bar in (6, 7):   # light half-time: rim/snap on 3, soft closed hats
            r = rim(0.8, int(rng.integers(1 << 30)))
            sp = snap(0.7, int(rng.integers(1 << 30)))
            put(r, T(bar, 8), [(drums, 1.0), (room, 0.4)], pan=0.1)
            put(sp, T(bar, 8), [(drums, 0.8), (hall, 0.35)], pan=-0.15)
            for s in (2, 6, 10, 14):
                h = hat(rng.uniform(0.35, 0.45), decay=0.03, seed=int(rng.integers(1 << 30)))
                put(h, T(bar, s), [(drums, 1.0), (room, 0.2)], pan=-0.3)
            for s in (3, 7, 11, 15):
                sh = shaker(0.35 * rng.uniform(0.8, 1.1), int(rng.integers(1 << 30)))
                put(sh, T(bar, s), [(drums, 1.0)], pan=0.4)
    # bar 5 build: 16th snare roll crescendo (last beat in 32nds), rising pitch
    hits = [T(5, s) for s in range(8, 12)] + [T(5, 12 + 0.5 * i) for i in range(8)]
    for i, t0 in enumerate(hits):
        x = i / (len(hits) - 1)
        sn = snare(0.18 + 0.75 * x ** 1.4, tone=190 + 120 * x, seed=500 + i, snap=0.8 + 0.4 * x)
        put(sn, t0, [(drums, 0.9), (room, 0.3)], pan=0.0)
    # bar 12 build: accelerating roll 8ths -> 16ths -> 32nds, stops before the breath
    hits = [T(12, s) for s in (4, 6, 8, 9, 10, 11, 12, 12.5, 13)]
    for i, t0 in enumerate(hits):
        x = i / (len(hits) - 1)
        sn = snare(0.25 + 0.75 * x ** 1.2, tone=200 + 140 * x, seed=700 + i, snap=0.9 + 0.3 * x)
        put(sn, t0, [(drums, 0.9), (room, 0.3)], pan=0.0)
    return kick_times


def render_pad():
    """5 legato voices x 3 detuned polyBLEP saws, gliding voice-leading"""
    pitch = np.zeros((5, N))
    for i, c in enumerate(CHORDS):
        s0 = S(T(c[0], c[1]))
        s1 = S(T(CHORDS[i + 1][0], CHORDS[i + 1][1])) if i + 1 < len(CHORDS) else N
        pitch[:, s0:s1] = np.array(c[3])[:, None]
    a = np.exp(-1 / (0.03 * SR))
    pitch = lfilter([1 - a], [1, -a], pitch, axis=1, zi=pitch[:, :1] * a)[0]
    rng = np.random.default_rng(11)
    t = tt(N)
    out = np.zeros((2, N))
    for v in range(5):
        for det, p in [(-0.11, -0.75), (0.0, 0.0), (0.11, 0.75)]:
            drift = 0.03 * np.sin(2 * np.pi * rng.uniform(0.08, 0.2) * t + rng.uniform(0, 6.3))
            y = blep_saw(mtof(pitch[v] + det + drift), N, rng.random())
            out += pan2(y, p * (0.6 + 0.1 * v)) * (0.9 if v < 4 else 0.7)
    out /= 15 ** 0.5
    return out


def render_arp(music, hall, delay_src):
    rng = np.random.default_rng(23)
    for bar in range(1, 17):
        for s in range(16):
            t0 = T(bar, s)
            if bar == 16 or (bar == 12 and s > 10) or (bar == 15 and s > 13):
                continue
            name = chord_at(t0)[2]
            m = POOLS[name][ARP_IDX[s]]
            # section-dependent brightness / level
            if bar <= 2:
                bright, g = 0.42, 0.55 * min(1.0, 0.06 + 0.94 * (t0 / BAR) ** 0.7)
            elif bar in (6, 7):
                bright, g = 0.6, 0.45
            elif bar == 12:
                bright, g = 0.9 + 0.5 * s / 10, 0.9
            else:
                bright, g = 1.0 if bar != 15 else 1.1, 0.72 if bar in (13, 14) else 0.85
            v = ARP_VEL[s] * rng.uniform(0.94, 1.06) * g
            y = pluck(mtof(m), 0.55, bright=bright)
            pan = 0.18 * np.sin(2 * np.pi * (s / 8 + bar / 4))
            put(y, t0, [(music, v), (hall, 0.18 * v), (delay_src, 0.5 * v)], pan=pan)
            # octave-up glass layer in the brand pages and the finale
            if bar in (8, 9, 10, 11, 15):
                y2 = pluck(mtof(m + 12), 0.35, bright=0.7, body=0.2, square=0.1)
                put(y2, t0, [(music, 0.4 * v), (hall, 0.12 * v)], pan=0.55 if s % 2 else -0.55)


def render_motif(music, hall, delay_src):
    rng = np.random.default_rng(31)
    for bar, notes in MOTIF.items():
        gain = {6: 0.55, 13: 0.8, 14: 0.78, 15: 1.0}.get(bar, 0.9)
        for (slot, ln), m in zip(RHY, notes):
            dur = 1.6 if (bar == 15 and slot == 6) else 1.1
            v = gain * rng.uniform(0.92, 1.0) * (0.75 if slot in (3, 10) else 1.0)
            y = glass(mtof(m), dur, v)
            put(y, T(bar, slot), [(music, 0.5), (hall, 0.22), (delay_src, 0.35)], pan=0.08)
    # bar 11: one long note (toys bounce around it) + pickup into the build
    for slot, m, v in [(0, 81, 0.8), (12, 79, 0.6), (14, 76, 0.55)]:
        put(glass(mtof(m), 1.2, v), T(11, slot), [(music, 0.5), (hall, 0.22), (delay_src, 0.35)], pan=0.08)
    # bar 16 final: G5 + C6 ring over the resolving chord
    for m, d in [(79, 0.0), (84, 0.02)]:
        put(glass(mtof(m), 2.0, 0.7), T(16) + d, [(music, 0.5), (hall, 0.35), (delay_src, 0.25)], pan=0.0)


def render_bass():
    """mono sub sine (sustained) + offbeat filtered saw; continuous oscillators = no clicks"""
    sub_notes, saw_notes = [], []
    for bar in range(3, 17):
        if bar in (6, 7):                                   # light: soft half-time
            r = chord_at(T(bar))[4]
            sub_notes.append((T(bar), T(bar + 1) - 0.01, r, 0.45))
            saw_notes += [(T(bar, 0), T(bar, 6), r, 0.3), (T(bar, 10), T(bar, 15), r, 0.26)]
            continue
        if bar == 16:
            sub_notes.append((T(16), 30.0, 36, 0.9))
            continue
        end = {5: 8, 12: 8, 14: 11}.get(bar, 16)
        for s in (0, 4, 8, 12):
            if s < end:
                r = chord_at(T(bar, s))[4]
                sub_notes.append((T(bar, s), T(bar, min(s + 4, end)) - (0.012 if s + 4 >= end else 0), r, 1.0))
        for s in (2, 6, 10, 14):
            if s < end and not (bar == 12 and s > 2):
                r = chord_at(T(bar, s))[4]
                up = 12 if (s == 14 and bar in (3, 9, 13)) else 0
                saw_notes.append((T(bar, s), T(bar, s + 1.6), r + up, 1.0 if s != 14 else 0.85))
    # frequency + amplitude curves
    f_sub = np.full(N, mtof(36))
    a_sub = np.zeros(N)
    for t0, t1, m, v in sub_notes:
        s0, s1 = S(t0), S(t1)
        f_sub[s0:s1] = mtof(m)
        e = np.full(s1 - s0, v)
        e[:S(0.004)] *= rc(S(0.004))
        e[-S(0.008):] *= rc(S(0.008))[::-1]
        a_sub[s0:s1] = np.maximum(a_sub[s0:s1], e)
    s0 = S(T(16))                                       # final note decays naturally
    a_sub[s0:] *= np.exp(-tt(N - s0) / 1.1)
    k = np.exp(-1 / (0.006 * SR))
    f_sub = lfilter([1 - k], [1, -k], f_sub, zi=[f_sub[0] * k])[0]
    sub = osc_sin(f_sub, N) * a_sub
    f_saw = np.full(N, mtof(36))
    a_saw = np.zeros(N)
    fenv = np.zeros(N)
    for t0, t1, m, v in saw_notes:
        s0, s1 = S(t0), S(t1)
        f_saw[s0:s1] = mtof(m)
        n = s1 - s0
        x = tt(n)
        e = v * (0.55 + 0.45 * np.exp(-x / 0.08))
        e[:S(0.003)] *= rc(S(0.003))
        e[-S(0.012):] *= rc(S(0.012))[::-1]
        a_saw[s0:s1] = np.maximum(a_saw[s0:s1], e)
        fenv[s0:s1] = np.maximum(fenv[s0:s1], np.exp(-x / 0.07) * v)
    f_saw = lfilter([1 - k], [1, -k], f_saw, zi=[f_saw[0] * k])[0]
    saw = 0.5 * (blep_saw(f_saw, N, 0.0) + blep_saw(f_saw * 2 ** (0.07 / 12), N, 0.37))
    saw = tv_filter(saw, 260 + 1500 * fenv, 'lp', q=0.9, stages=2) * a_saw
    saw = np.tanh(1.4 * saw) / np.tanh(1.4)
    return sub, saw


# ------------------------------------------------------------------ master helpers
def lufs(x):
    """ITU-R BS.1770-4 integrated loudness (48 kHz K-weighting, gated)"""
    y = lfilter([1.53512485958697, -2.69169618940638, 1.19839281085285],
                [1.0, -1.69065929318241, 0.73248077421585], x, axis=-1)
    y = lfilter([1.0, -2.0, 1.0], [1.0, -1.99004745483398, 0.99007225036621], y, axis=-1)
    p = np.cumsum(np.concatenate([[0.0], (y ** 2).sum(0)]))
    blk, hop = S(0.4), S(0.1)
    st = np.arange(0, y.shape[1] - blk + 1, hop)
    ms = (p[st + blk] - p[st]) / blk
    lk = -0.691 + 10 * np.log10(ms + 1e-20)
    g = ms[lk > -70]
    rel = -0.691 + 10 * np.log10(g.mean()) - 10
    return -0.691 + 10 * np.log10(ms[(lk > -70) & (lk > rel)].mean())


def true_peak(x):
    return np.max(np.abs(resample_poly(x, 4, 1, axis=-1)))


def tp_limit(x, ceil_db=CEIL_DBTP, look=0.002, rel=0.08):
    """look-ahead true-peak limiter (4x oversampled detection, no added latency)"""
    c = db(ceil_db)
    pk = np.abs(resample_poly(x, 4, 1, axis=-1)).max(axis=0)[:4 * x.shape[1]].reshape(-1, 4).max(axis=1)
    need = np.minimum(1.0, c / np.maximum(pk, 1e-12))
    L = S(look)
    g = minimum_filter1d(need, 2 * L + 1, mode='nearest')
    r = np.exp(-1 / (rel * SR))
    idx = np.nonzero(g < 1.0)[0]
    if len(idx):
        out = g.copy()
        prev = 1.0
        lo, hi = idx[0], min(len(g), idx[-1] + S(rel * 8))
        gl = g[lo:hi].tolist()
        res = [0.0] * len(gl)
        for i, v in enumerate(gl):
            prev = 1.0 - (1.0 - prev) * r
            if v < prev:
                prev = v
            res[i] = prev
        out[lo:hi] = res
        g = out
    g = np.convolve(np.pad(g, (L // 2, L - 1 - L // 2), mode='edge'), np.ones(L) / L, mode='valid')
    return x * g, g


def write_wav24(path, x):
    rng = np.random.default_rng(7)
    d = (rng.random(x.shape) - rng.random(x.shape)) / 8388608.0       # TPDF dither (1 LSB)
    y = np.clip(np.round((x + d) * 8388607.0), -8388608, 8388607).astype('<i4')
    raw = y.T.reshape(-1).view(np.uint8).reshape(-1, 4)[:, :3].tobytes()
    ch, bps = x.shape[0], 3
    hdr = b'RIFF' + struct.pack('<I', 36 + len(raw)) + b'WAVE'
    hdr += b'fmt ' + struct.pack('<IHHIIHH', 16, 1, ch, SR, SR * ch * bps, ch * bps, 24)
    hdr += b'data' + struct.pack('<I', len(raw))
    with open(path, 'wb') as f:
        f.write(hdr + raw)


def stem_report(stems):
    """debug: K-weighted mean power (dB, relative) of each stem per section"""
    secs = [('intro', 0, T(3)), ('drop', T(3), T(5, 8)), ('build1', T(5, 8), T(6)), ('light', T(6), T(8)),
            ('brands', T(8), T(12)), ('build2', T(12), 22.2), ('showrm', T(13), 25.6), ('finale', T(15), T(16)),
            ('end', T(16), 30.0)]
    print('  stem    ' + ' '.join('%8s' % s[0] for s in secs))
    tot = sum(stems[k] for k in ('kick', 'perc', 'bass', 'music', 'fx', 'wet'))
    for name, x in list(stems.items()) + [('TOTAL', tot)]:
        y = lfilter([1.53512485958697, -2.69169618940638, 1.19839281085285],
                    [1.0, -1.69065929318241, 0.73248077421585], x, axis=-1)
        y = lfilter([1.0, -2.0, 1.0], [1.0, -1.99004745483398, 0.99007225036621], y, axis=-1)
        row = [10 * np.log10(np.mean(y[:, S(a):S(b)] ** 2) * 2 + 1e-12) for _, a, b in secs]
        print('  %-7s ' % name + ' '.join('%8.1f' % v for v in row))


# ------------------------------------------------------------------ main
def main():
    drums, kicks, bassb, music, fx = Bus(), Bus(), Bus(), Bus(), Bus()
    room, hall, fxh, dly = Bus(), Bus(), Bus(), Bus()
    IR_ROOM = make_ir(0.9, 1.6, 1, predelay=0.008, damp=0.5)
    IR_HALL = make_ir(2.3, 3.6, 2, predelay=0.022, damp=0.42)
    IR_FX = make_ir(4.2, 6.0, 3, predelay=0.03, damp=0.38)

    print('drums...')
    kick_times = render_drums(drums, kicks, room, hall)

    print('pad...')
    pad = render_pad()
    cut = curve([(0, 380), (2.6, 1100), (3.74, 1900), (3.75, 3000), (8.43, 3200), (9.37, 3200),
                 (9.38, 1500), (11.25, 1700), (13.12, 2100), (13.13, 3300), (20.6, 3500), (22.2, 5200),
                 (22.5, 2700), (25.6, 2900), (26.25, 3600), (28.1, 3800), (30.0, 900)], log=True)
    pad = tv_filter(pad, cut, 'lp', q=0.62, stages=2)
    pad = filt(pad, 'hp', 110)
    pad = pb.Chorus(rate_hz=0.33, depth=0.22, centre_delay_ms=8.0, mix=0.45)(pad.astype(np.float32), SR).astype(float)
    pad_vol = curve([(0, -45), (0.5, -16), (1.3, -7), (3.6, -3), (3.75, 0.5), (9.3, 0.5), (9.375, -5),
                     (13.1, -4), (13.125, 0.5), (20.6, 0.5), (22.19, 1.5), (22.21, -60), (22.5, -60), (22.52, -1.5),
                     (26.2, -1.5), (26.25, 0.5),
                     (28.1, 0.5), (28.125, 1.5), (30.0, -8)])
    pad *= db(pad_vol) * duck(kick_times, 0.42, 0.33) * 0.6
    put(pad, 0.0, [(music, 1.0), (hall, 0.28)])
    stems = {'pad': pad}

    print('arp + motif...')
    arpb, motb = Bus(), Bus()
    render_arp(arpb, hall, dly)
    render_motif(motb, hall, dly)
    arpb.x *= duck(kick_times, 0.22, 0.25)
    music.x += arpb.x + motb.x
    stems['arp'], stems['motif'] = arpb.x, motb.x
    dwet = pingpong(dly.x, 3 * S16, fb=0.4)
    music.x += dwet * 0.42
    hall.x += dwet * 0.15

    print('bass...')
    sub, saw = render_bass()
    bassb.x += np.vstack([sub, sub]) * duck(kick_times, 0.93, 0.29) * 0.28
    bassb.x += np.vstack([saw, saw]) * duck(kick_times, 0.6, 0.18) * 0.24

    print('fx...')
    # 1 intro: chime at 1.875, riser 2.0 -> 3.75, reverse swell into the drop
    put(bell(mtof(79), 3.0), T(2), [(fx, 0.28), (fxh, 0.3)])
    put(bell(mtof(86), 3.0, 0.7), T(2) + 0.018, [(fx, 0.17), (fxh, 0.22)])
    put(riser(T(3) - 2.0, tone=(60, 84), seed=41, tone_gain=0.22), 2.0, [(fx, 0.28), (fxh, 0.1)])
    sw = reverse_swell([60, 64, 67, 74], 1.5, IR_FX, seed=42)
    put(sw, T(3) - 1.5, [(fx, 0.42)])
    # 2 drop impact 3.75: boom + crash
    put(boom(1.0, 110, 36, atau=0.9), T(3), [(fx, 0.4)])
    put(crash(1.0, 43, 3.5, 1.3), T(3), [(fx, 0.8), (fxh, 0.5)])
    # soft low thud 4.92
    n = S(0.3); x = tt(n)
    thud = edges(osc_sin(52 + 30 * np.exp(-x / 0.03), n) * np.exp(-x / 0.1), 0.004, 0.05)
    thud += 0.3 * edges(filt(np.random.default_rng(44).standard_normal(n), 'lp', 350) * np.exp(-x / 0.03), 0.003, 0.05)
    put(thud, T(3, 10), [(fx, 0.45)])
    # number ticks 6.56 / 7.03 / 7.50 (pitched pluck + click)
    for i, (t0, m) in enumerate([(T(4, 8), 83), (T(4, 12), 86), (T(5, 0), 88)]):
        put(pluck(mtof(m), 0.3, bright=1.1, body=0.09), t0, [(fx, 0.55), (hall, 0.12), (dly, 0.25)], pan=(-0.3, 0.0, 0.3)[i])
        put(tick(0.9, 3100 + 200 * i, 50 + i), t0, [(fx, 0.55)], pan=(-0.3, 0.0, 0.3)[i])
    # shimmer 7.5 -> 8.3
    put(shimmer(0.8, 45), 7.5, [(fx, 1.1), (fxh, 0.4)])
    # build 8.44 -> 9.375: whoosh riser + short reverse swell into the white flash
    put(riser(T(6) - T(5, 8), f_noise=(500, 11000), tone=(67, 91), seed=46, tone_gain=0.15, power=1.8),
        T(5, 8), [(fx, 0.32), (fxh, 0.1)])
    put(reverse_swell([72, 76, 79, 84], 0.8, IR_FX, seed=47), T(6) - 0.8, [(fx, 0.25)])
    # 3 airy impact 9.375 (bright, reverb-heavy, not boomy)
    rng = np.random.default_rng(48)
    n = S(1.5); x = tt(n)
    air = filt(rng.standard_normal((2, n)), 'hp', 2600) * np.exp(-x / 0.28)
    air = edges(filt(air, 'lp', 13000), 0.002, 0.2)
    put(air, T(6), [(fx, 0.42), (fxh, 0.45)])
    for m, d in [(84, 0), (88, 0.012), (91, 0.024), (96, 0.036)]:
        put(bell(mtof(m), 2.5, 0.6), T(6) + d, [(fx, 0.16), (fxh, 0.22)])
    soft = edges(osc_sin(48 + 25 * np.exp(-x / 0.03), n) * np.exp(-x / 0.12), 0.004, 0.2)
    put(soft, T(6), [(fx, 0.25)])
    # UI pops 11.25 / 11.72 / 12.19 (chips)
    for i, m in enumerate([84, 88, 91]):
        put(pop(mtof(m), 1.0), T(7, 4 * i), [(fx, 0.5), (hall, 0.2)], pan=(-0.35, 0.0, 0.35)[i])
    # whoosh up 12.6 -> 13.125 into a punchy hit
    put(riser(T(8) - 12.6, f_noise=(600, 12000), tone=(72, 96), seed=49, tone_gain=0.1, power=2.6),
        12.6, [(fx, 0.38), (fxh, 0.08)])
    put(crash(0.8, 50, 2.0, 0.55), T(8), [(fx, 0.55), (fxh, 0.25)])
    put(boom(0.8, 95, 45, ptau=0.06, atau=0.22, dur=0.9), T(8), [(fx, 0.35)])
    put(snare(0.8, seed=51) * 0.8, T(8), [(fx, 0.5), (room, 0.3)])
    # 4 brand swipes (R -> L) + landing ticks
    for i, (tp, tl) in enumerate([(14.84, T(9)), (16.72, T(10)), (18.59, T(11))]):
        y, rise = swoosh(seed=60 + i)
        put(y, tp - rise, [(fx, 0.55), (hall, 0.1)])
        put(tick(0.7, 2600, 70 + i), tl, [(fx, 0.45), (room, 0.25)], pan=-0.5)
    # toys bouncing 18.9 -> 19.7
    for i, (t0, m) in enumerate([(18.90, 81), (19.16, 84), (19.40, 88), (19.62, 84)]):
        put(boing(mtof(m), 0.9 - 0.08 * i), t0, [(fx, 0.42), (hall, 0.18)], pan=(-0.4, 0.3, -0.15, 0.45)[i])
    # 5 build bar 12: riser, two stabs, reverse swell, then a breath
    put(riser(22.19 - T(12), f_noise=(300, 12000), tone=(55, 91), seed=80, tone_gain=0.25, power=2.0),
        T(12), [(fx, 0.34), (fxh, 0.08)])
    for t0 in (T(12, 4), T(12, 8)):
        put(stab([55, 59, 62, 67, 71, 74], 1.0, 0.9, seed=81), t0, [(music, 0.42), (hall, 0.35), (dly, 0.2)])
    put(reverse_swell([60, 64, 67, 72], 0.45, IR_FX, seed=82), 22.19 - 0.45, [(fx, 0.45)])
    # 6 showroom: deep impact + pin ping + sonar
    put(boom(1.1, 95, 32, ptau=0.25, atau=1.0, dur=3.0), T(13), [(fx, 0.45)])
    put(crash(0.7, 83, 3.0, 0.9), T(13), [(fx, 0.45), (fxh, 0.4)])
    pin = partials(2093.0, 0.8, [1, 2.32, 4.25], [1, .35, .15], [.35, .15, .08], att=0.0015)
    put(pin, T(13), [(fx, 0.18), (fxh, 0.15), (dly, 0.15)], pan=0.1)
    for t0 in (T(13), T(14)):
        put(sonar(mtof(84)), t0, [(fx, 0.5), (fxh, 0.35), (dly, 0.35)])
    # 25.6 -> 26.25: dive riser + reverse swell into the finale
    put(riser(T(15) - 25.6, f_noise=(400, 12000), tone=(65, 89), seed=84, tone_gain=0.18, power=2.0),
        25.6, [(fx, 0.38), (fxh, 0.1)])
    put(reverse_swell([65, 69, 72, 76], 0.9, IR_FX, seed=85), T(15) - 0.9, [(fx, 0.35)])
    # 7 finale: big elegant impact 26.25, logo shimmer, two pops, final chord
    put(boom(1.0, 100, 34, atau=0.95), T(15), [(fx, 0.38)])
    put(crash(1.0, 86, 3.0, 0.9), T(15), [(fx, 0.7), (fxh, 0.45)])
    put(shimmer(0.7, 87, notes=(84, 86, 88, 91, 93), grains=20), 27.1, [(fx, 1.2), (fxh, 0.45)])
    put(reverse_swell([60, 62, 67, 72], 0.6, IR_FX, seed=88), T(16) - 0.6, [(fx, 0.22)])
    for i, (t0, m) in enumerate([(T(16), 91), (T(16, 2), 96)]):
        put(pop(mtof(m), 0.8), t0, [(fx, 0.55), (hall, 0.25)], pan=(-0.25, 0.25)[i])

    print('mix...')
    # drums filter out before the finale (25.6 -> 26.25)
    fcv = curve([(25.55, 18000), (25.6, 18000), (26.24, 260), (26.2495, 18000), (26.4, 18000)], log=True)
    drums.x = region_tv(drums.x, 25.55, 26.4, fcv[S(25.55):S(26.4)], 'lp', q=0.8, stages=2, xf=0.04)
    # music low-pass sweep in the bar-5 build (8.44 -> 9.375)
    fcv = curve([(8.38, 19000), (T(5, 8), 19000), (T(6) - 0.002, 520), (T(6) + 0.003, 19000), (9.5, 19000)], log=True)
    music.x = region_tv(music.x, 8.38, 9.5, fcv[S(8.38):S(9.5)], 'lp', q=0.9, stages=2, xf=0.03)

    # returns
    wet = (convolve(room.x, IR_ROOM) * 0.5 + convolve(hall.x, IR_HALL) * 0.55 + convolve(fxh.x, IR_FX) * 0.5)
    if os.environ.get('STEM_REPORT'):
        stem_report({'kick': kicks.x, 'perc': drums.x, 'bass': bassb.x, **stems, 'music': music.x, 'fx': fx.x, 'wet': wet})
    drums.x += kicks.x
    drums.x = pb.Compressor(threshold_db=-10, ratio=2.5, attack_ms=6, release_ms=90)(
        drums.x.astype(np.float32), SR).astype(float)
    mix = drums.x * 1.0 + bassb.x * 1.0 + music.x * 1.0 + fx.x * 1.0 + wet

    # mono-maker below 120 Hz, gentle tone shaping, glue compression
    mid, side = (mix[0] + mix[1]) / 2, (mix[0] - mix[1]) / 2
    side = sosfiltfilt(butter(2, 120, 'highpass', fs=SR, output='sos'), side)
    mix = np.vstack([mid + side, mid - side])
    mix = filt(mix, 'hp', 24)
    mix *= db(-18 - lufs(mix))
    chain = pb.Pedalboard([pb.PeakFilter(200, 1.0, 0.8), pb.PeakFilter(2800, 2.0, 0.6), pb.HighShelfFilter(9000, 0.5, 0.7),
                           pb.Compressor(threshold_db=-19, ratio=1.8, attack_ms=25, release_ms=180)])
    mix = chain(mix.astype(np.float32), SR).astype(float)

    # arrangement-level post envelope: breath (22.2 -> 22.5) and final fade (29.2 -> 30.0)
    post = np.ones(N)
    a, b = S(22.20), S(22.215)
    post[a:b] = rc(b - a)[::-1]
    c = S(T(13))
    post[b:c - S(0.003)] = 0.0
    post[c - S(0.003):c] = rc(S(0.003))           # re-open 3 ms before the 22.5 impact
    f0 = S(29.2)
    post[f0:] *= np.cos(np.linspace(0, np.pi / 2, N - f0)) ** 2

    print('master...')
    g = 0.0
    for it in range(6):
        y, lim = tp_limit(mix * db(g))
        y *= post
        L = lufs(y)
        print(f'  pass {it}: gain {g:+.2f} dB -> {L:.2f} LUFS, TP {20 * np.log10(true_peak(y)):.2f} dBTP, '
              f'limiter max GR {-20 * np.log10(lim.min()):.1f} dB @ {np.argmin(lim) / SR:.3f}s, GR>1dB {100 * np.mean(lim < db(-1)):.1f}% of time')
        if abs(L - TARGET_LUFS) < 0.03:
            break
        g += TARGET_LUFS - L
    assert y.shape == (2, N)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    write_wav24(OUT, y)
    print('wrote', OUT, y.shape[1], 'samples')


if __name__ == '__main__':
    main()
