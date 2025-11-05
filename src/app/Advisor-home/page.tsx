"use client"; // Add this directive to indicate that this is a client-side component

import Image from "next/image";
import ContactusStartNow from "@/app/components/Contact-us-Start-now/page";
import HomeOurServise from "@/app/components/home/our-service/page";
import WhyChooseUs from "@/app/components/home/why-choose-us/page";
import Testimonials from "@/app/components/home/testimonials/page";
// import NewsEvwnts from '@/app/components/home/news-event/page';
import Link from "next/link";
import WhatsAppButton from "../components/whatsApp/page";

export default function Page() {
  return (
    <div className="min-h-full bg-white pt-0 md:pt-12 mt-0 md:mt-12">
      <div className="container mx-auto px-6 mb-4 py-12 md:py-2 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 md:pr-12 flex flex-col items-center md:items-start text-center md:text-left px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#231f20] leading-tight">
            Empowering your corporate{" "}
            <span className="text-[#379777] block">dreams</span>
            <span className="text-[#231f20]">in to success.</span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-8 text-[#231f20]">
            -All in one corporate solution-
          </h2>
          <h2 className="text-xl md:text-xl mt-8 text-[#231f20]">
            Welcome to Corporate Advisors (Pvt) Ltd
          </h2>

          <p className="mt-6 text-[#383838] leading-relaxed text-justify">
            At Corporate Advisors (Pvt) Ltd., we empower businesses across Sri
            Lanka with expert company secretarial services and comprehensive
            corporate governance solutions. Backed by a strong legal foundation,
            an experienced team, and a client-first approach, we deliver
            strategic corporate services that help businesses remain compliant,
            efficient, and positioned for long-term success.
          </p>

          <button className="bg-[#ffcb05] hover:bg-[#e6b800] text-[#0a0a0a] font-bold py-4 px-12 rounded-md transition-colors mt-8 mx-auto md:mx-0">
            <Link href="/Contact-Us">Start Now</Link>
          </button>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="max-w-full w-full">
            <div className="w-full h-full">
              <Image
                src="/home/group0.svg?height=100&width=100"
                alt="Logo"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div>
        <HomeOurServise />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <Testimonials />

      {/* Contact Section with id for scrolling */}
      <div>
        <ContactusStartNow />
      </div>
      <div>{/* <NewsEvwnts/> */}</div>
      <WhatsAppButton />
    </div>
  );
}
