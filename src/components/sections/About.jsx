import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-layout">
        <div className="about-illustration">
          <Image
            src="/assets/illustrations/marketing-expert.png"
            alt="Digital marketing expert holding a laptop, surrounded by campaign charts and social media graphics"
            width={988}
            height={988}
            sizes="(max-width: 767px) 130vw, 66vw"
          />
        </div>
        <div className="about-content">
          <SectionHeading id="about-heading">
            We are Digital Marketing<br className="about-heading-break" /> Experts in Abu Dhabi
          </SectionHeading>
          <ul className="about-points">
            <li>
              BrandStory has been delivering digital marketing and growth engineering services to clients across Dubai and the UAE since 2014. With an expert team of digital marketers, we power up global brands through search engine optimization, Google Ads and Bing Ads, Social Media, influencer marketing, website design and development services.
            </li>
            <li>
              Our expertise spans SEO, PPC, social media marketing, online reputation management, content strategy, email marketing, branding, and website development. Our goal is improving your business visibility, increasing qualified traffic, and converting engagement into real business value. At BrandStory, we skip shortcuts and deeply study Abu Dhabi’s industry landscape, audience behavior, and competition to create digital campaigns that resonate locally.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
