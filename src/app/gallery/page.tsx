import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at the coconut products, food ingredient powders and coir matting supplied by Zenvitaa Exports.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Gallery"
        body="Coconut products, spray-dried food powders and coir matting — the range we supply to buyers worldwide."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we supply"
            title="A Look at Our Range"
            body="Products, processing and packed goods across our coconut, food powder and coir lines."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <Reveal
                key={item.src}
                delay={(i % 3) * 80}
                as="article"
                className="group relative overflow-hidden rounded-2xl bg-cream shadow-[0_2px_18px_rgba(31,31,31,0.05)]"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Caption reveals over the image on hover */}
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-5 pt-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div>
                      <p className="font-display text-[11px] tracking-[0.18em] text-gold-400 uppercase">
                        {item.group}
                      </p>
                      <h3 className="mt-1 text-base text-white">{item.alt}</h3>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
