"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { Small } from "@/components/ui/Typography";
import { COMPANY_INFO } from "@/lib/tokens";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/demos")) {
    return null;
  }

  return (
    <footer
      id="contact"
      className="w-full bg-[#050915] border-t border-[#1E2638] text-white pt-16 pb-12 relative"
    >
      {/* Anchor targets for external & hash navigation */}
      <span id="about" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="company" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="inquiries" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#1E2638]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="clean" size="md" href="/" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
              BOLXOLVE LTD is an international technology and digital solutions company delivering mission-critical web applications, intelligent automation, and scalable digital infrastructure.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <Badge variant="status" size="sm" dot>
                Global Systems Nominal
              </Badge>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] block mb-4">
              Services
            </span>
            <ul className="space-y-3 text-sm">
              {COMPANY_INFO.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/#${service.slug}`}
                    className="text-[#A1A1AA] hover:text-white transition-colors duration-150"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions/education"
                  className="text-[#BAF247] hover:text-[#cbf95c] transition-colors duration-150 flex items-center gap-1.5"
                >
                  <span>Education (Upcoming)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Selected Solutions Column */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] block mb-4">
              Selected Solutions
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/solutions/zentra" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  ZENTRA SaaS
                </Link>
              </li>
              <li>
                <Link href="/solutions/invoice-management" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  Invoice Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/bolmeet-ai" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  BOLMEET AI
                </Link>
              </li>
              <li>
                <Link href="/solutions/education" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  Education Platform
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-[#71717A] hover:text-[#BAF247] transition-colors duration-150">
                  &larr; All Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] block mb-4">
              Company
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#about" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  About BOLXOLVE
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  Direct Inquiries
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  Engineering Solutions
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[#A1A1AA] hover:text-white transition-colors duration-150">
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Small className="text-[#71717A]">
            &copy; {currentYear} {COMPANY_INFO.registered}
          </Small>
          <div className="flex items-center space-x-6 text-xs text-[#71717A]">
            <span>Registration: BOLXOLVE LTD</span>
            <span>&bull;</span>
            <span>Global Digital Operations</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
