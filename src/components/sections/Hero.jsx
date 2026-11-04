import { ChevronRight } from "lucide-react";
import BrandCarousel from "@/components/sections/BrandCarousel";
import { contactEmail } from "@/data/siteData";

export default function Hero() {
  return (
    <>
      <section className="hero-content" aria-labelledby="hero-heading">
        <h1 id="hero-heading">Digital Marketing Agency In Abu Dhabi</h1>
        <p>
          Looking for a digital marketing agency in Abu Dhabi? With 12+ years of expertise, BrandStory delivers culturally
          <br className="desktop-line-break" /> intelligent, data-driven strategies that connect your brand with high-intent UAE audiences.
        </p>
        <a className="contact-button" href={contactEmail}>
          <ChevronRight size={32} strokeWidth={2.5} aria-hidden="true" />
          Get in Touch
        </a>
      </section>
      <BrandCarousel />
    </>
  );
}
