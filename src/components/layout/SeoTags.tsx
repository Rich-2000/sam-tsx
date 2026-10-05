import { structuredData } from '../../content/seo.js'
import { absoluteUrl, site } from '../../content/site.js'

/** Search-engine and link-preview tags that every page shares; title and description stay with the page. */
export function SeoTags({ path }: { path: string }) {
  const url = absoluteUrl(path)
  const image = absoluteUrl(site.socialImage)
  // "<" is escaped so the data can never close its own script tag.
  const json = JSON.stringify(structuredData(path)).replace(/</g, '\\u003c')

  return (
    <>
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_GH" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={site.socialImageAlt} />
      <meta name="twitter:image" content={image} />
      <meta name="geo.region" content="GH-AA" />
      <meta name="geo.placename" content="Accra" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
    </>
  )
}
