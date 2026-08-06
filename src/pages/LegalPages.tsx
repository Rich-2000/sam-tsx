import type { ReactNode } from 'react'
import { Footer } from '../components/layout/Footer.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import { SiteIcons } from '../components/layout/SiteIcons.js'
import { sitePageCode } from '../content/sitePageCode.js'

function LegalHead({ title, description }: { title: string; description: string }) {
  return (
    <>
      <meta charSet={"utf-8"} />
      <link href={"https://assets-global.website-files.com"} rel={"preconnect"} crossOrigin={"anonymous"} />
      <title>{title}</title>
      <meta content={description} name={"description"} />
      <meta content={title} property={"og:title"} />
      <meta content={description} property={"og:description"} />
      <meta content={title} name={"twitter:title"} />
      <meta content={description} name={"twitter:description"} />
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

function LegalShell({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className={"page-wrapper is-overflow-hidden"}>
      <section className={"section is-about-more-section"}>
        <div className={"w-layout-blockcontainer container is-z-index-2 w-container"}>
          <h1 className={"is-space-24"}>{title}</h1>
          <div className={"about-flex"}>
            <div className={"about-right"} style={{ maxWidth: "48rem" }}>
              {children}
              <p className={"is-font-size-body-m is-color-grey-600"} style={{ marginTop: "2rem" }}>
                {"This page is provided for general information and should be reviewed by counsel before use as a final legal policy."}
              </p>
            </div>
          </div>
        </div>
        <div className={"maddy-section-backdrop"} aria-hidden={"true"} />
      </section>
      <div className={"page-wrapper is-overflow-hidden is-no-padding"}>
        <Footer brand="maddy" />
      </div>
    </div>
  )
}

function PageRuntime() {
  return (
    <>
      <script src={"/vendor/jquery.js"} type={"text/javascript"} integrity={"sha256-82hEkGrSMJh3quMSG4f7FbngmAPLTDM63H4eNayS4Us="} crossOrigin={"anonymous"}></script>
      <script src={"/vendor/webflow.js"} type={"text/javascript"}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.aboutUs[4] }} />
    </>
  )
}

export function PrivacyPolicyDocument() {
  return (
    <SiteDocument
      currentPath={"/privacy-policy"}
      pageId={"maddy-privacy-policy"}
      head={
        <LegalHead
          title={"Privacy Policy | Maddy Group Ltd"}
          description={"How Maddy Group Ltd collects and uses personal information, with reference to the Data Protection Act, 2012 (Act 843)."}
        />
      }
      runtime={<PageRuntime />}
    >
      <LegalShell title={"Privacy policy"}>
        <p className={"is-font-size-body-l is-space-24"}>
          {"Maddy Group Ltd (\"we\", \"us\") is based in Accra, Ghana. This notice explains how we handle personal information when you contact us or use this website."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Who we are"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"Office: GD-219-3654, Adjetey Mensah Owusu St, Adjiriganor, Accra, Ghana. Postal: P.O. Box 10606, Accra North, Ghana. Email: info@maddygroupltd.com. Phone: 0551111551."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Information we collect"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"When you submit a quote or contact form, we collect the details you provide, such as your name, email address, company name, enquiry type and message. Server logs may also record technical data such as IP address and browser type for security and diagnostics."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"How we use information"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"We use contact details to respond to enquiries, prepare quotes and deliver services you request. We do not sell personal information. We process personal data in line with the Data Protection Act, 2012 (Act 843) and other applicable law."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Retention and security"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"We keep enquiry records for as long as needed to complete the conversation and meet legal or contractual duties, then delete or anonymise them where practical. We apply reasonable technical and organisational measures to protect information under our control."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Your rights"}</h2>
        <p className={"is-font-size-body-m"}>
          {"Subject to Act 843, you may ask to access, correct or delete personal information we hold about you, or raise a concern about how it is used. Contact info@maddygroupltd.com."}
        </p>
      </LegalShell>
    </SiteDocument>
  )
}

export function TermsOfUseDocument() {
  return (
    <SiteDocument
      currentPath={"/terms-of-use"}
      pageId={"maddy-terms-of-use"}
      head={
        <LegalHead
          title={"Terms of Use | Maddy Group Ltd"}
          description={"Terms of use for the Maddy Group Ltd website."}
        />
      }
      runtime={<PageRuntime />}
    >
      <LegalShell title={"Terms of use"}>
        <p className={"is-font-size-body-l is-space-24"}>
          {"By using this website you agree to these terms. If you do not agree, please do not use the site."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Website content"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"Content on this site is for general information about Maddy Group Ltd services and products. It is not a binding offer, legal advice or a security guarantee. Service scopes, timelines and fees are confirmed only in a written quotation or contract."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Quotes and services"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"Submitting a form or requesting a quote does not create a contract. Engagements begin when both parties agree in writing. Pricing is provided on request."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Acceptable use"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"You must not misuse this website, attempt unauthorised access, or use site content in a way that breaches law or third-party rights."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Liability"}</h2>
        <p className={"is-font-size-body-m is-space-24"}>
          {"To the extent permitted by Ghanaian law, we are not liable for loss arising from use of this website or reliance on general information published here. Nothing in these terms limits liability that cannot be limited by law."}
        </p>
        <h2 className={"is-space-16 is-font-size-title-l"}>{"Contact"}</h2>
        <p className={"is-font-size-body-m"}>
          {"Questions about these terms: info@maddygroupltd.com or 0551111551."}
        </p>
      </LegalShell>
    </SiteDocument>
  )
}
