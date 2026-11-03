import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "elevated" | "outline" | "interactive";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverEffect?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-[#101522] border border-[#1E2638] text-white",
  elevated: "bg-[#151B2B] border border-[#1E2638] shadow-[0_4px_20px_rgba(0,0,0,0.35)] text-white",
  outline: "bg-transparent border border-[#1E2638] text-white",
  interactive:
    "bg-[#101522] border border-[#1E2638] text-white hover:border-[#BAF247]/40 hover:bg-[#131A2B] transition-all duration-200 cursor-pointer active:scale-[0.99]",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hoverEffect = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-6 sm:p-8 relative overflow-hidden",
          variantStyles[variant],
          hoverEffect &&
            "transition-all duration-200 hover:border-[#BAF247]/30 hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={cn("text-xl font-semibold tracking-tight text-white", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn("text-sm text-[#A1A1AA] leading-relaxed", className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("space-y-4", className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("mt-6 pt-4 border-t border-[#1E2638] flex items-center justify-between", className)} {...props}>
    {children}
  </div>
);

export default Card;
