import express, { type Express } from 'express'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { renderDocument, renderNotFound } from './renderDocument.js'
import { siteRoutes } from './sitePages.js'

const projectRoot = resolve(import.meta.dirname, '..')
const publicRoot = resolve(projectRoot, 'public')

export function createApp(): Express {
  const app = express()

  app.disable('x-powered-by')
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
