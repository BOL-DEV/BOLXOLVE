import React from "react";
import { cn } from "@/lib/utils";
import Container, { ContainerSize } from "./Container";
import { Heading2, Lead, Micro } from "./Typography";

export type SectionVariant = "default" | "surface" | "elevated" | "bordered";
export type SectionSpacing = "sm" | "md" | "lg" | "xl" | "none";

export interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  containerSize?: ContainerSize;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  headerAlign?: "left" | "center";
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-[#050915] text-[#FFFFFF]",
  surface: "bg-[#101522] text-[#FFFFFF]",
  elevated: "bg-[#151B2B] text-[#FFFFFF]",
  bordered: "bg-[#050915] text-[#FFFFFF] border-y border-[#1E2638]",
};

const spacingStyles: Record<SectionSpacing, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-24 sm:py-32 lg:py-40",
  xl: "py-32 sm:py-44",
  none: "py-0",
};

export const Section: React.FC<SectionProps> = ({
  variant = "default",
  spacing = "md",
  containerSize = "default",
  eyebrow,
  title,
  description,
  headerAlign = "left",
  className,
  children,
  ...props
}) => {
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        variantStyles[variant],
        spacingStyles[spacing],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>
        {hasHeader && (
          <div
            className={cn(
              "mb-12 sm:mb-16",
              headerAlign === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
            )}
          >
            {eyebrow && (
              <div className="mb-3">
                <Micro>{eyebrow}</Micro>
              </div>
            )}
            {title && (
              <Heading2 className="mb-4">
                {title}
              </Heading2>
            )}
            {description && (
              <Lead className={headerAlign === "center" ? "mx-auto" : ""}>
                {description}
              </Lead>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
