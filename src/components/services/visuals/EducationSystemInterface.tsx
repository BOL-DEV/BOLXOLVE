"use client";

import React from "react";
import { GraduationCap, Users, Calendar, CheckSquare, BellRing, ShieldCheck } from "lucide-react";

export const EducationSystemInterface: React.FC = () => {
  return (
    <div className="w-full bg-[#050915] select-none text-white">
      {/* Header */}
      <div className="px-4 py-3 sm:px-6 bg-[#0B0F1C] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-white">
          <GraduationCap className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="font-semibold">BOLXOLVE EDUCATION PLATFORM</span>
          <span className="text-[#71717A] hidden sm:inline">// Primary &amp; Secondary School OS</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#BAF247]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
          <span>Dedicated Institutional Tenant</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-4 sm:p-6 bg-[#080D1A] space-y-4">
        {/* School Overview Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#101522] to-[#151B2B] border border-[#1E2638] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#BAF247]">
              <span>K-12 Primary &amp; Secondary Institutional Tenant</span>
              <span>&bull;</span>
              <span>Academic Year 2024/2025</span>
            </div>
            <h4 className="text-lg font-bold text-white tracking-tight">
              St. Augustine Collegiate Academy
            </h4>
            <p className="text-xs text-[#A1A1AA]">
              Unified student registry, attendance logging, terminal report cards, and parent fee portal.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#050915] border border-[#BAF247]/30 text-right shrink-0 font-mono">
            <span className="text-[10px] text-[#71717A] block">Enrolled Students</span>
            <span className="text-base font-bold text-[#BAF247]">1,248 Active</span>
          </div>
        </div>

        {/* Status Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <span className="text-[10px] uppercase text-[#71717A] block">Today&apos;s Attendance</span>
            <span className="text-base font-bold text-white block">96.8%</span>
            <span className="text-[10px] text-[#BAF247]">1,208 Present</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <span className="text-[10px] uppercase text-[#71717A] block">Terminal Gradebook</span>
            <span className="text-base font-bold text-white block">Term 2 Active</span>
            <span className="text-[10px] text-[#BAF247]">Report Card Engine</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <span className="text-[10px] uppercase text-[#71717A] block">Parent Portal</span>
            <span className="text-base font-bold text-white block">89% Verified</span>
            <span className="text-[10px] text-[#71717A]">SMS &amp; Email alerts</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <span className="text-[10px] uppercase text-[#71717A] block">Term Fee Billing</span>
            <span className="text-base font-bold text-white block">£184,200</span>
            <span className="text-[10px] text-[#BAF247]">Direct Bank Wire Sync</span>
          </div>
        </div>

        {/* Class Records Roster */}
        <div className="rounded-xl bg-[#101522] border border-[#1E2638] overflow-hidden text-xs font-mono">
          <div className="px-4 py-2.5 bg-[#0A0F1D] border-b border-[#1E2638] flex items-center justify-between text-[10px] uppercase text-[#71717A]">
            <span>Active Grade Roster &amp; Attendance Check</span>
            <span>Room &amp; Lead Educator</span>
          </div>
          <div className="divide-y divide-[#1E2638]/60">
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">Grade 11 — Advanced Sciences</span>
                <span className="text-[10px] text-[#71717A]">32 / 32 Students Present &bull; 100% Attendance</span>
              </div>
              <div className="text-right">
                <span className="text-white block font-medium">Lab 4B</span>
                <span className="text-[10px] text-[#BAF247]">Dr. R. Hawthorne</span>
              </div>
            </div>

            <div className="px-4 py-3 flex items-center justify-between bg-[#050915]/40">
              <div>
                <span className="font-semibold text-white block">Grade 9 — Mathematics &amp; Computation</span>
                <span className="text-[10px] text-[#71717A]">28 / 30 Students Present &bull; 2 Excused</span>
              </div>
              <div className="text-right">
                <span className="text-white block font-medium">Room 102</span>
                <span className="text-[10px] text-[#BAF247]">Mrs. C. Adeleke</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 sm:px-6 bg-[#0B0F1C] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>DEDICATED INSTITUTIONAL ENCRYPTION</span>
        <span className="text-white">BOLXOLVE EDUCATION PLATFORM</span>
      </div>
    </div>
  );
};

export default EducationSystemInterface;

