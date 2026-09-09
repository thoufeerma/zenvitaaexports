import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { company } from "@/lib/site";

export type PolicySection = { heading: string; body: string[] };

/**
 * Shared shell for the Terms / Privacy / Cookie pages.
 * The copy here is a plain-language starting point — have it reviewed by a
 * legal advisor before the site goes live.
 */
export default function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} body={intro} />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-sm text-ink-soft">
                Last updated{" "}
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </Reveal>

            <div className="mt-10 space-y-10">
              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={(i % 4) * 70}>
                  <h2 className="text-xl sm:text-2xl">{s.heading}</h2>
                  <div className="mt-3 space-y-3 text-[16px] leading-relaxed text-ink-soft">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="rounded-2xl border border-cream-dark bg-cream/50 p-7">
                  <h2 className="text-lg">Questions about this policy?</h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                    Write to us at{" "}
                    <a
                      href={`mailto:${company.email}`}
                      className="text-gold-600 underline underline-offset-4"
                    >
                      {company.email}
                    </a>{" "}
                    or call {company.phones[0]}.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
