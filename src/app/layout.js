
import "./globals.css";

export const metadata = {
  title: "BrandStory | Digital Marketing Agency in Abu Dhabi",
  description:
    "BrandStory delivers digital marketing strategies, SEO, social media marketing and PPC services in Abu Dhabi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
