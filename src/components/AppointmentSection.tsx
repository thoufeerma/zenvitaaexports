import Image from "next/image";
import Reveal from "./Reveal";
import AppointmentForm from "./AppointmentForm";
import { company, homeImages } from "@/lib/site";

export default function AppointmentSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-3xl bg-ink">
          {/* Full-brightness backdrop — the white card carries the contrast */}
          <Image
            src={homeImages.appointment}
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          <div className="relative p-4 sm:p-8 lg:p-14">
            <Reveal className="w-full max-w-xl rounded-2xl bg-white p-7 shadow-[0_30px_70px_rgba(0,0,0,0.28)] sm:p-10">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Get an Appointment
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
                Looking for high-quality food ingredient powders for your
                business?
                <br />
                Contact {company.name} to discuss your product requirements and
                export solutions.
              </p>

              <div className="mt-8">
                <AppointmentForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
