export const siteConfig = {
  name: "Fluxo Direto",
  legalName: "Fluxo Direto — Agência de Marketing Digital e Soluções Digitais",
  tagline: "Marketing • Tecnologia • Automação",
  description:
    "Sites, landing pages, automação, sistemas, aplicativos, chatbots e soluções digitais para ajudar sua empresa a crescer.",
  url: "https://fluxodireto.com.br",
  locale: "pt-BR",
  email: "vendascomp55@gmail.com",
  city: "Esteio",
  state: "RS",
  country: "BR",
  whatsapp: {
    /** Somente dígitos, com DDI e DDD. */
    number: "5551994470624",
    displayNumber: "(51) 99447-0624",
    defaultMessage:
      "Olá! Conheci a Fluxo Direto pelo site e gostaria de saber como vocês podem ajudar minha empresa.",
  },
  social: {
    instagram: "@fluxodireto.rs",
    linkedin: "",
  },
} as const;

export function whatsappLink(message: string = siteConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Por que Fluxo Direto", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;
