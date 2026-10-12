import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register, ResolveInput, SessionRateLimit } from 'claude-code'

import type { Limit } from '../types'

const PANE = 'usage-limits'
const BAR_WIDTH = 20
const PARTIAL = ' ▏▎▍▌▋▊▉'
const WEEKDAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
const WINDOWS = [
  { kind: 'five_hour', icon: '⏱', label: '5 часов' },
  { kind: 'seven_day', icon: '📅', label: 'Неделя ' },
]

const limits = atom({ plugin: 'usage-limits', key: 'limits' } as const, [])
const now = atom({ plugin: 'usage-limits', key: 'now' } as const, 0)

const STOPS: [number, [number, number, number]][] = [
  [0, [52, 211, 153]],
  [0.6, [251, 191, 36]],
  [1, [244, 63, 94]],
]

// 0..1 -> green -> amber -> red, as hex
function gradient(t: number): string {
  t = Math.max(0, Math.min(1, t))
  for (let i = 1; i < STOPS.length; i++) {
    const [p0, c0] = STOPS[i - 1]!
    const [p1, c1] = STOPS[i]!
    if (t <= p1) {
      const k = (t - p0) / (p1 - p0)
      return '#' + c0.map((a, j) => Math.round(a + (c1[j]! - a) * k).toString(16).padStart(2, '0')).join('')
    }
  }
  return '#f43f5e'
}

function untilReset(resetsAt: string | undefined, at: number, weekly: boolean): string {
  if (!resetsAt) return ''
  const ts = Date.parse(resetsAt)
  const left = Math.floor((ts - at) / 60000)
  if (left <= 0) return 'сброс сейчас'
  const h = Math.floor(left / 60)
  const m = left % 60
  if (weekly && h >= 24) {
    const d = new Date(ts)
    const hh = String(d.getHours()).padStart(2, '0')
    const mm = String(d.getMinutes()).padStart(2, '0')
    return `сброс ${WEEKDAYS[d.getDay()]} ${hh}:${mm}`
  }
  return h ? `сброс через ${h}ч ${String(m).padStart(2, '0')}м` : `сброс через ${m}м`
}

function toLimits(list: SessionRateLimit[]): Limit[] {
  return list.map(({ kind, percentUsed, resetsAt }) => ({ kind, percentUsed, resetsAt }))
}

async function refresh($: EngineInterface, list?: SessionRateLimit[]) {
  const fresh = list ?? (await $.session.usage()).rateLimits
  await update($, limits, () => toLimits(fresh))
  await update($, now, () => Date.now())
}

async function draw($: EngineInterface, e: ResolveInput) {
  const { Box, Text } = $.ui.resolve(e)
  const list = await read($, limits)
  const at = (await read($, now)) || Date.now()

  const rows = WINDOWS.flatMap(({ kind, icon, label }) => {
    const limit = list.find(one => one.kind === kind)
    if (!limit) return []
    const pct = Math.max(0, Math.min(100, limit.percentUsed))
    const filled = (pct / 100) * BAR_WIDTH
    const full = Math.floor(filled)
    const cells = Array.from({ length: BAR_WIDTH }, (_, i) => {
      if (i < full) return <Text color={gradient(i / (BAR_WIDTH - 1))}>█</Text>
      if (i === full && filled > full) {
        return <Text color={gradient(i / (BAR_WIDTH - 1))}>{PARTIAL[Math.floor((filled - full) * 8)]}</Text>
      }
      return <Text color="#3c4048">─</Text>
    })

    return [
      <Box key={kind} flexDirection="row">
        <Text bold>
          {icon} {label}{' '}
        </Text>
        {cells}
        <Text bold color={gradient(pct / 100)}>
          {' '}
          {String(Math.round(limit.percentUsed)).padStart(3)}%
        </Text>
        <Text dimColor>  {untilReset(limit.resetsAt, at, kind === 'seven_day')}</Text>
      </Box>,
    ]
  })

  return { Box, Text, rows }
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'limits',
      description: 'Показать лимиты Claude (5 часов и неделя) в панели',
    })
    await refresh($)
    // keep the "resets in" countdown current while idle
    $.clock.every(60_000, () => void update($, now, () => Date.now()))

    return next(e)
  })

  on('session.attach', { surface: 'mobile' }, async ($, e, next) => {
    void $.ui.open({ id: PANE, title: 'Лимиты Claude' })

    return next(e)
  })

  on('session.measure', async ($, e, next) => {
    if (e.changed.includes('rateLimits')) await refresh($, e.rateLimits)

    return next(e)
  })

  on('command.run', { command: 'limits' }, async $ => {
    await refresh($)
    await $.ui.open({ id: PANE, title: 'Лимиты Claude' })

    return { text: 'Панель лимитов открыта.' }
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) return next(e)
    const { Box, rows } = await draw($, e)
    if (rows.length === 0) return next(e)

    return <Box flexDirection="column">{rows}</Box>
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text, rows } = await draw($, e)

    return (
      <Box flexDirection="column">
        {rows.length ? rows : <Text dimColor>Лимиты появятся после первого ответа Claude (только для Pro/Max).</Text>}
      </Box>
    )
  })
}
