import Link from "next/link";
import Logo from "./Logo";
import { company, nav, products } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon, DocIcon, SocialIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="h-16 w-auto" inverted />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
              A Kerala-based exporter of coconut and coconut-derived products,
              alongside a growing range of premium food powders — supplied with
              consistent quality to markets worldwide.
            </p>

            <div className="mt-7 flex gap-3">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold-500 hover:bg-gold-500 hover:text-white"
                >
                  <SocialIcon name={s.label} className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="lg:col-span-2">
            <h5 className="font-display text-base tracking-wide text-white">
              Pages
            </h5>
            <ul className="mt-5 space-y-3 text-[15px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h5 className="font-display text-base tracking-wide text-white">
              Products
            </h5>
            <ul className="mt-5 space-y-3 text-[15px]">
              {products.slice(0, 6).map((p) => (
                <li key={p.name}>
                  <Link
                    href="/#products"
                    className="transition-colors hover:text-gold-400"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h5 className="font-display text-base tracking-wide text-white">
              {company.legalName}
            </h5>
            <ul className="mt-5 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 size-[18px] shrink-0 text-gold-400" />
                <span className="not-italic">
                  {company.address.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              {company.phones.map((p) => (
                <li key={p} className="flex gap-3">
                  <PhoneIcon className="mt-0.5 size-[18px] shrink-0 text-gold-400" />
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-gold-400"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 size-[18px] shrink-0 text-gold-400" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-gold-400"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <DocIcon className="mt-0.5 size-[18px] shrink-0 text-gold-400" />
                <span>
                  GSTIN{" "}
                  <span className="text-white/90">{company.gstin}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p>
            Copyright © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/terms" className="transition-colors hover:text-gold-400">
              Terms of Use
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-gold-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
