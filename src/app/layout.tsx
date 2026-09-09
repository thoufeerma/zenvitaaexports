import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenvitaaexports.com"),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.intro,
  keywords: [
    "coconut milk powder",
    "desiccated coconut",
    "virgin coconut oil",
    "mango powder",
    "taro powder",
    "food ingredient exporter",
    "Kerala exporter",
  ],
  openGraph: {
    type: "website",
    siteName: company.legalName,
    title: `${company.name} | ${company.tagline}`,
    description: company.intro,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: "https://zenvitaaexports.com",
    email: company.email,
    telephone: company.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 4D, Tower 2, Asten Viveria, Thengode",
      addressLocality: "Kakkanad, Ernakulam",
      postalCode: "682030",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: company.socials.map((s) => s.href),
  };

  return (
    <html lang="en" className={`${inter.variable} ${jost.variable}`}>
      <body className="antialiased">
        {/* Scroll reveals start hidden and are shown by JS. If scripting is
            off they would never appear, so force them visible instead. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
