import Image from "next/image";
import { clientLogos } from "@/data/siteData";

const logoRows = [clientLogos.slice(0, 6), clientLogos.slice(6)];

export default function BrandCarousel() {
  return (
    <section className="hero-brands" aria-labelledby="trusted-brands-heading">
      <h2 id="trusted-brands-heading">Trusted by Top Brands Across Industries</h2>
      <div className="brand-rows">
        {logoRows.map((logos, index) => (
          <div
            className="brand-row"
            key={logos[0].id}
            role="region"
            aria-label={`Trusted brands row ${index + 1}, scroll horizontally to see all logos`}
            tabIndex={0}
          >
            <ul className="brand-grid">
              {logos.map(({ id, src, alt, width, height }) => (
                <li key={id}>
                  <Image src={src} alt={alt} width={width} height={height} sizes={`${width}px`} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
