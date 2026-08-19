import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <Link
      href="/#inicio"
      className={cn(
        "group flex items-center gap-3 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-brand/50",
        className,
      )}
      aria-label={`${siteConfig.name} — página inicial`}
    >
      <span
        aria-hidden
        className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-soft"
      >
        <span className="absolute inset-px rounded-[11px] bg-background/85" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative size-5 text-brand-soft"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 17c4 0 5-10 9-10s5 6 9 6" />
          <circle cx="3" cy="17" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="21" cy="13" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-[0.18em] uppercase">
          Fluxo Direto
        </span>
        {withTagline ? (
          <span className="mt-1 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
            {siteConfig.tagline}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
