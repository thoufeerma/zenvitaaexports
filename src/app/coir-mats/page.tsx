import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CoirSpecs from "@/components/CoirSpecs";
import {
  coirImages,
  coirPillars,
  coirAbout,
  coirCollection,
  coirProducts,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Coir Mats",
  description:
    "PVC tufted coir mats, polypropylene mats and rubber mats — crafted to welcome every space.",
};

export default function CoirMatsPage() {
  return (
    <>
      {/*
        Supplied as a finished banner with its own typography, so it is placed
        whole rather than rebuilt as overlaid text.
      */}
      <section className="bg-white">
        <Image
          src={coirImages.hero}
          alt="Crafted to Welcome — premium coir doormats and mats"
          width={1598}
          height={750}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* Pillars, lifted over the banner edge */}
      <section className="bg-white">
        <div className="container-x">
          <div className="relative -mt-8 grid gap-8 rounded-2xl bg-white p-8 shadow-[0_14px_50px_rgba(31,31,31,0.10)] sm:p-10 md:grid-cols-3 lg:-mt-14 lg:gap-10">
            {coirPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="text-center">
                <h3 className="text-xl font-semibold text-coir">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-cream">
                <Image
                  src={coirImages.whoWeAre}
                  alt="Rolls of natural coir matting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="eyebrow eyebrow-plain text-coir before:bg-coir">
                  Who we are
                </span>
                <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[42px]">
                  {coirAbout.title}
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-soft">
                  {coirAbout.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="bg-[#f7f7f7] py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl leading-[1.2] font-semibold sm:text-4xl lg:text-[42px]">
              {coirCollection.title}
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
              {coirCollection.intro}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coirProducts.map((p, i) => (
              <Reveal
                key={p.name}
                as="article"
                delay={(i % 3) * 100}
                className="group flex flex-col rounded-2xl bg-white p-8 text-center shadow-[0_2px_20px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(31,31,31,0.11)]"
              >
                {/*
                  The three source files run from 1:1 to 2.5:1, so they are
                  contained in a shared box — nothing crops and the cards align.
                */}
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-xl font-medium">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CoirSpecs />
    </>
  );
}
