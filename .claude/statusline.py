#!/usr/bin/env python3
"""Claude Code status line: model, context and Claude usage limits (5h + weekly)."""
import json
import sys
import time
from datetime import datetime

BAR_WIDTH = 18
PARTIAL = " ▏▎▍▌▋▊▉"  # eighth blocks for a smooth bar edge
RESET = "\033[0m"
DIM = "\033[2m"
BOLD = "\033[1m"
TRACK = "\033[38;2;60;64;72m"
WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]


def fg(r, g, b):
    return f"\033[38;2;{r};{g};{b}m"


def gradient(t):
    """0..1 -> green -> amber -> red."""
    stops = [(0.0, (52, 211, 153)), (0.6, (251, 191, 36)), (1.0, (244, 63, 94))]
    for (p0, c0), (p1, c1) in zip(stops, stops[1:]):
        if t <= p1:
            k = (t - p0) / (p1 - p0)
            return tuple(round(a + (b - a) * k) for a, b in zip(c0, c1))
    return stops[-1][1]


def bar(pct):
    pct = max(0.0, min(100.0, pct))
    filled = pct / 100 * BAR_WIDTH
    full = int(filled)
    out = []
    for i in range(BAR_WIDTH):
        color = fg(*gradient(i / (BAR_WIDTH - 1)))
        if i < full:
            out.append(color + "█")
        elif i == full and filled - full > 0:
            out.append(color + PARTIAL[int((filled - full) * 8)])
        else:
            out.append(TRACK + "─")
    return "".join(out) + RESET


def until(ts, weekly):
    if not ts:
        return ""
    left = int(ts - time.time())
    if left <= 0:
        return "сброс сейчас"
    h, m = divmod(left // 60, 60)
    if weekly and h >= 24:
        d = datetime.fromtimestamp(ts)
        return f"сброс {WEEKDAYS[d.weekday()]} {d:%H:%M}"
    return f"сброс через {h}ч {m:02d}м" if h else f"сброс через {m}м"


def limit_line(icon, label, window, weekly=False):
    pct = window.get("used_percentage")
    if pct is None:
        return None
    color = fg(*gradient(min(pct, 100) / 100))
    reset = until(window.get("resets_at"), weekly)
    return (
        f"{icon} {BOLD}{label}{RESET} {bar(pct)} "
        f"{color}{BOLD}{pct:3.0f}%{RESET}  {DIM}{reset}{RESET}"
    )


def main():
    try:
        data = json.load(sys.stdin)
    except Exception:
        data = {}

    model = (data.get("model") or {}).get("display_name", "Claude")
    ctx = (data.get("context_window") or {}).get("used_percentage")
    head = f"{BOLD}{fg(167, 139, 250)}✦ {model}{RESET}"
    if ctx is not None:
        head += f"  {DIM}контекст{RESET} {fg(*gradient(min(ctx, 100) / 100))}{ctx:.0f}%{RESET}"

    rate = data.get("rate_limits") or {}
    lines = [head]
    for line in (
        limit_line("⏱", "5 часов ", rate.get("five_hour") or {}),
        limit_line("📅", "Неделя  ", rate.get("seven_day") or {}, weekly=True),
    ):
        if line:
            lines.append(line)
    if len(lines) == 1:
        lines.append(f"{DIM}лимиты появятся после первого ответа Claude{RESET}")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
