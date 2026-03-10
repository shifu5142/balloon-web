
import Navbar from "./compoments/navbar"
import HeroSection from "./compoments/hero-section"
import PackagesSection from "./compoments/packages-section"
import EventsSection from "./compoments/events"
import ProcessSection from "./compoments/proccess-section"
import TestimonialsSection from "./compoments/testimonials-section"
import Footer from "./compoments/footer"

function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <EventsSection />
        <ProcessSection />
        <PackagesSection />
        <TestimonialsSection />
        <Footer />
    </>
  )
}
export default Home;