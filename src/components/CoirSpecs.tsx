import Reveal from "./Reveal";
import { coirCatalogue, coirSpecs } from "@/lib/site";

export default function CoirSpecs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-[1.2] font-semibold sm:text-4xl lg:text-[42px]">
            {coirCatalogue.title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            {coirCatalogue.subtitle}
          </p>
        </Reveal>

        {/* About */}
        <Reveal
          delay={100}
          className="mx-auto mt-12 max-w-4xl rounded-2xl bg-cream/50 p-8 sm:p-10"
        >
          <h3 className="text-xl font-semibold text-coir-dark">
            {coirCatalogue.aboutHeading}
          </h3>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            {coirCatalogue.about}
          </p>
        </Reveal>

        {/* Products */}
        <div className="mx-auto mt-16 max-w-5xl space-y-14">
          {coirSpecs.map((spec, i) => (
            <Reveal key={spec.name} as="article" className="scroll-mt-24">
              <h3 className="flex items-baseline gap-3 text-2xl font-semibold sm:text-[28px]">
                <span className="text-coir">{i + 1}.</span>
                {spec.name}
              </h3>

              <div className="mt-5">
                <h4 className="font-display text-[13px] tracking-[0.16em] text-coir uppercase">
                  Product Description
                </h4>
                <p className="mt-2.5 text-[16px] leading-relaxed text-ink-soft">
                  {spec.description}
                </p>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {spec.groups.map((g) => (
                  <div key={g.heading}>
                    <h4 className="text-base font-semibold text-ink">
                      {g.heading}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-[15px] leading-snug text-ink-soft"
                        >
                          <span
                            aria-hidden
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-coir"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {spec.callout ? (
                <div className="mt-8 rounded-r-xl border-l-4 border-coir bg-coir-light px-7 py-7 sm:px-9">
                  <h4 className="text-xl font-semibold text-coir-dark">
                    {spec.callout.title}
                  </h4>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {spec.callout.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[15px] leading-snug text-ink-soft"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] size-1.5 shrink-0 rounded-full bg-coir"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
