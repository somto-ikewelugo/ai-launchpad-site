import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-56 glow-accent" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Ready to launch AI you can trust?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Tell us what you&rsquo;re trying to build. Whether you&rsquo;re
                exploring your first use case or scaling across the org, we&rsquo;ll
                help you get there safely.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Email us
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
