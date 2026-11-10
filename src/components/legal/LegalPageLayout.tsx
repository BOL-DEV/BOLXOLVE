import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/tokens";
import { SITE_CONFIG } from "@/lib/seo";

export interface LegalSection {
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSection[];
  crossLink: {
    label: string;
    href: string;
  };
}

/** Shared editorial container for BOLXOLVE legal and policy pages. */
export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  eyebrow,
  title,
  summary,
  lastUpdated,
  sections,
  crossLink,
}) => {
  return (
    <main className="min-h-screen bg-[#050915] text-white pt-10 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-16 right-1/4 w-[520px] h-[520px] bg-radial-hero pointer-events-none opacity-20" />

      <Container size="wide" className="relative z-10">
        {/* Header */}
        <header className="max-w-3xl space-y-5 pb-12 border-b border-[#1E2638]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="uppercase tracking-[0.2em] text-[#BAF247] font-semibold">
              {eyebrow}
            </span>
            <span className="text-[#3F3F46]">&bull;</span>
            <span className="text-[#71717A]">Last updated: {lastUpdated}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            {summary}
          </p>
        </header>

        {/* Policy Sections */}
        <div className="max-w-3xl divide-y divide-[#1E2638]">
          {sections.map((section) => (
            <section key={section.number} className="py-8 sm:py-10 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-mono font-bold text-[#BAF247]">
                  {section.number}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 pt-1 text-sm sm:text-base text-[#A1A1AA]">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Contact & Cross-Navigation Strip */}
        <div className="max-w-3xl pt-10 border-t border-[#1E2638] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[#A1A1AA] space-y-1">
            <span className="text-white font-semibold block">{COMPANY_INFO.name} (RC:9940684)</span>
            <span>
              Questions? Contact{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#BAF247] hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </span>
          </div>

          <Link
            href={crossLink.href}
            className="inline-flex items-center gap-2 text-[#BAF247] hover:text-white transition-colors"
          >
            <span>{crossLink.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default LegalPageLayout;

