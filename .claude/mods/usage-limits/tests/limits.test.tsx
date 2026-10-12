import { expect, test } from 'claude-code/testing'

const RATES = [
  { kind: 'five_hour', percentUsed: 62.4, resetsAt: new Date(Date.now() + 2 * 3600_000).toISOString() },
  { kind: 'seven_day', percentUsed: 23, resetsAt: new Date(Date.now() + 4 * 86400_000).toISOString() },
]

for (const surface of ['terminal', 'desktop'] as const) {
  test(`draws both limit bars above the prompt on ${surface}`, async ($, on) => {
    on('session.measure', (_$, e) => ({ changed: e.changed }))
    await $.session.measure({
      context: { window: 200000 },
      rateLimits: RATES,
      changed: ['rateLimits'],
    })
    const ui = await $.ui.mount({
      plugin: 'usage-limits',
      surface,
      component: 'AbovePrompt',
      props: {
        hasSurvey: false,
        isWorking: false,
        maxRows: 10,
        bodyColumns: 100,
        scroll: { offset: 0, bodyRows: 10 },
        view: {},
      },
    })
    expect(await ui.find({ text: /62%/ })).toBeDefined()
    expect(await ui.find({ text: /23%/ })).toBeDefined()
    expect(await ui.find({ text: /Неделя/ })).toBeDefined()
  })
}

test('pane shows a hint before any reading', async $ => {
  const ui = await $.ui.mount({
    plugin: 'usage-limits',
    surface: 'mobile',
    component: 'Pane',
    requestId: 'usage-limits',
    props: {} as never,
  })
  expect(await ui.find({ text: /после первого ответа/ })).toBeDefined()
})

test('pins the limits into the session title, keeping its name', async ($, on) => {
  const titles: string[] = []
  let title = '⏱ 10% · 📅 5% — Красивая полоса лимита'
  on('session.measure', (_$, e) => ({ changed: e.changed }))
  on('mcp.call', (_$, e) => {
    if (e.tool === 'get_session') {
      const text = JSON.stringify({ ccr: { id: 'session_x', title } })
      return { value: { content: [{ type: 'text', text }], isError: false } }
    }
    title = String(e.args.title)
    titles.push(title)
    return { value: { content: [{ type: 'text', text: 'ok' }], isError: false } }
  })
  await $.session.measure({ context: { window: 200000 }, rateLimits: RATES, changed: ['rateLimits'] })
  expect(titles).toEqual(['⏱ 62% · 📅 23% — Красивая полоса лимита'])
})
