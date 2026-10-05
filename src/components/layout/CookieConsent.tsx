const categories = [
  {
    key: 'necessary',
    label: 'Necessary',
    description: 'Needed for the site to work and to remember this choice. Always on.',
    locked: true,
  },
  {
    key: 'analytics',
    label: 'Analytics',
    description: 'Help us understand how the site is used so we can improve it.',
    locked: false,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    description: 'Used to measure and personalise advertising.',
    locked: false,
  },
]

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
              'This site stores only what it needs to work. If you agree, we may also use optional cookies, and you can choose which kinds. '
            }
            <a href="/privacy-policy#cookies">{'Read our privacy policy'}</a>
            {'.'}
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__manage"
            data-cookie-manage=""
            aria-expanded="false"
            aria-controls="cookie-options"
          >
            {'Manage choices'}
          </button>
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
        <div id="cookie-options" className="cookie-banner__options" data-cookie-options="" hidden>
          {categories.map((category) => (
            <label key={category.key} className="cookie-option">
              <span className="cookie-option__text">
                <span className="cookie-option__label">{category.label}</span>
                <span className="cookie-option__description">{category.description}</span>
              </span>
              <input
                type="checkbox"
                role="switch"
                className="cookie-option__switch"
                data-cookie-category={category.key}
                defaultChecked={category.locked}
                disabled={category.locked}
              />
            </label>
          ))}
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--accept"
            data-cookie-save=""
          >
            {'Save choices'}
          </button>
        </div>
      </div>
      <script src="/scripts/cookie-consent.js" defer></script>
    </>
  )
}
