import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/Hero'
import { ProductIntro } from './components/ProductIntro'
import { BenefitSection } from './components/BenefitSection'
import { ProductShowcase } from './components/ProductShowcase'
import { FormulaSection } from './components/FormulaSection'
import { QualitySection } from './components/QualitySection'
import { ReviewsSection } from './components/ReviewsSection'
import { HowToUseSection } from './components/HowToUseSection'
import { FaqSection } from './components/FaqSection'
import { CtaBand } from './components/CtaBand'
import { I18nProvider } from './i18n'
import { useI18n } from './i18n/context'
import { Seo } from './seo/Seo'

function Page() {
  const { messages } = useI18n()

  return (
    <>
      <a href="#contenu" className="skip-link">
        {messages.a11y.skipToContent}
      </a>
      <Header />
      <Seo title={messages.seo.title} description={messages.seo.description} />
      <main id="contenu">
        <Hero />
        <ProductIntro />
        <BenefitSection />
        <ProductShowcase />
        <FormulaSection />
        <QualitySection />
        <ReviewsSection />
        <HowToUseSection />
        <FaqSection />
      </main>
      <CtaBand />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}