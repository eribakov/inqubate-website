"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const pastEvents = [
  { title: "Founder Fireside Chat", imageSrc: "/event_1.JPG" },
  { title: "Product Workshop", imageSrc: "/event_2.jpg" },
  { title: "Pitch Night", imageSrc: "/event_3.jpg" },
  { title: "Speaker Panel", imageSrc: "/event_4.png" },
  { title: "Community Showcase", imageSrc: "/event_5.png" },
];

function Chevron({ dir }) {
  const d = dir === "left" ? "M15 6 9 12 15 18" : "M9 6 15 12 9 18";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export default function PastEventsSection() {
  const scrollRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 py-8 md:py-12 lg:py-16">
      <Image
        src="/red-gradient.svg"
        width={900}
        height={700}
        alt=""
        className="pointer-events-none absolute -right-1/3 top-1/4 -z-10 opacity-25"
      />
      <Reveal className="mx-auto w-[min(1280px,92%)] text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Past Events &amp; Speakers</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-white/70">
          Check out some photos from past InQUbate events.
        </p>
      </Reveal>
      <Reveal className="relative mt-8 md:mt-10 lg:mt-12">
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-7 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-8 pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {pastEvents.map((event) => (
            <div
              key={event.title}
              className="group w-[78vw] max-w-[560px] flex-none snap-start overflow-hidden rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-[34px] border border-white/15 bg-white/[0.04] backdrop-blur-md transition duration-300 hover:scale-[1.01] hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] overflow-hidden">
                <img
                  src={event.imageSrc}
                  alt={event.title}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.06]"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Show previous photos"
          className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70 sm:left-4 sm:flex"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Show next photos"
          className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70 sm:right-4 sm:flex"
        >
          <Chevron dir="right" />
        </button>
      </Reveal>
    </section>
  );
}
