import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import AppointmentForm from "@/components/AppointmentForm";
import { company, contactImages } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Zenvitaa Exports in Kakkanad, Ernakulam for product enquiries, export supply and partnership opportunities.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    "Asten Viveria Apartment, Thrikkakara, Kakkanad, Ernakulam, Kerala 682030",
  );

  return (
    <>
      <PageHero
        title="Contact Us"
        body="We would love to hear from you."
        image={contactImages.hero}
        align="left"
        showCrumb={false}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Get in touch */}
            <div>
              <Reveal>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Get in touch
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                  Have questions about our food ingredient powders or export
                  services?
                  <br />
                  Contact our team to learn more about our products and global
                  export services.
                </p>
              </Reveal>

              <hr className="my-9 border-cream-dark" />

              <dl className="space-y-8">
                <Reveal className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-100 text-ink">
                    <PinIcon className="size-6" />
                  </span>
                  <div>
                    <dt className="text-lg font-semibold text-ink">
                      Our Office
                    </dt>
                    <dd className="mt-1 text-[16px] leading-relaxed text-ink-soft">
                      {company.legalName} {company.address.lines.join(" ")}
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={90} className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-100 text-ink">
                    <MailIcon className="size-6" />
                  </span>
                  <div>
                    <dt className="text-lg font-semibold text-ink underline underline-offset-4">
                      Email us
                    </dt>
                    <dd className="mt-1 text-[16px] text-ink-soft">
                      <a
                        href={`mailto:${company.email}`}
                        className="break-all underline underline-offset-4 transition-colors hover:text-gold-600"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={180} className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-100 text-ink">
                    <PhoneIcon className="size-6" />
                  </span>
                  <div>
                    <dt className="text-lg font-semibold text-ink underline underline-offset-4">
                      Call us
                    </dt>
                    <dd className="mt-1 space-y-0.5 text-[16px] text-ink-soft">
                      {company.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          className="block underline underline-offset-4 transition-colors hover:text-gold-600"
                        >
                          {p}
                        </a>
                      ))}
                    </dd>
                  </div>
                </Reveal>
              </dl>
            </div>

            {/* Send us a message */}
            <Reveal delay={140}>
              <div className="rounded-2xl bg-white p-7 shadow-[0_10px_45px_rgba(31,31,31,0.10)] sm:p-10">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Send us a message
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                  Fill out the form below and our team will get back to you
                  shortly.
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
      <section className="bg-white pb-16 lg:pb-24">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-lg">
            <iframe
              title="Zenvitaa Exports office location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[380px]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
