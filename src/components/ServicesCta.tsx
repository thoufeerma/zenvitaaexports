import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { servicesImages, servicesCta } from "@/lib/site";

export default function ServicesCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 lg:py-32">
      <Image
        src={servicesImages.cta}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/35"
      />

      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl leading-[1.15] font-semibold text-white sm:text-4xl lg:text-[42px]">
            {servicesCta.title}
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/80">
            {servicesCta.body}
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center rounded-md bg-gold-400 px-6 py-3.5 font-display text-[15px] font-medium text-ink underline underline-offset-4 transition-all hover:bg-gold-500 hover:text-white"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
