# site-fluxo-direto

Site institucional da Fluxo Direto — Agência de Marketing Digital e Soluções Digitais.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Server Components)
- TypeScript
- Tailwind CSS 4
- shadcn/ui + Base UI
- Framer Motion
- Lucide React
- React Hook Form + Zod

## Rodando localmente

```bash
npm install
npm run dev
```

O site fica disponível em http://localhost:3000.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # servidor de produção
npm run lint    # ESLint
```

## Conteúdo e configurações

Todas as informações editáveis ficam centralizadas em dois arquivos:

- `src/config/site.ts` — nome, descrição, URL, e-mail, número de WhatsApp (com a mensagem
  automática) e itens do menu.
- `src/config/content.ts` — serviços, problemas, diferenciais, etapas do processo,
  segmentos atendidos, projetos, resultados e FAQ.

Para trocar o número de WhatsApp, altere apenas `siteConfig.whatsapp.number` (somente
dígitos, com DDI e DDD) e `displayNumber`.

## Estrutura

```
src/
  app/            rotas, metadata, sitemap, robots, opengraph-image
  components/
    layout/       header, footer, logo, botão flutuante de WhatsApp
    sections/     seções da home
    ui/           componentes reutilizáveis (shadcn/ui + próprios)
  config/         configurações e conteúdo do site
  lib/            utilitários e Schema.org
```

## Deploy

Projeto pronto para deploy na [Vercel](https://vercel.com). Ao publicar, ajuste
`siteConfig.url` para o domínio final — ele é usado no canonical, no sitemap, no
Open Graph e no Schema.org.

## Formulário de contato

Não há backend nesta versão: o formulário valida os campos com Zod e abre o WhatsApp
com a mensagem já preenchida. Caso futuramente seja necessário receber os leads por
e-mail ou CRM, basta trocar o `onSubmit` em `src/components/sections/contact-form.tsx`.
