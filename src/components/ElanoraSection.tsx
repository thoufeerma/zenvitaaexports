import Image from "next/image";
import Reveal from "./Reveal";
import { elanora } from "@/lib/site";

export default function ElanoraSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
          {/* Wordmark and copy */}
          <Reveal className="lg:pr-16">
            <div className="relative h-14 w-[15rem] sm:h-16 sm:w-[17rem]">
              <Image
                src={elanora.wordmark}
                alt="Elanora"
                fill
                sizes="17rem"
                className="object-contain object-left"
              />
            </div>

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-soft">
              {elanora.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          {/* Brand logo */}
          <Reveal
            delay={140}
            className="flex items-center justify-center lg:border-l lg:border-cream-dark lg:pl-16"
          >
            <div className="relative aspect-3/2 w-full max-w-md">
              <Image
                src={elanora.logo}
                alt="Elanora brand mark"
                fill
                sizes="(max-width: 1024px) 80vw, 28rem"
                className="object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
