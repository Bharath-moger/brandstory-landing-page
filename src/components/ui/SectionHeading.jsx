export default function SectionHeading({ id, children, className = "" }) {
  return <h2 id={id} className={`section-heading ${className}`.trim()}>{children}</h2>;
}
