import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Fluxo Direto coleta, utiliza e protege as informações enviadas pelo site.",
  alternates: { canonical: "/privacidade" },
};

const sections = [
  {
    title: "1. Dados que coletamos",
    body: "Coletamos apenas as informações que você envia voluntariamente pelo formulário de contato ou pelo WhatsApp: nome, empresa, telefone, e-mail, serviço de interesse e a mensagem descrevendo sua necessidade.",
  },
  {
    title: "2. Como utilizamos",
    body: "Os dados são utilizados exclusivamente para responder ao seu contato, entender a demanda e apresentar uma proposta comercial. Não vendemos nem compartilhamos suas informações com terceiros para fins publicitários.",
  },
  {
    title: "3. Armazenamento",
    body: "As mensagens enviadas ficam registradas nos nossos canais de atendimento (WhatsApp e e-mail) pelo tempo necessário ao relacionamento comercial.",
  },
  {
    title: "4. Seus direitos",
    body: "Você pode solicitar a qualquer momento a consulta, correção ou exclusão dos seus dados, conforme a Lei Geral de Proteção de Dados (LGPD).",
  },
  {
    title: "5. Contato",
    body: `Para exercer seus direitos ou tirar dúvidas sobre esta política, escreva para ${siteConfig.email} ou fale conosco pelo WhatsApp ${siteConfig.whatsapp.displayNumber}.`,
  },
];

export default function PrivacidadePage() {
  return (
    <div className="container-page py-32 sm:py-40">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted-foreground">
            Última atualização: janeiro de 2026.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-sm text-muted-foreground">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
