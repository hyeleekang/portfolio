import Hero from "@shared/components/hero"
import Gallery from "@shared/components/gallery"
import Portfolio from "@shared/components/portfolio"
import Contact from "@shared/components/contact"
import Footer from "@shared/components/footer"

export default function MainPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
