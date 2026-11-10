// GitHub Pages has no server, so client-side routes need a fallback document:
// copying index.html to 404.html lets /about and /work/:slug boot the app.
// .nojekyll stops Jekyll from processing the uploaded files.
import { copyFileSync, writeFileSync } from 'node:fs'

const out = new URL('../dist-pages/', import.meta.url)
copyFileSync(new URL('index.html', out), new URL('404.html', out))
writeFileSync(new URL('.nojekyll', out), '')
console.log('pages: wrote 404.html and .nojekyll')
