import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoVariant = "clean" | "full" | "mark" | "stacked";
export type LogoTheme = "dark" | "light" | "auto";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  size?: LogoSize;
  className?: string;
  imageClassName?: string;
  href?: string;
  priority?: boolean;
}

const SIZE_MAP: Record<LogoVariant, Record<LogoSize, { height: number; width: number; styleClass: string }>> = {
  clean: {
    xs: { height: 24, width: 48, styleClass: "h-6 w-auto" },
    sm: { height: 32, width: 64, styleClass: "h-8 w-auto" },
    md: { height: 40, width: 80, styleClass: "h-10 w-auto" },
    lg: { height: 64, width: 128, styleClass: "h-[52px] sm:h-[60px] md:h-[64px] w-auto" },
    xl: { height: 76, width: 152, styleClass: "h-[64px] sm:h-[76px] w-auto" },
  },
  full: {
    xs: { height: 26, width: 52, styleClass: "h-[26px] w-auto" },
    sm: { height: 36, width: 72, styleClass: "h-9 w-auto" },
    md: { height: 46, width: 92, styleClass: "h-11 w-auto" },
    lg: { height: 58, width: 116, styleClass: "h-[58px] w-auto" },
    xl: { height: 72, width: 144, styleClass: "h-[72px] w-auto" },
  },
  mark: {
    xs: { height: 24, width: 18, styleClass: "h-6 w-auto" },
    sm: { height: 32, width: 24, styleClass: "h-8 w-auto" },
    md: { height: 40, width: 31, styleClass: "h-10 w-auto" },
    lg: { height: 52, width: 40, styleClass: "h-[52px] w-auto" },
    xl: { height: 64, width: 49, styleClass: "h-16 w-auto" },
  },
  stacked: {
    xs: { height: 40, width: 40, styleClass: "h-10 w-10" },
    sm: { height: 56, width: 56, styleClass: "h-14 w-14" },
    md: { height: 72, width: 72, styleClass: "h-[72px] w-[72px]" },
    lg: { height: 96, width: 96, styleClass: "h-24 w-24" },
    xl: { height: 128, width: 128, styleClass: "h-32 w-32" },
  },
};

const ASSET_PATHS = {
  clean: {
    dark: "/brand/bolxolve_logo_clean_dark.jpg",
    light: "/brand/bolxolve_logo_clean_light.jpg",
    ratio: 2400 / 1200,
  },
  full: {
    dark: "/brand/bolxolve_logo_dark.jpg",
    light: "/brand/bolxolve_logo_light.jpg",
    ratio: 2400 / 1200,
  },
  stacked: {
    dark: "/brand/bolxolve_logo_stacked_dark.jpg",
    light: "/brand/bolxolve_logo_stacked_light.jpg",
    ratio: 1,
  },
  mark: {
    dark: "/brand/logo_icon_hi_res.png",
    light: "/brand/bolxolve_icon_light.jpg",
    ratio: 234 / 307,
  },
};

export const Logo: React.FC<LogoProps> = ({
  variant = "clean",
  theme = "dark",
  size = "md",
  className,
  imageClassName,
  href,
  priority = false,
}) => {
  const asset = ASSET_PATHS[variant];
  const sizeConfig = SIZE_MAP[variant][size];

  const renderImage = (src: string, altSuffix: string, extraClass = "") => (
    <Image
      src={src}
      alt={`BOLXOLVE Official Logo ${altSuffix}`}
      width={Math.round(sizeConfig.height * asset.ratio)}
      height={sizeConfig.height}
      priority={priority}
      className={cn(
        sizeConfig.styleClass,
        "object-contain select-none transition-opacity duration-200",
        imageClassName,
        extraClass
      )}
    />
  );

  const content = (
    <div className={cn("inline-flex items-center justify-center shrink-0", className)}>
      {theme === "dark" && renderImage(asset.dark, "(Dark)")}
      {theme === "light" && renderImage(asset.light, "(Light)")}
      {theme === "auto" && (
        <>
          {renderImage(asset.dark, "(Dark)", "dark:block hidden")}
          {renderImage(asset.light, "(Light)", "dark:hidden block")}
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BAF247] rounded-sm transition-transform active:scale-[0.98]"
        aria-label="BOLXOLVE LTD - Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;

