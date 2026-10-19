/* ------------------------------------------------------------------ *
 * Shared entry point for every page.
 *
 * Each page loads this same module. Vite bundles it once and shares
 * the chunk across pages, so a second page costs almost nothing.
 *
 * Page-specific behaviour? Add src/pages/<name>.js and reference it
 * with an extra <script type="module"> in that page's HTML.
 * ------------------------------------------------------------------ */

import './styles/index.css'

import { initI18n } from './js/i18n.js'
import { initReveal, initTypewriter } from './js/motion.js'

initI18n()
initReveal()
initTypewriter()

/* ------------------------------------------------------------------ *
 * Canonical URLs
 *
 * Collapses /index.html and .html suffixes so the address bar always
 * shows the clean form, whatever was typed or linked.
 * ------------------------------------------------------------------ */

function canonicaliseUrl() {
  const { pathname, search, hash } = window.location

  const clean = pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')

  if (clean !== pathname) {
    window.history.replaceState(null, '', clean + search + hash)
  }
}

canonicaliseUrl()

/* --- Footer year --------------------------------------------------- */

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

/* --- Mark the current page in the nav ------------------------------ */

function normalisePath(path) {
  const trimmed = path.replace(/^\/+/, '')
  return trimmed === '' || trimmed.endsWith('/') ? trimmed + 'index.html' : trimmed
}

const currentPage = normalisePath(window.location.pathname)

document.querySelectorAll('.site-nav a').forEach((link) => {
  if (normalisePath(link.pathname) === currentPage) {
    link.setAttribute('aria-current', 'page')
  }
})