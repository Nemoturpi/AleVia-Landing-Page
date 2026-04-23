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
    <div className="animate-fade-in animation-delay-600 relative h-[400px] w-[400px]">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        aria-label="Diagramme One Health représentant l'intersection de la santé humaine, animale et environnementale"
      >
        {/* Circle 1 - Top - Crimson */}
        <circle
          cx="200"
          cy="140"
          r="100"
          fill="none"
          stroke="#9b1e1e"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Circle 2 - Bottom Left - Navy */}
        <circle
          cx="140"
          cy="240"
          r="100"
          fill="none"
          stroke="#2a3848"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Circle 3 - Bottom Right - Gold */}
        <circle
          cx="260"
          cy="240"
          r="100"
          fill="none"
          stroke="#b8975a"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Gold dot at intersection center */}
        <circle cx="200" cy="200" r="4" fill="#b8975a" />
      </svg>

      {/* Labels */}
      <span className="absolute left-1/2 top-6 -translate-x-1/2 font-serif text-sm font-light italic text-navy/70">
        Santé humaine
      </span>
      <span className="absolute bottom-4 left-4 font-serif text-sm font-light italic text-navy/70">
        Santé animale
      </span>
      <span className="absolute bottom-4 right-4 font-serif text-sm font-light italic text-navy/70">
        Environnement
      </span>
    </div>
  );
}
