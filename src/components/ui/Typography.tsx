import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Display: React.FC<TypographyProps> = ({
  as: Component = "h1",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.08] text-white",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Heading1: React.FC<TypographyProps> = ({
  as: Component = "h1",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-white",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Heading2: React.FC<TypographyProps> = ({
  as: Component = "h2",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.2] text-white",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Heading3: React.FC<TypographyProps> = ({
  as: Component = "h3",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-xl sm:text-2xl font-semibold tracking-tight leading-[1.3] text-white",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Heading4: React.FC<TypographyProps> = ({
  as: Component = "h4",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-lg font-semibold tracking-normal leading-[1.4] text-white",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Lead: React.FC<TypographyProps> = ({
  as: Component = "p",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-normal",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Body: React.FC<TypographyProps> = ({
  as: Component = "p",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-base text-[#A1A1AA] leading-relaxed font-normal",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Small: React.FC<TypographyProps> = ({
  as: Component = "p",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-sm text-[#71717A] leading-normal font-normal",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Micro: React.FC<TypographyProps> = ({
  as: Component = "span",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "text-xs uppercase tracking-widest font-semibold text-[#BAF247]",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);

export const Code: React.FC<TypographyProps> = ({
  as: Component = "code",
  className,
  children,
  ...props
}) => (
  <Component
    className={cn(
      "font-mono text-xs px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#BAF247]",
      className
    )}
    {...props}
  >
    {children}
  </Component>
);
