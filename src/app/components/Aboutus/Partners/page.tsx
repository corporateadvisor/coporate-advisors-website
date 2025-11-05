"use client";

import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row min-h-full">
      {/* Left Section - Vertically Centered Content */}
      <div className="w-full md:w-[50%] bg-white flex items-center p-6">
        <div className="w-full space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] text-center md:text-left">
            PARTNERS
          </h2>
          <p className="text-lg text-[#333] text-left">
            <span className="text-[#e98862] font-bold text-xl">• </span>
            <a
              href="https://www.pvtltd.lk/"
              rel="noopener noreferrer"
              className="hover:underline text-[#1e1e1e] font-medium"
            >
              Yes Corporate (Pvt) Ltd
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-[50%] p-6 flex items-center justify-center">
        <div className="max-w-full w-full">
          <div className="w-full h-full">
            <Image
              src="/About/twentyseptcrm.png"
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
