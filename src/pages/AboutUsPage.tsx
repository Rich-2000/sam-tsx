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
        {"About Us | Maddy Group Ltd"}
      </title>
      <meta content={"Maddy Group Ltd is a technology and cybersecurity company in Accra, Ghana. Meet the team behind secure systems and reliable software."} name={"description"} />
      <meta content={"About Us | Maddy Group Ltd"} property={"og:title"} />
      <meta content={"Maddy Group Ltd is a technology and cybersecurity company in Accra, Ghana. Meet the team behind secure systems and reliable software."} property={"og:description"} />
      <meta content={"About Us | Maddy Group Ltd"} name={"twitter:title"} />
      <meta content={"Maddy Group Ltd is a technology and cybersecurity company in Accra, Ghana. Meet the team behind secure systems and reliable software."} name={"twitter:description"} />
      <meta property={"og:type"} content={"website"} />
      <meta content={"summary_large_image"} name={"twitter:card"} />
      <meta content={"width=device-width, initial-scale=1"} name={"viewport"} />
      <link href={"/styles/webflow.css"} rel={"stylesheet"} type={"text/css"} />
      <link href={"/styles/maddy-theme.css"} rel={"stylesheet"} type={"text/css"} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[0] }} />
      <script type={"text/javascript"} dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[1] }} />
      <SiteIcons />
    </>
  )
}

