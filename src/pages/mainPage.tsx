import Hero from "@shared/components/hero"
import Portfolio from "@shared/components/portfolio"
import Footer from "@shared/components/footer"

export default function MainPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Portfolio />
      <Footer />
    </main>
  )
}
