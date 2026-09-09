import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  company,
  homeImages,
  aboutImages,
  aboutParagraphs,
} from "@/lib/site";

type Props = {
  /**
   * "home" puts the photo on the left with spaced paragraphs; "about" mirrors
   * it to the right, tightens the copy and adds the Learn More button.
   */
  variant?: "home" | "about";
};

export default function AboutSection({ variant = "home" }: Props) {
  const isAbout = variant === "about";
  const image = isAbout ? aboutImages.whoWeAre : homeImages.about;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <Reveal
            className={`order-2 ${isAbout ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl bg-cream">
              <Image
                src={image}
                alt={
                  isAbout
                    ? "Fresh coconut being opened by hand"
                    : "Coconuts being sorted on the processing line"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div className={`order-1 ${isAbout ? "lg:order-1" : "lg:order-2"}`}>
            <Reveal>
              <span className="eyebrow eyebrow-plain">Who we are</span>
              <h2 className="mt-4 text-3xl leading-[1.15] font-semibold sm:text-4xl lg:text-[42px]">
                About {company.name}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div
                className={`mt-6 text-[16px] leading-relaxed text-ink-soft ${
                  isAbout ? "space-y-0" : "space-y-4"
                }`}
              >
                {aboutParagraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            {isAbout ? (
              <Reveal delay={180}>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center rounded-md bg-gold-400 px-6 py-3.5 font-display text-[15px] font-medium text-ink underline underline-offset-4 transition-all hover:bg-gold-500 hover:text-white"
                >
                  Learn More
                </Link>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
