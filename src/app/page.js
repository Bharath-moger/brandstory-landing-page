import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TrustSection from "@/components/sections/TrustSection";
import Statistics from "@/components/sections/Statistics";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
        <div className="hero-section">
          <Header />
          <Hero />
        </div>
        <Services />
        <About />
        <WhyChooseUs />
        <TrustSection />
        <Statistics />
        <Team />
      </main>
    </>
  );
}
