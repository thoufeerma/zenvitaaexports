import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";
import { company } from "@/lib/site";

const pillars = [
  "Product integrity from sourcing through to shipment",
  "Certified manufacturing partners and documented quality systems",
  "Specifications built around food, beverage and bakery applications",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/images/about-manufacturing.jpg"
                alt="Coconuts being sorted on the processing line"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Overlay card */}
            <div className="absolute -right-3 bottom-6 max-w-[16rem] rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(31,31,31,0.12)] lg:-right-8">
              <p className="font-display text-3xl text-gold-600">Kerala</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                Sourced at origin, on India&apos;s coconut coast
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="eyebrow">Who we are</span>
              <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[42px]">
                About {company.name}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink-soft">
                <p>
                  {company.legalName} is a Kerala-based export company supplying
                  coconut-based products and premium food powders to global
                  markets. Our portfolio spans semi-husked coconuts, coconut milk
                  powder, desiccated coconut, virgin coconut oil, mango powder,
                  bubble tea taro powder and sweet potato powder.
                </p>
                <p>
                  These ingredients are put to work across food manufacturing,
                  beverage production, bakery, confectionery and specialty
                  segments — where consistency and functional performance matter
                  as much as flavour.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-8 space-y-3.5">
                {pillars.map((p) => (
                  <li key={p} className="flex gap-3.5 text-[15px] text-ink-soft">
                    <span className="mt-[7px] flex size-4 shrink-0 items-center justify-center rounded-full border border-gold-400">
                      <span className="size-1.5 rounded-full bg-gold-500" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <Link
                href="/about-us"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 font-display text-sm tracking-[0.14em] text-white uppercase transition-all hover:bg-gold-500"
              >
                Learn More
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
