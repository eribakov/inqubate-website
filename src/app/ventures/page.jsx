 "use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — all venture content lives here; edit this section, not the JSX below
// ─────────────────────────────────────────────────────────────────────────────

const currentVentures = [
  {
    name: "Paperboy",
    description:
      "A mobile app that transforms your daily newsletters into a single, personalized audio briefing you can listen to on the go.",
    stage: "Mobile App",
    thumbnail: "/placeholder-phone.png",
    logo: "/placeholder-logo.png",
    imageRight: true,
  },
  {
    name: "Orbit",
    description:
      "A centralized digital platform to modernize lost and found. Users can upload lost or found items with location data or drop them at the nearest partnered hub, and a matching algorithm connects them to the most likely results, eliminating the need to search blindly across campus.",
    stage: "Web Platform",
    thumbnail: "/placeholder-web.png",
    logo: "/placeholder-logo.png",
    imageRight: false,
  },
  {
    name: "Pantri",
    description:
      "A meal-generation app that creates recipes from commonly-used ingredients students already have to help them reduce food waste and stay within a recurring grocery budget.",
    stage: "Mobile App",
    thumbnail: "/placeholder-phone.png",
    logo: "/placeholder-logo.png",
    imageRight: true,
  },
  {
    name: "KDC Management",
    description:
      "A part-time worker management system to help managers in workflow management and ease of scheduling to increase productivity and employee retention.",
    stage: "Management Platform",
    thumbnail: "/placeholder-web.png",
    logo: "/placeholder-logo.png",
    imageRight: false,
  },
];

const pastVentures = [
  {
    name: "ClassMate",
    description:
      "Note-sharing platform for university students. Acquired by a larger EdTech company in 2024. Served over 5,000 students across three universities.",
    thumbnail: "/placeholder-browser.png",
    logo: "/placeholder-logo.png",
  },
  {
    name: "SkillSwap",
    description:
      "Marketplace for students to trade skills and services. Pivoted to professional networking and absorbed into LinkedIn's campus program.",
    thumbnail: "/placeholder-browser.png",
    logo: "/placeholder-logo.png",
  },
  {
    name: "LocalEats",
    description:
      "Restaurant discovery app focused on student budgets and dietary preferences. Successfully operated for two years before founders graduated.",
    thumbnail: "/placeholder-browser.png",
    logo: "/placeholder-logo.png",
  },
];

// Edit names, swap src paths, or add href to link a logo to a company page
const companyLogos = [
  { name: "Meta",      src: "/placeholder-company.png" },
  { name: "Tesla",     src: "/placeholder-company.png" },
  { name: "BCG",       src: "/placeholder-company.png" },
  { name: "Microsoft", src: "/placeholder-company.png" },
  { name: "Deloitte",  src: "/placeholder-company.png" },
  { name: "Shopify",   src: "/placeholder-company.png" },
  { name: "Google",    src: "/placeholder-company.png" },
  { name: "Amazon",    src: "/placeholder-company.png" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRESENTATIONAL COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function PastVentureCard({ venture }) {
  const inner = (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]">
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-white/5">
        <img
          src={venture.thumbnail}
          alt={venture.name}
          className="h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <img
            src={venture.logo}
            alt={`${venture.name} logo`}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <h3 className="text-lg font-semibold">{venture.name}</h3>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-white/50">
          {venture.description}
        </p>

        {venture.ctaHref && (
          <span className="mt-4 text-xs font-medium text-white/40 transition-colors group-hover:text-white/65">
            {venture.ctaLabel ?? "Visit"} →
          </span>
        )}
      </div>
    </div>
  );

  if (venture.ctaHref) {
    return (
      <a href={venture.ctaHref} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return inner;
}

function MarqueeLogos({ logos }) {
  // Triple the list so the seam never shows during the scroll cycle
  const repeated = [...logos, ...logos, ...logos];

  return (
    <div className="group relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="flex animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
        {repeated.map((company, i) => {
          const logo = (
            <img
              src={company.src}
              alt={company.name}
              className="h-10 w-auto object-contain"
            />
          );
          return (
            <div
              key={i}
              className="flex-shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-85 hover:grayscale-0"
            >
              {company.href ? (
                <a href={company.href} target="_blank" rel="noopener noreferrer">
                  {logo}
                </a>
              ) : logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function VenturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 mx-auto w-[min(1280px,92%)] pb-8 pt-20">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
            inQUbate Portfolio
          </p>
          <h1 className="text-6xl font-bold leading-tight tracking-tight">
            Our Ventures
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-white/55">
            From idea to impact, real products built by students at Queen&apos;s.
          </p>
        </Reveal>
      </section>

      {/* Current Ventures (alternating) */}
      <section className="relative z-10 mx-auto w-[min(1280px,92%)] space-y-8 py-10">
        <Reveal>
          <h2 className="text-3xl font-bold">Current Ventures</h2>
        </Reveal>

        {currentVentures.map((venture, index) => (
          <Reveal key={venture.name} delay={index * 90}>
          <div
            key={venture.name}
            className={`group flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] md:items-center md:p-10 md:flex-row ${
              venture.imageRight ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold">{venture.name}</h3>
              <p className="mt-4 leading-relaxed text-white/55">
                {venture.description}
              </p>
            </div>

            {/* Thumbnail */}
            <div className="flex flex-1 items-center justify-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={venture.thumbnail}
                  alt={venture.name}
                  className="max-h-[260px] w-auto object-contain opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
          </Reveal>
        ))}
      </section>

      {/* Past Ventures grid */}
      <section className="relative z-10 mx-auto w-[min(1280px,92%)] py-16">
        <Reveal className="mb-10">
          <h2 className="text-3xl font-bold">Past Ventures</h2>
          <p className="mt-2 text-white/45">
            Alumni ventures that have moved on to new chapters.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {pastVentures.map((venture, index) => (
            <Reveal key={venture.name} delay={index * 90}>
              <PastVentureCard venture={venture} />
            </Reveal>
          ))}
        </div>
      </section>


      <Footer />
    </main>
  );
}
