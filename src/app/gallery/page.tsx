import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Coconut products, food ingredient powders and beverage applications supplied by Zenvitaa Exports.",
};

export default function GalleryPage() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-x">
        <h1 className="text-4xl font-semibold sm:text-5xl">Gallery</h1>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 4) * 70}
              className="group overflow-hidden rounded-xl bg-cream"
            >
              {/* 3:2 matches the bulk of the source files, so little is cropped */}
              <div className="relative aspect-3/2">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
