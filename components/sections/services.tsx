import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/sections/about";

const services = [
  {
    title: "AI Safety & Alignment",
    description:
      "Evaluation, red-teaming, guardrails, and monitoring that keep models honest, controllable, and aligned with your intent in production.",
    icon: ShieldIcon,
  },
  {
    title: "AI Engineering",
    description:
      "End-to-end design and build of LLM applications, agents, and data pipelines — architected to scale and engineered to last.",
    icon: ChipIcon,
  },
  {
    title: "Adoption & Strategy",
    description:
      "We help teams find the right problems, pilot quickly, and roll out AI across the organization with the governance to match.",
    icon: RocketIcon,
  },
  {
    title: "Applied Research",
    description:
      "Practical research into retrieval, reasoning, and evaluation that feeds directly back into the products we ship.",
    icon: BeakerIcon,
  },
  {
    title: "Custom AI Products",
    description:
      "From concept to launch, we build bespoke AI products — the same craft behind ExpertAI and Personai, pointed at your domain.",
    icon: SparklesIcon,
  },
  {
    title: "Integration & Support",
    description:
      "Secure integration into your existing stack, with observability and ongoing support so your systems stay dependable.",
    icon: PlugIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Full-stack AI, built safely from the ground up.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Strategy, engineering, and safety under one roof — so there are no
              gaps between what you plan and what you can actually deploy.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/50">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
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

type IconProps = { className?: string };
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ShieldIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.8 1.8L15 10" /></svg>;
}
function ChipIcon({ className }: IconProps) {
  return <svg className={className} {...base}><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9.5 3v2M14.5 3v2M9.5 19v2M14.5 19v2M3 9.5h2M3 14.5h2M19 9.5h2M19 14.5h2" /></svg>;
}
function RocketIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M14 4c3 0 6 3 6 6l-6 7-4-4 4-6c0-1.5.5-3 0-3z" /><path d="M9 15l-3 1 .8-2.8M5 19c1-1 2.5-1 3.5 0" /></svg>;
}
function BeakerIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8V3" /><path d="M7.5 14h9" /></svg>;
}
function SparklesIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z" /><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" /></svg>;
}
function PlugIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0V8zM12 16v5" /></svg>;
}
