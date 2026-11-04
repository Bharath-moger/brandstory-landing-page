import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";

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
      </main>
    </>
  );
}
