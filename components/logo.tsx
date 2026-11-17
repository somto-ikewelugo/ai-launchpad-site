import Image from "next/image";
import Link from "next/link";

const RATIO = 618 / 504; // intrinsic aspect ratio of the extracted logo

/**
 * The real AI Launchpad logo (AiL monogram + rocket).
 * Two theme variants are swapped purely with CSS so there is no flash:
 *  - logo-light.png: charcoal mark, for light backgrounds
 *  - logo-dark.png:  light mark, for dark backgrounds
 */
export function LogoImage({
  height = 34,
  priority = false,
  className,
}: {
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  const width = Math.round(height * RATIO);
  return (
    <span
      className={`inline-block shrink-0 ${className ?? ""}`}
      style={{ width, height }}
    >
      <Image
        src="/logo-light.png"
        alt="AI Launchpad"
        width={width}
        height={height}
        priority={priority}
        className="block h-full w-full object-contain dark:hidden"
      />
      <Image
        src="/logo-dark.png"
        alt="AI Launchpad"
        width={width}
        height={height}
        priority={priority}
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-end gap-2 ${className ?? ""}`}
      aria-label="AI Launchpad home"
    >
      <LogoImage height={36} priority className="transition-transform group-hover:-translate-y-0.5" />
      <span className="font-display text-lg font-bold leading-none tracking-tight text-foreground">
        AI&nbsp;Launchpad
      </span>
    </Link>
  );
}
