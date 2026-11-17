import { LogoImage } from "@/components/logo";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[500px] w-[700px] -translate-x-1/2 glow-accent" />

      <div className="mx-auto max-w-content px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI Safety &amp; Engineering
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              Launch artificial intelligence
              <span className="block text-accent">that people can trust.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              AI Launchpad helps people and organizations adopt AI the right way
              — pairing rigorous safety engineering with products that actually
              ship. We design, build, and deploy intelligent systems you can
              rely on.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                Start a conversation
              </a>
              <a
                href="#products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                See our products
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mx-auto mt-16 flex max-w-md items-center justify-center">
            <LogoImage height={132} className="animate-float opacity-95" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
