import { Footer } from '../components/layout/Footer.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import { SiteIcons } from '../components/layout/SiteIcons.js'
import { sitePageCode } from '../content/sitePageCode.js'
import type { TechnologyPageConfig } from '../content/technologyPages.js'

const arrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
const featureArrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'

function PageHead({ config }: { config: TechnologyPageConfig }) {
  return (
    <>
      <meta charSet={"utf-8"} />
      <link href={"https://assets-global.website-files.com"} rel={"preconnect"} crossOrigin={"anonymous"} />
      <title>{config.title}</title>
      <meta content={config.description} name={"description"} />
      <meta content={config.title} property={"og:title"} />
      <meta content={config.description} property={"og:description"} />
      <meta content={config.title} name={"twitter:title"} />
      <meta content={config.description} name={"twitter:description"} />
      <meta property={"og:type"} content={"website"} />
      <meta content={"summary_large_image"} name={"twitter:card"} />
      <meta content={"width=device-width, initial-scale=1"} name={"viewport"} />
      <link href={"/styles/webflow.css"} rel={"stylesheet"} type={"text/css"} />
      <link href={"/styles/maddy-theme.css"} rel={"stylesheet"} type={"text/css"} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[0] }} />
      <script type={"text/javascript"} dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[1] }} />
      <SiteIcons />
    </>
  )
}

function Hero({ config }: { config: TechnologyPageConfig }) {
  return (
    <div className={"page-wrapper dark-wrapper is-overflow-hidden"}>
      <section className={"section is-why-flow-hero"}>
        <div className={"hero-media"} aria-hidden={"true"}>
          <img
            className={"hero-media__image"}
            src={config.heroImageSrc}
            alt={""}
            loading={"eager"}
          />
          <div className={"hero-hue-overlay"} />
        </div>
        <div className={"w-layout-blockcontainer container hero-description-container w-container"}>
          <h1 data-w-id={"5688d7d9-6d15-3f37-8131-e8be09b8e9fa"}>
            <span className={"is-color-lime-300"}>
              {config.heroAccent}
              <br />
            </span>
            {config.heroRest}
          </h1>
          <div className={"hero-flex"}>
            <p data-w-id={"cf1d3dc4-a54e-773c-276f-52cfbc4a1929"} className={"hero-description"}>
              {config.heroBody}
            </p>
            <a data-w-id={"6edbdcda-b7a6-c67d-3d34-d671091daf17"} href={"/get-in-touch"} className={"button w-inline-block"}>
              <p>{"Request a quote"}</p>
              <img
                src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"}
                loading={"lazy"}
                alt={""}
                className={"button-arrow"}
              />
            </a>
          </div>
        </div>
      </section>
      <section className={"section is-markets-section"}>
        <div data-w-id={"c0474c52-aa42-adbc-dc62-982b53513ae8"} className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <div className={"markets-flex"}>
            <div className={"markets-left"}>
              <h2>{config.overviewTitle}</h2>
              <div className={"markets-description"}>
                <p className={"is-font-size-body-l"}>{config.overviewBody}</p>
              </div>
            </div>
            <div className={"markets-right"}>
              <div className={"flex-features"}>
                {config.overviewPoints.map((point) => (
                  <div className={"flex-feature"} key={point}>
                    <img src={arrow} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={"maddy-section-backdrop"} aria-hidden={"true"} />
      </section>
    </div>
  )
}

function Features({ config }: { config: TechnologyPageConfig }) {
  return (
    <div className={"page-wrapper is-overflow-hidden"}>
      <section className={"section is-markets-features"}>
        <div className={"w-layout-blockcontainer container market-container w-container"}>
          {config.featureBlocks.map((block, index) => {
            const isLast = index === config.featureBlocks.length - 1
            const imageFirst = block.imageFirst ?? index % 2 === 0
            const picture = (
              <div className={"rounded-feature-picture"}>
                <img src={block.imageSrc} loading={"lazy"} alt={block.imageAlt} className={"rounded-feature-img"} />
              </div>
            )
            const copy = (
              <div className={"info-feature-desc"}>
                <h3 className={"is-space-24 is-md-space-16"}>{block.title}</h3>
                <p className={"is-font-size-body-m is-space-32 is-md-space-24"}>{block.body}</p>
                <div className={"flex-features"}>
                  {block.points.map((point) => (
                    <div className={"flex-feature"} key={point}>
                      <img src={featureArrow} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
            return (
              <div className={isLast ? "info-feature-flex last-flex" : "info-feature-flex"} key={block.title}>
                {imageFirst ? (
                  <>
                    {picture}
                    {copy}
                  </>
                ) : (
                  <>
                    {copy}
                    {picture}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function FooterArea({ config }: { config: TechnologyPageConfig }) {
  return (
    <div className={"page-wrapper is-overflow-hidden is-no-padding"}>
      <section className={"section is-cta-section"}>
        <div className={"w-layout-blockcontainer container is-relative is-z-index-2 w-container"}>
          <div className={"cta-copy"}>
            <div>
              <h3 data-w-id={"0789e90d-14d7-de60-3e7d-d2524d2e4fa3"} className={"is-color-lime-300"}>
                {config.ctaAccent}
              </h3>
              <h3 data-w-id={"6f019d19-8439-ebb1-03aa-e83ff562296c"}>{config.ctaRest}</h3>
              <p className={"cta-sub"}>{config.ctaBody}</p>
            </div>
            <a data-w-id={"6f019d19-8439-ebb1-03aa-e83ff5622970"} href={"/get-in-touch"} className={"button is-black-button w-inline-block"}>
              <p>{"Request a quote"}</p>
              <img
                src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"}
                loading={"lazy"}
                alt={""}
                className={"button-arrow inversed"}
              />
            </a>
          </div>
        </div>
        <div data-w-id={"6f019d19-8439-ebb1-03aa-e83ff5622974"} className={"kv-footer"}>
          <img
            src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp"}
            loading={"lazy"}
            sizes={"100vw"}
            srcSet={
              "https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-800.webp 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1080.webp 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1600.webp 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp 2880w"
            }
            alt={""}
            className={"kv-footer-desktop"}
          />
          <img
            src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp"}
            loading={"lazy"}
            sizes={"(max-width: 767px) 100vw, 750px"}
            srcSet={
              "https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp 750w"
            }
            alt={""}
            className={"kv-footer-mobile"}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

function PageRuntime() {
  return (
    <>
      <script src={"/vendor/jquery.js"} type={"text/javascript"} integrity={"sha256-82hEkGrSMJh3quMSG4f7FbngmAPLTDM63H4eNayS4Us="} crossOrigin={"anonymous"}></script>
      <script src={"/vendor/webflow.js"} type={"text/javascript"}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[4] }} />
    </>
  )
}

export function TechnologyServiceDocument({ config }: { config: TechnologyPageConfig }) {
  return (
    <SiteDocument
      currentPath={config.path}
      pageId={config.pageId}
      head={<PageHead config={config} />}
      runtime={<PageRuntime />}
    >
      <Hero config={config} />
      <Features config={config} />
      <FooterArea config={config} />
    </SiteDocument>
  )
}
