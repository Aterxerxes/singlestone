import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import useSteps from '../shared/hooks/useSteps.js'

// I'm assuming that I may get this from localized text some time later.
import { getTranslation } from '../localization'

const heroText = getTranslation('hero')
const footerText = getTranslation('footer')

export default () => {
  const steps = useSteps()
  return (
    <div className="main-page-container">
      <Header />
      <Hero
        {...heroText}
      />
      <Footer
        {...footerText}
        steps={steps}
      />
    </div>
  )
}