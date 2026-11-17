export const site = {
  name: "AI Launchpad",
  tagline: "AI Safety & Engineering",
  description:
    "An AI safety and engineering company helping people and organizations adopt artificial intelligence — responsibly, and for real.",
  email: "hello@ai-launchpad.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    {
      name: "ExpertAI",
      tagline: "Where AI connects humans",
      description:
        "The one place where AI connects humans — bringing together AI adoption tools, intelligent agents, and real human experts and businesses, all on demand.",
      href: "https://ai-launchpad-v1.com",
      cta: "Visit ExpertAI",
    },
    {
      name: "Personai",
      tagline: "Your personal AI, everywhere you are",
      description:
        "One place where people can chat with your personal AI and connect with you across all your socials.",
      href: "https://usepersonai.com",
      cta: "Visit Personai",
    },
  ],
  social: [
    { label: "X", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
} as const;
