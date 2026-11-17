import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";

const steps = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start with your people and your problem — mapping where AI creates real leverage and where it introduces risk.",
  },
  {
    step: "02",
    title: "Design for safety",
    description:
      "Before a line of code, we define success, failure modes, and the guardrails that keep the system within them.",
  },
  {
    step: "03",
    title: "Build & evaluate",
    description:
      "We engineer the system and measure it continuously against clear evals — shipping only what we can stand behind.",
  },
  {
    step: "04",
    title: "Launch & support",
    description:
      "We deploy into your stack with monitoring in place, then stay with you as the system learns and scales.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 border-t border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A disciplined path from idea to production.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-7">
                <span className="font-display text-sm font-bold text-accent">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
