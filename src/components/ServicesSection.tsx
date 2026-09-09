import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { serviceIcons, ShipIcon } from "./Icons";
import { services } from "@/lib/site";

/** The amber the source site uses for these cards */
const AMBER = "#eeb203";

type Props = {
  /** "dark" is the homepage band; "light" is the /services treatment. */
  variant?: "dark" | "light";
};

export default function ServicesSection({ variant = "dark" }: Props) {
  if (variant === "light") return <LightVariant />;

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Faint gold linework, matching the hero backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
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
        />

        {/*
          Five cards over three columns leaves an odd final row, so this wraps
          with flex and centres it rather than leaving the last two hanging left.
        */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 90}
                className="group w-full rounded-2xl border border-cream-dark bg-white p-8 shadow-[0_2px_18px_rgba(31,31,31,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-[0_22px_50px_rgba(31,31,31,0.1)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] lg:p-10"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-cream text-gold-600 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LightVariant() {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <span className="eyebrow eyebrow-center">What we offer</span>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 90}
              className="flex w-full flex-col items-center rounded-2xl border-2 border-[#eeb203]/50 bg-white p-8 text-center shadow-[0_0_22px_rgba(238,178,3,0.16)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#eeb203] hover:shadow-[0_10px_34px_rgba(238,178,3,0.28)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] lg:p-10"
            >
              <span className="flex h-20 items-center justify-center">
                {s.icon ? (
                  <Image
                    src={s.icon}
                    alt=""
                    width={72}
                    height={72}
                    className="size-[72px] object-contain"
                  />
                ) : (
                  // No icon supplied for this one, so keep the slot filled
                  <span style={{ color: AMBER }}>
                    <ShipIcon className="size-[52px]" />
                  </span>
                )}
              </span>

              <h3
                className="mt-5 text-xl leading-snug font-normal"
                style={{ color: AMBER }}
              >
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
