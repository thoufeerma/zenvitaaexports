import Image from "next/image";
import Reveal from "./Reveal";
import AppointmentForm from "./AppointmentForm";
import { servicesImages } from "@/lib/site";

export default function RequestInfo() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <Reveal>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-cream">
              <Image
                src={servicesImages.request}
                alt="Bowl of food ingredient powder on a wooden board"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={140}>
            <h2 className="text-3xl leading-[1.15] font-semibold sm:text-4xl">
              Request Product Information
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Interested in our food ingredient powders or export services?
              <br />
              Send us your inquiry and our team will respond with product
              details and supply options.
            </p>

            <div className="mt-8">
              <AppointmentForm variant="request" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
