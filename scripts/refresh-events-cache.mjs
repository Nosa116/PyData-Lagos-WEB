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

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchWithRetries = async (attempts = 3) => {
    let lastError = null

    for (let attempt = 1; attempt <= attempts; attempt += 1) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': PARSE_API_KEY
                },
                body: JSON.stringify({ limit: LIMIT, offset: 0 })
            })

            if (response.ok) {
                return response
            }

            const body = await response.text().catch(() => '')
            console.error(`Parse request failed: HTTP ${response.status}`)
            if (body) {
                console.error(`Parse response: ${body.slice(0, 2000)}`)
            }
            lastError = new Error(`HTTP ${response.status}`)
        } catch (error) {
            lastError = error
            console.error(`Parse request error: ${error?.message || error}`)
        }

        if (attempt < attempts) {
            const delayMs = attempt === 1 ? 1000 : 3000
            console.log(`Retrying Parse request in ${delayMs / 1000}s...`)
            await wait(delayMs)
        }
    }

    throw lastError || new Error('Parse request failed after retries.')
}

let response

try {
    response = await fetchWithRetries(3)
} catch (error) {
    try {
        const existing = await fs.readFile(OUTPUT_PATH, 'utf8')
        const parsed = JSON.parse(existing)
        if (Array.isArray(parsed?.events) && parsed.events.length > 0) {
            console.warn('Parse API unavailable. Keeping existing events cache.')
            process.exit(0)
        }
    } catch {
        // fall through to hard failure below
    }
    console.error('Parse API unavailable and no valid cache exists.')
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
