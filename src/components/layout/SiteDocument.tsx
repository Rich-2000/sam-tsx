import type { ReactNode } from 'react'
import { CookieConsent } from './CookieConsent.js'
import { Header } from './Header.js'
import { Loader, LoaderRuntime } from './Loader.js'
import { PageSetup } from './PageSetup.js'
import { SeoTags } from './SeoTags.js'

type SiteDocumentProps = {
  children: ReactNode
  currentPath: string
  head: ReactNode
  pageId: string
  runtime: ReactNode
}

export function SiteDocument({ children, currentPath, head, pageId, runtime }: SiteDocumentProps) {
  return (
    <html
      className="is-page-loading"
      data-wf-domain="flow-x-widelab.webflow.io"
      data-wf-page={pageId}
      data-wf-site="6627b50ad2ace3686c70dd7b"
      lang="en"
    >
      <head>
        {head}
        <SeoTags path={currentPath} />
      </head>
      <body>
        <Loader />
        <PageSetup />
        <Header brand="maddy" currentPath={currentPath} showWhiteLogo />
        {children}
        {runtime}
        <CookieConsent />
        <LoaderRuntime />
      </body>
    </html>
  )
}
