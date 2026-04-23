import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background">
      {/* 4px crimson vertical bar on absolute left edge */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" />

      {/* 1px gold horizontal line at top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gold" />

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[55%_45%]">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
          {/* Kicker */}
          <p className="animate-fade-in mb-8 text-[11px] font-normal uppercase tracking-[0.24em] text-navy/60">
            Cabinet français d&apos;affaires publiques
          </p>

          {/* Eyebrow with gold line */}
          <div className="animate-fade-in animation-delay-200 mb-10 flex items-center gap-4">
            <div className="h-px w-[30px] bg-gold" />
            <p className="font-serif text-sm font-light uppercase tracking-wide text-gold">
              Une seule santé. Humaine, animale, environnementale.
            </p>
          </div>

          {/* H1 - Three lines */}
          <h1 className="mb-10 font-serif text-[clamp(40px,5vw,64px)] font-light leading-[1.1] text-navy">
            <span className="animate-slide-up block">One Health a besoin</span>
            <span className="animate-slide-up animation-delay-200 block">
              d&apos;une voix.
            </span>
            <span className="animate-slide-up animation-delay-400 block italic text-accent">
              AleVia la construit.
            </span>
          </h1>

          {/* Gold divider */}
          <div className="animate-fade-in animation-delay-600 mb-10 h-px w-[60px] bg-gold" />

          {/* Body text */}
          <p className="animate-fade-in animation-delay-600 mb-12 max-w-md font-sans text-base font-light leading-[1.8] text-muted">
            AleVia Conseil accompagne fédérations, syndicats et opérateurs du
            secteur santé et médico-social dans leur stratégie d&apos;influence
            auprès des décideurs publics.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in animation-delay-800 flex flex-col gap-6 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <button className="group inline-flex items-center gap-3 bg-accent px-6 py-3 font-sans text-sm font-normal text-white transition-opacity hover:opacity-90">
              <span>Prendre rendez-vous avec Nicole</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Ghost link */}
            <a
              href="#approche"
              className="inline-block border-b border-navy/30 pb-1 font-sans text-sm font-normal text-navy transition-colors hover:border-navy"
            >
              Notre approche
            </a>
          </div>
        </div>

        {/* Right Column - Venn Diagram */}
        <div className="hidden items-center justify-center lg:flex">
          <OneHealthDiagram />
        </div>
      </div>
    </section>
  );
}

function OneHealthDiagram() {
  return (
    <div className="relative h-[420px] w-[420px]">
      <svg
        viewBox="0 0 420 420"
        className="h-full w-full"
        aria-label="Diagramme One Health representant l'intersection de la sante humaine, animale et environnementale"
      >
        <defs>
          {/* Gradient for center glow */}
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b8975a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#b8975a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle connecting lines from center to each circle */}
        <g className="animate-draw-line animation-delay-1000">
          <line
            x1="210"
            y1="210"
            x2="210"
            y2="130"
            stroke="#b8975a"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <line
            x1="210"
            y1="210"
            x2="140"
            y2="280"
            stroke="#b8975a"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <line
            x1="210"
            y1="210"
            x2="280"
            y2="280"
            stroke="#b8975a"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </g>

        {/* Center glow effect */}
        <circle
          cx="210"
          cy="210"
          r="50"
          fill="url(#centerGlow)"
          className="animate-pulse-slow"
        />

        {/* Circle 1 - Top - Crimson - Human Health */}
        <circle
          cx="210"
          cy="150"
          r="90"
          fill="none"
          stroke="#9b1e1e"
          strokeWidth="1"
          opacity="0.35"
          className="animate-draw-circle"
          style={{
            strokeDasharray: "565",
            strokeDashoffset: "565",
          }}
        />
        {/* Inner decorative ring */}
        <circle
          cx="210"
          cy="150"
          r="70"
          fill="none"
          stroke="#9b1e1e"
          strokeWidth="0.5"
          opacity="0.15"
          className="animate-draw-circle animation-delay-200"
          style={{
            strokeDasharray: "440",
            strokeDashoffset: "440",
          }}
        />

        {/* Circle 2 - Bottom Left - Navy - Animal Health */}
        <circle
          cx="145"
          cy="260"
          r="90"
          fill="none"
          stroke="#2a3848"
          strokeWidth="1"
          opacity="0.35"
          className="animate-draw-circle animation-delay-400"
          style={{
            strokeDasharray: "565",
            strokeDashoffset: "565",
          }}
        />
        <circle
          cx="145"
          cy="260"
          r="70"
          fill="none"
          stroke="#2a3848"
          strokeWidth="0.5"
          opacity="0.15"
          className="animate-draw-circle animation-delay-600"
          style={{
            strokeDasharray: "440",
            strokeDashoffset: "440",
          }}
        />

        {/* Circle 3 - Bottom Right - Gold - Environment */}
        <circle
          cx="275"
          cy="260"
          r="90"
          fill="none"
          stroke="#b8975a"
          strokeWidth="1"
          opacity="0.35"
          className="animate-draw-circle animation-delay-800"
          style={{
            strokeDasharray: "565",
            strokeDashoffset: "565",
          }}
        />
        <circle
          cx="275"
          cy="260"
          r="70"
          fill="none"
          stroke="#b8975a"
          strokeWidth="0.5"
          opacity="0.15"
          className="animate-draw-circle animation-delay-1000"
          style={{
            strokeDasharray: "440",
            strokeDashoffset: "440",
          }}
        />

        {/* Small accent dots at circle tops */}
        <circle
          cx="210"
          cy="60"
          r="2"
          fill="#9b1e1e"
          className="animate-fade-in animation-delay-600"
        />
        <circle
          cx="75"
          cy="310"
          r="2"
          fill="#2a3848"
          className="animate-fade-in animation-delay-1000"
        />
        <circle
          cx="345"
          cy="310"
          r="2"
          fill="#b8975a"
          className="animate-fade-in animation-delay-1200"
        />

        {/* Center intersection - gold ring with pulse */}
        <circle
          cx="210"
          cy="210"
          r="12"
          fill="none"
          stroke="#b8975a"
          strokeWidth="1"
          className="animate-pulse-slow animation-delay-1200"
        />
        <circle
          cx="210"
          cy="210"
          r="4"
          fill="#b8975a"
          className="animate-fade-in animation-delay-1400"
        />
      </svg>

      {/* Labels with refined positioning */}
      <span className="animate-fade-in animation-delay-800 absolute left-1/2 top-2 -translate-x-1/2 font-serif text-[13px] font-light tracking-wide text-accent">
        Humain
      </span>
      <span className="animate-fade-in animation-delay-1000 absolute bottom-2 left-2 font-serif text-[13px] font-light tracking-wide text-navy">
        Animal
      </span>
      <span className="animate-fade-in animation-delay-1200 absolute bottom-2 right-2 font-serif text-[13px] font-light tracking-wide text-gold">
        Environnement
      </span>

      {/* "One Health" label at center */}
      <span className="animate-fade-in animation-delay-1400 absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 font-serif text-[11px] font-light uppercase tracking-[0.2em] text-navy/50">
        One Health
      </span>
    </div>
  );
}
