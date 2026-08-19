import { Suspense } from "react";
import { Clock, Mail, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig, whatsappLink } from "@/config/site";

export function Contact() {
  return (
    <Section id="contato" className="scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-soft uppercase">
            Contato
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Vamos conversar sobre o seu projeto.
          </h2>
          <p className="text-base text-pretty text-muted-foreground">
            Responda algumas informações e retornamos com a melhor solução para o seu
            cenário. Prefere falar agora? Chame no WhatsApp.
          </p>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <MessageCircle className="size-4 text-brand" aria-hidden />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.whatsapp.displayNumber}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-brand" aria-hidden />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Clock className="size-4 text-brand" aria-hidden />
              Atendimento de segunda a sexta, das 9h às 18h.
            </li>
          </ul>

          <CtaLink
            href={whatsappLink()}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <MessageCircle className="size-4" aria-hidden />
            Chamar no WhatsApp
          </CtaLink>
        </Reveal>

        <Reveal delay={0.08}>
          <Suspense fallback={<div className="surface-card h-[520px] animate-pulse" />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </Section>
  );
}
