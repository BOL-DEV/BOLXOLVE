"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/#technology" },
  { label: "Company", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

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

  if (pathname?.startsWith("/demos")) {
    return null;
  }

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
            <Logo variant="clean" size="lg" href="/" priority />
          </div>

          {/* Desktop Navigation Links — Clean, Direct, Editorial */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-white transition-colors duration-150 font-medium py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BAF247] rounded-sm"
              >
                {link.label}
              </Link>
            ))}
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

        {/* Mobile Navigation Drawer — Simple, Clean, Non-Nested */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, height: 0 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="md:hidden py-6 border-t border-[#1E2638] bg-[#050915] overflow-hidden"
            >
              <nav className="flex flex-col space-y-1 px-3" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-3 text-sm font-mono uppercase tracking-[0.14em] text-[#D4D4D8] hover:text-[#BAF247] hover:bg-[#101522] rounded-md transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-[#1E2638]/70">
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
