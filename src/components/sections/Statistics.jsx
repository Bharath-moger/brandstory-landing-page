import SectionHeading from "@/components/ui/SectionHeading";
import { statistics } from "@/data/siteData";

export default function Statistics() {
  return (
    <section className="statistics-section" aria-labelledby="statistics-heading">
      <div className="statistics-container">
        <div className="statistics-banner">
          <SectionHeading id="statistics-heading">Our Statistics</SectionHeading>
        </div>
        <dl className="statistics-grid">
          {statistics.map(({ id, value, label }) => (
            <div className="statistics-card" key={id}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
