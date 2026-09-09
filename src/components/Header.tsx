"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { company, nav } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_24px_rgba(31,31,31,0.08)] backdrop-blur"
          : "bg-white"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-x">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[74px]" : "h-[92px]"
          }`}
        >
          <Link href="/" aria-label={`${company.name} — home`}>
            <Logo
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-12" : "h-14"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-display text-[15px] tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-500 after:transition-all ${
                    active
                      ? "text-gold-600 after:w-full"
                      : "text-ink hover:text-gold-600 after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="group flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-gold-600"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-gold-200 text-gold-600 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                <PhoneIcon className="size-4" />
              </span>
              <span className="font-medium">{company.phones[0]}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-md border border-gold-200 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-[74px] bottom-0 z-40 origin-top bg-white transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${i * 45}ms` }}
              className={`border-b border-cream-dark py-4 font-display text-lg ${
                open ? "animate-fade-up" : ""
              } ${
                pathname === item.href ? "text-gold-600" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-6 space-y-3">
            {company.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-ink-soft"
              >
                <PhoneIcon className="size-4 text-gold-600" />
                {p}
              </a>
            ))}
            <Link
              href="/contact-us"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 font-display text-sm tracking-widest text-white uppercase"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
