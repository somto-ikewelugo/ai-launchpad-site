import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";
import { site } from "@/lib/site";

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Our products</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI we&rsquo;ve built and shipped.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              We don&rsquo;t just advise — we build. These are production AI
              products from the AI Launchpad team, live today.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {site.products.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-foreground">
                    {p.name}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {p.tagline}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                  {p.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  {p.cta}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