function AboutHero() {
  return (
    <div className={"page-wrapper dark-wrapper is-overflow-hidden"}>
      <section className={"section is-why-about-hero"}>
        <div className={"hero-media"} aria-hidden={"true"}>
          <img
            className={"hero-media__image"}
            src={"/images/brand/accra-skyline-prince-enos-31781975.jpg"}
            alt={""}
            loading={"eager"}
          />
          <div className={"hero-hue-overlay"} />
        </div>
        <div className={"w-layout-blockcontainer container hero-description-container w-container"}>
          <h1 data-w-id={"5688d7d9-6d15-3f37-8131-e8be09b8e9fa"}>
            <span className={"is-color-lime-300"}>
              {"People "}
            </span>
            {"Who\u00a0Care "}
            <br />
            <span className={"is-color-lime-300"}>
              {"Technology "}
            </span>
            {"That Delivers"}
          </h1>
          <div className={"hero-flex long-flex"}>
            <p data-w-id={"cf1d3dc4-a54e-773c-276f-52cfbc4a1929"} className={"hero-description extended-h-description"}>
              {"Maddy Group Ltd is a technology and cybersecurity company based in Accra. We protect digital infrastructure and support growth through reliable technology, delivered with integrity and professional care."}
            </p>
            <a data-w-id={"6edbdcda-b7a6-c67d-3d34-d671091daf17"} href={"/get-in-touch"} className={"button w-inline-block"}>
              <p>
                <strong>
                  {"Request a quote"}
                </strong>
              </p>
              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow"} />
            </a>
          </div>
        </div>
      </section>
      <section className={"section is-about-more-section"}>
        <div data-w-id={"c0474c52-aa42-adbc-dc62-982b53513ae8"} className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <h1>
            {"Technology with "}
            <br />
            {"professional care"}
          </h1>
          <div className={"about-flex"}>
            <div className={"about-right"}>
              <p className={"is-font-size-body-l"}>
                {"We provide cybersecurity, software development and managed technology services to businesses and public organisations across Ghana. Our work is led by CEO Mr. Kenneth Ansah, with a team that covers assessment, response, cloud, DevOps, product and engineering."}
              </p>
              <div className={"flex-about-description"}>
                <div className={"is-width-50 is-xs-width-100"}>
                  <p className={"is-font-size-body-l"}>
                    {"Our values are integrity, excellence, innovation and client focus. With 10+ years of experience, we have worked with 20+ public and private organisations across banking, energy, maritime, aviation, law enforcement, health and government."}
                  </p>
                </div>
                <div className={"is-width-50 is-xs-width-100"}>
                  <p className={"is-font-size-body-l"}>
                    {"Based in Adjiriganor, Accra. Reach us at info@maddygroupltd.com or 0551111551. Postal: P.O. Box 10606, Accra North."}
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

function AboutDetails() {
  return (
    <div id={"find-flow"} className={"page-wrapper is-overflow-hidden"}>
      <section className={"section is-markets-features"}>
        <div className={"w-layout-blockcontainer container market-container w-container"}>
          <div className={"info-feature-flex last-flex"}>
            <div className={"rounded-feature-picture about-logo"}>
              <img src={"/images/brand/accra-stem-team-zeal-33920053.jpg"} loading={"lazy"} alt={"Young technology students collaborating on an electronics project in Accra"} className={"rounded-feature-img"} />
            </div>
            <div className={"info-feature-desc"}>
              <h3 className={"is-space-24 is-md-space-16 is-h2-mobile"}>
                {"Mission"}
              </h3>
              <p className={"is-font-size-body-m is-md-font-size-body-l"}>
                {"Maddy Group Ltd works to protect the digital infrastructure of its clients and to support their growth through reliable technology, delivered with integrity and professional care."}
                <br />
                <br />
                {"From security assessments to software builds, we stay close to the problem and ship work you can run day to day."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id={"team"} className={"section is-markets-features leadership-team-features"}>
        <div className={"w-layout-blockcontainer container about-container w-container"}>
          <div className={"max-width _745px is-centered is-text-center"}>
            <h2 className={"is-space-24"}>
              {"Our team"}
            </h2>
            <p className={"is-md-font-size-body-l"}>
              {"Specialists across cybersecurity, cloud, DevOps, product and software engineering."}
            </p>
          </div>
          <div>
            <div className={"team-grid-wrapper w-dyn-list"}>
              <div role={"list"} className={"team-grid w-dyn-items"}>
                <div role={"listitem"} className={"team-member w-dyn-item"}>
                  <div className={"person-image-wrapper"}>
                    <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/team-1.jpg"} loading={"lazy"} alt={"Dunstan Guba"} className={"person-image"} />
                  </div>
                  <div className={"person-description"}>
                    <p className={"is-font-size-title-m is-space-8"}>
                      {"Dunstan Guba"}
                    </p>
                    <p className={"is-font-size-body-m height-48 is-color-grey-600"}>
                      {"VAPT and digital forensics"}
                    </p>
                    <a href={"mailto:dunstan@maddygroupltd.com"} className={"w-inline-block"}>
                      <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg"} loading={"lazy"} alt={"Email Dunstan Guba"} className={"linkedin-img"} />
                    </a>
                    <div className={"button-bio"}>
                      <div className={"person-modal-bio"}>
                        <div data-w-id={"819a7619-058e-fe5e-e508-32c2a8c2073f"} className={"close-modal-screen"}></div>
                        <div className={"modal-content"}>
                          <div className={"modal-flex"}>
                            <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/team-1.jpg"} loading={"lazy"} alt={"Dunstan Guba"} className={"modal-img"} />
                            <div className={"modal-desc"}>
                              <h3 className={"is-space-16"}>
                                {"Dunstan Guba"}
                              </h3>
                              <p className={"is-color-grey-600 w-dyn-bind-empty"}></p>
                              <p className={"is-color-grey-600"}>
                                {"VAPT and digital forensics"}
                              </p>
                              <a href={"mailto:dunstan@maddygroupltd.com"} className={"w-inline-block"}>
                                <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debf_linkedin.svg"} loading={"lazy"} alt={"Email Dunstan Guba"} className={"modal-social"} />
                              </a>
                            </div>
                            <a data-w-id={"13c97fee-792b-f948-687f-e27b50c682e5"} href={"#"} className={"close-block w-inline-block"}>
                              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70dec0_close.svg"} loading={"eager"} alt={""} />
                            </a>
                          </div>
                          <div className={"modal-bio is-font-size-body-m"}>
                            <p className={"bio-text"}>
                              {"Dunstan leads vulnerability assessment, penetration testing and digital forensics work. Certifications include CEH, OSCP and CHFI."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a data-w-id={"4335ad49-91df-10c7-ba15-f818e8a4b63c"} href={"#"} className={"button is-purple-button w-inline-block"}>
                        <p className={"is-font-size-title-s"}>
                          {"Read Bio"}
                        </p>
                        <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
                      </a>
                    </div>
                  </div>
                </div>
                <div role={"listitem"} className={"team-member w-dyn-item"}>
                  <div className={"person-image-wrapper"}>
                    <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/fred.webp"} loading={"lazy"} alt={"Agyare Fredrick"} className={"person-image"} />
                  </div>
                  <div className={"person-description"}>
                    <p className={"is-font-size-title-m is-space-8"}>
                      {"Agyare Fredrick"}
                    </p>
                    <p className={"is-font-size-body-m height-48 is-color-grey-600"}>
                      {"Cloud engineering"}
                    </p>
                    <a href={"mailto:fredrick@maddygroupltd.com"} className={"w-inline-block"}>
                      <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg"} loading={"lazy"} alt={"Email Agyare Fredrick"} className={"linkedin-img"} />
                    </a>
                    <div className={"button-bio"}>
                      <div className={"person-modal-bio"}>
                        <div data-w-id={"819a7619-058e-fe5e-e508-32c2a8c2073f"} className={"close-modal-screen"}></div>
                        <div className={"modal-content"}>
                          <div className={"modal-flex"}>
                            <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/fred.webp"} loading={"lazy"} alt={"Agyare Fredrick"} className={"modal-img"} />
                            <div className={"modal-desc"}>
                              <h3 className={"is-space-16"}>
                                {"Agyare Fredrick"}
                              </h3>
                              <p className={"is-color-grey-600 w-dyn-bind-empty"}></p>
                              <p className={"is-color-grey-600"}>
                                {"Cloud engineering"}
                              </p>
                              <a href={"mailto:fredrick@maddygroupltd.com"} className={"w-inline-block"}>
                                <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debf_linkedin.svg"} loading={"lazy"} alt={"Email Agyare Fredrick"} className={"modal-social"} />
                              </a>
                            </div>
                            <a data-w-id={"13c97fee-792b-f948-687f-e27b50c682e5"} href={"#"} className={"close-block w-inline-block"}>
                              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70dec0_close.svg"} loading={"eager"} alt={""} />
                            </a>
                          </div>
                          <div className={"modal-bio is-font-size-body-m"}>
                            <p className={"bio-text"}>
                              {"Fredrick focuses on cloud engineering across major platforms. Certifications include AWS SAA and Azure Expert pathways."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a data-w-id={"4335ad49-91df-10c7-ba15-f818e8a4b63c"} href={"#"} className={"button is-purple-button w-inline-block"}>
                        <p className={"is-font-size-title-s"}>
                          {"Read Bio"}
                        </p>
                        <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
                      </a>
                    </div>
                  </div>
                </div>
                <div role={"listitem"} className={"team-member w-dyn-item"}>
                  <div className={"person-image-wrapper"}>
                    <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/rams1.jpg"} loading={"lazy"} alt={"Godwin Mensah"} className={"person-image"} />
                  </div>
                  <div className={"person-description"}>
                    <p className={"is-font-size-title-m is-space-8"}>
                      {"Godwin Mensah"}
                    </p>
                    <p className={"is-font-size-body-m height-48 is-color-grey-600"}>
                      {"DevOps"}
                    </p>
                    <a href={"mailto:godwin@maddygroupltd.com"} className={"w-inline-block"}>
                      <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg"} loading={"lazy"} alt={"Email Godwin Mensah"} className={"linkedin-img"} />
                    </a>
                    <div className={"button-bio"}>
                      <div className={"person-modal-bio"}>
                        <div data-w-id={"819a7619-058e-fe5e-e508-32c2a8c2073f"} className={"close-modal-screen"}></div>
                        <div className={"modal-content"}>
                          <div className={"modal-flex"}>
                            <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/rams1.jpg"} loading={"lazy"} alt={"Godwin Mensah"} className={"modal-img"} />
                            <div className={"modal-desc"}>
                              <h3 className={"is-space-16"}>
                                {"Godwin Mensah"}
                              </h3>
                              <p className={"is-color-grey-600 w-dyn-bind-empty"}></p>
                              <p className={"is-color-grey-600"}>
                                {"DevOps"}
                              </p>
                              <a href={"mailto:godwin@maddygroupltd.com"} className={"w-inline-block"}>
                                <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debf_linkedin.svg"} loading={"lazy"} alt={"Email Godwin Mensah"} className={"modal-social"} />
                              </a>
                            </div>
                            <a data-w-id={"13c97fee-792b-f948-687f-e27b50c682e5"} href={"#"} className={"close-block w-inline-block"}>
                              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70dec0_close.svg"} loading={"eager"} alt={""} />
                            </a>
                          </div>
                          <div className={"modal-bio is-font-size-body-m"}>
                            <p className={"bio-text"}>
                              {"Godwin supports DevOps and secure delivery pipelines. Certifications include Security+ and CISSP."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a data-w-id={"4335ad49-91df-10c7-ba15-f818e8a4b63c"} href={"#"} className={"button is-purple-button w-inline-block"}>
                        <p className={"is-font-size-title-s"}>
                          {"Read Bio"}
                        </p>
                        <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
                      </a>
                    </div>
                  </div>
                </div>
                <div role={"listitem"} className={"team-member w-dyn-item"}>
                  <div className={"person-image-wrapper"}>
                    <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/eben2.png"} loading={"lazy"} alt={"Ebenezer Kwafo"} className={"person-image"} />
                  </div>
                  <div className={"person-description"}>
                    <p className={"is-font-size-title-m is-space-8"}>
                      {"Ebenezer Kwafo"}
                    </p>
                    <p className={"is-font-size-body-m height-48 is-color-grey-600"}>
                      {"Incident response"}
                    </p>
                    <a href={"mailto:ebenezer@maddygroupltd.com"} className={"w-inline-block"}>
                      <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg"} loading={"lazy"} alt={"Email Ebenezer Kwafo"} className={"linkedin-img"} />
                    </a>
                    <div className={"button-bio"}>
                      <div className={"person-modal-bio"}>
                        <div data-w-id={"819a7619-058e-fe5e-e508-32c2a8c2073f"} className={"close-modal-screen"}></div>
                        <div className={"modal-content"}>
                          <div className={"modal-flex"}>
                            <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/eben2.png"} loading={"lazy"} alt={"Ebenezer Kwafo"} className={"modal-img"} />
                            <div className={"modal-desc"}>
                              <h3 className={"is-space-16"}>
                                {"Ebenezer Kwafo"}
                              </h3>
                              <p className={"is-color-grey-600 w-dyn-bind-empty"}></p>
                              <p className={"is-color-grey-600"}>
                                {"Incident response"}
                              </p>
                              <a href={"mailto:ebenezer@maddygroupltd.com"} className={"w-inline-block"}>
                                <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debf_linkedin.svg"} loading={"lazy"} alt={"Email Ebenezer Kwafo"} className={"modal-social"} />
                              </a>
                            </div>
                            <a data-w-id={"13c97fee-792b-f948-687f-e27b50c682e5"} href={"#"} className={"close-block w-inline-block"}>
                              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70dec0_close.svg"} loading={"eager"} alt={""} />
                            </a>
                          </div>
                          <div className={"modal-bio is-font-size-body-m"}>
                            <p className={"bio-text"}>
                              {"Ebenezer leads incident response work. Certifications include GCIH, GCFE and CEH."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a data-w-id={"4335ad49-91df-10c7-ba15-f818e8a4b63c"} href={"#"} className={"button is-purple-button w-inline-block"}>
                        <p className={"is-font-size-title-s"}>
                          {"Read Bio"}
                        </p>
                        <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
                      </a>
                    </div>
                  </div>
                </div>
                <div role={"listitem"} className={"team-member w-dyn-item"}>
                  <div className={"person-image-wrapper"}>
                    <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/pearl2.png"} loading={"lazy"} alt={"Pearl Agyekum"} className={"person-image"} />
                  </div>
                  <div className={"person-description"}>
                    <p className={"is-font-size-title-m is-space-8"}>
                      {"Pearl Agyekum"}
                    </p>
                    <p className={"is-font-size-body-m height-48 is-color-grey-600"}>
                      {"Product management"}
                    </p>
                    <a href={"mailto:pearl@maddygroupltd.com"} className={"w-inline-block"}>
                      <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg"} loading={"lazy"} alt={"Email Pearl Agyekum"} className={"linkedin-img"} />
                    </a>
                    <div className={"button-bio"}>
                      <div className={"person-modal-bio"}>
                        <div data-w-id={"819a7619-058e-fe5e-e508-32c2a8c2073f"} className={"close-modal-screen"}></div>
                        <div className={"modal-content"}>
                          <div className={"modal-flex"}>
                            <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/pearl2.png"} loading={"lazy"} alt={"Pearl Agyekum"} className={"modal-img"} />
                            <div className={"modal-desc"}>
                              <h3 className={"is-space-16"}>
                                {"Pearl Agyekum"}
                              </h3>
                              <p className={"is-color-grey-600 w-dyn-bind-empty"}></p>
                              <p className={"is-color-grey-600"}>
                                {"Product management"}
                              </p>
                              <a href={"mailto:pearl@maddygroupltd.com"} className={"w-inline-block"}>
                                <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debf_linkedin.svg"} loading={"lazy"} alt={"Email Pearl Agyekum"} className={"modal-social"} />
                              </a>
                            </div>
                            <a data-w-id={"13c97fee-792b-f948-687f-e27b50c682e5"} href={"#"} className={"close-block w-inline-block"}>
                              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70dec0_close.svg"} loading={"eager"} alt={""} />
                            </a>
                          </div>
                          <div className={"modal-bio is-font-size-body-m"}>
                            <p className={"bio-text"}>
                              {"Pearl leads product management across delivery programmes. Certifications include PMP, CSPO and Agile practice."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a data-w-id={"4335ad49-91df-10c7-ba15-f818e8a4b63c"} href={"#"} className={"button is-purple-button w-inline-block"}>
                        <p className={"is-font-size-title-s"}>
                          {"Read Bio"}
                        </p>
                        <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
                      </a>
                    </div>
                  </div>
                </div>
                <div role={"listitem"} className={"team-member w-dyn-item"}>
                  <div className={"person-image-wrapper"}>
                    <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/team5.jpg"} loading={"lazy"} alt={"Richard Acheampong"} className={"person-image"} />
                  </div>
                  <div className={"person-description"}>
                    <p className={"is-font-size-title-m is-space-8"}>
                      {"Richard Acheampong"}
                    </p>
                    <p className={"is-font-size-body-m height-48 is-color-grey-600"}>
                      {"Software and AI engineering"}
                    </p>
                    <a href={"mailto:richard@maddygroupltd.com"} className={"w-inline-block"}>
                      <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debe_Vector%20(3).svg"} loading={"lazy"} alt={"Email Richard Acheampong"} className={"linkedin-img"} />
                    </a>
                    <div className={"button-bio"}>
                      <div className={"person-modal-bio"}>
                        <div data-w-id={"819a7619-058e-fe5e-e508-32c2a8c2073f"} className={"close-modal-screen"}></div>
                        <div className={"modal-content"}>
                          <div className={"modal-flex"}>
                            <img src={"https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/team5.jpg"} loading={"lazy"} alt={"Richard Acheampong"} className={"modal-img"} />
                            <div className={"modal-desc"}>
                              <h3 className={"is-space-16"}>
                                {"Richard Acheampong"}
                              </h3>
                              <p className={"is-color-grey-600 w-dyn-bind-empty"}></p>
                              <p className={"is-color-grey-600"}>
                                {"Software and AI engineering"}
                              </p>
                              <a href={"mailto:richard@maddygroupltd.com"} className={"w-inline-block"}>
                                <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70debf_linkedin.svg"} loading={"lazy"} alt={"Email Richard Acheampong"} className={"modal-social"} />
                              </a>
                            </div>
                            <a data-w-id={"13c97fee-792b-f948-687f-e27b50c682e5"} href={"#"} className={"close-block w-inline-block"}>
                              <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70dec0_close.svg"} loading={"eager"} alt={""} />
                            </a>
                          </div>
                          <div className={"modal-bio is-font-size-body-m"}>
                            <p className={"bio-text"}>
                              {"Richard builds software and AI engineering solutions for client and internal products. Background spans full stack and ML engineering."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <a data-w-id={"4335ad49-91df-10c7-ba15-f818e8a4b63c"} href={"#"} className={"button is-purple-button w-inline-block"}>
                        <p className={"is-font-size-title-s"}>
                          {"Read Bio"}
                        </p>
                        <img src={"https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"} loading={"lazy"} alt={""} className={"button-arrow inversed"} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={"/images/brand/accra-business-district-kwaku-37304183.jpg"} loading={"lazy"} alt={""} className={"image maddy-background-image"} />
      </section>
    </div>
  )
}

function AboutFooterArea() {
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
                {"work with us"}
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
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[4] }} />
    </>
  )
}

export function AboutUsDocument() {
  return (
    <SiteDocument currentPath={"/about-us"} pageId={"6627b50ad2ace3686c70ddc4"} head={<PageHead />} runtime={<PageRuntime />}>
      <AboutHero />
      <AboutDetails />
      <AboutFooterArea />
    </SiteDocument>
  )
}
