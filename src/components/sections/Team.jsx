"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { teamImages } from "@/data/siteData";

const galleryImages = [teamImages[2], ...teamImages, teamImages[0]];

export default function Team() {
  const galleryRef = useRef(null);
  const initialized = useRef(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [scrollState, setScrollState] = useState({ overflows: false, atStart: true, atEnd: false });

  const updateScrollState = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const center = gallery.getBoundingClientRect().left + gallery.clientWidth / 2;
    const items = Array.from(gallery.querySelectorAll("li"));
    let nearest = 0;
    let distance = Infinity;
    items.forEach((item, index) => {
      const bounds = item.getBoundingClientRect();
      const current = Math.abs(bounds.left + bounds.width / 2 - center);
      if (current < distance) { nearest = index; distance = current; }
    });
    setActiveIndex(nearest);
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    setScrollState({
      overflows: maxScroll > 1,
      atStart: gallery.scrollLeft <= 1,
      atEnd: gallery.scrollLeft >= maxScroll - 1,
    });
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    const observer = new ResizeObserver(() => {
      if (!initialized.current && gallery.clientWidth) {
        gallery.scrollLeft = (gallery.scrollWidth - gallery.clientWidth) / 2;
        initialized.current = true;
      }
      updateScrollState();
    });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, [updateScrollState]);

  function scrollGallery(direction) {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const item = gallery.querySelector("li");
    const gap = parseFloat(getComputedStyle(gallery.querySelector("ul")).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gallery.scrollBy({ left: direction * (item.offsetWidth + gap), behavior: reduceMotion ? "instant" : "smooth" });
  }

  return (
    <section className="team-section" aria-labelledby="team-heading">
      <SectionHeading id="team-heading">Meet Our Expart Team</SectionHeading>
      <div className="team-container">
        <div className={`team-controls${scrollState.overflows ? "" : " is-hidden"}`}>
          <button type="button" aria-label="Previous team photo" aria-controls="team-gallery" disabled={!scrollState.overflows || scrollState.atStart} onClick={() => scrollGallery(-1)}>
            <ArrowLeft size={30} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next team photo" aria-controls="team-gallery" disabled={!scrollState.overflows || scrollState.atEnd} onClick={() => scrollGallery(1)}>
            <ArrowRight size={30} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <div
          className="team-gallery"
          id="team-gallery"
          role="region"
          aria-label="Team photos"
          tabIndex={scrollState.overflows ? 0 : undefined}
          ref={galleryRef}
          onScroll={updateScrollState}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              scrollGallery(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <ul className="team-track">
            {galleryImages.map(({ id, src, alt }, index) => (
              <li key={`${id}-${index}`} className={index === activeIndex ? "is-active" : ""}>
                <Image src={src} alt={alt} width={340} height={227} sizes="(max-width: 600px) 80vw, 380px" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
