import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "accent" | "neutral" | "outline" | "status";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent:
    "bg-[rgba(186,242,71,0.12)] text-[#BAF247] border border-[rgba(186,242,71,0.25)]",
  neutral:
    "bg-[#101522] text-[#A1A1AA] border border-[#1E2638]",
  outline:
    "bg-transparent text-[#FFFFFF] border border-[#1E2638]",
  status:
    "bg-[#101522] text-[#FFFFFF] border border-[#1E2638]",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2 py-0.5 gap-1.5 font-medium tracking-wide",
  md: "text-xs px-2.5 py-1 gap-2 font-medium tracking-wider",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "accent",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full select-none uppercase font-mono",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {(dot || variant === "status") && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BAF247] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BAF247]" />
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;

