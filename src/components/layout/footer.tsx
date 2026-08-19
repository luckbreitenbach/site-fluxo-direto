import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { siteConfig, whatsappLink } from "@/config/site";

const columns = [
  {
    title: "Empresa",
    links: [
      { label: "Início", href: "/#inicio" },
      { label: "Por que Fluxo Direto", href: "/#diferenciais" },
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Projetos", href: "/#projetos" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Sites e landing pages", href: "/#servicos" },
      { label: "Sistemas e aplicativos", href: "/#servicos" },
      { label: "Automação e chatbots", href: "/#servicos" },
      { label: "Perfil no Google", href: "/#servicos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Fale conosco", href: "/#contato" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacidade", href: "/privacidade" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[color-mix(in_oklch,var(--background),black_25%)]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-5">
          <Logo withTagline />
          <p className="max-w-xs text-sm text-muted-foreground">
            Marketing, tecnologia e automação para colocar seu negócio em movimento.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="size-4 text-brand" />
              {siteConfig.whatsapp.displayNumber}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4 text-brand" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide uppercase">{column.title}</h2>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Fluxo Direto. Todos os direitos reservados.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
