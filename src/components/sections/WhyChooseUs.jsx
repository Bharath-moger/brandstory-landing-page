"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactEmail, differentiators } from "@/data/siteData";

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState(differentiators[0].id);

  return (
    <section className="why-section" id="why-brandstory" aria-labelledby="why-heading">
      <SectionHeading id="why-heading">
        What Sets Us Apart as a Leading Digital Marketing<br className="why-heading-break" /> Agency in Abu Dhabi
      </SectionHeading>
      <div className="why-layout">
        <Image
          className="why-illustration"
          src="/assets/illustrations/marketing-strategy.png"
          alt="Marketing strategist working on a laptop with analytics and campaign charts"
          width={535}
          height={561}
          sizes="(max-width: 767px) 90vw, 37vw"
        />
        <div className="why-accordion">
          {differentiators.map(({ id, title, description }) => {
            const isOpen = openId === id;
            return (
              <div className={`why-item${isOpen ? " is-open" : ""}`} key={id}>
                <h3>
                  <button
                    id={`why-trigger-${id}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`why-panel-${id}`}
                    onClick={() => setOpenId(isOpen ? null : id)}
                  >
                    <span>{title}</span>
                    <Image
                      src={`/assets/icons/Group ${isOpen ? "1171275603" : "1171275604"}.svg`}
                      width={38}
                      height={38}
                      alt=""
                    />
                  </button>
                </h3>
                <div
                  id={`why-panel-${id}`}
                  role="region"
                  aria-labelledby={`why-trigger-${id}`}
                  hidden={!isOpen}
                  className="why-panel"
                >
                  {description ? <p>{description}</p> : (
                    // The reference does not include these expanded answers yet.
                    <a href={contactEmail}>Get in touch to learn more about our approach.</a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
