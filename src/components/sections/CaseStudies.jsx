"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/siteData";

export default function CaseStudies() {
  const galleryRef = useRef(null);
  const [firstIndex, setFirstIndex] = useState(0);
  const visibleStudies = caseStudies.map((_, index) => caseStudies[(firstIndex + index) % caseStudies.length]);

  function navigate(direction) {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;

    if (maxScroll > 1) {
      const item = gallery.querySelector("li");
      const gap = parseFloat(getComputedStyle(gallery.querySelector("ul")).columnGap) || 0;
      const target = gallery.scrollLeft + direction * (item.offsetWidth + gap);
      const atEnd = gallery.scrollLeft >= maxScroll - 1;
      const atStart = gallery.scrollLeft <= 1;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gallery.scrollTo({
        left: direction > 0 && atEnd ? 0 : direction < 0 && atStart ? maxScroll : target,
        behavior: reduceMotion ? "instant" : "smooth",
      });
    } else {
      // All three fit on desktop; the controls cycle their presentation order.
      setFirstIndex((current) => (current + direction + caseStudies.length) % caseStudies.length);
    }
  }

  return (
    <section id="case-studies" className="case-studies-section" aria-labelledby="case-studies-heading">
      <SectionHeading id="case-studies-heading">
        Proven Digital Marketing Success Our<br />Abu Dhabi Case Studies
      </SectionHeading>
      <div className="case-studies-container">
        <div className="case-studies-controls">
          <button type="button" aria-label="Previous case study" aria-controls="case-studies-gallery" onClick={() => navigate(-1)}>
            <Image src="/assets/icons/Group 1000002027.png" width={75} height={75} alt="" />
          </button>
          <button type="button" aria-label="Next case study" aria-controls="case-studies-gallery" onClick={() => navigate(1)}>
            <Image src="/assets/icons/Group 1000002026.png" width={75} height={75} alt="" />
          </button>
        </div>
        <div
          className="case-studies-gallery"
          id="case-studies-gallery"
          ref={galleryRef}
          role="region"
          aria-label="Case study images"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              navigate(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <ul className="case-studies-track">
            {visibleStudies.map(({ id, src, alt }) => (
              <li key={id}>
                <Image src={src} alt={alt} width={419} height={627} sizes="(max-width: 600px) 80vw, (max-width: 1023px) 45vw, 28vw" />
              </li>
            ))}
          </ul>
        </div>
        <span className="sr-only" aria-live="polite">First case study: {visibleStudies[0].alt}</span>
      </div>
    </section>
  );
}
