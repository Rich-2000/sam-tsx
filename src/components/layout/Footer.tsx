import { technologyNavItems } from '../../content/technologyNav.js'

type FooterProps = {
  brand?: 'flow' | 'maddy'
}

export function Footer({ brand = 'flow' }: FooterProps) {
    const isMaddy = brand === 'maddy'

    return (<div>
        <section className="section is-footer">
          <div className="w-layout-blockcontainer container w-container">
            <div className="footer-flex">
              <div className="footer-logo-wrapper">
                <img src={isMaddy ? "/images/maddy-group-horizontal-white.png" : "https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de4e_logo%20(1).png"} loading="lazy" width={isMaddy ? 200 : 111} height={isMaddy ? 48 : 37} alt={isMaddy ? "Maddy Group" : ""} className="footer-logo"/>
              </div>
              <div className="footer-menu">
                <a href="/products-appetite" className="footer-link">
                  {isMaddy ? "Services" : "Products & Appetite"}
                </a>
                {isMaddy ? (
                  technologyNavItems.slice(0, 4).map((item) => (
                    <a key={item.href} href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  ))
                ) : (
                  <>
                    <a href="/retail-brokers" className="footer-link">
                      {"Flow for Retail Agents"}
                    </a>
                    <a href="/carriers" className="footer-link">
                      {"Flow for Carriers"}
                    </a>
                  </>
                )}
              </div>
              <div className="footer-menu">
                {isMaddy
                  ? technologyNavItems.slice(4).map((item) => (
                      <a key={item.href} href={item.href} className="footer-link">
                        {item.label}
                      </a>
                    ))
                  : null}
                <a href="/about-us" className="footer-link">
                  {"About Us"}
                </a>
                <a href="/get-in-touch" className="footer-link">
                  {"Contact Us"}
                </a>
              </div>
              <div className="footer-social">
                <div className="is-font-size-title-l social-title">
                  {isMaddy ? "Contact" : "Let's connect"}
                </div>
                {isMaddy ? (
                  <div className="is-font-size-body-s" style={{ maxWidth: '16rem' }}>
                    <p style={{ margin: '0 0 0.4rem' }}>
                      <a href="tel:0551111551" className="footer-link">
                        {"0551111551"}
                      </a>
                    </p>
                    <p style={{ margin: '0 0 0.4rem' }}>
                      <a href="mailto:info@maddygroupltd.com" className="footer-link">
                        {"info@maddygroupltd.com"}
                      </a>
                    </p>
                    <p style={{ margin: 0 }} className="is-opacity-60">
                      {"GD-219-3654, Adjetey Mensah Owusu St, Adjiriganor, Accra"}
                      <br />
                      {"P.O. Box 10606, Accra North"}
                    </p>
                  </div>
                ) : (
                  <div className="social-footer-wrap">
                    <a data-w-id="7b6a67b9-6323-cb3c-abdf-ba2ae45ad720" href="#" className="social-button w-inline-block">
                      <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de4f_logo-linkedin%201.svg" loading="lazy" width="20" height="20" alt="" className="button-icon"/>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="section is-footer-low">
          <div className="w-layout-blockcontainer container w-container">
            <div className="footer-flex sub-footer">
              <p className="is-font-size-body-s copyrights">
                {isMaddy ? "Copyright © 2026 Maddy Group Ltd. All Rights Reserved." : "© Copyright 2024 – All rights reserved"}
              </p>
              <div className="legal-pages-menu">
                <a href="/terms-of-use" className="footer-link is-font-size-body-s">
                  {"Terms & Conditions"}
                </a>
                <a href="/privacy-policy" className="footer-link is-font-size-body-s">
                  {"Privacy Policy"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>);
}
