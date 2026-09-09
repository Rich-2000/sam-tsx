import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { renderDocument } from '../src/renderDocument.js'
import { siteRoutes } from '../src/sitePages.js'

// Check rendered tags against the exact bytes the browser receives.
const jquery = readFileSync(new URL('../public/vendor/jquery.js', import.meta.url))
const integrity = `sha256-${createHash('sha256').update(jquery).digest('base64')}`
assert(!jquery.includes('\r'), 'jQuery must use LF line endings on every platform')

for (const route of siteRoutes) {
  const html = renderDocument(route)!
  const tag = html.match(/<script\b[^>]*src="\/vendor\/jquery\.js"[^>]*>/)?.[0]
  assert(tag, `${route}: missing jQuery script`)
  assert.equal(tag.match(/\bintegrity="([^"]+)"/)?.[1], integrity,
    `${route}: jQuery integrity mismatch blocks text animations and navigation`)
}

console.log(`Script integrity passed for all ${siteRoutes.length} routes`)
