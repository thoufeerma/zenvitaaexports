import Image from "next/image";
import Link from "next/link";
import FadeUp from "./FadeUp";
import { ArrowIcon } from "./Icons";
import { company, stats, homeImages } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Backdrop */}
      <Image
        src={homeImages.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Scrim: darker on the left so the copy stays legible over the canopy */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/70 to-ink/25"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent"
      />

      <div className="container-x relative py-24 lg:py-32">
        <div className="max-w-2xl">
          <FadeUp>
            <span className="eyebrow text-gold-400 before:bg-gold-400">
              Welcome to {company.name}
            </span>
          </FadeUp>

          <FadeUp delay={90}>
            <h1 className="mt-5 text-[38px] leading-[1.08] text-white sm:text-5xl lg:text-[58px]">
              Our Premium
              <br />
              <span className="text-gold-400">Food Ingredients</span>
            </h1>
          </FadeUp>

          <FadeUp delay={180}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
              Semi-husked coconuts, coconut milk powder, desiccated coconut,
              virgin coconut oil, mango powder, bubble tea taro powder and sweet
              potato powder — sourced in Kerala and shipped to food manufacturers
              around the world.
            </p>
          </FadeUp>

          <FadeUp delay={270}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href="/#products"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 font-display text-sm tracking-[0.14em] text-white uppercase transition-all hover:bg-gold-600 hover:shadow-[0_10px_30px_rgba(200,160,106,0.45)]"
              >
                Explore Products
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/coir-mats"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/35 px-7 py-3.5 font-display text-sm tracking-[0.14em] text-white uppercase backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-ink"
              >
                Explore Coir Mats
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/35 px-7 py-3.5 font-display text-sm tracking-[0.14em] text-white uppercase backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-ink"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={360}>
            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-white/20 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl text-gold-400">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[13px] leading-snug text-white/70">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
