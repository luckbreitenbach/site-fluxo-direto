import { ArrowRight, Gauge, Sparkles, TrendingUp } from "lucide-react";

import { CtaLink } from "@/components/ui/cta-link";
import { FlowCanvas } from "@/components/sections/flow-canvas";
import { Reveal } from "@/components/ui/reveal";

const highlights = [
  { label: "Sites que convertem", icon: TrendingUp },
  { label: "Processos automatizados", icon: Gauge },
  { label: "Presença digital otimizada", icon: Sparkles },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_82%),transparent_70%)]"
      />
      <FlowCanvas />

      <div className="container-page">
        <div className="flex max-w-3xl flex-col gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-soft uppercase">
              Marketing • Tecnologia • Automação
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Seu negócio no digital.
              <br />
              <span className="text-gradient">Seu crescimento em movimento.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg">
              Sites, marketing, automação e soluções digitais criadas para transformar
              presença online em oportunidades reais de negócio.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaLink href="#contato" size="lg">
                Quero fazer minha empresa crescer
                <ArrowRight className="size-4" aria-hidden />
              </CtaLink>
              <CtaLink href="#servicos" size="lg" variant="outline">
                Conhecer nossas soluções
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-4">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="size-4 text-brand" aria-hidden />
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
