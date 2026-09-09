import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { applications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Global export services for food ingredient supply — sourcing, shipping coordination, distribution support and export documentation.",
};

const steps = [
  {
    title: "Share your requirement",
    body: "Tell us the product, grade, packaging and annual volume you are planning around.",
  },
  {
    title: "Specification and quote",
    body: "We return a spec sheet and landed pricing for your destination port.",
  },
  {
    title: "Sampling and approval",
    body: "Samples go out for your quality team to test against their own standards.",
  },
  {
    title: "Production and dispatch",
    body: "Confirmed orders are produced, documented and shipped to schedule.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Services"
        body="Global export services for food ingredient supply — from sourcing the right grade through to the paperwork that clears it."
      />

      <ServicesSection />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Consistent &amp; Reliable Global Supply"
            body="A straightforward path from first enquiry to a shipment on the water."
          />

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.title}
                as="li"
                delay={(i % 4) * 100}
                className="relative rounded-2xl border border-cream-dark bg-cream/40 p-8"
              >
                <span className="font-display text-4xl text-gold-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Where the ingredients are used */}
      <section className="bg-cream/60 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Applications"
            title="Built for Real Production Lines"
            body="Our powders and coconut products are formulated for the industries that buy them in volume."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 100}
                as="article"
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_18px_rgba(31,31,31,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(31,31,31,0.1)]"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg">{a.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AppointmentSection />
      <ContactSection />
    </>
  );
}
