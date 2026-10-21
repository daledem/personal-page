import { defineConfig } from 'vite'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const PARTIALS_DIR = resolve(root, 'src/partials')
const WRITEUPS_DIR = resolve(root, 'writeups')

/* Change this ONE line when you deploy somewhere new.
   Must stay absolute ('/' or '/repo/') — the write-up index builds
   absolute hrefs from it, and a relative base would double up. */
const BASE = '/'

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  'src',
  'public',
  '.git',
  '.vscode',
  '.github',
])

/* ------------------------------------------------------------------ *
 * Page discovery
 *
 * Walks the project and registers every index.html as a build input.
 * Skips dotfiles and anything starting with "_", so writeups/_template
 * never ships.
 * ------------------------------------------------------------------ */

function toChunkName(path) {
  return path
    .split(/[/-]+/)
    .map((part, i) => (i === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join('')
}

function discoverPages(dir, prefix = '', found = {}) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const name = entry.name
    if (name.startsWith('.') || name.startsWith('_')) continue

    const full = join(dir, name)

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue
      discoverPages(full, prefix ? `${prefix}-${name}` : name, found)
    } else if (name === 'index.html') {
      found[prefix === '' ? 'main' : toChunkName(prefix)] = full
    } else if (name === '404.html' && prefix === '') {
      found.notFound = full
    }
  }
  return found
}

/* ------------------------------------------------------------------ *
 * HTML partials + {{BASE}}
 * ------------------------------------------------------------------ */

function htmlPartials() {
  let base = BASE

  return {
    name: 'html-partials',

    configResolved(config) {
      base = config.base
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        // Partials FIRST, so their {{BASE}} placeholders land in the document.
        const withPartials = html.replace(
          /<!--\s*@include\s+([\w./-]+)\s*-->/g,
          (match, file) => {
            try {
              return readFileSync(resolve(PARTIALS_DIR, file), 'utf8')
            } catch {
              this.error(`[@include] Could not read partial: ${file}`)
            }
          }
        )

        // THEN substitute, across the whole document.
        return withPartials.replaceAll('{{BASE}}', base)
      },
    },

    handleHotUpdate({ file, server }) {
      if (file.startsWith(PARTIALS_DIR)) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
    },
  }
}

/* ------------------------------------------------------------------ *
 * Write-up index
 *
 * Reads every writeups/<slug>/index.html, pulls its writeup:* meta
 * tags, and inlines the list where the page says:
 *
 *   <!-- @writeups -->
 *
 * A directory with no writeup:title meta is skipped, so the template
 * and any stray folder never appear.
 * ------------------------------------------------------------------ */

function readMeta(html, name) {
  const tag = html.match(new RegExp(`<meta[^>]*\\bname=["']${name}["'][^>]*>`, 'i'))
  if (!tag) return ''
  const content = tag[0].match(/content=["']([^"']*)["']/i)
  return content ? content[1] : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function truncate(text, max = 150) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const space = cut.lastIndexOf(' ')
  return (space > max * 0.6 ? cut.slice(0, space) : cut).trimEnd() + '…'
}

function collectWriteups() {
  if (!existsSync(WRITEUPS_DIR)) return []

  return readdirSync(WRITEUPS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.'))
    .map((dir) => {
      const file = join(WRITEUPS_DIR, dir.name, 'index.html')
      if (!existsSync(file)) return null

      const html = readFileSync(file, 'utf8')
      const title = readMeta(html, 'writeup:title')
      if (!title) return null

      return {
        slug: dir.name,
        title,
        origin: readMeta(html, 'writeup:origin'),
        date: readMeta(html, 'writeup:date'),
        summary: readMeta(html, 'writeup:summary'),
      }
    })
    .filter(Boolean)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

function renderWriteups(base) {
  const entries = collectWriteups()

  if (entries.length === 0) {
    return '<p class="writeup-empty" data-i18n="writeups.empty">No write-ups published yet.</p>'
  }

  const items = entries
    .map(
      (entry) => `
        <li>
          <a class="writeup-item" href="${base}writeups/${entry.slug}/">
            ${
              entry.date
                ? `<time class="writeup-date" datetime="${entry.date}">${entry.date}</time>`
                : '<span class="writeup-date" aria-hidden="true"></span>'
            }
            <div class="writeup-body">
              <h3 class="writeup-title">${escapeHtml(entry.title)}</h3>
              ${entry.origin ? `<p class="writeup-origin">${escapeHtml(entry.origin)}</p>` : ''}
              ${
                entry.summary
                  ? `<p class="writeup-summary">${escapeHtml(truncate(entry.summary))}</p>`
                  : ''
              }
            </div>
          </a>
        </li>`
    )
    .join('')

  return `<ul class="writeup-list">${items}\n      </ul>`
}

function writeupIndex() {
  let base = BASE

  return {
    name: 'writeup-index',

    configResolved(config) {
      base = config.base
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!html.includes('<!-- @writeups -->')) return html
        return html.replace('<!-- @writeups -->', renderWriteups(base))
      },
    },

    // Adding or editing a write-up refreshes the index in dev.
    handleHotUpdate({ file, server }) {
      if (file.startsWith(WRITEUPS_DIR)) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
    },
  }
}

export default defineConfig({
  appType: 'mpa',
  base: BASE,
  plugins: [htmlPartials(), writeupIndex()],
  build: {
    rollupOptions: {
      // Every page found on disk. No manual list to maintain.
      input: discoverPages(root),
    },
  },
})