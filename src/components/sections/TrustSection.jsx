import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { trustCards } from "@/data/siteData";

export default function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="trust-intro">
        <SectionHeading id="trust-heading">
          Your Trusted Digital Marketing Partner in Abu Dhabi
        </SectionHeading>
        <p>
          Selecting the right digital marketing partner in Abu Dhabi is essential to ensure your brand connects with the right audience, maximizes ROI, and achieves sustainable growth in a competitive market.
        </p>
      </div>
      <div className="trust-grid">
        {trustCards.map(({ id, title, image, description }) => (
          <article className="trust-card" key={id} aria-labelledby={`trust-${id}`}>
            <Image className="trust-card-image" src={image} alt="" width={195} height={195} sizes="195px" />
            <h3 id={`trust-${id}`}>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
