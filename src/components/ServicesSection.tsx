import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { serviceIcons } from "./Icons";
import { services } from "@/lib/site";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
      >
        <svg viewBox="0 0 1200 600" className="size-full" fill="none">
          <g stroke="#c8a06a" strokeWidth="1">
            <circle cx="1050" cy="120" r="180" />
            <circle cx="1050" cy="120" r="120" />
            <circle cx="140" cy="500" r="150" />
            <path d="M0 300h1200M0 380h1200" strokeDasharray="3 14" />
          </g>
        </svg>
      </div>

      <div className="container-x relative">
        <SectionHeading
          eyebrow="What we offer"
          title="Reliable Export Solutions for Global Food Businesses"
          body="From sourcing the right grade to clearing the paperwork, we handle what it takes to move quality ingredients across borders."
          light
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 90}
                className="group bg-ink p-8 transition-colors duration-300 hover:bg-ink-deep lg:p-10"
              >
                <span className="flex size-14 items-center justify-center rounded-full border border-white/15 text-gold-400 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  {s.body}
                </p>
              </Reveal>
            );
          })}

          {/* Filler cell keeps the 3-col grid tidy */}
          <div className="hidden bg-ink lg:block" />
        </div>
      </div>
    </section>
  );
}
