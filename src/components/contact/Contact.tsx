"use client";

import React, { useState } from "react";
import { Mail, Phone, Globe, ArrowRight, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import { ContactFormData, FormErrors, SERVICE_OPTIONS, CONTACT_DETAILS } from "./types";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    business: "",
    service: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      // Basic RFC-compliant email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select what you need.";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please briefly describe your project or challenge.";
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = "Please provide a few more details (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Construct structured mailto draft for honest, transparent client-side dispatch
    const subject = encodeURIComponent(
      `Project Enquiry: ${formData.service} — ${formData.fullName.trim()}${
        formData.business.trim() ? ` (${formData.business.trim()})` : ""
      }`
    );

    const body = encodeURIComponent(
      `BOLXOLVE PROJECT ENQUIRY\n` +
      `----------------------------------------\n` +
      `Full Name: ${formData.fullName.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Business / Organisation: ${formData.business.trim() || "Not specified"}\n` +
      `Category Needed: ${formData.service}\n\n` +
      `PROJECT DESCRIPTION:\n` +
      `${formData.projectDetails.trim()}\n` +
      `----------------------------------------\n` +
      `Sent via bolxolve.com enquiry form.`
    );

    const mailtoUrl = `mailto:${CONTACT_DETAILS.email}?subject=${subject}&body=${body}`;
    setSubmittedLink(mailtoUrl);

    // Trigger local email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled by UI state
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Anchor targets for external & internal navigation */}
      <span id="start-a-project" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="enquiry" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="talk" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-15" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-radial-hero pointer-events-none opacity-10" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =========================================================================
              LEFT COLUMN (5 Cols): SECTION INTRODUCTION & VERIFIED CONTACT DETAILS
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            {/* Eyebrow & Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
                <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
                  LET&apos;S BUILD SOMETHING USEFUL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Have a project in mind?{" "}
                <span className="text-[#BAF247]">Let&apos;s talk.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal pt-1">
                Whether you need a website, a custom business system, an automated workflow or a technology partner to help bring an idea to life, we&apos;d like to hear about it.
              </p>
            </div>

            {/* Verified Contact Details Card */}
            <div className="p-6 rounded-2xl bg-[#080D1A] border border-[#1E2638] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] block pb-1 border-b border-[#1E2638]">
                DIRECT CONTACT
              </span>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#101522] border border-[#1E2638] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#BAF247]" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Email
                  </span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="text-sm font-mono text-white hover:text-[#BAF247] transition-colors truncate block"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#101522] border border-[#1E2638] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#BAF247]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Phone
                  </span>
                  <a
                    href={`tel:${CONTACT_DETAILS.phone}`}
                    className="text-sm font-mono text-white hover:text-[#BAF247] transition-colors block"
                  >
                    {CONTACT_DETAILS.phone}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#101522] border border-[#1E2638] flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#BAF247]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                    Website
                  </span>
                  <a
                    href={CONTACT_DETAILS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-white hover:text-[#BAF247] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>bolxolve.com</span>
                    <ExternalLink className="w-3 h-3 text-[#71717A]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-2">
              <blockquote className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed italic border-l-2 border-[#BAF247]/50 pl-4 py-1">
                &ldquo;Good ideas deserve thoughtful execution. Let&apos;s explore what we can build together.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (7 Cols): PROJECT ENQUIRY FORM
             ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#101522] border border-[#1E2638] p-6 sm:p-8 lg:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.5)] space-y-6">
              <div className="space-y-1 border-b border-[#1E2638] pb-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Project Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  Fill out the details below and we&apos;ll be in touch to discuss your project.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono uppercase tracking-wider text-[#D4D4D8]"
                  >
                    Full Name <span className="text-[#BAF247]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg bg-[#050915] border text-white placeholder-[#71717A] text-sm focus:outline-none transition-colors ${
                      errors.fullName
                        ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#1E2638] focus:border-[#BAF247] focus:ring-1 focus:ring-[#BAF247]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#EF4444] font-mono flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#D4D4D8]"
                  >
                    Email Address <span className="text-[#BAF247]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={`w-full px-4 py-3 rounded-lg bg-[#050915] border text-white placeholder-[#71717A] text-sm focus:outline-none transition-colors ${
                      errors.email
                        ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#1E2638] focus:border-[#BAF247] focus:ring-1 focus:ring-[#BAF247]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#EF4444] font-mono flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Business / Organisation (Optional) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="business"
                      className="block text-xs font-mono uppercase tracking-wider text-[#D4D4D8]"
                    >
                      Business / Organisation
                    </label>
                    <span className="text-[10px] font-mono text-[#71717A]">Optional</span>
                  </div>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your business name (optional)"
                    className="w-full px-4 py-3 rounded-lg bg-[#050915] border border-[#1E2638] text-white placeholder-[#71717A] text-sm focus:outline-none focus:border-[#BAF247] focus:ring-1 focus:ring-[#BAF247] transition-colors"
                  />
                </div>

                {/* What do you need? */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="service"
                    className="block text-xs font-mono uppercase tracking-wider text-[#D4D4D8]"
                  >
                    What do you need? <span className="text-[#BAF247]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#050915] border text-sm focus:outline-none transition-colors appearance-none cursor-pointer ${
                        formData.service ? "text-white" : "text-[#71717A]"
                      } ${
                        errors.service
                          ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                          : "border-[#1E2638] focus:border-[#BAF247] focus:ring-1 focus:ring-[#BAF247]"
                      }`}
                    >
                      <option value="" disabled>
                        Select a capability or need...
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#101522] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <p className="text-xs text-[#EF4444] font-mono flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Tell us about your project */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-mono uppercase tracking-wider text-[#D4D4D8]"
                  >
                    Tell us about your project <span className="text-[#BAF247]">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    required
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're trying to build or the challenge you're looking to solve..."
                    className={`w-full px-4 py-3 rounded-lg bg-[#050915] border text-white placeholder-[#71717A] text-sm focus:outline-none transition-colors resize-y min-h-[110px] ${
                      errors.projectDetails
                        ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#1E2638] focus:border-[#BAF247] focus:ring-1 focus:ring-[#BAF247]"
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="text-xs text-[#EF4444] font-mono flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#BAF247] hover:bg-[#A8E035] text-[#050915] font-bold text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(186,242,71,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Send Project Enquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Honest Client-Side Fallback Confirmation Banner */}
                {submittedLink && (
                  <div className="p-4 rounded-xl bg-[#080D1A] border border-[#BAF247]/40 space-y-2 text-xs font-mono animate-fadeIn">
                    <div className="flex items-center gap-2 text-[#BAF247] font-semibold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Enquiry Prepared</span>
                    </div>
                    <p className="text-[#A1A1AA] font-sans leading-relaxed">
                      Opening your email client to send your enquiry to{" "}
                      <span className="text-white font-mono">{CONTACT_DETAILS.email}</span>.
                    </p>
                    <p className="text-[#71717A] text-[11px] pt-1 border-t border-[#1E2638]">
                      If your email app didn&apos;t open automatically,{" "}
                      <a
                        href={submittedLink}
                        className="text-[#BAF247] underline hover:text-white"
                      >
                        click here to send directly
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
