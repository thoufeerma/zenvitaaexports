import Image from "next/image";
import Reveal from "./Reveal";
import { tropicalProducts } from "@/lib/site";

export default function TropicalProducts() {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-center">Our Products</span>
          <h2 className="mt-4 text-3xl leading-[1.2] font-semibold sm:text-4xl lg:text-[42px]">
            Premium Tropical Food Ingredients for Global Markets
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tropicalProducts.map((p, i) => (
            <Reveal
              key={p.name}
              as="article"
              delay={(i % 3) * 100}
              className="group flex flex-col rounded-2xl bg-white p-6 text-center shadow-[0_2px_20px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(31,31,31,0.11)]"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-cream">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-xl font-normal text-gold-500">
                {p.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
