"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactEmail, faqs } from "@/data/siteData";

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <SectionHeading id="faq-heading">FAQ’s</SectionHeading>
      <div className="faq-list">
        {faqs.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          const Chevron = isOpen ? ChevronUp : ChevronDown;

          return (
            <div key={id} className={`faq-item${isOpen ? " is-open" : ""}`}>
              <h3>
                <button
                  type="button"
                  id={`faq-trigger-${id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  onClick={() => setOpenId(isOpen ? null : id)}
                >
                  <span>{question}</span>
                  <span className="faq-chevron"><Chevron size={25} strokeWidth={1.5} aria-hidden="true" /></span>
                </button>
              </h3>
              <div className="faq-panel" id={`faq-panel-${id}`} role="region" aria-labelledby={`faq-trigger-${id}`} hidden={!isOpen}>
                {answer ? <p>{answer}</p> : (
                  // Final answers were not supplied in the reference.
                  <a href={contactEmail}>Get in touch with our team for more information.</a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
