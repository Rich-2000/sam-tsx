import { ButtonLink } from '../ui/ButtonLink.js'

export function HeroSection() {
    return (<section className="section is-hero-section">
        <div className="hero-media" aria-hidden="true">
          <video
            className="hero-media__video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://ik.imagekit.io/fqsfbn5ad/maddymedia/herobg1?updatedAt=1784879987462"
          >
            <source
              src="https://maddygroup.lon1.cdn.digitaloceanspaces.com/maddymedia/heromv1"
              type="video/mp4"
            />
          </video>
          <div className="hero-hue-overlay" />
        </div>
        <div className="w-layout-blockcontainer container hero-description-container w-container">
          <h1 data-w-id="5688d7d9-6d15-3f37-8131-e8be09b8e9fa" className="is-mobile-hero-title">
            <span className="is-color-lime-300">
              {"Cybersecurity"}
            </span>
            {" and"}
            <br />
            <span className="is-color-lime-300">
              {"software"}
            </span>
            {" for Africa"}
          </h1>
          <div className="hero-flex">
            <p data-w-id="cf1d3dc4-a54e-773c-276f-52cfbc4a1929" className="hero-description">
              {"Maddy Group Ltd helps businesses and public organisations protect digital infrastructure and grow with reliable technology, delivered with integrity and professional care."}
            </p>
            <ButtonLink data-w-id="6edbdcda-b7a6-c67d-3d34-d671091daf17" href="/get-in-touch" className="w-inline-block">
              <p>
                {"Get started"}
              </p>
              <img src="https://cdn.prod.website-files.com/6627b50ad2ace3686c70dd7b/6627b50ad2ace3686c70ddfa_arrow-top-right%201.svg" loading="lazy" alt="" className="button-arrow"/>
            </ButtonLink>
          </div>
        </div>
      </section>);
}
