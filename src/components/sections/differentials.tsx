import { Check } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { differentials } from "@/config/content";

export function Differentials() {
  return (
    <Section id="diferenciais" className="scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-soft uppercase">
            Por que Fluxo Direto
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Não entregamos apenas ferramentas.{" "}
            <span className="text-gradient">Criamos soluções.</span>
          </h2>
          <p className="max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
            Cada negócio possui desafios diferentes. Por isso, a Fluxo Direto combina
            marketing, tecnologia e automação para criar soluções alinhadas aos objetivos
            reais de cada empresa.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {differentials.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 0.06}
              className="surface-card flex h-full flex-col gap-3 p-6 transition-colors hover:border-brand/30"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand-soft">
                <Check className="size-4" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
