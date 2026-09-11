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
        {"Services | Maddy Group Ltd"}
      </title>
      <meta content={"Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training from Maddy Group Ltd in Accra."} name={"description"} />
      <meta content={"Services | Maddy Group Ltd"} property={"og:title"} />
      <meta content={"Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training from Maddy Group Ltd in Accra."} property={"og:description"} />
      <meta content={"Services | Maddy Group Ltd"} name={"twitter:title"} />
      <meta content={"Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training from Maddy Group Ltd in Accra."} name={"twitter:description"} />
      <meta property={"og:type"} content={"website"} />
      <meta content={"summary_large_image"} name={"twitter:card"} />
      <meta content={"width=device-width, initial-scale=1"} name={"viewport"} />
      <link href={"/styles/webflow.css"} rel={"stylesheet"} type={"text/css"} />
      <link href={"/styles/maddy-theme.css"} rel={"stylesheet"} type={"text/css"} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[0] }} />
      <script type={"text/javascript"} dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[1] }} />
      <SiteIcons />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[2] }} />
    </>
  )
}

function ProductsHero() {
  return (
    <div className={"page-wrapper dark-wrapper is-overflow-hidden"}>
      <section className={"section is-products-hero"}>
        <div className={"hero-media"} aria-hidden={"true"}>
          <img
            className={"hero-media__image"}
            src={"/images/brand/accra-growth-prince-enos-31800284.jpg"}
            alt={""}
            loading={"eager"}
          />
          <div className={"hero-hue-overlay"} />
        </div>
        <div className={"w-layout-blockcontainer container hero-description-container w-container"}>
          <div className={"max-width _820px"}>
            <h1 data-w-id={"5688d7d9-6d15-3f37-8131-e8be09b8e9fa"} className={"is-mobile-hero-title"}>
              {"Our "}
              <span className={"is-color-lime-300"}>
                {"services"}
              </span>
              {" for secure "}
              <span className={"is-color-lime-300"}>
                {"growth"}
              </span>
            </h1>
          </div>
          <div className={"hero-flex"}>
            <p data-w-id={"cf1d3dc4-a54e-773c-276f-52cfbc4a1929"} className={"hero-description extended-h-description"}>
              {"Cybersecurity, software development, websites, IoT and smart cards, ICT procurement and training for organisations in Ghana. Pricing is by quote."}
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
      <section className={"section is-products-logos"}>
        <div data-w-id={"c0474c52-aa42-adbc-dc62-982b53513ae8"} className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <h4>
            {"Technology partners"}
          </h4>
          <div className={"logo-loop"}>
            {[0, 1, 2].map((loopIndex) => (
              <div className={"logo-loop-container"} key={loopIndex}>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/CrowdStrike_logo.svg"} loading={"lazy"} alt={"CrowdStrike"} className={"logo-loop-image bigger"} />
                </div>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/McAfee_logo.svg"} loading={"lazy"} alt={"McAfee"} className={"logo-loop-image bigger"} />
                </div>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/cisco-ar21.svg"} loading={"lazy"} alt={"Cisco"} className={"logo-loop-image bigger"} />
                </div>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/awsbadge.png"} loading={"lazy"} alt={"Amazon Web Services"} className={"logo-loop-image bigger"} />
                </div>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googlecloudbadge.png"} loading={"lazy"} alt={"Google Cloud"} className={"logo-loop-image bigger"} />
                </div>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googleworkspacebadge.png"} loading={"lazy"} alt={"Google Workspace"} className={"logo-loop-image bigger"} />
                </div>
                <div className={"looped-logo dark-looped"}>
                  <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/ibm.webp"} loading={"lazy"} alt={"IBM"} className={"logo-loop-image bigger"} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={"maddy-section-backdrop"} aria-hidden={"true"} />
      </section>
    </div>
  )
}

function ProductsDirectory() {
  return (
    <div id={"find-flow"} className={"page-wrapper is-no-padding"}>
      <section className={"section is-full-light-tabs-section"}>
        <div className={"w-layout-blockcontainer container padding-as-a-section w-container"}>
          <h1 className={"is-space-20"}>
            {"Our services"}
          </h1>
          <div className={"max-width _895px is-landscape-full-width"}>
            <p className={"is-space-40"}>
              {"From cybersecurity and custom software to websites, IoT and smart cards, we help organisations in Ghana build secure systems and run them with confidence. Pricing is by quote."}
            </p>
          </div>
        </div>
        <div data-current={"Professional Liability"} data-easing={"ease"} data-duration-in={"0"} data-duration-out={"0"} className={"light-tabs w-tabs"}>
          <div className={"light-tabs-menu w-tab-menu"}>
            <a data-w-tab={"Professional Liability"} className={"light-tabs-menu-links w-inline-block w-tab-link w--current"}>
              <div>
                {"Cybersecurity"}
              </div>
            </a>
            <a data-w-tab={"Management Liability"} className={"light-tabs-menu-links w-inline-block w-tab-link"}>
              <div>
                {"Software development"}
              </div>
            </a>
            <a data-w-tab={"Cyber"} className={"light-tabs-menu-links w-inline-block w-tab-link"}>
              <div>
                {"IoT & smart cards"}
              </div>
            </a>
          </div>
          <div className={"light-tabs-mask w-tab-content"}>
            <div data-w-tab={"Professional Liability"} className={"light-tabs-pane w-tab-pane w--tab-active"}>
              <div>
                <div className={"full-wrapper"}>
                  <div className={"info-feature-flex tab-flex"}>
                    <div className={"rounded-feature-picture"}>
                      <img src={"/images/brand/cyber-workstation-cottonbro-8720270.jpg"} alt={"Cybersecurity workstation running monitoring and diagnostic tools"} loading={"lazy"} className={"rounded-feature-img"} />
                    </div>
                    <div className={"info-feature-desc container"}>
                      <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                        {"Cybersecurity"}
                      </h3>
                      <p className={"is-font-size-body-m"}>
                        {"We help organisations find weaknesses, monitor threats and respond when something goes wrong."}
                        <br />
                        <br />
                        {"Work is grounded in practical frameworks such as ISO 27001, NIST, CIS, OWASP, the Ghana Data Protection Act (Act 843) and the Cyber Security Act, 2020 (Act 1038)."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"grey-full-wrapper"}>
                  <div className={"info-feature-flex tab-flex _2"}>
                    <div className={"info-feature-desc container"}>
                      <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                        {"Capabilities"}
                      </h3>
                      <div className={"flex-features"}>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Penetration testing, vulnerability assessments and continuous testing options"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Managed SOC monitoring, vulnerability management and breach and attack simulation"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Identity services including MFA, SSO, privileged access and identity governance"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Cloud security posture work across AWS, Azure and Google Cloud, plus phishing simulation and security training"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"rounded-feature-picture full-image"}>
                      <img src={"/images/brand/security-analyst-kampus-8204353.jpg"} alt={"Security analyst reviewing live monitoring data across multiple displays"} loading={"lazy"} className={"rounded-feature-img"} />
                    </div>
                  </div>
                </div>
                <div className={"section is-target-section"}>
                  <img sizes={"100vw"} srcSet={"https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-500.png 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-800.png 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-1080.png 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-1600.png 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-2000.png 2000w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-2600.png 2600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%20238186.png 2880w"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%20238186.png"} loading={"lazy"} className={"kv_target"} />
                  <div className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
                    <h2 className={"is-space-64 is-tablet-space-32"}>
                      {"Focus areas"}
                    </h2>
                    <div className={"flex-vert"}>
                      <div>
                        <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                          <div className={"specialties-tab-link-copy dropdown-tab _1d w-dropdown-toggle"}>
                            <div className={"is-font-size-title-m"}>
                              {"Testing & assessments"}
                            </div>
                            <div className={"tab-menu-chevron _1c"}>
                              <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab _1a"} />
                            </div>
                          </div>
                          <nav id={"w-dropdown-list-1"} className={"drop-sub _1 w-dropdown-list"}>
                            <div className={"drop-wrap"}>
                              <div className={"flex-target"}>
                                <img loading={"lazy"} src={"/images/brand/network-cables-brett-sayles-1597776.jpg"} alt={"Secured network connections in data-centre infrastructure"} className={"target-img"} />
                                <h3>
                                  {"Testing & assessments"}
                                </h3>
                              </div>
                              <p>
                                {"Penetration testing and vulnerability assessments help you see how an attacker might move through your systems, before that path is used against you."}
                              </p>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div>
                        <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                          <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                            <div className={"is-font-size-title-m"}>
                              {"Managed detection"}
                            </div>
                            <div className={"tab-menu-chevron"}>
                              <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                            </div>
                          </div>
                          <nav className={"drop-sub is-bottom-2-mobile w-dropdown-list"}>
                            <div className={"drop-wrap"}>
                              <div className={"flex-target"}>
                                <img loading={"lazy"} src={"/images/brand/server-rack-panumas-17489156.jpg"} alt={"Protected server infrastructure in a modern data centre"} className={"target-img"} />
                                <h3>
                                  {"Managed detection"}
                                </h3>
                              </div>
                              <p>
                                {"Managed SOC monitoring watches for suspicious activity so your team can act early, with clear escalation when something needs human judgement."}
                              </p>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div>
                        <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                          <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                            <div className={"is-font-size-title-m"}>
                              {"Identity & access"}
                            </div>
                            <div className={"tab-menu-chevron"}>
                              <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                            </div>
                          </div>
                          <nav className={"drop-sub _3 w-dropdown-list"}>
                            <div className={"drop-wrap"}>
                              <div className={"flex-target"}>
                                <img loading={"lazy"} src={"/images/brand/smart-card-susanne-plank-13657375.jpg"} alt={"Access card being presented to a secure reader"} className={"target-img"} />
                                <h3>
                                  {"Identity & access"}
                                </h3>
                              </div>
                              <p>
                                {"MFA, SSO, privileged access and identity governance reduce the chance that one compromised account becomes a wider incident."}
                              </p>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div>
                        <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                          <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                            <div className={"is-font-size-title-m"}>
                              {"Cloud & email security"}
                            </div>
                            <div className={"tab-menu-chevron"}>
                              <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                            </div>
                          </div>
                          <nav className={"drop-sub _4 w-dropdown-list"}>
                            <div className={"drop-wrap"}>
                              <div className={"flex-target"}>
                                <img loading={"lazy"} src={"/images/brand/accra-modern-architecture-larry-dre-7066315.jpg"} alt={"Modern connected business infrastructure in Accra"} className={"target-img _4"} />
                                <h3>
                                  {"Cloud & email security"}
                                </h3>
                              </div>
                              <p>
                                {"Cloud posture management and email security help lock down the platforms your staff already use every day."}
                              </p>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div>
                        <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                          <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                            <div className={"is-font-size-title-m"}>
                              {"Governance & training"}
                            </div>
                            <div className={"tab-menu-chevron"}>
                              <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                            </div>
                          </div>
                          <nav className={"drop-sub _5 w-dropdown-list"}>
                            <div className={"drop-wrap"}>
                              <div className={"flex-target"}>
                                <img loading={"lazy"} src={"/images/brand/accra-stem-class-zeal-33920052.jpg"} alt={"Students developing practical technology skills in Accra"} className={"target-img _4"} />
                                <h3>
                                  {"Governance & training"}
                                </h3>
                              </div>
                              <p>
                                {"Virtual CISO support, compliance guidance and security training programmes help teams stay ready without building a full security department overnight."}
                              </p>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"section is-coverages-section"}>
                  <div className={"w-layout-blockcontainer container w-container"}>
                    <div className={"coverages-flex"}>
                      <h2>
                        {"What we deliver"}
                      </h2>
                    </div>
                    <div className={"coverages-grid"}>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"Penetration testing"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"On-demand and continuous testing options (including PTaaS) that show real exploitable paths, not only scanner noise."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"Managed SOC"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"24/7 monitoring, vulnerability management and monthly reporting for teams that need continuous detection."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"Red teaming"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"Adversary-style exercises and breach-and-attack simulation to test people, process and controls together."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"Incident response"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"Structured response support when an incident lands, with clear next steps for containment and recovery."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"Phishing simulation"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"Practical phishing exercises that show how staff respond under pressure, then turn the gaps into training."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"CISO as a service"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"Fractional security leadership for organisations that need direction, priorities and board-ready reporting."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"Data & privacy"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"Guidance aligned to the Ghana Data Protection Act (Act 843), GDPR expectations where relevant, and the Cyber Security Act, 2020 (Act 1038)."}
                        </p>
                      </div>
                      <div className={"coverage"}>
                        <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                          {"OT and compliance"}
                        </div>
                        <p className={"is-font-size-body-m"}>
                          {"Support for OT and ICS assessments, insider threat work and compliance programmes when your environment needs more than a standard web stack review."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab={"Management Liability"} className={"light-tabs-pane w-tab-pane"}>
              <div>
                <div className={"full-wrapper"}>
                  <div className={"info-feature-flex tab-flex"}>
                    <div className={"rounded-feature-picture"}>
                      <img src={"/images/brand/developer-woman-christina-morillo-1181359.jpg"} alt={"Software developer writing and reviewing application code"} loading={"lazy"} className={"rounded-feature-img"} />
                    </div>
                    <div className={"info-feature-desc container"}>
                      <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                        {"Software development"}
                      </h3>
                      <p className={"is-font-size-body-m"}>
                        {"We design and build software that fits how your organisation already works."}
                        <br />
                        <br />
                        {"That includes custom desktop, mobile and enterprise applications, corporate websites and portals, and integration with the databases and third-party tools you rely on."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"grey-full-wrapper"}>
                  <div className={"info-feature-flex tab-flex _2"}>
                    <div className={"info-feature-desc container"}>
                      <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                        {"Capabilities"}
                      </h3>
                      <div className={"flex-features"}>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Custom desktop, mobile and enterprise applications"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Cross-platform delivery for Windows, macOS, Linux, iOS and Android"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Corporate websites, e-commerce platforms and customer portals"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Systems integration with existing databases and third-party applications"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Support and maintenance packages after launch, with clear delivery timelines by project type"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"rounded-feature-picture full-image"}>
                      <img src={"/images/brand/software-collaboration-mizuno-k-12899191.jpg"} alt={"Developers reviewing code together"} loading={"lazy"} className={"rounded-feature-img"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"section is-target-section"}>
                <img sizes={"100vw"} srcSet={"https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-500.png 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-800.png 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-1080.png 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-1600.png 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-2000.png 2000w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-2600.png 2600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%20238186.png 2880w"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%20238186.png"} loading={"lazy"} className={"kv_target"} />
                <div className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
                  <h2 className={"is-space-64 is-tablet-space-32"}>
                    {"Engagement types"}
                  </h2>
                  <div className={"flex-vert"}>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab _1d w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Custom applications"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron _1c"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab _1a"} />
                          </div>
                        </div>
                        <nav id={"w-dropdown-list-1"} className={"drop-sub _1 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/coding-laptop-cottonbro-5483075.jpg"} alt={"Application code being developed on a laptop"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Custom applications"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Purpose-built apps for internal operations or customer-facing work, sized to your timeline and budget."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Websites & portals"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _2 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/remote-coding-thisisengineering-3861964.jpg"} alt={"Developer collaborating remotely while writing application code"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Websites & portals"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Corporate sites, content systems, payment flows and hosting arrangements that are ready for day-to-day use."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Integration & support"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _3 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/software-developer-naboth-otieno-19805876.jpg"} alt={"Software development workstation"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Integration & support"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Connect new software to what you already run, then keep it maintained as your processes change."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"section is-coverages-section"}>
                <div className={"w-layout-blockcontainer container w-container"}>
                  <div className={"coverages-flex"}>
                    <h2>
                      {"Delivery focus"}
                    </h2>
                  </div>
                  <div className={"coverages-grid"}>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage extended-coverage"}>
                        <strong>
                          {"Cross-platform apps"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Native and cross-platform builds that meet users where they work, on desktop or mobile."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage extended-coverage"}>
                        <strong>
                          {"Web solutions"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"From brochure sites to e-commerce and custom web applications, with CMS and portal options when content teams need control."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage extended-coverage"}>
                        <strong>
                          {"Systems integration"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"APIs, databases and third-party tools wired together so information does not live in isolated silos."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage extended-coverage"}>
                        <strong>
                          {"Support packages"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Post-launch care, hosting support and iterative improvements once the first version is live."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab={"Cyber"} className={"light-tabs-pane w-tab-pane"}>
              <div>
                <div className={"full-wrapper"}>
                  <div className={"info-feature-flex tab-flex"}>
                    <div className={"rounded-feature-picture"}>
                      <img src={"/images/brand/accra-electronics-workshop-zeal-33920035.jpg"} alt={"Students building connected electronics during an Accra technology workshop"} loading={"lazy"} className={"rounded-feature-img"} />
                    </div>
                    <div className={"info-feature-desc container"}>
                      <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                        <strong>
                          {"IoT & smart cards"}
                          <br />
                        </strong>
                      </h3>
                      <p className={"is-font-size-body-m"}>
                        {"We build connected systems and secure credential programmes for organisations that need physical and digital identity to work together."}
                        <br />
                        <br />
                        {"That covers custom IoT deployments and smart card solutions for access control, ID, payment and authentication, supported by our CardLogix partnership."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"grey-full-wrapper"}>
                  <div className={"info-feature-flex tab-flex _2"}>
                    <div className={"info-feature-desc container"}>
                      <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                        {"Capabilities"}
                      </h3>
                      <div className={"flex-features"}>
                        <div className={"flex-feature nested-f"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Custom IoT systems, sensor networks and industrial or building automation"}
                          </p>
                        </div>
                        <ul role={"list"} className={"nested-feature-list-item"}>
                          <li className={"nested-feature-list-item"}>
                            {"Environmental monitoring and smart building controls"}
                          </li>
                          <li className={"nested-feature-list-item"}>
                            {"Access control and secure authentication cards"}
                          </li>
                          <li className={"nested-feature-list-item"}>
                            {"Employee, student and loyalty ID programmes"}
                          </li>
                          <li className={"nested-feature-list-item"}>
                            {"Payment-capable smart card deployments"}
                          </li>
                          <li className={"nested-feature-list-item"}>
                            {"Biometric enrolment options where required"}
                          </li>
                        </ul>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"End-to-end design from hardware choice through enrolment workflows"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Integration with existing security and identity systems"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Pilot-to-production support for multi-site rollouts"}
                          </p>
                        </div>
                        <div className={"flex-feature"}>
                          <img width={"16"} height={"16"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg"} loading={"lazy"} className={"arrow-pointer"} />
                          <p>
                            {"Training for operators and administrators after go-live"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={"rounded-feature-picture full-image"}>
                      <img src={"/images/brand/industrial-automation-freek-wolsink-34222005.jpg"} alt={"Automated industrial operations on a production line"} loading={"lazy"} className={"rounded-feature-img"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"section is-target-section"}>
                <img sizes={"100vw"} srcSet={"https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-500.png 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-800.png 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-1080.png 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-1600.png 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-2000.png 2000w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%2520238186-p-2600.png 2600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%20238186.png 2880w"} alt={""} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70defe_Group%20238186.png"} loading={"lazy"} className={"kv_target"} />
                <div className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
                  <h2 className={"is-space-64 is-tablet-space-32"}>
                    {"Use cases"}
                  </h2>
                  <div className={"flex-vert"}>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab _1d w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Sensor networks"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron _1c"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab _1a"} />
                          </div>
                        </div>
                        <nav id={"w-dropdown-list-1"} className={"drop-sub _1 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/accra-stem-class-zeal-33920052.jpg"} alt={"Connected electronics being assembled during an Accra technology class"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Sensor networks"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Collect and act on field or facility data with systems designed for your environment, not a one-size kit."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Smart buildings"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _2 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/accra-business-district-kwaku-37304183.jpg"} alt={"Modern commercial building infrastructure in Accra"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Smart buildings"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Automation and monitoring that help facilities teams see status, reduce waste and respond faster."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Access control"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _3 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/secure-access-man-susanne-plank-13657444.jpg"} alt={"Secure access card being presented to an authentication reader"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Access control"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Badge and credential programmes that control who enters which spaces, with audit-friendly records."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Identity cards"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _4 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/secure-access-woman-susanne-plank-13657415.jpg"} alt={"Employee identity card being presented to an access reader"} className={"target-img _4"} />
                              <h3>
                                <strong>
                                  {"Identity cards"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Employee and student ID cards that also support loyalty or authentication where needed."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Secure authentication"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _5 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/secure-access-woman-susanne-plank-13657415.jpg"} alt={"Identity card used for secure workplace authentication"} className={"target-img _4"} />
                              <h3>
                                <strong>
                                  {"Secure authentication"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Smart cards and biometric enrolment that strengthen login and physical verification together."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Industrial IoT"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _5 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/industrial-automation-freek-wolsink-34222005.jpg"} alt={"Industrial technology and equipment in operation"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Industrial IoT"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Sensor and control deployments for plants, yards and multi-site operations that need reliable field data."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                    <div>
                      <div data-delay={"0"} data-hover={"false"} className={"target-class-menu-item w-dropdown"}>
                        <div className={"specialties-tab-link-copy dropdown-tab w-dropdown-toggle"}>
                          <div className={"is-font-size-title-m"}>
                            <strong>
                              {"Rollout support"}
                            </strong>
                          </div>
                          <div className={"tab-menu-chevron"}>
                            <img loading={"lazy"} src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de70_ctrl-down%201.svg"} alt={""} className={"chevron-on-tab left-tab"} />
                          </div>
                        </div>
                        <nav className={"drop-sub _5 w-dropdown-list"}>
                          <div className={"drop-wrap"}>
                            <div className={"flex-target"}>
                              <img loading={"lazy"} src={"/images/brand/training-accra-zeal-creative-33920044.jpg"} alt={"Technology professionals receiving practical support in Accra"} className={"target-img"} />
                              <h3>
                                <strong>
                                  {"Rollout support"}
                                </strong>
                              </h3>
                            </div>
                            <p>
                              {"Pilot projects, training and phased rollouts so teams can adopt new systems without a big-bang cutover."}
                            </p>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"section is-coverages-section"}>
                <div className={"w-layout-blockcontainer container w-container"}>
                  <div className={"coverages-flex"}>
                    <h2>
                      {"Capabilities"}
                    </h2>
                    <div className={"is-font-size-body-m"}>
                      {"Including, but not limited to:"}
                    </div>
                  </div>
                  <div className={"coverages-grid"}>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                        <strong>
                          {"Custom IoT systems"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Design and deployment of connected systems matched to your sites, sensors and operational goals."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                        <strong>
                          {"Smart cards"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Access, ID, payment and authentication cards backed by CardLogix partnership options."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                        <strong>
                          {"Biometric enrolment"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Enrolment workflows when fingerprint or other biometrics strengthen identity checks."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                        <strong>
                          {"Building automation"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Monitoring and control for facilities teams who need clearer visibility across spaces and equipment."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                        <strong>
                          {"Integration"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Connect IoT and card systems to the security and identity tools you already run."}
                      </p>
                    </div>
                    <div className={"coverage"}>
                      <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                        <strong>
                          {"Operator training"}
                        </strong>
                      </div>
                      <p className={"is-font-size-body-m"}>
                        {"Hands-on training for administrators and operators after systems go live."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductsAdditions() {
  return (
    <div className={"page-wrapper is-overflow-hidden"}>
      <section id={"software-products"} className={"section is-coverages-section"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"coverages-flex"}>
            <h2>
              {"Software products"}
            </h2>
            <div className={"is-font-size-body-m"}>
              {"Flagship platforms we build and support. Request a demo or quote."}
            </div>
          </div>
          <div className={"coverages-grid"}>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"Maddy Memo"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Intranet-first memos, internal mail and announcements on your own server, with offline resilience and audit-ready records."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"Maddy Security Ops"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Investigation and OSINT workflows for law enforcement and corporate security, including case intake, link analysis and command oversight."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"MaddyOps suite"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Industrial operations modules for command view, fleet telemetry, energy, shifts, safety, stock, sales, messaging and secure ID."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"MaddyCMS"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Centralised SMS, email and WhatsApp messaging with delivery analytics, templates, approvals and ERP-friendly APIs."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"Maddy AkontaX"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Multi-tenant financial resource planning for startups: transactions, approvals, assets, payroll and role-based access."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"BeaconOS"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"HR platform for African workforces, with Ghana as the first market focus."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"section is-coverages-section"}>
        <div className={"w-layout-blockcontainer container w-container"}>
          <div className={"coverages-flex"}>
            <h2>
              {"More services"}
            </h2>
            <div className={"is-font-size-body-m"}>
              {"Additional lines that sit alongside cybersecurity, software and IoT."}
            </div>
          </div>
          <div className={"coverages-grid"}>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"UAV operations"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Aerial surveillance, mapping, infrastructure inspection, agricultural monitoring, construction documentation and thermal imaging using platforms such as NEXTECH, DELTAQUAD and JOUAV."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"ICT procurement"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Equipment sourcing and software licensing so teams can buy the tools they need without running a separate procurement project."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"Training"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Cybersecurity training programmes for staff and partners, including focused courses such as third-party risk management."}
              </p>
            </div>
            <div className={"coverage"}>
              <div className={"is-font-size-title-l is-color-purple-500 f-coverage"}>
                <strong>
                  {"Website timelines"}
                </strong>
              </div>
              <p className={"is-font-size-body-m"}>
                {"Indicative delivery: simple sites in 2 to 4 weeks, e-commerce in 6 to 8 weeks, and complex applications in 8 to 16 weeks. Exact scopes are quoted per project."}
              </p>
            </div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <a href={"/get-in-touch"} className={"button w-inline-block"}>
              <p>
                {"Request a quote"}
              </p>
              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow"} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductsFooterArea() {
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
                {"talk scope"}
              </h3>
              <p className={"cta-sub"}>
                {"Tell us what you need to secure or build. We will come back with a clear quote."}
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
      <Footer />
    </div>
  )
}

function PageRuntime() {
  return (
    <>
      <script src={"/vendor/jquery.js"} type={"text/javascript"} integrity={"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="} crossOrigin={"anonymous"}></script>
      <script src={"/vendor/webflow.js"} type={"text/javascript"}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[4] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.productsAppetite[5] }} />
    </>
  )
}

export function ProductsAppetiteDocument() {
  return (
    <SiteDocument currentPath={"/products-appetite"} pageId={"6627b50ad2ace3686c70ddc6"} head={<PageHead />} runtime={<PageRuntime />}>
      <ProductsHero />
      <ProductsDirectory />
      <ProductsAdditions />
      <ProductsFooterArea />
    </SiteDocument>
  )
}
