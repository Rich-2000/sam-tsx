import { Footer } from '../components/layout/Footer.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import { SiteIcons } from '../components/layout/SiteIcons.js'
import { sitePageCode } from '../content/sitePageCode.js'

function PageHead() {
  return (
    <>
      <meta charSet={"utf-8"} />
      <link href={"https://assets-global.website-files.com"} rel={"preconnect"} crossOrigin={"anonymous"} />
      <title>
        {"Software Development | Maddy Group Ltd"}
      </title>
      <meta content={"Custom software, websites, portals and systems integration from Maddy Group Ltd in Accra. Pricing is by quote."} name={"description"} />
      <meta content={"Software Development | Maddy Group Ltd"} property={"og:title"} />
      <meta content={"Custom software, websites, portals and systems integration from Maddy Group Ltd in Accra. Pricing is by quote."} property={"og:description"} />
      <meta content={"Software Development | Maddy Group Ltd"} name={"twitter:title"} />
      <meta content={"Custom software, websites, portals and systems integration from Maddy Group Ltd in Accra. Pricing is by quote."} name={"twitter:description"} />
      <meta property={"og:type"} content={"website"} />
      <meta content={"summary_large_image"} name={"twitter:card"} />
      <meta content={"width=device-width, initial-scale=1"} name={"viewport"} />
      <link href={"/styles/webflow.css"} rel={"stylesheet"} type={"text/css"} />
      <link href={"/styles/maddy-theme.css"} rel={"stylesheet"} type={"text/css"} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[0] }} />
      <script type={"text/javascript"} dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[1] }} />
      <SiteIcons />
    </>
  )
}

