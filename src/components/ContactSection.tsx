import Reveal from "./Reveal";
import { company } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon, DocIcon } from "./Icons";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl bg-ink">
          <div className="grid lg:grid-cols-2">
            {/* Invitation */}
            <div className="relative p-9 sm:p-12 lg:p-14">
              <span className="eyebrow">Contact our team</span>
              <h2 className="mt-4 text-3xl text-white sm:text-4xl">
                Get in Touch with Us
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/65">
                We are glad to help with product enquiries, export supply and
                partnership opportunities.
              </p>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-display text-sm tracking-[0.16em] text-gold-400 uppercase">
                  Need more help?
                </p>
                <p className="mt-2 text-[15px] text-white/65">
                  Have questions about our products or export services?
                </p>
                <div className="mt-5 space-y-2.5">
                  {company.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 font-display text-lg text-white transition-colors hover:text-gold-400"
                    >
                      <PhoneIcon className="size-[18px] text-gold-400" />
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="border-t border-white/10 bg-white/[0.03] p-9 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <h3 className="font-display text-lg tracking-wide text-white">
                {company.legalName}
              </h3>

              <dl className="mt-8 space-y-7">
                <Reveal className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-400">
                    <PinIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-400 uppercase">
                      Address
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                      {company.address.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={90} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-400">
                    <MailIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-400 uppercase">
                      Email
                    </dt>
                    <dd className="mt-1.5 text-[15px] text-white/70">
                      <a
                        href={`mailto:${company.email}`}
                        className="break-all transition-colors hover:text-gold-400"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </Reveal>

                <Reveal delay={180} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-400">
                    <DocIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="font-display text-sm tracking-[0.14em] text-gold-400 uppercase">
                      GSTIN
                    </dt>
                    <dd className="mt-1.5 text-[15px] text-white/70">
                      {company.gstin}
                    </dd>
                  </div>
                </Reveal>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
