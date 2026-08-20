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
      <img 
        src="/meulogo.png" 
        alt={siteConfig.name} 
        className="h-9 w-auto object-contain" 
      />

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