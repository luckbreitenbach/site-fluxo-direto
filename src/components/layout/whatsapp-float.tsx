import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/config/site";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Fluxo Direto no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-medium text-primary-foreground shadow-[0_16px_40px_-12px_color-mix(in_oklch,var(--brand),transparent_20%)] transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-brand/50 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
