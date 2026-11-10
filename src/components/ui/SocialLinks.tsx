import React from "react";
import { SOCIAL_LINKS } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type SocialId = (typeof SOCIAL_LINKS)[number]["id"];

const SOCIAL_ICONS: Record<SocialId, React.ReactNode> = {
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  facebook: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
};

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

/** Shared social profile link bar pulled from canonical company tokens. */
export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  showLabels = false,
}) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`BOLXOLVE on ${item.label}`}
          title={`Follow BOLXOLVE on ${item.label}`}
          className={cn(
            "inline-flex items-center justify-center rounded-lg bg-[#101522] border border-[#1E2638] text-[#A1A1AA] hover:text-[#BAF247] hover:border-[#BAF247]/40 hover:bg-[#151B2B] transition-all duration-200 active:scale-[0.97]",
            showLabels ? "px-3 py-2 gap-2 text-xs font-mono" : "w-9 h-9"
          )}
        >
          {SOCIAL_ICONS[item.id]}
          {showLabels && <span>{item.label}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

