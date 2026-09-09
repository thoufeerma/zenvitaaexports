import Image from "next/image";
import Reveal from "./Reveal";
import { highlights } from "@/lib/site";

export default function FeatureStrip() {
  return (
    <section className="relative z-10 -mt-px bg-white">
      <div className="container-x">
        <div className="grid divide-y divide-cream-dark border-x border-b border-cream-dark bg-white md:grid-cols-3 md:divide-x md:divide-y-0 lg:-mt-16 lg:rounded-b-2xl lg:shadow-[0_20px_60px_rgba(31,31,31,0.07)]">
          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              delay={i * 110}
              className="group p-8 transition-colors hover:bg-cream/60 lg:p-10"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-cream p-3.5 transition-colors duration-300 group-hover:bg-gold-100">
                <Image
                  src={h.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="size-full object-contain"
                />
              </span>
              <h3 className="mt-6 text-xl">{h.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {h.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
