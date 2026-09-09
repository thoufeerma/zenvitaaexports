import Image from "next/image";
import Reveal from "./Reveal";
import { futureOfFood } from "@/lib/site";

export default function FutureOfFood() {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-[1.2] font-semibold sm:text-4xl lg:text-[42px]">
            The Future of Food: Why Choose Vegetarian and Organic Options.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Sourced from premium coconuts and processed with precision to ensure
            superior quality, purity, and performance across diverse food and
            industrial applications.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {futureOfFood.map((item, i) => (
            <Reveal
              key={item.name}
              as="article"
              delay={(i % 2) * 110}
              className="group flex flex-col rounded-2xl bg-white p-8 text-center shadow-[0_2px_20px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(31,31,31,0.11)] lg:p-10"
            >
              {/* Cut-out product shots sit on white, so contain rather than cover */}
              <div className="relative mx-auto aspect-square w-full max-w-[16rem]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 60vw, 16rem"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-8 text-2xl font-normal text-gold-500">
                {item.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
