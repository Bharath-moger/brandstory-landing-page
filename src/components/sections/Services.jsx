import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/siteData";

function ServiceCard({ service }) {
  const { id, title, icon, description } = service;

  return (
    <article className="service-card" aria-labelledby={`service-${id}`}>
      <div className="service-icon">
        <Image src={icon} alt="" width={50} height={50} />
      </div>
      <h3 id={`service-${id}`}>{title}</h3>
      <p>{description}</p>
      <a
        className="service-link"
        href={`mailto:info@brandstory.ae?subject=${encodeURIComponent(`Enquiry about ${title}`)}`}
        aria-label={`Know more about ${title}`}
      >
        Know more <ArrowRight size={25} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <SectionHeading id="services-heading">
        Results-Driven Digital Marketing Services<br />in Abu Dhabi, UAE
      </SectionHeading>
      <div className="services-grid">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}
