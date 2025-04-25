import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Stats />
      <Features />
      <About />
      <Footer />
    </div>
  );
}