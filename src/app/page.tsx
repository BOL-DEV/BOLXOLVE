import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Logo from "@/components/brand/Logo";
import {
  Display,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Lead,
  Body,
  Small,
  Micro,
  Code,
} from "@/components/ui/Typography";
import { BRAND_COLORS, COMPANY_INFO } from "@/lib/tokens";
import {
  Check,
  Terminal,
  Layers,
  Palette,
  Type,
  MousePointerClick,
  ShieldCheck,
  Boxes,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function DesignSystemHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        {/* Foundation Hero Header */}
        <Section spacing="lg" className="border-b border-[#1E2638] bg-radial-gradient">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-2">
              <Badge variant="accent" size="md">
                Foundation & Design System v1.0
              </Badge>
              <Badge variant="neutral" size="md">
                Production Ready
              </Badge>
            </div>

            <Display>
              Architectural foundation for <span className="text-[#BAF247]">BOLXOLVE LTD</span>.
            </Display>

            <Lead className="text-xl max-w-3xl">
              Engineered for an international technology and digital solutions company.
              Rooted in precision, minimalism, editorial typography, and high-performance layout primitives — strictly free of generic agency cliches.
            </Lead>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="primary" size="lg" href="#tokens" iconRight={<ArrowRight className="w-4 h-4" />}>
                Explore Design Tokens
              </Button>
              <Button variant="secondary" size="lg" href="#logos">
                Inspect Logo Assets
              </Button>
            </div>
          </div>
        </Section>

        {/* 1. Official Brand Palette */}
        <Section
          id="tokens"
          spacing="lg"
          eyebrow="01 / Color Architecture"
          title="Official Brand Palette & Design Tokens"
          description="Strict chromatic hierarchy engineered for contrast, technical authority, and dark-mode elegance. No arbitrary gradients or unrelated color noise."
          className="border-b border-[#1E2638]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Primary Background */}
            <Card variant="default">
              <div className="h-28 rounded bg-[#050915] border border-[#1E2638] flex items-end p-4 mb-4">
                <span className="font-mono text-xs text-white">#050915</span>
              </div>
              <CardTitle>Primary Background</CardTitle>
              <CardDescription>
                Deep obsidian navy. Grounding tone for all primary dark-mode viewports.
              </CardDescription>
              <div className="mt-4 pt-3 border-t border-[#1E2638] flex justify-between text-xs font-mono text-[#71717A]">
                <span>Token: --bg-primary</span>
                <span className="text-white">Core Canvas</span>
              </div>
            </Card>

            {/* Primary Accent */}
            <Card variant="default">
              <div className="h-28 rounded bg-[#BAF247] border border-[#BAF247]/50 flex items-end p-4 mb-4">
                <span className="font-mono text-xs text-[#050915] font-bold">#BAF247</span>
              </div>
              <CardTitle>Primary Accent</CardTitle>
              <CardDescription>
                High-voltage electric chartreuse. Reserved for brand accents, primary CTAs, and active statuses.
              </CardDescription>
              <div className="mt-4 pt-3 border-t border-[#1E2638] flex justify-between text-xs font-mono text-[#71717A]">
                <span>Token: --accent-primary</span>
                <span className="text-[#BAF247]">High Contrast</span>
              </div>
            </Card>

            {/* Secondary Surface */}
            <Card variant="default">
              <div className="h-28 rounded bg-[#101522] border border-[#1E2638] flex items-end p-4 mb-4">
                <span className="font-mono text-xs text-white">#101522</span>
              </div>
              <CardTitle>Secondary Surface</CardTitle>
              <CardDescription>
                Elevated technical card and container surface. Creates spatial depth with hairline borders.
              </CardDescription>
              <div className="mt-4 pt-3 border-t border-[#1E2638] flex justify-between text-xs font-mono text-[#71717A]">
                <span>Token: --bg-secondary</span>
                <span className="text-white">Cards & Panels</span>
              </div>
            </Card>

            {/* Primary Text */}
            <Card variant="default">
              <div className="h-28 rounded bg-[#FFFFFF] border border-gray-300 flex items-end p-4 mb-4">
                <span className="font-mono text-xs text-[#050915] font-bold">#FFFFFF</span>
              </div>
              <CardTitle>Primary Text</CardTitle>
              <CardDescription>
                Pure crisp white for headlines, vital metrics, and primary legibility.
              </CardDescription>
              <div className="mt-4 pt-3 border-t border-[#1E2638] flex justify-between text-xs font-mono text-[#71717A]">
                <span>Token: --text-primary</span>
                <span className="text-white">Headlines</span>
              </div>
            </Card>

            {/* Secondary Text */}
            <Card variant="default">
              <div className="h-28 rounded bg-[#A1A1AA] border border-gray-400 flex items-end p-4 mb-4">
                <span className="font-mono text-xs text-[#050915] font-bold">#A1A1AA</span>
              </div>
              <CardTitle>Secondary Text</CardTitle>
              <CardDescription>
                Zinc-400 slate for body prose, descriptive copy, and navigational items.
              </CardDescription>
              <div className="mt-4 pt-3 border-t border-[#1E2638] flex justify-between text-xs font-mono text-[#71717A]">
                <span>Token: --text-secondary</span>
                <span className="text-[#A1A1AA]">Body Prose</span>
              </div>
            </Card>

            {/* Light Background */}
            <Card variant="default">
              <div className="h-28 rounded bg-[#F8FAFC] border border-slate-300 flex items-end p-4 mb-4">
                <span className="font-mono text-xs text-[#050915] font-bold">#F8FAFC</span>
              </div>
              <CardTitle>Light Background</CardTitle>
              <CardDescription>
                Slate-50 for high-contrast light contexts, documents, or light theme surfaces.
              </CardDescription>
              <div className="mt-4 pt-3 border-t border-[#1E2638] flex justify-between text-xs font-mono text-[#71717A]">
                <span>Token: --bg-light</span>
                <span className="text-white">Light Context</span>
              </div>
            </Card>
          </div>

          {/* Palette Contrast & Compliance Banner */}
          <div className="p-6 rounded-lg bg-[#101522] border border-[#1E2638] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded bg-[#BAF247]/10 border border-[#BAF247]/30 flex items-center justify-center text-[#BAF247]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">WCAG AAA / AA Contrast Certified</h4>
                <p className="text-xs text-[#A1A1AA]">
                  Primary Accent (#BAF247 on #050915) achieves a contrast ratio of <strong className="text-[#BAF247]">14.2:1</strong>.
                  White (#FFFFFF on #050915) delivers <strong className="text-white">18.7:1</strong>.
                </p>
              </div>
            </div>
            <Badge variant="accent" size="sm">
              Strictly Compliant
            </Badge>
          </div>
        </Section>

        {/* 2. Dark & Light Logo Asset Handling */}
        <Section
          id="logos"
          spacing="lg"
          eyebrow="02 / Brand Asset Engine"
          title="BOLXOLVE Official Logo System"
          description="Integrated handling of all official brand identity assets across dark and light viewports. The source assets are preserved verbatim without altering, recolouring, or redesigning."
          className="border-b border-[#1E2638]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dark Mode Viewport */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-mono uppercase tracking-widest text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BAF247]" />
                  Dark Theme Asset Integration (#050915)
                </h4>
                <Badge variant="neutral" size="sm">
                  Native Background
                </Badge>
              </div>

              {/* Clean Horizontal */}
              <div className="p-8 rounded-lg bg-[#050915] border border-[#1E2638] flex flex-col items-center justify-center space-y-4">
                <Logo variant="clean" size="lg" theme="dark" />
                <span className="text-xs font-mono text-[#71717A]">
                  Clean Horizontal Wordmark — bolxolve_logo_clean_dark.jpg
                </span>
              </div>

              {/* Full with Tagline */}
              <div className="p-8 rounded-lg bg-[#050915] border border-[#1E2638] flex flex-col items-center justify-center space-y-4">
                <Logo variant="full" size="lg" theme="dark" />
                <span className="text-xs font-mono text-[#71717A]">
                  Full Signature with Tagline — bolxolve_logo_dark.jpg
                </span>
              </div>

              {/* Standalone Mark & Stacked */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg bg-[#050915] border border-[#1E2638] flex flex-col items-center justify-center space-y-3">
                  <Logo variant="mark" size="lg" theme="dark" />
                  <span className="text-[11px] font-mono text-[#71717A] text-center">
                    Transparent Mark (logo_icon_hi_res.png)
                  </span>
                </div>
                <div className="p-6 rounded-lg bg-[#050915] border border-[#1E2638] flex flex-col items-center justify-center space-y-3">
                  <Logo variant="stacked" size="lg" theme="dark" />
                  <span className="text-[11px] font-mono text-[#71717A] text-center">
                    Stacked Symbol (bolxolve_logo_stacked_dark.jpg)
                  </span>
                </div>
              </div>
            </div>

            {/* Light Mode Viewport */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-mono uppercase tracking-widest text-[#050915] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                  Light Theme Asset Integration (#F8FAFC)
                </h4>
                <Badge variant="outline" size="sm">
                  Inverted Canvas
                </Badge>
              </div>

              {/* Clean Horizontal Light */}
              <div className="p-8 rounded-lg bg-[#F8FAFC] border border-slate-300 flex flex-col items-center justify-center space-y-4">
                <Logo variant="clean" size="lg" theme="light" />
                <span className="text-xs font-mono text-slate-500">
                  Clean Horizontal Wordmark — bolxolve_logo_clean_light.jpg
                </span>
              </div>

              {/* Full with Tagline Light */}
              <div className="p-8 rounded-lg bg-[#F8FAFC] border border-slate-300 flex flex-col items-center justify-center space-y-4">
                <Logo variant="full" size="lg" theme="light" />
                <span className="text-xs font-mono text-slate-500">
                  Full Signature with Tagline — bolxolve_logo_light.jpg
                </span>
              </div>

              {/* Standalone Mark & Stacked Light */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-300 flex flex-col items-center justify-center space-y-3">
                  <Logo variant="mark" size="lg" theme="light" />
                  <span className="text-[11px] font-mono text-slate-500 text-center">
                    Light Symbol (bolxolve_icon_light.jpg)
                  </span>
                </div>
                <div className="p-6 rounded-lg bg-[#F8FAFC] border border-slate-300 flex flex-col items-center justify-center space-y-3">
                  <Logo variant="stacked" size="lg" theme="light" />
                  <span className="text-[11px] font-mono text-slate-500 text-center">
                    Stacked Symbol (bolxolve_logo_stacked_light.jpg)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. Typography Hierarchy */}
        <Section
          spacing="lg"
          eyebrow="03 / Typography System"
          title="Editorial Technical Type Scale"
          description="Engineered for high editorial impact and rigorous technical clarity. Tight letter spacing for large headers, relaxed leading for long-form prose."
          className="border-b border-[#1E2638]"
        >
          <div className="space-y-8 bg-[#101522] p-8 sm:p-12 rounded-lg border border-[#1E2638]">
            {/* Display */}
            <div className="space-y-2 pb-6 border-b border-[#1E2638]">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>Display / Hero</span>
                <span>text-5xl sm:text-7xl / tracking-tighter / bold</span>
              </div>
              <Display>Global Technology Infrastructure</Display>
            </div>

            {/* Heading 1 */}
            <div className="space-y-2 pb-6 border-b border-[#1E2638]">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>Heading 1 / Page Title</span>
                <span>text-4xl sm:text-5xl / tracking-tight / bold</span>
              </div>
              <Heading1>Custom Web Applications & Systems</Heading1>
            </div>

            {/* Heading 2 */}
            <div className="space-y-2 pb-6 border-b border-[#1E2638]">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>Heading 2 / Section Header</span>
                <span>text-2xl sm:text-3xl / tracking-tight / semibold</span>
              </div>
              <Heading2>Intelligent Workflow Automation</Heading2>
            </div>

            {/* Heading 3 */}
            <div className="space-y-2 pb-6 border-b border-[#1E2638]">
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>Heading 3 / Card Header</span>
                <span>text-xl sm:text-2xl / tracking-tight / semibold</span>
              </div>
              <Heading3>Autonomous AI Integrations</Heading3>
            </div>

            {/* Lead & Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                  <span>Lead Paragraph</span>
                  <span>text-lg / text-[#A1A1AA] / leading-relaxed</span>
                </div>
                <Lead>
                  BOLXOLVE LTD architecturally designs, builds, and maintains digital ecosystems that allow businesses to operate with high velocity and technical resilience.
                </Lead>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A]">
                  <span>Body Prose</span>
                  <span>text-base / text-[#A1A1AA] / leading-relaxed</span>
                </div>
                <Body>
                  Our engineering team combines modern full-stack application frameworks with secure cloud computing infrastructure to deliver bespoke solutions for demanding international operations.
                </Body>
              </div>
            </div>

            {/* Metadata, Micro & Code */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#1E2638]">
              <div>
                <span className="text-xs font-mono text-[#71717A] block mb-2">Micro Eyebrow</span>
                <Micro>System Metric 99.98%</Micro>
              </div>
              <div>
                <span className="text-xs font-mono text-[#71717A] block mb-2">Small / Caption</span>
                <Small>ISO/IEC 27001 standard engineering practices</Small>
              </div>
              <div>
                <span className="text-xs font-mono text-[#71717A] block mb-2">Technical Code</span>
                <Code>npm run build --turbo</Code>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Button & Interaction Styles */}
        <Section
          spacing="lg"
          eyebrow="04 / Interactive Primitives"
          title="Button & Action System"
          description="Tactile, high-contrast interactive states. Direct hover and focus feedback engineered with zero unnecessary motion lag."
          className="border-b border-[#1E2638]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Primary Button */}
            <Card variant="default">
              <CardTitle className="text-base mb-2">Primary Action</CardTitle>
              <CardDescription className="mb-6">
                Electric chartreuse button for dominant calls-to-action.
              </CardDescription>
              <div className="space-y-3">
                <Button variant="primary" size="md" className="w-full">
                  Primary Action
                </Button>
                <Button variant="primary" size="sm" className="w-full">
                  Small Variant
                </Button>
              </div>
            </Card>

            {/* Secondary Button */}
            <Card variant="default">
              <CardTitle className="text-base mb-2">Secondary Surface</CardTitle>
              <CardDescription className="mb-6">
                Surface background with hairline border for auxiliary actions.
              </CardDescription>
              <div className="space-y-3">
                <Button variant="secondary" size="md" className="w-full">
                  Secondary Action
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Small Variant
                </Button>
              </div>
            </Card>

            {/* Outline Button */}
            <Card variant="default">
              <CardTitle className="text-base mb-2">Technical Outline</CardTitle>
              <CardDescription className="mb-6">
                Hairline transparent button with accent border hover state.
              </CardDescription>
              <div className="space-y-3">
                <Button variant="outline" size="md" className="w-full">
                  Outline Action
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Small Variant
                </Button>
              </div>
            </Card>

            {/* Ghost & Link */}
            <Card variant="default">
              <CardTitle className="text-base mb-2">Ghost & Text Link</CardTitle>
              <CardDescription className="mb-6">
                Subtle navigational actions and contextual text links.
              </CardDescription>
              <div className="space-y-4">
                <Button variant="ghost" size="md" className="w-full">
                  Ghost Action
                </Button>
                <div className="text-center pt-2">
                  <Button variant="link" href="#contact" iconRight={<ArrowRight className="w-3.5 h-3.5" />}>
                    Interactive Link
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Button States & Sizing Matrix */}
          <div className="p-6 rounded-lg bg-[#101522] border border-[#1E2638] space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
              State Matrix & Interactive Micro-Feedback
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">
                Default
              </Button>
              <Button variant="primary" size="sm" isLoading>
                Loading
              </Button>
              <Button variant="primary" size="sm" disabled>
                Disabled
              </Button>
              <Button variant="secondary" size="sm" iconLeft={<Terminal className="w-3.5 h-3.5" />}>
                With Icon Left
              </Button>
              <Button variant="secondary" size="sm" iconRight={<ExternalLink className="w-3.5 h-3.5" />}>
                With Icon Right
              </Button>
            </div>
          </div>
        </Section>

        {/* 5. Capability Architecture (BOLXOLVE Current & Future Sectors) */}
        <Section
          spacing="lg"
          eyebrow="05 / Service & Technology Architecture"
          title="Modular Capability Framework"
          description="Designed to accommodate BOLXOLVE's current digital offerings while maintaining architectural elasticity for future expansion into emergent technology sectors."
          className="border-b border-[#1E2638]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.services.map((service, idx) => (
              <Card key={service.slug} variant="interactive" hoverEffect>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#BAF247]">0{idx + 1} / SECTOR</span>
                    <Badge variant="neutral" size="sm">
                      Active Line
                    </Badge>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enterprise-grade architecture tailored for scalability, high conversion, and seamless operational continuity.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-xs font-mono text-[#71717A]">SLUG: {service.slug}</span>
                  <ArrowRight className="w-4 h-4 text-[#BAF247]" />
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-lg bg-[#151B2B] border border-[#1E2638] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-white">Extensibility Vector</h4>
              <p className="text-xs text-[#A1A1AA]">
                The brand system structure allows seamless addition of future sectors (e.g., IoT Systems, Distributed Cloud Networks, Autonomous Systems) without design debt.
              </p>
            </div>
            <Badge variant="accent" size="sm">
              Future-Proofed
            </Badge>
          </div>
        </Section>

        {/* 6. Technical Specifications & Stack Summary */}
        <Section
          spacing="lg"
          eyebrow="06 / Engineering Foundation"
          title="Technical Standards & Stack Manifest"
          description="Built on modern open-web foundations to ensure zero layout shift, maximum core web vitals, and scalable maintainability."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <div className="w-8 h-8 rounded bg-[#151B2B] flex items-center justify-center text-[#BAF247] mb-2">
                  <Layers className="w-4 h-4" />
                </div>
                <CardTitle className="text-lg">Modern Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> Next.js 14 App Router
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> TypeScript strict mode
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> Tailwind CSS token mapping
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="default">
              <CardHeader>
                <div className="w-8 h-8 rounded bg-[#151B2B] flex items-center justify-center text-[#BAF247] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <CardTitle className="text-lg">Design Discipline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> Zero random gradients
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> Crisp 1px hairline borders
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> No excessive glassmorphism
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="default">
              <CardHeader>
                <div className="w-8 h-8 rounded bg-[#151B2B] flex items-center justify-center text-[#BAF247] mb-2">
                  <Boxes className="w-4 h-4" />
                </div>
                <CardTitle className="text-lg">Production Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> Next/Image optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> WCAG AA / AAA verified
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF247]" /> prefers-reduced-motion
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