function CarriersHero() {
  return (
    <div className={"page-wrapper dark-wrapper is-overflow-hidden"}>
      <section className={"section is-why-flow-hero carriers-hero"}>
        <div className={"w-layout-blockcontainer container hero-description-container w-container"}>
          <h1 data-w-id={"5688d7d9-6d15-3f37-8131-e8be09b8e9fa"} className={"is-mobile-hero-title"}>
            <span className={"is-color-lime-300"}>
              {"Software built "}
              <br />
            </span>
            {"for how you work"}
          </h1>
          <div className={"hero-flex for-carriers-flex"}>
            <p data-w-id={"cf1d3dc4-a54e-773c-276f-52cfbc4a1929"} className={"hero-description extended-h-description"}>
              {"Custom desktop, mobile and enterprise applications, corporate websites and portals, plus integration with the systems you already run. Clear scopes, delivery timelines and support after launch."}
            </p>
            <a data-w-id={"6edbdcda-b7a6-c67d-3d34-d671091daf17"} href={"/get-in-touch"} className={"button w-inline-block"}>
              <p>
                {"Request a quote"}
              </p>
              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow"} />
            </a>
          </div>
        </div>
        <div>
          <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de9e_hero_bg.svg"} loading={"lazy"} alt={""} className={"mask-video-hero"} />
          <div className={"tab-bg-video-hero maddy-image-frame"}>
            <img
              src={"/images/brand/accra-ecobank-tower.jpg"}
              loading={"eager"}
              alt={"Ecobank tower rising above Accra"}
              className={"maddy-cover-image"}
            />
          </div>
        </div>
      </section>
      <section className={"section is-markets-section"}>
        <div data-w-id={"c0474c52-aa42-adbc-dc62-982b53513ae8"} className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <div className={"markets-flex"}>
            <div className={"markets-left"}>
              <h2>
                {"What we build"}
              </h2>
              <div className={"markets-description"}>
                <p className={"is-font-size-body-l"}>
                  {"From internal tools to customer-facing products, we design and ship software that fits your operations. Websites and portals sit alongside deeper application work when you need more than a brochure site. Indicative timelines: simple mobile apps in 2 to 3 months, complex enterprise systems in 6 to 12 months or more, simple websites in 2 to 4 weeks, and e-commerce in 6 to 8 weeks."}
                </p>
              </div>
            </div>
            <div className={"markets-right"}>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Custom desktop, mobile and enterprise applications"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Corporate websites, e-commerce platforms and customer portals"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Systems integration with databases and third-party tools"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"maddy-section-backdrop"} aria-hidden={"true"} />
      </section>
      <section className={"section is-markets-logos hide"}>
        <div data-w-id={"700514c9-05ab-d5ee-63c4-eca1f74eeaaf"} className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <div className={"markets-logos-grid"}>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/CrowdStrike_logo.svg"} loading={"lazy"} alt={"CrowdStrike"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/McAfee_logo.svg"} loading={"lazy"} alt={"McAfee"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/cisco-ar21.svg"} loading={"lazy"} alt={"Cisco"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/awsbadge.png"} loading={"lazy"} alt={"Amazon Web Services"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googlecloudbadge.png"} loading={"lazy"} alt={"Google Cloud"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googleworkspacebadge.png"} loading={"lazy"} alt={"Google Workspace"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/ibm.webp"} loading={"lazy"} alt={"IBM"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/CrowdStrike_logo.svg"} loading={"lazy"} alt={"CrowdStrike"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/McAfee_logo.svg"} loading={"lazy"} alt={"McAfee"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/cisco-ar21.svg"} loading={"lazy"} alt={"Cisco"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/awsbadge.png"} loading={"lazy"} alt={"Amazon Web Services"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googlecloudbadge.png"} loading={"lazy"} alt={"Google Cloud"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googleworkspacebadge.png"} loading={"lazy"} alt={"Google Workspace"} className={"market-logo-image"} />
            </div>
            <div className={"market-logo"}>
              <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/ibm.webp"} loading={"lazy"} alt={"IBM"} className={"market-logo-image"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CarriersFeatures() {
  return (
    <div className={"page-wrapper is-overflow-hidden"}>
      <section className={"section is-markets-features"}>
        <div className={"w-layout-blockcontainer container market-container w-container"}>
          <div className={"info-feature-flex"}>
            <div className={"rounded-feature-picture"}>
              <img src={"/images/brand/developer-woman-christina-morillo-1181359.jpg"} loading={"lazy"} alt={"Software developer writing and reviewing application code"} className={"rounded-feature-img"} />
            </div>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24 is-md-space-16"}>
                {"Custom applications"}
              </h3>
              <p className={"is-font-size-body-m is-space-32 is-md-space-24"}>
                {"Purpose-built apps for internal operations or customer-facing work, sized to your timeline and budget."}
              </p>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Cross-platform delivery for Windows, macOS, Linux, iOS and Android"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Support and maintenance packages after launch"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"info-feature-flex"}>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24"}>
                {"Websites and portals"}
              </h3>
              <p className={"is-font-size-body-m is-space-32"}>
                {"Corporate sites, content systems, payment flows and hosting arrangements that are ready for day-to-day use by your team and customers."}
              </p>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"CMS and customer portal options when content teams need control"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Indicative timelines from simple sites in weeks to complex apps over months"}
                  </p>
                </div>
              </div>
            </div>
            <div className={"rounded-feature-picture"}>
              <img src={"/images/brand/software-collaboration-mizuno-k-12899191.jpg"} loading={"lazy"} alt={"Developers reviewing code together"} className={"rounded-feature-img"} />
            </div>
          </div>
          <div className={"info-feature-flex last-flex"}>
            <div className={"rounded-feature-picture"}>
              <img src={"/images/brand/accra-tech-mentoring-zeal-33920051.jpg"} loading={"lazy"} alt={"Students receiving hands-on technology mentoring in Accra"} className={"rounded-feature-img"} />
            </div>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24"}>
                {"Integration and support"}
              </h3>
              <p className={"is-font-size-body-m is-space-32"}>
                {"Connect new software to the databases and third-party tools you already run."}
                <br />
                <br />
                {"Then keep it maintained as your processes change, with clear ownership after go-live."}
              </p>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"APIs and data flows that reduce silos between systems"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Hosting, cloud deployment and iterative improvements"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CarriersFooterArea() {
  return (
    <div className={"page-wrapper is-overflow-hidden is-no-padding"}>
      <section className={"section is-cta-section"}>
        <div className={"w-layout-blockcontainer container is-relative is-z-index-2 w-container"}>
          <div className={"cta-copy"}>
            <div>
              <h3 data-w-id={"0789e90d-14d7-de60-3e7d-d2524d2e4fa3"} className={"is-color-lime-300"}>
                {"Ready to "}
              </h3>
              <h3 data-w-id={"6f019d19-8439-ebb1-03aa-e83ff562296c"}>
                {"scope a build"}
              </h3>
              <p className={"cta-sub"}>
                {"Tell us what you need to ship. We will come back with a clear quote."}
              </p>
            </div>
            <a data-w-id={"6f019d19-8439-ebb1-03aa-e83ff5622970"} href={"/get-in-touch"} className={"button is-black-button w-inline-block"}>
              <p>
                {"Request a quote"}
              </p>
              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
            </a>
          </div>
        </div>
        <div data-w-id={"6f019d19-8439-ebb1-03aa-e83ff5622974"} className={"kv-footer"}>
          <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp"} loading={"lazy"} sizes={"100vw"} srcSet={"https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-800.webp 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1080.webp 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1600.webp 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp 2880w"} alt={""} className={"kv-footer-desktop"} />
          <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp"} loading={"lazy"} sizes={"(max-width: 767px) 100vw, 750px"} srcSet={"https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp 750w"} alt={""} className={"kv-footer-mobile"} />
        </div>
      </section>
      <Footer brand="maddy" />
    </div>
  )
}

function PageRuntime() {
  return (
    <>
      <script src={"/vendor/jquery.js"} type={"text/javascript"} integrity={"sha256-82hEkGrSMJh3quMSG4f7FbngmAPLTDM63H4eNayS4Us="} crossOrigin={"anonymous"}></script>
      <script src={"/vendor/webflow.js"} type={"text/javascript"}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.carriers[4] }} />
    </>
  )
}

export function CarriersDocument() {
  return (
    <SiteDocument currentPath={"/carriers"} pageId={"6627b50ad2ace3686c70ddc3"} head={<PageHead />} runtime={<PageRuntime />}>
      <CarriersHero />
      <CarriersFeatures />
      <CarriersFooterArea />
    </SiteDocument>
  )
}
