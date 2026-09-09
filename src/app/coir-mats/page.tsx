import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Illustration from "@/components/Illustration";
import ContactSection from "@/components/ContactSection";
import { coirProducts } from "@/lib/site";
import { LeafIcon, ShieldIcon, GlobeIcon, ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Coir Mats",
  description:
    "PVC tufted coir mats, polypropylene mats, full rubber mats and coir geotextiles — crafted to welcome every space.",
};

const pillars = [
  {
    icon: LeafIcon,
    title: "Premium Quality Materials",
    body: "Natural coconut fibre and hard-wearing backings chosen to last through heavy use.",
  },
  {
    icon: ShieldIcon,
    title: "Custom Manufacturing",
    body: "Sizes, thicknesses, colours and branding produced to your specification.",
  },
  {
    icon: GlobeIcon,
    title: "Global Export Standards",
    body: "Packed and documented for container shipment to retail and contract buyers worldwide.",
  },
];

export default function CoirMatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Crafted to Welcome Every Space"
        crumb="Coir Mats"
        body="A premium coir and floor mat collection — natural fibre, rubber and polypropylene matting made for entrances that take real traffic."
      />

      {/* Pillars */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 110}
                className="group rounded-2xl border border-cream-dark bg-cream/40 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:bg-white hover:shadow-[0_22px_50px_rgba(31,31,31,0.1)] lg:p-10"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-white text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="bg-cream/60 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Collection"
            title="Premium Coir &amp; Floor Mat Collection"
            body="Five matting families covering entrance scraping, wet areas, high-traffic interiors and outdoor ground stabilisation."
          />

          <div className="mt-14 space-y-6">
            {coirProducts.map((p, i) => (
              <Reveal
                key={p.name}
                as="article"
                delay={(i % 2) * 90}
                className="group grid overflow-hidden rounded-2xl bg-white shadow-[0_2px_18px_rgba(31,31,31,0.05)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(31,31,31,0.1)] lg:grid-cols-12"
              >
                <div
                  className={`relative aspect-video overflow-hidden bg-cream lg:col-span-5 lg:aspect-auto ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Illustration
                      kind={p.kind}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-12">
                  <span className="font-display text-[11px] tracking-[0.2em] text-gold-600 uppercase">
                    {String(i + 1).padStart(2, "0")} — Collection
                  </span>
                  <h3 className="mt-3 text-2xl">{p.name}</h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-full bg-cream px-4 py-1.5 text-[13px] text-ink-soft"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact-us"
                    className="mt-7 inline-flex items-center gap-2 self-start font-display text-[13px] tracking-[0.14em] text-gold-600 uppercase transition-colors hover:text-gold-700"
                  >
                    Enquire about this range
                    <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
