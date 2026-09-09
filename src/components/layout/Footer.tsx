import { technologyNavItems } from '../../content/technologyNav.js'

/** TODO: swap the "#" for the real profile URLs once the accounts are live. */
const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z',
  },
  {
    label: 'X',
    href: '#',
    path: 'M17.53 3h3.02l-6.6 7.54L21.75 21h-6.07l-4.76-6.22L5.48 21H2.46l7.06-8.07L2.25 3h6.22l4.3 5.69L17.53 3Zm-1.06 16.17h1.67L7.6 4.73H5.81l10.66 14.44Z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.64 3.64 0 0 0-.88-1.35 3.64 3.64 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.01 15.14 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.21 3.21 0 1 0 0-6.42 3.21 3.21 0 0 0 0 6.42Zm6.29-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M21.58 7.19a2.51 2.51 0 0 0-1.77-1.78C18.25 5 12 5 12 5s-6.25 0-7.81.41c-.86.23-1.54.91-1.77 1.78C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.87.91 1.55 1.77 1.78C5.75 19 12 19 12 19s6.25 0 7.81-.41a2.51 2.51 0 0 0 1.77-1.78C22 15.25 22 12 22 12s0-3.25-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z',
  },
]

const companyLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/about-us#team', label: 'Our Team' },
  { href: '/products-appetite', label: 'Products & Appetite' },
  { href: '/get-in-touch', label: 'Contact Us' },
]

/* Sources are attached from here rather than rendered as <source> tags so
   nothing downloads until the footer is near the viewport, and so a metered or
   slow connection can be left with just the poster. */
const footerRuntime = `(function () {
  var form = document.getElementById('mf-subscribe');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      var field = form.querySelector('input[type="email"]');
      var email = field ? field.value : '';
      window.location.href = 'mailto:info@maddygroupltd.com?subject=' +
        encodeURIComponent('Newsletter signup') + '&body=' +
        encodeURIComponent('Please add ' + email + ' to the Maddy Group mailing list.');
      form.reset();
    });
  }

  var video = document.getElementById('mf-video');
  if (!video) return;

  var link = navigator.connection || {};
  if (link.saveData === true || /(^|-)2g$/.test(link.effectiveType || '')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function load() {
    // the frame is drawn at the footer's height, so that is what sets the tier
    var needed = video.getBoundingClientRect().height * (window.devicePixelRatio || 1);
    var name = needed > 720 && link.effectiveType !== '3g' ? 'footer-1920' : 'footer-1280';
    [['webm', 'video/webm'], ['mp4', 'video/mp4']].forEach(function (pair) {
      var source = document.createElement('source');
      source.src = '/images/' + name + '.' + pair[0];
      source.type = pair[1];
      video.appendChild(source);
    });
    video.load();
    var playing = video.play();
    if (playing && playing.catch) playing.catch(function () {});
  }

  if (!('IntersectionObserver' in window)) return load();
  var observer = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    load();
  }, { rootMargin: '400px' });
  observer.observe(video);
})();`

export function Footer() {
  return (
    <>
      <footer className="mf">
        <div className="mf__media" aria-hidden="true">
          <video
            id="mf-video"
            className="mf__video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/footer-poster.jpg"
          />
        </div>
        <div className="mf__inner">
          <div className="mf__grid">
            <div className="mf__brand">
              <img
                src="/images/maddy-group-horizontal-white.png"
                width={200}
                height={48}
                alt="Maddy Group"
                className="mf__brand-logo"
              />
              <p className="mf__tagline">
                {'Secure systems and reliable software, built in Accra.'}
              </p>
            </div>

            <nav className="mf__col" aria-label="Services">
              <h2 className="mf__heading">{'Services'}</h2>
              <ul className="mf__list">
                {technologyNavItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="mf__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="mf__col" aria-label="Company">
              <h2 className="mf__heading">{'Company'}</h2>
              <ul className="mf__list">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="mf__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mf__news">
              <h2 className="mf__heading">{'Stay in the loop'}</h2>
              <p className="mf__news-copy">
                {'Security advisories, project notes and the occasional update from the team in Accra. No noise.'}
              </p>
              <form id="mf-subscribe" className="mf__form" noValidate={false}>
                <label className="mf__sr-only" htmlFor="mf-email">
                  {'Email address'}
                </label>
                <input
                  id="mf-email"
                  className="mf__input"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                />
                <button type="submit" className="mf__submit">
                  {'Subscribe'}
                </button>
              </form>

              <div className="mf__socials">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="mf__social"
                    aria-label={`Maddy Group on ${item.label}`}
                    rel="noopener"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d={item.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="mf__divider" />

          <div className="mf__bar">
            <p className="mf__copyright">
              {'© 2026 Maddy Group Ltd. All rights reserved.'}
            </p>
            <div className="mf__bar-links">
              <a href="/privacy-policy" className="mf__link">
                {'Privacy Policy'}
              </a>
              <a href="/terms-of-use" className="mf__link">
                {'Terms of Service'}
              </a>
              <a href="/privacy-policy" className="mf__link">
                {'Cookies'}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: footerRuntime }} />
    </>
  )
}
