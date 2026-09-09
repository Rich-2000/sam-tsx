import { Footer } from '../components/layout/Footer.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import { SiteIcons } from '../components/layout/SiteIcons.js'
import { sitePageCode } from '../content/sitePageCode.js'
import type { PartnerPageConfig } from '../content/partnerPages.js'

const arrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de77_Group%20(3).svg'
const featureArrow =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de97_arrow-top-right%201%20(1).svg'
const contactIcon =
  'https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de6a_Group%20(2).svg'

function PageHead({ config }: { config: PartnerPageConfig }) {
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

function Hero({ config }: { config: PartnerPageConfig }) {
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
            <a href={"#partner-quote"} className={"button w-inline-block"}>
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

function Categories({ config }: { config: PartnerPageConfig }) {
  return (
    <div className={"page-wrapper is-overflow-hidden"}>
      <section className={"section is-markets-features"}>
        <div className={"w-layout-blockcontainer container market-container w-container"}>
          <div className={"partner-cats-head"}>
            <h2>{config.categoriesTitle}</h2>
            <p className={"is-font-size-body-l is-color-grey-600"}>{config.categoriesIntro}</p>
          </div>
          <div className={"partner-cats-grid"}>
            {config.categories.map((category) => (
              <div className={"partner-cat-card"} key={category.title}>
                <h3 className={"is-font-size-title-m"}>{category.title}</h3>
                <p className={"is-font-size-body-m is-color-grey-600 partner-cat-card__body"}>
                  {category.body}
                </p>
                <div className={"flex-features"}>
                  {category.items.map((item) => (
                    <div className={"flex-feature"} key={item}>
                      <img src={featureArrow} loading={"lazy"} width={"16"} height={"16"} alt={""} className={"arrow-pointer"} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function QuoteSection({ config }: { config: PartnerPageConfig }) {
  return (
    <div className={"page-wrapper dark-wrapper touch-hero"}>
      <section id={"partner-quote"} className={"section is-get-in-touch-section partner-quote-section"}>
        <div className={"partner-quote-media"} aria-hidden={"true"}>
          <img className={"partner-quote-media__img"} src={config.heroImageSrc} alt={""} loading={"lazy"} />
          <div className={"partner-quote-media__overlay"} />
        </div>
        <div className={"w-layout-blockcontainer container hero-description-container w-container"}>
          <div className={"git-hero"}>
            <div className={"git-left"}>
              <h2 className={"is-h2"}>{config.quoteHeading}</h2>
              <p className={"is-md-font-size-body-l is-bottom-48 is-sm-bottom-32"}>
                {config.quoteBody}
              </p>
              <p className={"is-bottom-48 is-sm-bottom-32"}>
                {"We supply and support "}
                {config.navLabel}
                {" for businesses and public organisations across Ghana from our office in Adjiriganor, Accra."}
              </p>
              <div className={"text-with-icon is-bottom-24"}>
                <img src={contactIcon} loading={"lazy"} alt={""} />
                <div className={"mail-wrapper"}>
                  <p className={"is-font-size-body-m"}>
                    <span className={"is-opacity-60"}>{"Phone "}</span>
                    {"- "}
                    <a href={"tel:0551111551"} className={"link-on-dark"}>{"0551111551"}</a>
                  </p>
                </div>
              </div>
              <div className={"text-with-icon"}>
                <img src={contactIcon} loading={"lazy"} alt={""} />
                <div className={"mail-wrapper"}>
                  <p className={"is-font-size-body-m"}>
                    <span className={"is-opacity-60"}>{"Email "}</span>
                    {"- "}
                    <a href={"mailto:info@maddygroupltd.com"} className={"link-on-dark"}>{"info@maddygroupltd.com"}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className={"git-right"}>
              <div className={"form-block w-form"}>
                <form id={"partner-quote-form"} name={"partner-quote-form"} data-name={"Partner Quote Form"} method={"post"} action={"mailto:info@maddygroupltd.com"} encType={"text/plain"} className={"form"}>
                  <input type={"hidden"} name={"partner"} value={config.navLabel} />
                  <input className={"text-field w-input"} maxLength={256} name={"name"} data-name={"Name"} placeholder={"Full name"} type={"text"} id={"partner-name"} required />
                  <input className={"text-field w-input"} maxLength={256} name={"email"} data-name={"E-mail"} placeholder={"E-mail address"} type={"email"} id={"partner-email"} required />
                  <input className={"text-field w-input"} maxLength={256} name={"company"} data-name={"Company name"} placeholder={"Company name"} type={"text"} id={"partner-company"} required />
                  <select id={"partner-interest"} name={"interest"} data-name={"Interest"} required className={"text-field select-field w-select"}>
                    <option value={""}>{"What are you interested in?"}</option>
                    {config.quoteInterests.map((interest) => (
                      <option value={interest} key={interest}>{interest}</option>
                    ))}
                  </select>
                  <textarea required placeholder={"Tell us what you need"} maxLength={5000} id={"partner-message"} name={"message"} data-name={"Text Message"} className={"text-field message-area w-input"}></textarea>
                  <input type={"submit"} data-wait={"Please wait..."} className={"button submit-button w-button"} value={"Request a quote"} />
                </form>
                <div className={"success-message w-form-done"}>
                  <div>{"Thank you. We have received your request and will be in touch shortly."}</div>
                </div>
                <div className={"error-message w-form-fail"}>
                  <div>{"Something went wrong while sending the form. Please try again or email info@maddygroupltd.com."}</div>
                </div>
              </div>
              <div className={"git-right-bg"}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PageRuntime({ config }: { config: PartnerPageConfig }) {
  const submitScript = `
(function () {
  var form = document.getElementById('partner-quote-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    var lines = [];
    data.forEach(function (value, key) {
      if (String(value).trim()) lines.push(key + ': ' + value);
    });
    var body = lines.join('\\n');
    var interest = data.get('interest');
    var subject = encodeURIComponent(${JSON.stringify(config.navLabel)} + ' quote' + (interest ? ' - ' + interest : ''));
    window.location.href = 'mailto:info@maddygroupltd.com?subject=' + subject + '&body=' + encodeURIComponent(body);
    var done = form.parentElement && form.parentElement.querySelector('.w-form-done');
    var fail = form.parentElement && form.parentElement.querySelector('.w-form-fail');
    if (done) {
      form.style.display = 'none';
      done.style.display = 'block';
    }
    if (fail) fail.style.display = 'none';
  });
})();
`
  return (
    <>
      <script src={"/vendor/jquery.js"} type={"text/javascript"} integrity={"sha256-82hEkGrSMJh3quMSG4f7FbngmAPLTDM63H4eNayS4Us="} crossOrigin={"anonymous"}></script>
      <script src={"/vendor/webflow.js"} type={"text/javascript"}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.retailBrokers[4] }} />
      <script dangerouslySetInnerHTML={{ __html: submitScript }} />
    </>
  )
}

export function PartnerServiceDocument({ config }: { config: PartnerPageConfig }) {
  return (
    <SiteDocument
      currentPath={config.path}
      pageId={config.pageId}
      head={<PageHead config={config} />}
      runtime={<PageRuntime config={config} />}
    >
      <Hero config={config} />
      <Categories config={config} />
      <QuoteSection config={config} />
      <div className={"page-wrapper is-overflow-hidden is-no-padding"}>
        <Footer />
      </div>
    </SiteDocument>
  )
}
