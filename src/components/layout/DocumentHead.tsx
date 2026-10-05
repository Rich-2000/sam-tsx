import { pageCode } from '../../content/pageCode.js'
import { SeoTags } from './SeoTags.js'
import { SiteIcons } from './SiteIcons.js'

export function DocumentHead() {
  return (
    <head>
      <meta charSet="utf-8" />
      <link
        href="https://assets-global.website-files.com"
        rel="preconnect"
        crossOrigin="anonymous"
      />
      <title>{'Cybersecurity Company in Accra, Ghana | Maddy Group Ltd'}</title>
      <meta
        content="Maddy Group Ltd is a cybersecurity and software company in Accra, Ghana: penetration testing, managed SOC, incident response and custom software for Africa."
        name="description"
      />
      <meta content="Cybersecurity Company in Accra, Ghana | Maddy Group Ltd" property="og:title" />
      <meta
        content="Maddy Group Ltd is a cybersecurity and software company in Accra, Ghana: penetration testing, managed SOC, incident response and custom software for Africa."
        property="og:description"
      />
      <meta
        content="Cybersecurity Company in Accra, Ghana | Maddy Group Ltd"
        name="twitter:title"
      />
      <meta
        content="Maddy Group Ltd is a cybersecurity and software company in Accra, Ghana: penetration testing, managed SOC, incident response and custom software for Africa."
        name="twitter:description"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/styles/webflow.css" rel="stylesheet" type="text/css" />
      <link href="/styles/maddy-theme.css" rel="stylesheet" type="text/css" />
      <style dangerouslySetInnerHTML={{ __html: pageCode.initialInteractionStyles }} />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: pageCode.webflowBootstrap }}
      />
      <SiteIcons />
      <SeoTags path="/" />
      {'\n'}
      <script defer={true} src="/vendor/autovideo.js"></script>
      {'\n'}
      {'\n'}
      <link rel="stylesheet" href="/styles/swiper.css" />
      {'\n'}
      <style dangerouslySetInnerHTML={{ __html: pageCode.carouselStyles }} />
    </head>
  )
}
