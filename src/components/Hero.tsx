import Image from "next/image";
import Link from "next/link";
import FadeUp from "./FadeUp";
import { ArrowIcon } from "./Icons";
import { company, stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Soft botanical backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
      >
        <svg
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
          className="size-full"
          fill="none"
        >
          <defs>
            <radialGradient id="hero-glow" cx="0.72" cy="0.35" r="0.6">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1200" height="700" fill="url(#hero-glow)" />
          <g stroke="#c8a06a" strokeOpacity="0.35" strokeWidth="1.1" fill="none">
            {/* palm fronds */}
            <path d="M1080 40c-70 60-110 150-120 250" />
            <path d="M1080 40c10 80-10 170-60 240M1080 40c-60 20-130 80-170 160M1080 40c60 40 100 110 110 200" />
            <path d="M120 660c60-70 90-160 90-260" />
            <path d="M120 660c-20-80-6-170 40-244M120 660c56-26 120-92 150-176M120 660c-56-46-88-120-92-212" />
          </g>
          <g fill="#c8a06a" fillOpacity="0.12">
            <circle cx="960" cy="560" r="120" />
            <circle cx="200" cy="120" r="80" />
          </g>
        </svg>
      </div>

      <div className="container-x relative py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeUp>
              <span className="eyebrow">Welcome to {company.name}</span>
            </FadeUp>

            <FadeUp delay={90}>
              <h1 className="mt-5 text-[38px] leading-[1.08] sm:text-5xl lg:text-[58px]">
                Our Premium
                <br />
                <span className="text-gold-600">Food Ingredients</span>
              </h1>
            </FadeUp>

            <FadeUp delay={180}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">
                Semi-husked coconuts, coconut milk powder, desiccated coconut,
                virgin coconut oil, mango powder, bubble tea taro powder and
                sweet potato powder — sourced in Kerala and shipped to food
                manufacturers around the world.
              </p>
            </FadeUp>

            <FadeUp delay={270}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <Link
                  href="/#products"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 font-display text-sm tracking-[0.14em] text-white uppercase transition-all hover:bg-gold-600 hover:shadow-[0_10px_30px_rgba(200,160,106,0.4)]"
                >
                  Explore Products
                  <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-7 py-3.5 font-display text-sm tracking-[0.14em] text-ink uppercase transition-all hover:border-ink hover:bg-ink hover:text-white"
                >
                  Contact Us
                </Link>
                <Link
                  href="/coir-mats"
                  className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-display text-sm tracking-[0.14em] text-gold-600 uppercase underline-offset-4 transition-all hover:underline"
                >
                  Coir Mats
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={360}>
              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-gold-300/50 pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl text-gold-600">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-[13px] leading-snug text-ink-soft">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* Hero visual */}
          <FadeUp delay={200} className="relative">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute inset-0 rotate-3 rounded-[2rem] border border-gold-300/60" />
              <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(31,31,31,0.12)]">
                <Image
                  src="/images/about-coconuts.jpg"
                  alt="Fresh coconuts, the base of the Zenvitaa range"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 28rem"
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_rgba(31,31,31,0.14)] sm:-left-8">
                <p className="font-display text-sm tracking-wide text-ink">
                  Spray-dried
                </p>
                <p className="mt-0.5 text-xs text-ink-soft">
                  Export-grade consistency
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
