import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  eyebrow?: string;
  body?: string;
  crumb?: string;
  /** Background photograph. Falls back to the drawn pattern when omitted. */
  image?: string;
  align?: "center" | "left";
  /** Breadcrumb row under the title */
  showCrumb?: boolean;
  /** Scrim strength over `image`. Lighter lets more of the photo through. */
  overlay?: "dark" | "light";
};

export default function PageHero({
  title,
  eyebrow,
  body,
  crumb,
  image,
  align = "center",
  showCrumb = true,
  overlay = "dark",
}: Props) {
  const left = align === "left";

  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 lg:py-28">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className={`absolute inset-0 ${
              overlay === "light"
                ? "bg-gradient-to-r from-ink/70 via-ink/45 to-ink/25"
                : "bg-ink/65"
            }`}
          />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
        >
          <svg viewBox="0 0 1200 400" className="size-full" fill="none">
            <g stroke="#c8a06a" strokeWidth="1">
              <circle cx="1080" cy="60" r="160" />
              <circle cx="1080" cy="60" r="100" />
              <circle cx="90" cy="360" r="130" />
              <path d="M0 200h1200" strokeDasharray="3 14" />
            </g>
          </svg>
        </div>
      )}

      <div
        className={`container-x relative ${left ? "text-left" : "text-center"}`}
      >
        {eyebrow ? (
          <span className={`eyebrow ${left ? "" : "eyebrow-center"}`}>
            {eyebrow}
          </span>
        ) : null}

        <h1
          className={`text-4xl font-semibold text-white sm:text-5xl lg:text-[54px] ${
            eyebrow ? "mt-4" : ""
          }`}
        >
          {title}
        </h1>

        {body ? (
          <p
            className={`mt-5 max-w-2xl text-[17px] leading-relaxed text-white/80 ${
              left ? "" : "mx-auto"
            }`}
          >
            {body}
          </p>
        ) : null}

        {showCrumb ? (
          <nav
            aria-label="Breadcrumb"
            className={`mt-7 flex items-center gap-2.5 text-sm text-white/50 ${
              left ? "" : "justify-center"
            }`}
          >
            <Link href="/" className="transition-colors hover:text-gold-400">
              Home
            </Link>
            <span className="text-gold-500">/</span>
            <span className="text-white/80">{crumb ?? title}</span>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
