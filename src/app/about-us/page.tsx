import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { certificates } from "@/lib/site";
import { LeafIcon, ShieldIcon, GlobeIcon, BoxIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Zenvitaa Exports Private Limited supplies coconut-based products and spray-dried food powders from Kerala to international markets.",
};

const standards = [
  {
    icon: ShieldIcon,
    title: "Quality Assurance",
    body: "Every consignment is checked against agreed specifications before it leaves for the port.",
  },
  {
    icon: LeafIcon,
    title: "Sourced at Origin",
    body: "Working directly in Kerala's coconut belt keeps freshness high and the supply chain short.",
  },
  {
    icon: GlobeIcon,
    title: "Global Standards",
    body: "Certified manufacturing partners operating to systems recognised by international buyers.",
  },
  {
    icon: BoxIcon,
    title: "Dependable Supply",
    body: "Production planned around your ordering cycle so stock is there when you need it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Us"
        body="A Kerala-based exporter of coconut products and premium food powders, built around consistent quality and dependable supply."
      />

      <AboutSection />

      <section className="bg-cream/60 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Ensuring Quality, Safety and Global Standards"
            body="We hold to the quality and safety expectations of the markets we ship into, so buyers can put our ingredients straight into production."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 4) * 90}
                className="group rounded-2xl bg-white p-8 shadow-[0_2px_18px_rgba(31,31,31,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(31,31,31,0.1)]"
              >
                <span className="flex size-13 items-center justify-center rounded-full bg-cream p-3.5 text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Registrations"
            title="Licensed and Registered"
            body="Our licences and registrations are available to buyers on request."
          />

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {certificates.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 110}
                className="overflow-hidden rounded-2xl border border-cream-dark bg-cream/40 p-5"
              >
                <div className="relative aspect-3/4 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={c.src}
                    alt={c.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center font-display text-sm tracking-[0.14em] text-gold-600 uppercase">
                  {c.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
