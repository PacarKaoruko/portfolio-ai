import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Shared elevated surface for portfolio content. */
export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_16px_38px_rgba(0,0,0,0.18)]",
        className,
      )}
      {...props}
    />
  );
}
