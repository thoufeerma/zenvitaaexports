import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { whyChooseUs, company } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section className="bg-cream/60 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={`Why Choose ${company.name}`}
          body="Three reasons buyers keep coming back to us for coconut products and food powders."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 110}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-[0_2px_18px_rgba(31,31,31,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(31,31,31,0.1)] lg:p-10"
            >
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-cream font-display text-xl text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl">{w.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {w.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
