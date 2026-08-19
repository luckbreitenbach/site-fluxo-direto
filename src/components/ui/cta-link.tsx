import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkProps = React.ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
};

const sizeClasses = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
} as const;

const variantClasses = {
  primary:
    "bg-brand text-primary-foreground shadow-[0_10px_40px_-12px_color-mix(in_oklch,var(--brand),transparent_30%)] hover:bg-[color-mix(in_oklch,var(--brand),white_12%)]",
  outline:
    "border border-white/15 bg-white/5 text-foreground hover:border-brand/40 hover:bg-white/10",
  ghost: "text-foreground hover:bg-white/5",
} as const;

export function CtaLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "gap-2 rounded-xl font-medium transition-transform duration-200 hover:-translate-y-0.5",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
