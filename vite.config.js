import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const PARTIALS_DIR = resolve(root, 'src/partials')

/* ------------------------------------------------------------------ *
 * Change this ONE line when you deploy somewhere new.
 *
 *   GitHub Pages project site  ->  '/your-repo-name/'
 *   Custom domain / user site  ->  '/'
 *
 * Directory-based pages mean relative links cannot work in shared
 * markup, so the base must be absolute.
 * ------------------------------------------------------------------ */
const BASE = '/'

/* ------------------------------------------------------------------ *
 * HTML partials + {{BASE}} substitution
 *
 *   <!-- @include header.html -->
 *   <a href="{{BASE}}projects/">
 *
 * Runs at 'pre' order so the injected markup is still seen by Vite's
 * own HTML transforms.
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

export default defineConfig({
  // Multi-page site: no history fallback, real 404s.
  appType: 'mpa',

  base: BASE,

  plugins: [htmlPartials()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        //projects: resolve(root, 'projects/index.html'),
        notFound: resolve(root, '404.html'),
      },
    },
  },
})