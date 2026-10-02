const technologyPartners = [
  {
    name: 'CrowdStrike',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/CrowdStrike_logo.svg',
  },
  {
    name: 'McAfee',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/McAfee_logo.svg',
  },
  {
    name: 'Cisco',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/cisco-ar21.svg',
  },
  {
    name: 'Amazon Web Services',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/awsbadge.png',
  },
  {
    name: 'Google Cloud',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googlecloudbadge.png',
  },
  {
    name: 'Google Workspace',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/googleworkspacebadge.png',
  },
  {
    name: 'IBM',
    logo: 'https://maddygroup.lon1.cdn.digitaloceanspaces.com/images/companylogo/ibm.webp',
  },
]

const marqueePartners = [...technologyPartners, ...technologyPartners, ...technologyPartners]

export function CarriersSection() {
  return (
    <section className="section is-carriers-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2 data-w-id="cdfb6100-2f81-74c5-12b1-fc1af069914c" className="is-text-center">
          {'Powered by Industry Leaders'}
        </h2>
        <div data-w-id="cdfb6100-2f81-74c5-12b1-fc1af069914e" className="logo-loop">
          {[0, 1, 2].map((loopIndex) => (
            <div className="logo-loop-container carriers-loop" key={loopIndex}>
              {marqueePartners.map((partner, partnerIndex) => (
                <div className="looped-logo" key={`${partner.name}-${partnerIndex}`}>
                  <img
                    src={partner.logo}
                    loading="lazy"
                    alt={partner.name}
                    className="logo-loop-image bigger"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
