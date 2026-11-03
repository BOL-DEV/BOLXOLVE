"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-[#050915]/90 backdrop-blur-md border-[#1E2638]"
          : "bg-[#050915] border-[#1E2638]/60"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <Logo variant="clean" size="sm" href="/" priority />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-150 py-2 gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BAF247]"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-150 text-[#71717A]",
                    servicesOpen && "rotate-180 text-[#BAF247]"
                  )}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 w-72 p-2 rounded-lg bg-[#101522] border border-[#1E2638] shadow-[0_12px_32px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <div className="px-3 py-2 border-b border-[#1E2638] mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                      Core Capabilities
                    </span>
                  </div>
                  {COMPANY_INFO.services.map((item) => (
                    <Link
                      key={item.slug}
                      href={`#${item.slug}`}
                      className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white hover:bg-[#151B2B] rounded transition-colors group"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] opacity-0 group-hover:opacity-100 group-hover:text-[#BAF247] transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#technology"
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-150"
            >
              Technology
            </Link>

            <Link
              href="#about"
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-150"
            >
              Company
            </Link>

            <Link
              href="#contact"
              className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-150"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center space-x-5">
            <Badge variant="status" size="sm" dot className="hidden lg:inline-flex">
              Available for Q4
            </Badge>

            <Button variant="primary" size="sm" href="#contact">
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A1A1AA] hover:text-white hover:bg-[#101522] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BAF247]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#1E2638] bg-[#050915]">
            <nav className="flex flex-col space-y-4 px-2" aria-label="Mobile Navigation">
              <div className="px-2 pb-2">
                <Badge variant="status" size="sm" dot>
                  Available for Q4 Commissions
                </Badge>
              </div>

              <div className="pt-2">
                <span className="px-2 text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                  Services & Solutions
                </span>
                <div className="mt-2 space-y-1">
                  {COMPANY_INFO.services.map((item) => (
                    <Link
                      key={item.slug}
                      href={`#${item.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#1E2638]/50">
                <Link
                  href="#technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                >
                  Technology
                </Link>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                >
                  Company
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-[#A1A1AA] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 px-2">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Project
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
