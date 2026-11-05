"use client";

import React, { useState } from "react";
import { Search, Home, Calendar, MapPin, Eye, CheckCircle2 } from "lucide-react";

export const RealEstateConceptPreview: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<number>(0);
  const [inspectionRequested, setInspectionRequested] = useState<boolean>(false);

  const PROPERTIES = [
    {
      title: "4-Bedroom Modern Detached Home",
      location: "Oakridge Estate, North Avenue",
      type: "Residential Sale",
      price: "£420,000",
      bedrooms: 4,
      bathrooms: 3,
      status: "Available for Inspection",
    },
    {
      title: "2-Bedroom Waterfront Apartment",
      location: "Harbour View Quay",
      type: "Residential Letting",
      price: "£1,850 / month",
      bedrooms: 2,
      bathrooms: 2,
      status: "Available for Inspection",
    },
  ];

  const current = PROPERTIES[selectedProperty];

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Home className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEMONSTRATION CONCEPT</span>
          <span className="text-[#71717A]">// Real Estate Property Website</span>
        </div>
        <span className="text-[11px] text-[#A1A1AA]">
          Interactive Listing &amp; Booking Flow
        </span>
      </div>

      {/* Main Preview Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Search & Filter Concept Bar */}
        <div className="p-3 rounded-lg bg-[#0E1322] border border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#A1A1AA]">
            <Search className="w-4 h-4 text-[#BAF247]" />
            <span>Search properties by location, bedrooms or budget...</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="px-2 py-0.5 rounded bg-[#151B2B] text-white">All Properties</span>
            <span className="px-2 py-0.5 rounded bg-[#101522] text-[#71717A]">For Sale</span>
            <span className="px-2 py-0.5 rounded bg-[#101522] text-[#71717A]">To Rent</span>
          </div>
        </div>

        {/* Selected Property Details & Inspection Request */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Property Card */}
          <div className="md:col-span-7 p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#BAF247] block">
                  {current.type}
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  {current.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#71717A]" />
                  <span>{current.location}</span>
                </div>
              </div>
              <span className="text-base font-bold font-mono text-[#BAF247]">
                {current.price}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1E2638] text-xs font-mono text-[#D4D4D8]">
              <div>
                <span className="text-[#71717A] block text-[10px]">Bedrooms</span>
                <span className="text-white font-medium">{current.bedrooms} Double Beds</span>
              </div>
              <div>
                <span className="text-[#71717A] block text-[10px]">Bathrooms</span>
                <span className="text-white font-medium">{current.bathrooms} Fitted Baths</span>
              </div>
            </div>

            {/* Property Switcher */}
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="text-[10px] font-mono text-[#71717A]">Sample Listings:</span>
              {PROPERTIES.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedProperty(idx);
                    setInspectionRequested(false);
                  }}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    selectedProperty === idx
                      ? "bg-[#BAF247]/10 text-[#BAF247] border border-[#BAF247]/30"
                      : "bg-[#151B2B] text-[#71717A] hover:text-white"
                  }`}
                >
                  Listing {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Inspection Request Form Box */}
          <div className="md:col-span-5 p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#BAF247] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#BAF247]" />
                Request Property Inspection
              </span>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Interested buyers select preferred inspection dates directly online without waiting for business hours.
              </p>

              {inspectionRequested ? (
                <div className="p-3 rounded bg-[#BAF247]/10 border border-[#BAF247]/30 text-xs text-[#BAF247] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inspection Request Recorded</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA]">
                    Confirmation sent to agent &amp; client with calendar invite.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setInspectionRequested(true)}
                  className="w-full py-2 px-3 rounded bg-[#151B2B] hover:bg-[#1E2638] text-white text-xs font-mono font-medium border border-[#1E2638] hover:border-[#BAF247]/40 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-[#BAF247]" />
                  <span>Request Inspection for This Listing</span>
                </button>
              )}
            </div>

            <div className="pt-2 border-t border-[#1E2638] text-[10px] font-mono text-[#71717A]">
              <span>SAMPLE FUNCTIONALITY: PROPERTY BROWSER &amp; BOOKING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 01 // WEB &amp; DIGITAL EXPERIENCES</span>
        <span className="text-white">BOLXOLVE CUSTOM PLATFORMS</span>
      </div>
    </div>
  );
};

export default RealEstateConceptPreview;

