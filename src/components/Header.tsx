"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { company, nav } from "@/lib/site";
import { PhoneIcon, MailIcon } from "./Icons";

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

  // Lock body & document scroll while the mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_24px_rgba(31,31,31,0.08)]" : ""
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
              scrolled
                ? "h-[72px] lg:h-[82px]"
                : "h-[80px] lg:h-[104px]"
            }`}
          >
            <Link href="/" aria-label={`${company.name} — home`}>
              <Logo
                className={`w-auto transition-all duration-300 ${
                  scrolled
                    ? "h-11 lg:h-14"
                    : "h-12 lg:h-[68px]"
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
                    className={`relative font-display text-[15px] font-semibold tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold-500 after:transition-all ${
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
      </header>

      {/* Mobile drawer navigation */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Mobile Header Bar */}
        <div className="container-x flex h-[80px] shrink-0 items-center justify-between border-b border-cream-dark bg-white">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={`${company.name} — home`}
          >
            <Logo className="h-12 w-auto" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-md border border-gold-200"
          >
            <span className="h-px w-5 bg-ink translate-y-[6px] rotate-45 transition-all duration-300" />
            <span className="h-px w-5 bg-ink opacity-0 transition-all duration-300" />
            <span className="h-px w-5 bg-ink -translate-y-[6px] -rotate-45 transition-all duration-300" />
          </button>
        </div>

        {/* Scrollable menu content */}
        <div className="container-x flex flex-1 flex-col justify-between overflow-y-auto py-6">
          <nav className="flex flex-col">
            {nav.map((item, i) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 35}ms` }}
                  className={`flex items-center justify-between border-b border-cream-dark py-4 font-display text-lg font-semibold transition-colors ${
                    open ? "animate-fade-up" : ""
                  } ${
                    active
                      ? "text-gold-600"
                      : "text-ink hover:text-gold-600"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="size-2 rounded-full bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 space-y-4 border-t border-cream-dark pt-5">
            <div className="space-y-2.5">
              <span className="text-[11px] font-semibold tracking-wider text-ink-soft/70 uppercase">
                Direct Contact
              </span>
              {company.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[15px] font-medium text-ink-soft transition-colors hover:text-gold-600"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold-200 bg-gold-50 text-gold-600">
                    <PhoneIcon className="size-3.5" />
                  </span>
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-[14px] font-medium text-ink-soft transition-colors hover:text-gold-600"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold-200 bg-gold-50 text-gold-600">
                  <MailIcon className="size-3.5" />
                </span>
                <span className="truncate">{company.email}</span>
              </a>
            </div>

            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 font-display text-sm font-semibold tracking-widest text-white uppercase shadow-sm transition-all hover:bg-gold-600 active:scale-[0.99]"
            >
              Get a Quote
            </Link>

            <div className="pt-1 text-center text-xs text-ink-soft/60">
              {company.legalName} • Kerala, India
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
