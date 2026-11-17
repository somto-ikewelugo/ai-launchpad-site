import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://ai-launchpad.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Launchpad — AI Safety & Engineering",
    template: "%s · AI Launchpad",
  },
  description:
    "AI Launchpad is an AI safety and engineering company helping people and organizations adopt artificial intelligence responsibly. Builders of ExpertAI and Personai.",
  keywords: [
    "AI safety",
    "AI engineering",
    "AI adoption",
    "ExpertAI",
    "Personai",
    "artificial intelligence consulting",
  ],
  openGraph: {
    title: "AI Launchpad — AI Safety & Engineering",
    description:
      "Helping people and organizations adopt artificial intelligence, safely.",
    url: siteUrl,
    siteName: "AI Launchpad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Launchpad — AI Safety & Engineering",
    description:
      "Helping people and organizations adopt artificial intelligence, safely.",
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
