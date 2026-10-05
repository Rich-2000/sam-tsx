import express, { type Express } from 'express'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { renderDocument, renderNotFound } from './renderDocument.js'
import { llmsTxt, redirectFor, robotsTxt, sitemapXml } from './content/seo.js'
import { siteRoutes } from './sitePages.js'

const projectRoot = resolve(import.meta.dirname, '..')
const publicRoot = resolve(projectRoot, 'public')

export function createApp(): Express {
  const app = express()

  app.disable('x-powered-by')

  // Old addresses keep working, and keep their search ranking, by moving permanently.
  app.use((request, response, next) => {
    const target = redirectFor(request.path)
    if (!target) return next()
    const query = request.originalUrl.slice(request.path.length)
    response.redirect(301, target.includes('#') ? target : target + query)
  })

  app.get('/robots.txt', (_request, response) => {
    response.type('text/plain').send(robotsTxt())
  })
  app.get('/sitemap.xml', (_request, response) => {
    response.type('application/xml').send(sitemapXml(siteRoutes))
  })
  app.get('/llms.txt', (_request, response) => {
    response.type('text/plain').send(llmsTxt())
  })

  app.use(
    express.static(publicRoot, {
      fallthrough: true,
      index: false,
    }),
  )

  app.get(siteRoutes, (request, response) => {
    const document = renderDocument(request.path)

    if (!document) {
      response.status(404).type('html').send(renderNotFound())
      return
    }

    response.status(200).type('html').send(document)
  })

  app.use((_request, response) => {
    response.status(404).type('html').send(renderNotFound())
  })

  return app
}

const app = createApp()

export default app

function isEntryPoint(): boolean {
  const entry = process.argv[1]
  return entry ? resolve(entry) === fileURLToPath(import.meta.url) : false
}

if (isEntryPoint()) {
  const requestedPort = Number.parseInt(process.env.PORT ?? '8080', 10)
  const port = Number.isFinite(requestedPort) ? requestedPort : 8080

  app.listen(port, () => {
    console.log(`Sam TypeScript site is running at http://localhost:${port}`)
  })
}
