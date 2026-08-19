import { ArrowRight, MessageCircle } from "lucide-react";

import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { whatsappLink } from "@/config/site";

export function Cta() {
  return (
    <Section id="cta">
      <Reveal className="surface-card relative isolate flex flex-col items-center gap-6 overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_80%_at_50%_0%,color-mix(in_oklch,var(--brand),transparent_78%),transparent_75%)]"
        />
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Pronto para colocar seu negócio em movimento?
        </h2>
        <p className="max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
          Conte o que sua empresa precisa. Nós encontramos a melhor solução digital para
          você.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CtaLink href="#contato" size="lg">
            Falar com a Fluxo Direto
            <ArrowRight className="size-4" aria-hidden />
          </CtaLink>
          <CtaLink
            href={whatsappLink()}
            size="lg"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" aria-hidden />
            Chamar no WhatsApp
          </CtaLink>
        </div>
      </Reveal>
    </Section>
  );
}
