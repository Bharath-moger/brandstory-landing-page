import Link from "next/link";
import Image from "next/image";
import { contactEmail, footerLinks, footerServices, footerSocials } from "@/data/siteData";

function FooterLinkColumn({ title, links }) {
  return (
    <nav className="footer-column" aria-label={`Footer ${title}`}>
      <h2>{title}</h2>
      <ul>{links.map(({ label, href }) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
    </nav>
  );
}

const socialIcons = {
  in: "Image (4).svg",
  play: "Image (3).svg",
  f: "Image (2).svg",
  camera: "Image (1).svg",
  t: "Image.svg",
};

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <a className="footer-location-link" href="https://www.brandstory.ae/digital-marketing-agency-in-ajman/">Digital Marketing Agency Ajman</a>
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="footer-wordmark" aria-label="BrandStory home">BRANDSTORY</Link>
            <p>The BrandStory team has industry expertise and cutting-edge digital capabilities to help clients connect with their audiences in complex environments. We can’t wait for you join us on this journey!</p>
            <a className="footer-sales" href="https://www.brandstory.ae/contact/">Contact Sales</a>
            <address>
              <span>Head Office:</span>
              Villa No 1, Westar Les Maisonettes,District 10, Street 5 ,Jumeirah Village Circle, Dubai, United Arab Emirates.
            </address>
          </div>
          <FooterLinkColumn title="Our Links" links={footerLinks} />
          <FooterLinkColumn title="Services" links={footerServices} />
          <section className="footer-column footer-contact" aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading">Contact</h2>
            <address>
              <p>Phone:<br /><a href="tel:+971522831655">+971 52 283 1655</a></p>
              <p>Email:<br /><a href={contactEmail}>info@brandstory.ae</a></p>
              <p>Address:<br /><a href="https://www.google.com/maps/place/Brandstory/@25.262923,55.3329919,15z/data=!4m5!3m4!1s0x0:0xcb6dc8a6ec14f4a2!8m2!3d25.262923!4d55.3329919" target="_blank" rel="noopener noreferrer">G5, Al Meheri Plaza, opp DBC Building, Al Khabaisi Area, Deira Dubai - 81577, United Arab Emirates</a></p>
            </address>
          </section>
          <nav className="footer-column footer-social" aria-label="Follow BrandStory">
            <h2>Follow us</h2>
            <ul>
              {footerSocials.map(({ label, symbol, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>
                    <Image src={`/assets/partner-badges/${socialIcons[symbol]}`} width={symbol === "camera" ? 20 : 19} height={27} alt="" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © Brandstory, All Rights Reserved 2025 <span aria-hidden="true">|</span> <a href="https://www.brandstory.ae/terms-and-conditions/">Terms &amp; Conditions</a> <span aria-hidden="true">|</span> <a href="https://www.brandstory.ae/privacy-policy/">Privacy Policy</a></p>
      </div>
      <div className="footer-partners">
        <Image
          src="/assets/partner-badges/partner-strip.png"
          width={1512}
          height={87}
          sizes="(max-width: 900px) 900px, 100vw"
          alt="Google Partner, Bing Partner, Facebook Marketing Partner, and HubSpot Certified Partner"
        />
      </div>
    </footer>
  );
}
