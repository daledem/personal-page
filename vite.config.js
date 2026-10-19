import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const PARTIALS_DIR = resolve(root, 'src/partials')

/* ------------------------------------------------------------------ *
 * HTML partials
 *
 * Lets any page include shared markup at build time:
 *
 *   <!-- @include header.html -->
 *
 * The file is inlined into the HTML — no runtime fetch, no flash of
 * unstyled content, and the header/footer are present in the served
 * document for crawlers. Runs in dev and in the production build.
 * ------------------------------------------------------------------ */

function htmlPartials() {
  return {
    name: 'html-partials',

    transformIndexHtml(html) {
      return html.replace(
        /<!--\s*@include\s+([\w./-]+)\s*-->/g,
        (match, file) => {
          try {
            return readFileSync(resolve(PARTIALS_DIR, file), 'utf8')
          } catch {
            this.error(`[@include] Could not read partial: ${file}`)
          }
        }
      )
    },

    // Editing a partial should reload the browser in dev.
    handleHotUpdate({ file, server }) {
      if (file.startsWith(PARTIALS_DIR)) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
    },
  }
}

export default defineConfig({
  // Relative base keeps links and assets working on a custom domain,
  // on username.github.io, and on username.github.io/repo-name/.
  base: './',

  plugins: [htmlPartials()],

  build: {
    rollupOptions: {
      // Every page must be listed here or it will not be built.
      // Add a line when you add a page.
      input: {
        main: resolve(root, 'index.html'),
        //projects: resolve(root, 'projects.html'),
      },
    },
  },
})
