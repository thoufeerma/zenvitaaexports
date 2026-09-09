import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Illustration from "./Illustration";
import { ArrowIcon } from "./Icons";
import { products } from "@/lib/site";

export default function ProductGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;

  return (
    <section id="products" className="scroll-mt-24 bg-cream/60 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title="Our Premium Food Ingredients"
          body="High-quality coconut products and food powders built for beverage, bakery, dessert and food processing industries."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 3) * 90}
              as="article"
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_18px_rgba(31,31,31,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(31,31,31,0.11)]"
            >
              <div className="relative aspect-3/2 overflow-hidden bg-cream">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Illustration
                    kind={p.kind}
                    className="size-full transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-display text-[11px] tracking-[0.16em] text-gold-600 uppercase backdrop-blur">
                  Export grade
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg leading-snug">{p.name}</h3>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
                <Link
                  href="/contact-us"
                  className="mt-5 inline-flex items-center gap-2 font-display text-[13px] tracking-[0.14em] text-gold-600 uppercase transition-colors hover:text-gold-700"
                >
                  Request a quote
                  <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
