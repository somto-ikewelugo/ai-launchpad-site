import { Reveal } from "@/components/reveal";

const stats = [
  { value: "2", label: "Products shipped" },
  { value: "100%", label: "Safety-first by design" },
  { value: "Multi", label: "Industry deployments" },
  { value: "24/7", label: "Systems in production" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionLabel>About us</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Bridging the gap between AI&rsquo;s promise and its practice.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                AI Launchpad is an AI safety and engineering company. We exist to
                help people adopt artificial intelligence — not as a buzzword,
                but as dependable infrastructure that solves real problems.
              </p>
              <p>
                That means we treat safety and engineering as the same
                discipline. Every system we build is designed to be reliable,
                transparent, and aligned with the people who depend on it. The
                result is AI you can put in front of customers, regulators, and
                your own team with confidence.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full bg-surface p-6 sm:p-8">
                <div className="font-display text-3xl font-bold text-accent sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}
