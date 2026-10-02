import { ButtonLink } from '../ui/ButtonLink.js'

export function CallToActionSection() {
  return (
    <section className="section is-cta-section">
      <div className="w-layout-blockcontainer container is-relative is-z-index-2 w-container">
        <div className="cta-copy">
          <div>
            <h3 data-w-id="0789e90d-14d7-de60-3e7d-d2524d2e4fa3" className="is-color-lime-300">
              {'Protect Your Business,'}
            </h3>
            <h3 data-w-id="6f019d19-8439-ebb1-03aa-e83ff562296c">{'Secure Your Future Today'}</h3>
          </div>
          <ButtonLink
            data-w-id="6f019d19-8439-ebb1-03aa-e83ff5622970"
            href="/get-in-touch"
            className="is-black-button w-inline-block"
          >
            <p>{'Get in touch'}</p>
            <img
              src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg"
              loading="lazy"
              alt=""
              className="button-arrow inversed"
            />
          </ButtonLink>
        </div>
      </div>
      <div data-w-id="6f019d19-8439-ebb1-03aa-e83ff5622974" className="kv-footer">
        <img
          src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp"
          loading="lazy"
          sizes="100vw"
          srcSet="https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-800.webp 800w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1080.webp 1080w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%2520(4)-p-1600.webp 1600w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de68_Vector%20(4).webp 2880w"
          alt=""
          className="kv-footer-desktop"
        />
        <img
          src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, 750px"
          srcSet="https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1-p-500.webp 500w, https://assets-global.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70de69_Layer_1.webp 750w"
          alt=""
          className="kv-footer-mobile"
        />
      </div>
    </section>
  )
}
