const publicPartners = [
  {
    name: 'CardLogix',
    detail: 'Smart cards and biometric enrolment',
    logo: '/images/cardlogix-logo.jpg',
    href: '/partners/cardlogix',
  },
  {
    name: 'ZenduIT',
    detail: 'Fleet management and telematics',
    logo: '/images/zenduit.png',
    href: '/partners/zenduit',
  },
  {
    name: 'Zaelet Precision',
    detail: 'Geospatial and surveying solutions',
    logo: '/images/ZAELET-logo.png',
    href: '/partners/zaelet',
  },
]

export function InvestorsSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2
          data-w-id="9c1c2636-75b4-763c-b450-7bbbe77e3539"
          className="is-text-center"
        >
          {"Our Trusted "}
          <br />
          {"Partners"}
        </h2>
        <div className="investors-logos">
          <div className="logos-container">
            {publicPartners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.href}
                className={`framed-logo partner-card${index === 0 ? ' _1' : index === 1 ? ' _2' : index === 2 ? ' _3' : ''}`}
                aria-label={`${partner.name} — ${partner.detail}`}
              >
                <span className="partner-card__text">
                  <span className="partner-card__name is-font-size-title-m">
                    {partner.name}
                  </span>
                  <span className="partner-card__detail is-font-size-body-m is-color-grey-600">
                    {partner.detail}
                  </span>
                </span>
                <span className="partner-card__logo">
                  <img
                    src={partner.logo}
                    loading="lazy"
                    alt={partner.name}
                    className="partner-card__logo-img"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
