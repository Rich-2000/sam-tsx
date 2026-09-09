import { DocumentHead } from './components/layout/DocumentHead.js'
import { Footer } from './components/layout/Footer.js'
import { Header } from './components/layout/Header.js'
import { Loader, LoaderRuntime } from './components/layout/Loader.js'
import { PageSetup } from './components/layout/PageSetup.js'
import { RuntimeScripts } from './components/layout/RuntimeScripts.js'
import { AudienceTabsSection } from './components/sections/AudienceTabsSection.js'
import { CallToActionSection } from './components/sections/CallToActionSection.js'
import { CarriersSection } from './components/sections/CarriersSection.js'
import { GrowthSection } from './components/sections/GrowthSection.js'
import { HeroSection } from './components/sections/HeroSection.js'
import { InvestorsSection } from './components/sections/InvestorsSection.js'
import { ProductsHighlightSection } from './components/sections/ProductsHighlightSection.js'
import { SpecialtiesIntroSection } from './components/sections/SpecialtiesIntroSection.js'
import { SpecialtiesTabsSection } from './components/sections/SpecialtiesTabsSection.js'
import { TestimonialsSection } from './components/sections/TestimonialsSection.js'
import { VideoSection } from './components/sections/VideoSection.js'
import { PageWrapper } from './components/ui/PageWrapper.js'

export function App() {
  return (
    <>
      <PageSetup />
      <Header brand="maddy" />

      <PageWrapper className="dark-wrapper bottom-radius is-overflow-hidden">
        <HeroSection />
        <GrowthSection />
        <VideoSection />
      </PageWrapper>

      <PageWrapper className="is-overflow-hidden">
        <SpecialtiesIntroSection />
      </PageWrapper>

      <PageWrapper className="is-overflow-hidden">
        <SpecialtiesTabsSection />
      </PageWrapper>

      <PageWrapper className="is-overflow-hidden">
        <CarriersSection />
      </PageWrapper>

      <PageWrapper className="is-overflow-hidden is-no-padding">
        <AudienceTabsSection />
        <TestimonialsSection />
        <ProductsHighlightSection />
        <InvestorsSection />
        <CallToActionSection />
        <Footer />
      </PageWrapper>
    </>
  )
}

export function SamDocument() {
  return (
    <html
      className="is-page-loading"
      data-wf-domain="flow-x-widelab.webflow.io"
      data-wf-page="6627b50ad2ace3686c70dd7f"
      data-wf-site="6627b50ad2ace3686c70dd7b"
      lang="en"
    >
      <DocumentHead />
      <body>
        <Loader />
        <App />
        <RuntimeScripts />
        <LoaderRuntime />
      </body>
    </html>
  )
}
