import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  light = false,
  className = "",
}: Props) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${centered ? "eyebrow-center" : ""}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[42px] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-5 text-[17px] leading-relaxed ${
            light ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
