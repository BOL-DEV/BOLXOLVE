import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#BAF247] text-[#050915] font-semibold hover:bg-[#A8E035] active:bg-[#94CC24] shadow-[0_1px_3px_rgba(0,0,0,0.4)] focus-visible:ring-[#BAF247]",
  secondary:
    "bg-[#101522] text-[#FFFFFF] border border-[#1E2638] hover:bg-[#151B2B] hover:border-[#BAF247]/40 active:bg-[#1A2236] focus-visible:ring-[#BAF247]",
  outline:
    "bg-transparent text-[#FFFFFF] border border-[#1E2638] hover:border-[#BAF247] hover:text-[#BAF247] active:bg-[#BAF247]/5 focus-visible:ring-[#BAF247]",
  ghost:
    "bg-transparent text-[#A1A1AA] hover:text-[#FFFFFF] hover:bg-[#101522]/80 active:bg-[#101522] focus-visible:ring-[#BAF247]",
  link:
    "bg-transparent text-[#BAF247] hover:text-[#A8E035] underline-offset-4 hover:underline p-0 h-auto font-medium focus-visible:ring-[#BAF247]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs tracking-wide rounded-md gap-1.5",
  md: "h-11 px-5 text-sm tracking-wide rounded-md gap-2",
  lg: "h-13 px-7 text-base tracking-normal rounded-lg gap-2.5",
  icon: "h-10 w-10 p-0 rounded-md justify-center items-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      iconLeft,
      iconRight,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-150 select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050915]",
      "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <span className="inline-block w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!isLoading && iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        {children && <span>{children}</span>}
        {!isLoading && iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

