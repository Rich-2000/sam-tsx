import { partnerNavItems } from '../../content/partnerPages.js'
import { technologyNavItems } from '../../content/technologyNav.js'
import { ButtonLink } from '../ui/ButtonLink.js'

type HeaderProps = {
  currentPath?: string
  showWhiteLogo?: boolean
  brand?: 'flow' | 'maddy'
}

/**
 * Desktop with a mouse: dropdowns open on hover and close on mouse-out, and a
 * click still toggles. Mobile menu and touch: click only, since hover-open and
 * click-toggle cancel each other out there. Webflow reads data-hover when it
 * sets dropdowns up, so set it before that runs and re-run setup on breakpoint
 * changes.
 */
const dropdownHoverScript = `(function () {
  var mq = window.matchMedia('(min-width: 992px) and (hover: hover)');
  function apply() {
    var dropdowns = document.querySelectorAll('.navbar .w-dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].setAttribute('data-hover', mq.matches ? 'true' : 'false');
    }
  }
  function onChange() {
    apply();
    if (window.Webflow && window.Webflow.require) {
      var dropdown = window.Webflow.require('dropdown');
      if (dropdown && dropdown.ready) dropdown.ready();
    }
  }
  apply();
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();`

/**
 * The navbar fades from transparent to white on scroll (Webflow interaction) and
 * is white behind the open mobile menu. Mirror its background opacity into
 * --maddy-nav-solid so the white logo cross-fades to the navy one with it.
 */
const logoContrastScript = `(function () {
  var nav = document.querySelector('.navbar');
  var wrap = nav && nav.closest('.navbar-wrap');
  if (!wrap) return;
  function sync() {
    var rgba = getComputedStyle(nav).backgroundColor.match(/[\\d.]+/g) || [];
    var alpha = rgba.length < 3 ? 0 : rgba.length > 3 ? Number(rgba[3]) : 1;
    wrap.style.setProperty('--maddy-nav-solid', String(alpha));
  }
  sync();
  new MutationObserver(sync).observe(nav, { attributes: true, attributeFilter: ['style', 'class'], subtree: true });
  nav.addEventListener('transitionend', sync);
  window.addEventListener('resize', sync);
})();`

function currentLinkClass(baseClassName: string, href: string, currentPath: string) {
  return href === currentPath ? `${baseClassName} w--current` : baseClassName
}

