import Hero from "@shared/components/hero"
import About from "@shared/components/about"
import Portfolio from "@shared/components/portfolio"
import Footer from "@shared/components/footer"

export default function MainPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </main>
  )
}
