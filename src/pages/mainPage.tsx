import About from "@shared/components/about";
import Footer from "@shared/components/footer";
import Hero from "@shared/components/hero";
import Portfolio from "@shared/components/portfolio";

export default function MainPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Hero />
            <About />
            <Portfolio />
            <Footer />
        </main>
    );
}
