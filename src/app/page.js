
import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
      </main>
    </>
  );
}
