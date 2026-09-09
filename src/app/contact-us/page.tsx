import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AppointmentForm from "@/components/AppointmentForm";
import { company } from "@/lib/site";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  DocIcon,
  SocialIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Zenvitaa Exports in Kakkanad, Ernakulam for product enquiries, export supply and partnership opportunities.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    "Asten Viveria, Thengode, Kakkanad, Ernakulam, Kerala 682030",
  );

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        body="We would love to hear from you. Send us your requirement and our export team will take it from there."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Our Office</span>
                <h2 className="mt-4 text-3xl sm:text-4xl">
                  {company.legalName}
                </h2>
              </Reveal>

              <dl className="mt-9 space-y-7">
                <Reveal delay={80} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-600">
                    <PinIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-600 uppercase">
                      Address
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                      {company.address.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={140} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-600">
                    <PhoneIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-600 uppercase">
                      Phone
                    </dt>
                    <dd className="mt-1.5 space-y-1 text-[15px] text-ink-soft">
                      {company.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block transition-colors hover:text-gold-600"
                        >
                          {p}
                        </a>
                      ))}
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={200} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-600">
                    <MailIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-600 uppercase">
                      Email
                    </dt>
                    <dd className="mt-1.5 text-[15px] text-ink-soft">
                      <a
                        href={`mailto:${company.email}`}
                        className="break-all transition-colors hover:text-gold-600"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={260} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-600">
                    <DocIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-600 uppercase">
                      GSTIN
                    </dt>
                    <dd className="mt-1.5 text-[15px] text-ink-soft">
                      {company.gstin}
                    </dd>
                  </div>
                </Reveal>
              </dl>

              <Reveal delay={320}>
                <div className="mt-9 flex gap-3">
                  {company.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-11 items-center justify-center rounded-full border border-cream-dark text-gold-600 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                    >
                      <SocialIcon name={s.label} className="size-[18px]" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={120} className="lg:col-span-7">
              <div className="rounded-2xl border border-cream-dark bg-cream/40 p-7 sm:p-10">
                <h2 className="text-2xl sm:text-3xl">Send us a message</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  Share the products and volumes you are after and we will
                  respond with specifications and pricing.
                </p>
                <div className="mt-8">
                  <AppointmentForm variant="message" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream/60 pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Find us"
            title="Visit Our Office"
            body="We are based in Kakkanad, Ernakulam — a short drive from Kochi."
          />
          <Reveal delay={120} className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-cream-dark shadow-[0_10px_40px_rgba(31,31,31,0.07)]">
              <iframe
                title="Zenvitaa Exports office location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 lg:h-[460px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
