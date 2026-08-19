import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import type { Service } from "@/config/content";

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="group surface-card relative flex h-full flex-col gap-4 overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[radial-gradient(50%_60%_at_50%_50%,color-mix(in_oklch,var(--brand),transparent_80%),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand-soft">
          <service.icon className="size-5" aria-hidden />
        </span>
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {service.index}
        </span>
      </div>

      <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="text-sm text-muted-foreground">{service.description}</p>

      <a
        href={`/?servico=${service.id}#contato`}
        className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-brand-soft transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-brand/50 focus-visible:outline-none"
      >
        {service.cta}
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      </a>
    </Reveal>
  );
}
