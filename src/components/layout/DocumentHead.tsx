import { pageCode } from '../../content/pageCode.js'
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
      <title>{'Maddy Group Ltd | Cybersecurity and software in Accra'}</title>
      <meta
        content="Cybersecurity, software development and managed technology services from Maddy Group Ltd in Accra, Ghana."
        name="description"
      />
      <meta content="Maddy Group Ltd | Cybersecurity and software in Accra" property="og:title" />
      <meta
        content="Cybersecurity, software development and managed technology services from Maddy Group Ltd in Accra, Ghana."
        property="og:description"
      />
      <meta content="Maddy Group Ltd | Cybersecurity and software in Accra" name="twitter:title" />
      <meta
        content="Cybersecurity, software development and managed technology services from Maddy Group Ltd in Accra, Ghana."
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
