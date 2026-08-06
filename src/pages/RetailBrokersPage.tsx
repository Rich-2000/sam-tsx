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
        {"Security Assessment | Maddy Group Ltd"}
      </title>
      <meta content={"Penetration testing, vulnerability assessments, managed SOC, identity and cloud security from Maddy Group Ltd in Accra. Pricing is by quote."} name={"description"} />
      <meta content={"Security Assessment | Maddy Group Ltd"} property={"og:title"} />
      <meta content={"Penetration testing, vulnerability assessments, managed SOC, identity and cloud security from Maddy Group Ltd in Accra. Pricing is by quote."} property={"og:description"} />
      <meta content={"Security Assessment | Maddy Group Ltd"} name={"twitter:title"} />
      <meta content={"Penetration testing, vulnerability assessments, managed SOC, identity and cloud security from Maddy Group Ltd in Accra. Pricing is by quote."} name={"twitter:description"} />
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

function RetailBrokersHero() {
  return (
    <div className={"page-wrapper dark-wrapper is-overflow-hidden"}>
      <section className={"section is-why-flow-hero"}>
        <div className={"hero-media"} aria-hidden={"true"}>
          <video
            className={"hero-media__video"}
            autoPlay
            loop
            muted
            playsInline
            preload={"auto"}
            poster={"/images/brand/accra-spintex-skyline-storm.jpg"}
          >
            {/* Add an optimised source above the full-size one once generated:
                <source src="/images/thunder-720.webm" type="video/webm" />
                <source src="/images/thunder-720.mp4" type="video/mp4" /> */}
            <source src={"/images/thunder.mp4"} type={"video/mp4"} />
          </video>
          <div className={"hero-hue-overlay"} />
        </div>
        <div className={"w-layout-blockcontainer container hero-description-container w-container"}>
          <h1 data-w-id={"5688d7d9-6d15-3f37-8131-e8be09b8e9fa"}>
            <span className={"is-color-lime-300"}>
              {"Security assessment "}
              <br />
            </span>
            {"that finds real risk"}
          </h1>
          <div className={"hero-flex"}>
            <p data-w-id={"cf1d3dc4-a54e-773c-276f-52cfbc4a1929"} className={"hero-description"}>
              {"Penetration testing, vulnerability assessments and continuous testing options for organisations in Ghana. We show how an attacker could move through your systems, then help you close the gaps."}
            </p>
            <a data-w-id={"6edbdcda-b7a6-c67d-3d34-d671091daf17"} href={"/get-in-touch"} className={"button w-inline-block"}>
              <p>
                {"Request a quote"}
              </p>
              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow"} />
            </a>
          </div>
        </div>
      </section>
      <section className={"section is-markets-section"}>
        <div data-w-id={"c0474c52-aa42-adbc-dc62-982b53513ae8"} className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <div className={"markets-flex"}>
            <div className={"markets-left"}>
              <h2>
                {"What we assess"}
              </h2>
              <div className={"markets-description"}>
                <p className={"is-font-size-body-l"}>
                  {"From one-off penetration tests to ongoing vulnerability management, we help you see weaknesses before someone else does. Work aligns to ISO 27001, NIST, CIS, OWASP, the Ghana Data Protection Act (Act 843) and the Cyber Security Act, 2020 (Act 1038)."}
                </p>
              </div>
            </div>
            <div className={"markets-right"}>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Penetration testing and vulnerability assessments, including continuous testing options"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Managed SOC monitoring and vulnerability management as a service"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Phishing simulation, breach and attack simulation, and security training"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Identity, cloud and email security reviews with clear remediation priorities"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"maddy-section-backdrop"} aria-hidden={"true"} />
      </section>
    </div>
  )
}

function RetailBrokersFeatures() {
  return (
    <div className={"page-wrapper is-overflow-hidden"}>
      <section className={"section is-markets-features"}>
        <div className={"w-layout-blockcontainer container market-container w-container"}>
          <div className={"info-feature-flex"}>
            <div className={"rounded-feature-picture"}>
              <img src={"/images/brand/cyber-workstation-cottonbro-8720270.jpg"} loading={"lazy"} alt={"Cybersecurity workstation running technical monitoring tools"} className={"rounded-feature-img"} />
            </div>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24 is-md-space-16"}>
                {"Testing with clear outcomes"}
              </h3>
              <p className={"is-font-size-body-m is-space-32 is-md-space-24"}>
                {"You get practical findings, ranked by risk, with remediation guidance your team can act on."}
              </p>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Dedicated technical leads who walk you through findings, not only a PDF dump"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Scoped engagements with clear timelines before work starts"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"On-demand and continuous testing options when you need ongoing coverage"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Reports mapped to frameworks your stakeholders already recognise"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"info-feature-flex"}>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24"}>
                <strong>
                  {"Detect,"}
                </strong>
                {"\u200d"}
                <br />
                {"\u200d"}
                <strong>
                  {"respond, improve"}
                </strong>
              </h3>
              <p className={"is-font-size-body-m is-space-32"}>
                {"Assessment work sits alongside monitoring and response support when you need more than a one-off test."}
                <br />
                <br />
                {"Managed SOC, phishing simulation and vulnerability management help you keep pressure on after the first engagement."}
              </p>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Managed SOC monitoring for suspicious activity"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Incident response support with clear containment steps"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Phishing simulation and security training programmes"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Breach and attack simulation to stress-test controls"}
                  </p>
                </div>
              </div>
            </div>
            <div className={"rounded-feature-picture"}>
              <img src={"/images/brand/accra-stem-team-zeal-33920053.jpg"} loading={"lazy"} alt={"Technology students collaborating on an electronics project in Accra"} className={"rounded-feature-img"} />
            </div>
          </div>
          <div className={"info-feature-flex last-flex"}>
            <div className={"rounded-feature-picture"}>
              <img src={"/images/brand/secure-access-man-susanne-plank-13657444.jpg"} loading={"lazy"} alt={"Secure access card being presented to an authentication reader"} className={"rounded-feature-img"} />
            </div>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24"}>
                {"Identity, cloud and compliance"}
              </h3>
              <p className={"is-font-size-body-m is-space-32"}>
                {"Beyond network testing, we review the platforms your staff use every day and the policies that govern them."}
                <br />
                <br />
                {"That includes identity services, cloud posture, email security and guidance aligned to Ghanaian and international frameworks."}
              </p>
              <div className={"flex-features"}>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"MFA, SSO, privileged access and identity governance reviews"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Cloud security posture across AWS, Azure and Google Cloud"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Email security and data privacy guidance"}
                  </p>
                </div>
                <div className={"flex-feature"}>
                  <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                  <p>
                    {"Virtual CISO support and compliance-ready reporting"}
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

function RetailBrokersFooterArea() {
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
                {"test your posture"}
              </h3>
              <p className={"cta-sub"}>
                {"Tell us what you need assessed. We will come back with a clear quote."}
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
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[4] }} />
    </>
  )
}

export function RetailBrokersDocument() {
  return (
    <SiteDocument currentPath={"/retail-brokers"} pageId={"6627b50ad2ace3686c70ddc2"} head={<PageHead />} runtime={<PageRuntime />}>
      <RetailBrokersHero />
      <RetailBrokersFeatures />
      <RetailBrokersFooterArea />
    </SiteDocument>
  )
}
