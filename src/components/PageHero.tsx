import Link from "next/link";

type Props = {
  title: string;
  eyebrow?: string;
  body?: string;
  crumb?: string;
};

export default function PageHero({ title, eyebrow, body, crumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 400" className="size-full" fill="none">
          <g stroke="#c8a06a" strokeWidth="1">
            <circle cx="1080" cy="60" r="160" />
            <circle cx="1080" cy="60" r="100" />
            <circle cx="90" cy="360" r="130" />
            <path d="M0 200h1200" strokeDasharray="3 14" />
          </g>
        </svg>
      </div>

      <div className="container-x relative text-center">
        {eyebrow ? (
          <span className="eyebrow eyebrow-center">{eyebrow}</span>
        ) : null}
        <h1 className="mt-4 text-4xl text-white sm:text-5xl lg:text-[54px]">
          {title}
        </h1>
        {body ? (
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/65">
            {body}
          </p>
        ) : null}

        <nav
          aria-label="Breadcrumb"
          className="mt-7 flex items-center justify-center gap-2.5 text-sm text-white/50"
        >
          <Link href="/" className="transition-colors hover:text-gold-400">
            Home
          </Link>
          <span className="text-gold-500">/</span>
          <span className="text-white/80">{crumb ?? title}</span>
        </nav>
      </div>
    </section>
  );
}
