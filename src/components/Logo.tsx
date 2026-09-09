import Image from "next/image";

type Props = {
  className?: string;
  /** Use the light wordmark, for dark backgrounds */
  inverted?: boolean;
};

/** The Zenvitaa wordmark. Source files live in /public/images. */
export default function Logo({ className = "", inverted = false }: Props) {
  return (
    <Image
      src={inverted ? "/images/logo-light.png" : "/images/logo.png"}
      alt="Zenvitaa Exports"
      width={300}
      height={inverted ? 175 : 164}
      priority={!inverted}
      className={`w-auto object-contain ${className}`}
    />
  );
}
