import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="hero-section">
        <Header />
        <main id="main-content">
          <Hero />
        </main>
      </div>
    </>
  );
}
