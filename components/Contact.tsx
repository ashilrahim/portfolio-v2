import { Calendar, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="lg:py-8">
      <div className="flex flex-row items-center  gap-3 border-y py-8 max-sm:flex-col max-sm:items-start">
        {/* Text */}
        <div className="min-w-75">
          <h4 className=" font-medium  text-black">
            Interested in working together?
          </h4>

          <p className="mt-2  text-muted">
            Shoot me an email if you'd like to chat.
          </p>

          <p className="mt-2  text-black underline">
            ashilrahimck1@gmail.com
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="https://cal.com/ashil-ckdevs-ocjhtu/product-design-call?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10  items-center justify-center gap-2 rounded-md bg-black px-4 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Book a call
          </a>

          <a
            href="mailto:ashilrahimck1@gmail.com"
            className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-md bg-[#f2f2f2] px-4 text-[14px] font-medium text-black transition-opacity hover:opacity-85"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}