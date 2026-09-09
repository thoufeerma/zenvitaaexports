import Reveal from "./Reveal";
import AppointmentForm from "./AppointmentForm";

export default function AppointmentSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Get an Appointment</span>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-4xl">
              Looking for food ingredient powders for your business?
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
              Send us your requirement — product, grade and volume — and our
              export team will come back with specifications, pricing and a
              shipping plan.
            </p>

            <div className="mt-8 rounded-2xl border border-cream-dark bg-cream/50 p-6">
              <p className="font-display text-sm tracking-[0.16em] text-gold-600 uppercase">
                Typical response
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Within one working day, with a specification sheet for the
                products you asked about.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            <div className="rounded-2xl border border-cream-dark bg-cream/40 p-6 sm:p-9">
              <AppointmentForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