export function Header({ currentPath = '/', showWhiteLogo = false, brand = 'flow' }: HeaderProps) {
    const isCurrent = (href: string) => href === currentPath
    const isMaddy = brand === 'maddy'
    const technologyActive = technologyNavItems.some((item) => item.href === currentPath)
    const partnersActive = partnerNavItems.some((item) => item.href === currentPath)

    return (<div className="navbar-wrap">
        <div data-w-id="c12b8b16-d300-2a9c-ceac-b3f5e3d95ba0" className="navbar-trigger"></div>
        <div data-w-id="c12b8b16-d300-2a9c-ceac-b3f5e3d95ba1" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
          <div className="container nav-flex w-container">
            <a href="/" aria-current={isCurrent('/') ? 'page' : undefined} className={currentLinkClass(isMaddy ? 'logo maddy-logo w-nav-brand' : 'logo w-nav-brand', '/', currentPath)} style={isMaddy ? { width: '7.5rem' } : undefined}>
              {isMaddy ? (
                <>
                  <img src="/images/maddy-group-horizontal-white.png" loading="eager" width="240" height="57" alt="Maddy Group" className="logo-img maddy-logo-light" style={{ width: '100%', height: 'auto' }}/>
                  <img src="/images/maddy-group-horizontal-navy.png" loading="eager" width="240" height="57" alt="" aria-hidden="true" className="logo-img maddy-logo-dark" style={{ width: '100%', height: 'auto' }}/>
                </>
              ) : (
                <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de9c_Clip%20path%20group.svg" loading="eager" width="111" height="37" alt="" className="logo-img"/>
              )}
              {showWhiteLogo && !isMaddy ? (
                <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de4e_logo%20(1).png" loading="eager" width="111" height="37" alt="" className="logo-img white-logo"/>
              ) : null}
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/products-appetite" aria-current={isCurrent('/products-appetite') ? 'page' : undefined} className={currentLinkClass('nav-link w-nav-link', '/products-appetite', currentPath)}>
                {isMaddy ? "Services" : "Products & Appetite"}
              </a>
              <div data-hover="false" data-delay="0" className="dropdown w-dropdown">
                <div className={`nav-link is-dropdown w-dropdown-toggle${technologyActive ? ' w--current' : ''}`}>
                  <div>
                    {isMaddy ? "Technologies" : "Why Flow?"}
                  </div>
                  <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0b_Group.svg" loading="lazy" alt="" className="arrow-icon drop"/>
                </div>
                <nav className="dropdown-list w-dropdown-list">
                  <div className="navbar-dropdown-wrapper">
                    {isMaddy ? (
                      technologyNavItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          aria-current={isCurrent(item.href) ? 'page' : undefined}
                          className={currentLinkClass('dropdown-link navbar-dl-link w-dropdown-link', item.href, currentPath)}
                        >
                          {item.label}
                        </a>
                      ))
                    ) : (
                      <>
                        <a href="/retail-brokers" aria-current={isCurrent('/retail-brokers') ? 'page' : undefined} className={currentLinkClass('dropdown-link navbar-dl-link w-dropdown-link', '/retail-brokers', currentPath)}>
                          {"For Retail Agents"}
                        </a>
                        <a href="/carriers" aria-current={isCurrent('/carriers') ? 'page' : undefined} className={currentLinkClass('dropdown-link navbar-dl-link w-dropdown-link', '/carriers', currentPath)}>
                          {"For Carriers"}
                        </a>
                      </>
                    )}
                  </div>
                </nav>
              </div>
              {isMaddy ? (
                <div data-hover="false" data-delay="0" className="dropdown w-dropdown">
                  <div className={`nav-link is-dropdown w-dropdown-toggle${(partnersActive || isCurrent('/about-us')) ? ' w--current' : ''}`}>
                    <div>
                      {"About Us"}
                    </div>
                    <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de0b_Group.svg" loading="lazy" alt="" className="arrow-icon drop"/>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <div className="navbar-dropdown-wrapper">
                      <a
                        href="/about-us#team"
                        aria-current={isCurrent('/about-us') ? 'page' : undefined}
                        className={currentLinkClass('dropdown-link navbar-dl-link w-dropdown-link', '/about-us', currentPath)}
                      >
                        {"Team"}
                      </a>
                      <div className="navbar-dl-label">{"Partners"}</div>
                      {partnerNavItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          aria-current={isCurrent(item.href) ? 'page' : undefined}
                          className={currentLinkClass('dropdown-link navbar-dl-link w-dropdown-link', item.href, currentPath)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              ) : (
                <a href="/about-us" aria-current={isCurrent('/about-us') ? 'page' : undefined} className={currentLinkClass('nav-link w-nav-link', '/about-us', currentPath)}>
                  {"About Us"}
                </a>
              )}
              <ButtonLink href="/get-in-touch" aria-current={isCurrent('/get-in-touch') ? 'page' : undefined} className={currentLinkClass('is-black-button mobile-contact w-inline-block', '/get-in-touch', currentPath)}>
                <p>
                  {"Contact us"}
                </p>
                <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg" loading="lazy" alt="" className="button-arrow inversed"/>
              </ButtonLink>
            </nav>
            <div className="menu-button w-nav-button" aria-label="Menu">
              <span className="hamburger" aria-hidden="true">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </span>
            </div>
            <ButtonLink href="/get-in-touch" aria-current={isCurrent('/get-in-touch') ? 'page' : undefined} className={currentLinkClass('is-white-button is-navbar-button w-inline-block', '/get-in-touch', currentPath)}>
              <p>
                {"Contact Us"}
              </p>
            </ButtonLink>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: dropdownHoverScript }}/>
        {isMaddy ? <script dangerouslySetInnerHTML={{ __html: logoContrastScript }}/> : null}
      </div>);
}
