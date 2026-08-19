import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  "aria-labelledby"?: string;
};

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-24 lg:py-28", className)}
      {...props}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
