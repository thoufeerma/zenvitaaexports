import Image from "next/image";
import Reveal from "./Reveal";
import { servicesImages, servicesIntro } from "@/lib/site";
import { LeafIcon, CheckIcon, HandshakeIcon } from "./Icons";

const icons = {
  leaf: LeafIcon,
  check: CheckIcon,
  handshake: HandshakeIcon,
};

export default function ServicesIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="eyebrow eyebrow-plain">Our Services</span>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[42px]">
                Reliable Export Solutions for Global Food Businesses
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-ink-soft">
                {servicesIntro.lead}
              </p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {servicesIntro.points.map((p, i) => {
                const Icon = icons[p.icon];
                return (
                  <Reveal key={p.title} delay={i * 110} className="flex gap-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#6f665c] text-white">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                        {p.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Photo */}
          <Reveal delay={140}>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-cream lg:sticky lg:top-28">
              <Image
                src={servicesImages.intro}
                alt="Coconut halves held in both hands"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
