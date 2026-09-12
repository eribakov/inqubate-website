import Image from "next/image";
import Tube from "./Tube";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="relative mb-20 md:mb-24 lg:mb-32" style={{ overflowX: "clip" }}>
      {/* Radial glow behind tube area */}
      <div
        className="pointer-events-none absolute z-0"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "700px",
          background: "radial-gradient(ellipse at center, rgba(220,60,80,0.1) 0%, transparent 70%)",
        }}
      />

      <Tube />

      {/* Left-side gradient vignette for text readability */}
      <div className="hero-vignette" />

      <Navbar />

      <Image
        src="/red-gradient.svg"
        width={900}
        height={700}
        alt="red gradient"
        className="absolute -z-30 top-0"
      />
      <Image
        src="/blue-gradient.svg"
        width={1000}
        height={700}
        alt="blue gradient"
        className="absolute -z-30 right-0 top-0"
      />

      {/* Floating outline words */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block" aria-hidden="true">
        <span
          className="absolute animate-float"
          style={{
            right: "8%",
            top: "18%",
            fontSize: "clamp(60px, 8vw, 110px)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            letterSpacing: "-0.02em",
          }}
        >
          INNOVATE
        </span>
        <span
          className="absolute animate-float-delayed"
          style={{
            right: "5%",
            top: "42%",
            fontSize: "clamp(60px, 8vw, 110px)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            letterSpacing: "-0.02em",
          }}
        >
          DISRUPT
        </span>
        <span
          className="absolute animate-float-delayed-2"
          style={{
            right: "10%",
            top: "66%",
            fontSize: "clamp(60px, 8vw, 110px)",
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            letterSpacing: "-0.02em",
          }}
        >
          CREATE
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-[2] min-h-[680px] mx-auto w-[min(1280px,92%)] pt-22 sm:pt-24 md:pt-26 lg:pt-30">
        <div className="animate-fade-in" style={{ maxWidth: "540px" }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Where AI
            <br />
            ventures{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #e84057, #f06070, #5ba3ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              begin
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-5"
            style={{
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "420px",
              textShadow: "0 1px 20px rgba(0,0,0,0.4)",
            }}
          >
            Canada&apos;s first AI startup incubator at Queen&apos;s University. We help
            student founders build, validate, and scale disruptive technology from
            pre-seed to launch.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:inqubate.qu@gmail.com"
              className="hero-cta-primary group inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Innovate with us (opens an email to inQUbate)"
            >
              Innovate With Us
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/ventures"
              className="hero-cta-secondary inline-flex items-center transition-all duration-200 hover:bg-white/10"
            >
              View Ventures
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="mt-12 flex gap-10 pt-7"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { number: "40+", label: "Ventures Launched" },
              { number: "20+", label: "Industry Mentors" },
              { number: "6", label: "Cohorts Completed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontSize: "26px",
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.35,
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
