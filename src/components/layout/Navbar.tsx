"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleServicesClick = () => {
    setServicesOpen(false);
    router.push("/#services");
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 border-b",
        scrolled
          ? "bg-[#050915]/95 backdrop-blur-md border-[#1E2638] shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-[#050915] border-[#1E2638]/70"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Official Brand Logo */}
          <div className="flex items-center">
            <Logo variant="clean" size="sm" href="/" priority />
          </div>

          {/* Desktop Navigation Links (Refined Readability & Multi-Page Routing) */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={handleServicesClick}
                className="inline-flex items-center text-[13px] font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-white transition-colors duration-150 py-2 gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BAF247] rounded-sm font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-150 text-[#71717A]",
                    servicesOpen && "rotate-180 text-[#BAF247]"
                  )}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-72 p-2 rounded-md bg-[#101522] border border-[#1E2638] shadow-[0_16px_36px_rgba(0,0,0,0.8)] z-50"
                    role="menu"
                  >
                    <div className="px-3 py-2 border-b border-[#1E2638] mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A]">
                        Capabilities
                      </span>
                    </div>
                    {COMPANY_INFO.services.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/#${item.slug}`}
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#D4D4D8] hover:text-white hover:bg-[#151B2B] rounded transition-colors group"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] opacity-0 group-hover:opacity-100 group-hover:text-[#BAF247] transition-all" />
                      </Link>
                    ))}
                    <div className="pt-1 mt-1 border-t border-[#1E2638]">
                      <Link
                        href="/solutions/education"
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#BAF247] hover:bg-[#151B2B] rounded transition-colors group"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>Education Solution (Upcoming)</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#BAF247] opacity-80 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#work"
              className="text-[13px] font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-white transition-colors duration-150 font-medium"
            >
              Work
            </Link>

            <Link
              href="/#services"
              className="text-[13px] font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-white transition-colors duration-150 font-medium"
            >
              Technology
            </Link>

            <Link
              href="/#about"
              className="text-[13px] font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-white transition-colors duration-150 font-medium"
            >
              Company
            </Link>

            <Link
              href="/#contact"
              className="text-[13px] font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-white transition-colors duration-150 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <Button variant="primary" size="sm" href="/#contact">
              Start a project
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D4D4D8] hover:text-white hover:bg-[#101522] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BAF247]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="md:hidden py-6 border-t border-[#1E2638] bg-[#050915] overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 px-2" aria-label="Mobile Navigation">
                <div className="pt-2">
                  <span className="px-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A]">
                    Capabilities
                  </span>
                  <div className="mt-2 space-y-1">
                    {COMPANY_INFO.services.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/#${item.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-[#D4D4D8] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                    <Link
                      href="/solutions/education"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#BAF247] hover:text-[#cbf95c] hover:bg-[#101522] rounded-md transition-colors font-medium"
                    >
                      Education Platform (Upcoming)
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1E2638]/60 space-y-1">
                  <Link
                    href="/#work"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-[#D4D4D8] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                  >
                    Work
                  </Link>
                  <Link
                    href="/#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-[#D4D4D8] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                  >
                    Technology
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-[#D4D4D8] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                  >
                    Company
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-[#D4D4D8] hover:text-white hover:bg-[#101522] rounded-md transition-colors"
                  >
                    Contact
                  </Link>
                </div>

                <div className="pt-4 px-2">
                  <Button
                    variant="primary"
                    size="md"
                    href="/#contact"
                    className="w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start a project
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};

export default Navbar;
