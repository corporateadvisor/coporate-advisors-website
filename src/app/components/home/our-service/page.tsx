"use client";

import React from "react";
import {
  Landmark,
  FileText,
  Users,
  FileCheck2,
  ShieldCheck,
  FileSignature,
  Briefcase,
  UserCog,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-[55%] p-6 bg-white">
        <div className="mb-10">
          <div className="relative">
            <h2
              className="relative text-xl font-bold bg-[#ffb71d1c] inline-block px-4 py-2 pr-8 rounded-md 
            after:content-[''] after:absolute after:w-[40%] after:h-[3px] after:bg-black after:right-[-50%] 
            after:top-1/2 after:-translate-y-1/2"
            >
              OUR SERVICES
            </h2>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#1e1e1e] text-center md:text-left">
          Beyond Compliance - We Drive Corporate Success
        </h1>

        {/* Services List */}
        <div className="max-w-full px-0 py-1 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <Landmark className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Company Formation & Incorporation
                </h3>
              </div>
            </div>
            {/* Company Secretarial Services */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <FileText className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Company Secretarial Services
                </h3>
              </div>
            </div>

            {/* Corporate Governance & Share Capital Assistance */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <Users className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Corporate Governance &<br />
                  Share Capital Assistance
                </h3>
              </div>
            </div>

            {/* Electronic Filing & Compliance Management */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <FileCheck2 className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Electronic Filing &<br />
                  Compliance Management
                </h3>
              </div>
            </div>

            {/* Intellectual Property Protection */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <ShieldCheck className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Intellectual Property
                  <br />
                  Protection
                </h3>
              </div>
            </div>

            {/* Corporate Contract Drafting & Review */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <FileSignature className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Corporate Contract Drafting
                  <br />& Review
                </h3>
              </div>
            </div>

            {/* Corporate legal consultancy */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <Briefcase className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Corporate legal consultancy
                </h3>
              </div>
            </div>

            {/* Human Resource & Business Support Services */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 h-[39px] w-[44px] bg-[#ffcb05] flex items-center justify-center rounded-sm">
                <UserCog className="h-8 w-8 text-[#323232]" />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#323232] mb-1">
                  Human Resource & Business
                  <br />
                  Support Services
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[45%] p-6 pt-10 flex items-center justify-center">
        <div className="max-w-full w-full">
          <div className="w-full h-full">
            <Image
              src="/home/home_OS.png"
              alt="Corporate Services"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
