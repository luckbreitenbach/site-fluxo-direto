"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions, services } from "@/config/content";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  company: z.string().optional(),
  whatsapp: z
    .string()
    .min(10, "Informe um WhatsApp válido com DDD.")
    .regex(/^[\d\s()+-]+$/, "Use apenas números e os caracteres ( ) + -."),
  email: z.string().email("Informe um e-mail válido."),
  service: z.enum(serviceOptions),
  message: z.string().min(10, "Conte um pouco mais sobre o seu projeto."),
});

type ContactValues = z.infer<typeof contactSchema>;

function buildMessage(values: ContactValues) {
  return [
    "Olá! Vim pelo site da Fluxo Direto.",
    `Nome: ${values.name}`,
    values.company ? `Empresa: ${values.company}` : null,
    `WhatsApp: ${values.whatsapp}`,
    `E-mail: ${values.email}`,
    `Serviço de interesse: ${values.service}`,
    `Mensagem: ${values.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

const fieldClass =
  "h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-brand/50 focus-visible:ring-3 focus-visible:ring-brand/30";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "Site" },
  });

  useEffect(() => {
    const serviceId = searchParams.get("servico");
    if (!serviceId) return;
    const match = services.find((service) => service.id === serviceId);
    const label = match?.title.includes("Landing")
      ? "Landing Page"
      : serviceOptions.find((option) =>
          match?.title.toLowerCase().startsWith(option.toLowerCase()),
        );
    if (label) setValue("service", label);
  }, [searchParams, setValue]);

  const onSubmit = (values: ContactValues) => {
    window.open(whatsappLink(buildMessage(values)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="surface-card flex flex-col gap-5 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" error={errors.name?.message} htmlFor="name">
          <Input
            id="name"
            autoComplete="name"
            placeholder="Seu nome"
            className={fieldClass}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>

        <Field label="Empresa" htmlFor="company" optional>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Nome da empresa"
            className={fieldClass}
            {...register("company")}
          />
        </Field>

        <Field label="WhatsApp" error={errors.whatsapp?.message} htmlFor="whatsapp">
          <Input
            id="whatsapp"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            className={fieldClass}
            aria-invalid={!!errors.whatsapp}
            {...register("whatsapp")}
          />
        </Field>

        <Field label="E-mail" error={errors.email?.message} htmlFor="email">
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="voce@empresa.com.br"
            className={fieldClass}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Serviço de interesse" error={errors.service?.message} htmlFor="service">
        <select
          id="service"
          className={cn(fieldClass, "appearance-none bg-[#12151d]")}
          aria-invalid={!!errors.service}
          {...register("service")}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          rows={5}
          placeholder="Conte rapidamente o que sua empresa precisa."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-brand/50 focus-visible:ring-3 focus-visible:ring-brand/30"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-brand/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          <Send className="size-4" aria-hidden />
        )}
        Quero conversar sobre meu projeto
      </button>

      <p aria-live="polite" className="min-h-5 text-sm text-brand-soft">
        {sent ? (
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="size-4" aria-hidden />
            Abrimos o WhatsApp com sua mensagem. Se não abrir, chame no{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              link direto
            </a>
            .
          </span>
        ) : null}
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor} className="text-sm text-muted-foreground">
        {label}
        {optional ? <span className="text-xs"> (opcional)</span> : null}
      </Label>
      {children}
      {error ? (
        <span role="alert" className="text-xs text-destructive">
          {error}
        </span>
      ) : null}
    </div>
  );
}
