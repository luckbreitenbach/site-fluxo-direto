import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { audiences } from "@/config/content";

export function Audiences() {
  return (
    <Section id="para-quem">
      <SectionTitle eyebrow="Para quem é" title="Negócios que atendemos." />

      <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {audiences.map((item, index) => (
          <Reveal
            as="li"
            key={item.label}
            delay={index * 0.04}
            className="surface-card flex h-full items-center gap-3 p-4 transition-colors hover:border-brand/30"
          >
            <item.icon className="size-5 shrink-0 text-brand" aria-hidden />
            <span className="text-sm font-medium">{item.label}</span>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-base text-pretty text-muted-foreground sm:text-lg">
          Se o seu negócio precisa conquistar mais clientes, organizar processos ou
          melhorar sua presença digital, podemos criar uma solução para você.
        </p>
      </Reveal>
    </Section>
  );
}
