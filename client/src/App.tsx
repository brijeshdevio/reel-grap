import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
