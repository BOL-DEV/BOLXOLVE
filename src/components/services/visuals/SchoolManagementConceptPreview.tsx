"use client";

import React, { useState } from "react";
import { GraduationCap, Users, Calendar, Clock, BookOpen, UserCheck, Bell, ShieldCheck } from "lucide-react";

export const SchoolManagementConceptPreview: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"admin" | "teacher" | "parent">("admin");

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEMONSTRATION CONCEPT</span>
          <span className="text-[#71717A]">&bull; School Management Platform</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#BAF247]/10 border border-[#BAF247]/30 text-[#BAF247] text-[10px] font-semibold">
          PLANNED SOLUTION DIRECTION
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Notice on Planned Status */}
        <div className="p-2.5 rounded bg-[#0E1322] border border-[#1E2638] text-[11px] text-[#A1A1AA] flex items-center justify-between gap-2">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
            <span>Demonstration concept for primary &amp; secondary schools. In planned development.</span>
          </span>
          <span className="text-[10px] font-mono text-[#71717A] hidden sm:inline">Concept Overview</span>
        </div>

        {/* 3 Perspectives Switcher */}
        <div className="flex items-center gap-2 border-b border-[#1E2638] pb-2 text-xs font-mono">
          <span className="text-[10px] uppercase text-[#71717A] mr-1">Choose Portal View:</span>
          <button
            type="button"
            onClick={() => setActiveRole("admin")}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              activeRole === "admin"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                : "text-[#71717A] hover:text-white"
            }`}
          >
            1. Administrator Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveRole("teacher")}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              activeRole === "teacher"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                : "text-[#71717A] hover:text-white"
            }`}
          >
            2. Teacher Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveRole("parent")}
            className={`px-3 py-1 rounded text-xs transition-colors ${
              activeRole === "parent"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                : "text-[#71717A] hover:text-white"
            }`}
          >
            3. Parent Experience
          </button>
        </div>

        {/* 1. Admin Experience */}
        {activeRole === "admin" && (
          <div className="p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#BAF247]" />
                School Administrator Dashboard
              </span>
              <span className="text-[10px] text-[#A1A1AA]">Whole-School Overview</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono">
              <div className="p-3 rounded bg-[#070B16] border border-[#1E2638] space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">Student Body</span>
                <span className="text-base font-bold text-white block">Central Directory</span>
                <span className="text-[10px] text-[#BAF247]">Records, Classes &amp; Age</span>
              </div>
              <div className="p-3 rounded bg-[#070B16] border border-[#1E2638] space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">Fee Management</span>
                <span className="text-base font-bold text-white block">Termly Billing</span>
                <span className="text-[10px] text-[#A1A1AA]">Payment tracking &amp; receipts</span>
              </div>
              <div className="p-3 rounded bg-[#070B16] border border-[#1E2638] space-y-1">
                <span className="text-[10px] text-[#71717A] uppercase block">Staff Allocation</span>
                <span className="text-base font-bold text-white block">Teacher Roster</span>
                <span className="text-[10px] text-[#A1A1AA]">Class assignments</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. Teacher Experience */}
        {activeRole === "teacher" && (
          <div className="p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#BAF247]" />
                Classroom Teacher Workspace
              </span>
              <span className="text-[10px] text-[#A1A1AA]">Class: Primary 5A</span>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] flex justify-between items-center">
                <span>Daily Class Attendance Logging:</span>
                <span className="text-[#BAF247] font-semibold">1-Click Morning Check</span>
              </div>
              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] flex justify-between items-center">
                <span>Term Test Assessment Entry:</span>
                <span className="text-white">Mathematics &amp; English</span>
              </div>
              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] flex justify-between items-center">
                <span>End-of-Term Report Card Generation:</span>
                <span className="text-[#A1A1AA]">Automated Grade Summaries</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. Parent Experience */}
        {activeRole === "parent" && (
          <div className="p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 font-mono">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#BAF247]" />
                Parent &amp; Guardian Mobile Portal
              </span>
              <span className="text-[10px] text-[#A1A1AA]">Student: Emily Davies</span>
            </div>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] flex justify-between items-center">
                <span>Attendance History:</span>
                <span className="text-[#BAF247]">Present (98% Term Attendance)</span>
              </div>
              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] flex justify-between items-center">
                <span>School Notices &amp; Calendar:</span>
                <span className="text-white">Parent-Teacher Evening (Next Thursday)</span>
              </div>
              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] flex justify-between items-center">
                <span>Term Tuition Status:</span>
                <span className="text-[#BAF247]">Settled &bull; Download Receipt</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 06 &bull; EDUCATION TECHNOLOGY SOLUTIONS</span>
        <span className="text-white">PLANNED SOLUTION ARCHITECTURE</span>
      </div>
    </div>
  );
};

export default SchoolManagementConceptPreview;

