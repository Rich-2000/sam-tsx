/**
 * Cookie choice banner. It starts hidden; /scripts/cookie-consent.js shows it
 * until the visitor has chosen, and again from the footer's "Cookies" link.
 */
export function CookieConsent() {
  return (
    <>
      <div
        className="cookie-banner"
        data-cookie-banner=""
        role="region"
        aria-label="Cookie choices"
        tabIndex={-1}
        hidden
      >
        <div className="cookie-banner__text">
          <p className="cookie-banner__title">{'Your privacy'}</p>
          <p className="cookie-banner__copy">
            {
              'This site stores only what it needs to work. If you agree, we may also use analytics cookies to understand how the site is used. '
            }
            <a href="/privacy-policy#cookies">{'Read our privacy policy'}</a>
            {'.'}
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button type="button" className="cookie-banner__button" data-cookie-reject="">
            {'Reject optional'}
          </button>
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--accept"
            data-cookie-accept=""
          >
            {'Accept all'}
          </button>
        </div>
      </div>
      <script src="/scripts/cookie-consent.js" defer></script>
    </>
  )
}
