"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";
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
      className="w-full bg-[#050915] border-t border-[#1E2638] text-white pt-16 pb-12 relative"
    >
      {/* Anchor targets for external & hash navigation */}
      <span id="inquiries" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#1E2638]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="clean" size="xl" href="/" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm">
              BOLXOLVE LTD is an international technology and digital solutions company delivering mission-critical web applications, intelligent automation, and scalable digital infrastructure.
            </p>
            <div className="pt-1 space-y-2.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] block">
                Follow Us
              </span>
              <SocialLinks />
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
                  <a
                    href={`/#${service.slug}`}
                    onClick={(e) => {
                      if (pathname === "/") {
                        e.preventDefault();
                        window.dispatchEvent(
                          new CustomEvent("bolxolve:select-service", { detail: { slug: service.slug } })
                        );
                        window.history.pushState(null, "", `/#${service.slug}`);
                      }
                    }}
                    className="text-[#A1A1AA] hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
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
                <Link href="/solutions" className="text-[#71717A] hover:text-[#BAF247] transition-colors duration-150">
                  &rarr; All Solutions Hub
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
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#71717A]">
            <Link href="/privacy" className="hover:text-[#BAF247] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-[#1E2638]">|</span>
            <Link href="/terms" className="hover:text-[#BAF247] transition-colors">
              Terms of Service
            </Link>
            <span aria-hidden="true" className="text-[#1E2638]">|</span>
            <span>RC:9940684</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
