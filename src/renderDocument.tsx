import { renderToStaticMarkup } from 'react-dom/server'
import { NotFoundDocument } from './pages/NotFoundPage.js'
import { getPageDocument } from './sitePages.js'

export function renderDocument(path = '/'): string | undefined {
  const PageDocument = getPageDocument(path)

  if (!PageDocument) {
    return undefined
  }

  return `<!DOCTYPE html>${renderToStaticMarkup(<PageDocument />)}`
}

export function renderNotFound(): string {
  return `<!DOCTYPE html>${renderToStaticMarkup(<NotFoundDocument />)}`
}
