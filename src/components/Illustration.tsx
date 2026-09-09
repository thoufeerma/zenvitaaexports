import type { IllustrationKind } from "@/lib/site";

type Props = {
  kind: IllustrationKind;
  className?: string;
};

/**
 * On-brand line illustrations used wherever real product photography has not
 * been supplied yet. To swap in a photo, set `image` on the product in
 * src/lib/site.ts and the card renders that instead.
 */
export default function Illustration({ kind, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id={`bg-${kind}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#faf6ee" />
          <stop offset="100%" stopColor="#ece5d6" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#bg-${kind})`} />
      <g
        stroke="#c8a06a"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {shapes[kind]}
      </g>
    </svg>
  );
}

const shapes: Record<IllustrationKind, React.ReactNode> = {
  coconut: (
    <>
      <circle cx="100" cy="108" r="42" />
      <path d="M72 92c14-10 42-10 56 0" />
      <path d="M84 118c8 8 24 8 32 0" opacity="0.6" />
      <circle cx="88" cy="96" r="3" fill="#c8a06a" />
      <circle cx="100" cy="93" r="3" fill="#c8a06a" />
      <circle cx="112" cy="96" r="3" fill="#c8a06a" />
      <path d="M100 66c0-14 10-24 24-26-2 16-10 24-24 26z" />
      <path d="M100 66c0-14-10-24-24-26 2 16 10 24 24 26z" />
    </>
  ),
  milk: (
    <>
      <path d="M76 74h48l-6 76a8 8 0 0 1-8 7H90a8 8 0 0 1-8-7L76 74z" />
      <path d="M82 96h36" opacity="0.5" />
      <path d="M84 58h32l4 16H80l4-16z" />
      <path d="M96 124c6-6 14-6 20 0" opacity="0.6" />
      <circle cx="100" cy="112" r="4" fill="#c8a06a" opacity="0.5" />
    </>
  ),
  powder: (
    <>
      <path d="M60 128c0-22 18-40 40-40s40 18 40 40" />
      <path d="M52 128h96a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6v-6a6 6 0 0 1 6-6z" />
      <path d="M100 88V64" />
      <path d="M86 70c8-8 20-8 28 0" />
      <circle cx="82" cy="110" r="3" fill="#c8a06a" opacity="0.6" />
      <circle cx="100" cy="104" r="3" fill="#c8a06a" opacity="0.6" />
      <circle cx="118" cy="110" r="3" fill="#c8a06a" opacity="0.6" />
    </>
  ),
  mango: (
    <>
      <path d="M132 78c14 16 10 46-12 60s-48 8-56-10c-8-18 8-38 30-46 18-6 30-14 38-4z" />
      <path d="M120 70c4-10 12-16 22-16-2 10-8 16-16 18" />
      <path d="M86 112c6-10 18-16 28-14" opacity="0.55" />
    </>
  ),
  taro: (
    <>
      <path d="M70 78h60l-5 68a10 10 0 0 1-10 9H85a10 10 0 0 1-10-9l-5-68z" />
      <path d="M66 78h68" />
      <path d="M112 74l14-32" />
      <circle cx="88" cy="124" r="5" fill="#c8a06a" opacity="0.55" />
      <circle cx="104" cy="134" r="5" fill="#c8a06a" opacity="0.55" />
      <circle cx="114" cy="118" r="5" fill="#c8a06a" opacity="0.55" />
    </>
  ),
  potato: (
    <>
      <path d="M62 120c-6-22 14-46 40-46 24 0 44 16 40 38-4 20-24 32-44 30-18-2-32-10-36-22z" />
      <path d="M78 104c10-8 24-10 36-4" opacity="0.55" />
      <path d="M84 124c10-4 20-4 30 2" opacity="0.4" />
    </>
  ),
  oil: (
    <>
      <path d="M84 62h32v14l10 18v58a10 10 0 0 1-10 10H84a10 10 0 0 1-10-10V94l10-18V62z" />
      <path d="M74 110h52" opacity="0.5" />
      <path d="M100 122c8 8 12 14 12 20a12 12 0 0 1-24 0c0-6 4-12 12-20z" />
    </>
  ),
  mat: (
    <>
      <rect x="46" y="66" width="108" height="68" rx="4" />
      <path d="M46 84h108M46 100h108M46 116h108" opacity="0.45" />
      <path d="M70 66v68M100 66v68M130 66v68" opacity="0.45" />
      <path d="M54 144h92" opacity="0.35" />
    </>
  ),
  rubber: (
    <>
      <rect x="46" y="62" width="108" height="76" rx="6" />
      <circle cx="72" cy="86" r="7" />
      <circle cx="100" cy="86" r="7" />
      <circle cx="128" cy="86" r="7" />
      <circle cx="72" cy="114" r="7" />
      <circle cx="100" cy="114" r="7" />
      <circle cx="128" cy="114" r="7" />
    </>
  ),
  geotextile: (
    <>
      <path d="M40 140c20-14 40-14 60 0s40 14 60 0" />
      <path d="M40 116c20-14 40-14 60 0s40 14 60 0" opacity="0.7" />
      <path d="M40 92c20-14 40-14 60 0s40 14 60 0" opacity="0.5" />
      <path d="M40 68c20-14 40-14 60 0s40 14 60 0" opacity="0.3" />
      <path d="M70 60v92M130 60v92" opacity="0.25" />
    </>
  ),
};
