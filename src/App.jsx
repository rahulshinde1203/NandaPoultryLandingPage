import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loader        from './components/Loader'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Services      from './components/Services'
import MapSection    from './components/MapSection'
import Partners      from './components/Partners'
import WhyChooseUs   from './components/WhyChooseUs'
import OrderForm     from './components/OrderForm'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ScrollTop     from './components/ScrollTop'
import OrderModal    from './components/OrderModal'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 700, once: false, mirror: true, easing: 'ease-out-cubic', offset: 60 })
    const t = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader loaded={loaded} />
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>
        <Hero />
        <About />
        <Services />
        <MapSection />
        <Partners />
        <WhyChooseUs />
        <OrderForm />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollTop />
      <OrderModal />
    </>
  )
}
