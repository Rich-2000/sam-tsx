import Accordion, { AccordionItem } from '../layout/Accordion.js'

type Product = {
  name: string
  label: string
  image: string
  imageAlt: string
  color: string
}

// Descriptors and the BeaconOS screenshot come from the products and appetite
// page; the other three reuse photographs already in the brand library.
const products: Product[] = [
  {
    name: 'Maddy Memo',
    label: 'Internal communications',
    image: '/images/brand/software-collaboration-mizuno-k-12899191.jpg',
    imageAlt: 'Colleagues working together on a shared document',
    color: '#010535',
  },
  {
    name: 'Maddy Security Ops',
    label: 'Investigation and OSINT',
    image: '/images/brand/security-analyst-kampus-8204353.jpg',
    imageAlt: 'An analyst reviewing security data on screen',
    color: '#4d51ad',
  },
  {
    name: 'MaddyOps',
    label: 'Industrial operations',
    image: '/images/brand/industrial-automation-freek-wolsink-34222005.jpg',
    imageAlt: 'Automated industrial equipment on a production line',
    color: '#143674',
  },
  {
    name: 'BeaconOS',
    label: 'HR platform',
    image: '/images/beacon-os.png',
    imageAlt: 'The BeaconOS dashboard',
    color: '#cfe0ff',
  },
]

// The gallery is a flat list so a product can contribute more than one picture
// later without changing the rows above. A row opens the first entry that
// names it.
type Shot = {
  product: string
  title: string
  desc: string
  url: string
}

const shots: Shot[] = products.map((product) => ({
  product: product.name,
  title: product.name,
  desc: product.label,
  url: product.image,
}))

const photos = (seed: string, n = 4) =>
  Array.from({ length: n }, (_, i) => ({
    src: `https://picsum.photos/seed/${seed}-${i}/600/700`,
    alt: `${seed} preview ${i + 1}`,
  }))

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const items: AccordionItem[] = products.map((product) => ({
  id: product.name.toLowerCase().replace(/\s+/g, '-'),
  caption: product.label,
  title: product.name,
  description: lorem,
  color: product.color,
  images: photos(product.name.toLowerCase().replace(/\s+/g, '-'), 4),
}))

// The dialog renders the first shot server side so it is never empty before
// the script runs. Indexed access is checked, hence the fallback.
const firstShot: Shot = shots[0] ?? {
  product: '',
  title: '',
  desc: '',
  url: '',
}

export function ProductsHighlightSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="product-showcase__head">
          <h2 className="is-space-24">
            {'Software '}
            <br />
            {'products'}
          </h2>
          <p className="is-font-size-body-m is-color-grey-600 product-showcase__intro">
            {
              'Our own platforms sit alongside custom build work. Ask for a demo or quote for any product below.'
            }
          </p>
        </div>

        <div className="product-showcase" data-product-showcase="true">
          <div className="product-showcase__rows">
            <Accordion items={items} />
          </div>

          <div className="product-showcase__panel" data-product-panel="true" aria-hidden="true">
            <div className="product-showcase__tilt" data-product-tilt="true">
              <div className="product-showcase__stack" data-product-stack="true">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="product-showcase__slide"
                    style={{ backgroundColor: product.color }}
                  >
                    <img src={product.image} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="product-showcase__badge" data-product-badge="true" aria-hidden="true">
            {'View'}
          </div>
        </div>

        <div className="is-text-center" style={{ marginTop: '3rem' }}>
          <a href="/software-products" className="button w-inline-block text-white">
            <p>{'Explore software products'}</p>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
              alt=""
              className="button-arrow inversed"
            />
          </a>
        </div>
      </div>

      <dialog
        id="product-gallery"
        className="pg"
        aria-label="Software product pictures"
        data-pg-shots={JSON.stringify(shots)}
      >
        <form method="dialog">
          <button className="pg__close" aria-label="Close">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </form>

        <div className="pg__stage">
          <figure className="pg__frame is-entering" data-pg-frame="true">
            <img
              className="pg__image"
              data-pg-image="true"
              src={firstShot.url}
              alt={firstShot.title}
            />
            <figcaption className="pg__caption">
              <h3 className="pg__title" data-pg-title="true">
                {firstShot.title}
              </h3>
              <p className="pg__desc" data-pg-desc="true">
                {firstShot.desc}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="pg__dock" data-pg-dock="true">
          <div className="pg__dock-inner">
            {shots.map((shot, index) => (
              <button
                key={shot.url}
                type="button"
                className="pg__thumb"
                data-pg-index={index}
                aria-label={shot.title}
              >
                <img src={shot.url} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </section>
  )
}
