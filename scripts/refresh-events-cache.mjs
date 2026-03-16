import fs from 'node:fs/promises'
import path from 'node:path'

const PARSE_API_KEY = process.env.PARSE_API_KEY || process.env.VITE_PARSE_API_KEY
const PARSE_SCRAPER_ID =
    process.env.PARSE_SCRAPER_ID || process.env.VITE_PARSE_SCRAPER_ID || '5a81d537-afb2-4a08-bb42-7f097e69f0d0'
const LIMIT = Number(process.env.PARSE_LIMIT || 50)
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'events-cache.json')

if (!PARSE_API_KEY) {
    console.error('Missing PARSE_API_KEY. Set it in environment before running.')
    process.exit(1)
}

const url = `https://api.parse.bot/scraper/${PARSE_SCRAPER_ID}/get_all_events`

const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': PARSE_API_KEY
    },
    body: JSON.stringify({ limit: LIMIT, offset: 0 })
})

if (!response.ok) {
    const body = await response.text().catch(() => '')
    console.error(`Parse request failed: HTTP ${response.status}`)
    if (body) {
        console.error(`Parse response: ${body.slice(0, 2000)}`)
    }
    process.exit(1)
}

const payload = await response.json()
const events = payload?.data?.events || payload?.events || []

if (!Array.isArray(events)) {
    console.error('Parse payload did not include an events array.')
    process.exit(1)
}

const normalized = events
    .map((event) => ({
        id: event?.id || null,
        title: event?.title || null,
        event_url: event?.event_url || null,
        date_time: event?.date_time || null,
        end_time: event?.end_time || null,
        description: event?.description || '',
        event_type: event?.event_type || null,
        is_online: event?.is_online ?? null
    }))
    .filter((event) => event.id && event.title && event.date_time && event.event_url)

const output = {
    generated_at: new Date().toISOString(),
    scraper_id: PARSE_SCRAPER_ID,
    count: normalized.length,
    events: normalized
}

await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n', 'utf8')

console.log(`Wrote ${normalized.length} events to ${OUTPUT_PATH}`)
