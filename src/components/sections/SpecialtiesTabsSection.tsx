import { pageCode } from '../../content/pageCode.js'
export function SpecialtiesTabsSection() {
  return (
    <section className="section is-specialities-tab-section">
      <div
        data-current="Professional Liability"
        data-easing="ease"
        data-duration-in="0"
        data-duration-out="0"
        className="light-tabs w-tabs"
      >
        <div className="light-tabs-menu on-specialties w-tab-menu">
          <a
            data-w-tab="Professional Liability"
            className="light-tabs-menu-links w-inline-block w-tab-link w--current"
          >
            <div>{'Cybersecurity Services'}</div>
          </a>
          <a
            data-w-tab="Management Liability"
            className="light-tabs-menu-links w-inline-block w-tab-link"
          >
            <div>{'Software Development'}</div>
          </a>
          <a
            data-w-tab="Cyber Liability "
            className="light-tabs-menu-links w-inline-block w-tab-link"
          >
            <div>{'IoT & Smart Cards'}</div>
          </a>
        </div>
        <div className="specialties-tab-content on-home-content w-tab-content">
          <div
            data-w-tab="Professional Liability"
            className="specialties-tab w-tab-pane w--tab-active"
          >
            <div className="specialties-tab-content-wrapper">
              <div className="max-width _490px">
                <h3 className="is-space-40 update-8rem-sm reset-xsd">{'Cybersecurity Services'}</h3>
              </div>
              <div className="specialties-featues">
                <div className="specialties-features-box">
                  <div className="is-font-size-title-m">{'Capabilities'}</div>
                  <ul role="list" className="specialties-features-list">
                    <li className="specialties-feature-list-item">
                      <strong>
                        {
                          'Comprehensive cybersecurity solutions including penetration testing, SOC monitoring, '
                        }
                      </strong>
                      {'‍'}
                      <strong>{'incident response, and security assessments.'}</strong>
                    </li>
                    <li className="specialties-feature-list-item">
                      <strong>
                        {'Vulnerability assessment, security policy review, and risk analysis'}
                      </strong>
                    </li>
                    <li className="specialties-feature-list-item">
                      <strong>
                        {'24/7 SOC monitoring, threat detection, and incident investigation'}
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="specialties-features-box">
                  <div className="is-font-size-title-m">{'Core Services'}</div>
                  <ul role="list" className="specialties-features-list">
                    <li className="specialties-feature-list-item">
                      <strong>{'Security assessment and clear remediation roadmaps'}</strong>
                    </li>
                    <li className="specialties-feature-list-item">
                      <strong>{'Managed SOC services with monthly security '}</strong>
                      {'‍'}
                      <strong>{'reports.'}</strong>
                    </li>
                    <li className="specialties-feature-list-item">
                      <strong>{'Incident response and digital forensics'}</strong>
                    </li>
                    <li className="specialties-feature-list-item">
                      <strong>{'Virtual CISO, compliance oversight, and security planning'}</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="/products-appetite#w-tabs-0-data-w-pane-0" className="button w-inline-block">
                <p>{'Explore Cybersecurity'}</p>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
                  alt=""
                  className="button-arrow"
                />
              </a>
            </div>
            <div className="specialties-tab-image">
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de6d_Group%20238090.svg"
                alt=""
                className="specialties-mask-image"
              />
              <div className="sp-mask">
                <img
                  src="/images/brand/network-cables-brett-sayles-1597776.jpg"
                  alt="Secure network connections inside data-centre infrastructure"
                  loading="lazy"
                  className="specialties-mask-img"
                />
                <div className="specialties-mask-wrapper"></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Management Liability" className="specialties-tab w-tab-pane">
            <div className="specialties-tab-content-wrapper">
              <div className="max-width _520px">
                <h3 className="is-space-40 update-8rem-sm reset-xsd">{'Software Development'}</h3>
              </div>
              <div className="specialties-featues">
                <div className="specialties-features-box">
                  <div className="is-font-size-title-m">{'Capabilities'}</div>
                  <ul role="list" className="specialties-features-list">
                    <li className="specialties-feature-list-item">
                      {'Custom software solutions tailored to your business needs'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Desktop applications, mobile apps, and enterprise systems'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Website and web application development'}
                    </li>
                  </ul>
                </div>
                <div className="specialties-features-box">
                  <div className="is-font-size-title-m">{'Solutions'}</div>
                  <ul role="list" className="specialties-features-list">
                    <li className="specialties-feature-list-item">
                      {'Responsive, modern websites that drive business growth and engagement'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'E-commerce platforms and complete web-based solutions'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Digital transformation services'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Software licensing and technology infrastructure'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Support from concept through deployment'}
                    </li>
                  </ul>
                </div>
              </div>
              <a href="/products-appetite#w-tabs-0-data-w-pane-1" className="button w-inline-block">
                <p>{'Explore Software Development'}</p>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
                  alt=""
                  className="button-arrow"
                />
              </a>
            </div>
            <div className="specialties-tab-image">
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de6d_Group%20238090.svg"
                alt=""
                className="specialties-mask-image"
              />
              <div className="sp-mask">
                <img
                  src="/images/brand/software-developer-naboth-otieno-19805876.jpg"
                  alt="Software developer working across desktop and laptop displays"
                  loading="lazy"
                  className="specialties-mask-img"
                />
                <div className="specialties-mask-wrapper"></div>
              </div>
            </div>
          </div>
          <div data-w-tab="Cyber Liability " className="specialties-tab w-tab-pane">
            <div className="specialties-tab-content-wrapper">
              <div className="max-width _490px is-md-100">
                <h3 className="is-space-40 update-8rem-sm reset-xsd">{'IoT & Smart Cards'}</h3>
              </div>
              <div className="specialties-featues cyber">
                <div className="specialties-features-box">
                  <div className="is-font-size-title-m">{'Capabilities'}</div>
                  <ul role="list" className="specialties-features-list">
                    <li className="specialties-feature-list-item">
                      {
                        'Internet of Things solutions and smart card development for modern businesses.'
                      }
                    </li>
                    <li className="specialties-feature-list-item">
                      <strong>{'Connected devices and sensors'}</strong>
                    </li>
                    <li className="nested-feature-list-item">{'Smart Card Technology'}</li>
                    <li className="nested-feature-list-item">{'Secure Authentication Systems'}</li>
                    <li className="nested-feature-list-item">{'Access Control Solutions'}</li>
                    <li className="specialties-feature-list-item">{'Intelligent card systems'}</li>
                  </ul>
                </div>
                <div className="specialties-features-box _2">
                  <div className="is-font-size-title-m">{'Solutions'}</div>
                  <ul role="list" className="specialties-features-list">
                    <li className="specialties-feature-list-item">
                      {'Fleet management solutions for businesses throughout Africa'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'GNSS receivers and professional surveying equipment'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Geospatial technology for field and precision operations'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'ICT equipment, software licensing, and technology infrastructure'}
                    </li>
                    <li className="specialties-feature-list-item">
                      {'Continental coverage and support'}
                    </li>
                  </ul>
                </div>
              </div>
              <a href="/products-appetite#w-tabs-0-data-w-pane-2" className="button w-inline-block">
                <p>{'Explore IoT Services'}</p>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
                  alt=""
                  className="button-arrow"
                />
              </a>
            </div>
            <div className="specialties-tab-image">
              <img
                loading="eager"
                src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de6d_Group%20238090.svg"
                alt=""
                className="specialties-mask-image"
              />
              <div className="sp-mask">
                <img
                  src="/images/brand/smart-card-susanne-plank-13657375.jpg"
                  alt="Access card being presented to a secure reader"
                  loading="lazy"
                  className="specialties-mask-img"
                />
                <div className="specialties-mask-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-layout-blockcontainer container w-container"></div>
      <div className="w-embed">
        <style dangerouslySetInnerHTML={{ __html: pageCode.specialtiesListStyles }} />
      </div>
    </section>
  )
}
