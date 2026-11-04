import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceLocations } from "@/data/siteData";

export default function Locations() {
  return (
    <section id="service-locations" className="locations-section" aria-labelledby="locations-heading">
      <SectionHeading id="locations-heading">Other Digital Marketing Services Location</SectionHeading>
      <nav className="locations-grid" aria-label="Digital marketing service locations">
        {serviceLocations.map((column, index) => (
          <ul key={index}>
            {column.map(({ label, href }) => (
              <li key={label}>
                <Image src="/assets/icons/location-pin.png" alt="" width={19} height={24} />
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </section>
  );
}
