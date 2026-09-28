type Product = {
  name: string
  image?: string
  imageAlt?: string
}

const products: Product[] = [
  { name: 'Maddy Memo' },
  { name: 'Maddy Security Ops' },
  { name: 'MaddyOps' },
  {
    name: 'BeaconOS',
    image: '/images/beacon-os.png',
    imageAlt: 'The BeaconOS dashboard',
  },
]

const previewId = (name: string) =>
  `product-preview-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 1.25rem',
  textAlign: 'center',
} as const

// Clicking a card opens its screenshot in a dialog. With the script blocked the
// link still resolves to the image file, so the picture is reachable either way.
const previewBehavior = `
(function () {
  var triggers = document.querySelectorAll('[data-product-preview]');
  for (var i = 0; i < triggers.length; i++) {
    (function (trigger) {
      var dialog = document.getElementById(trigger.getAttribute('data-product-preview'));
      if (!dialog || typeof dialog.showModal !== 'function') return;
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        dialog.showModal();
      });
      dialog.addEventListener('click', function (event) {
        if (event.target === dialog) dialog.close();
      });
    })(triggers[i]);
  }
})();
`

export function ProductsHighlightSection() {
  return (
    <section className="section is-investors-section">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="is-text-center is-space-24">
          {"Software "}
          <br />
          {"products"}
        </h2>
        <p className="is-font-size-body-m is-text-center is-color-grey-600" style={{ maxWidth: '40rem', margin: '0 auto 2rem' }}>
          {"Our own platforms sit alongside custom build work. Ask for a demo or quote for any product below."}
        </p>
        <div className="investors-logos">
          <div className="logos-container">
            {products.map((product, index) => {
              const frame = `framed-logo${index === 0 ? ' _1' : index === 1 ? ' _2' : index === 2 ? ' _3' : ''}`

              if (!product.image) {
                return (
                  <div key={product.name} className={frame} style={cardStyle}>
                    <div className="is-font-size-title-m product-card__text">
                      {product.name}
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={product.name}
                  href={product.image}
                  className={`${frame} product-card`}
                  style={cardStyle}
                  data-product-preview={previewId(product.name)}
                  data-no-page-transition="true"
                  aria-label={`${product.name}. View the screenshot`}
                >
                  <div className="is-font-size-title-m product-card__text">
                    {product.name}
                  </div>
                  <span className="product-card__media">
                    <img
                      src={product.image}
                      loading="lazy"
                      alt={product.imageAlt}
                      className="product-card__media-img"
                    />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
        <div className="is-text-center" style={{ marginTop: '2rem' }}>
          <a href="/software-products" className="button w-inline-block">
            <p>{"Explore software products"}</p>
            <img
              loading="lazy"
              src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
              alt=""
              className="button-arrow"
            />
          </a>
        </div>
      </div>
      {products.filter((product) => product.image).map((product) => (
        <dialog
          key={product.name}
          id={previewId(product.name)}
          className="product-lightbox"
          aria-label={product.imageAlt}
        >
          <form method="dialog">
            <button className="product-lightbox__close" aria-label="Close">
              {"\u00d7"}
            </button>
          </form>
          <img
            src={product.image}
            alt={product.imageAlt}
            className="product-lightbox__img"
          />
        </dialog>
      ))}
      <script dangerouslySetInnerHTML={{ __html: previewBehavior }} />
    </section>
  )
}
