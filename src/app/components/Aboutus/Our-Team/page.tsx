"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Move this to the top
  const members = [
    {
      name: "Mr. Yasitha Kaushalya – Managing Director",
      img: "/About/Group1.png",
      description: [
        "Mr. Yasitha Kaushalya is a highly accomplished finance and business consultant with over 15 years of experience in audit, assurance, and business advisory services. His expertise spans financial management, internal controls, corporate governance, and risk assessment.",
        "Having worked with Moore Stephens International and BDO Partners, he has gained extensive experience in financial reporting, taxation, and regulatory compliance. As a director, he plays a crucial role in client relationship management, financial strategy development, and ensuring service excellence.",
      ],
    },
    {
      name: "Ms. Samadhi Bandara – Legal Consultant",
      img: "/About/Group2.png",
      description: [
        "Ms. Samadhi Bandara is a distinguished corporate and commercial law expert with a strong background in ICT law, intellectual property, and dispute resolution. She is also a published legal researcher, contributing to major legal journals and corporate sector publications.",
        "She has played a key role in Sri Lanka`s law-making processes, serving as the Convener of the Advisory Committee to Review the Process of Service of Summons and the Writ of Execution under the Ministry of Justice. Her expertise extends to Banking & Corporate Law, E-commerce & Digital Law, Litigation & Arbitration.",
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % members.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, members.length]);

  return (
    <div className="w-full bg-white">
      <div className="max-w-full mx-auto px-4 py-0 sm:px-6 lg:px-1">
        <h1 className="text-4xl md:text-4xl font-bold text-center text-[#1e1e1e] mt-12 mb-16">
          OUR TEAM
        </h1>

        {isMobile ? (
          // Mobile view: show one member at a time
          <div className="grid gap-8 px-4 md:px-16 lg:px-10">
            <div className="bg-white rounded-xl overflow-hidden w-full">
              <div className="flex flex-col">
                <div className="p-4">
                  <div className="rounded-xl overflow-hidden text-center justify-center">
                    <Image
                      src={members[activeIndex].img}
                      alt={members[activeIndex].name}
                      width={300}
                      height={300}
                      className="w-[70%] h-auto object-cover mx-auto"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-[19px] font-semibold text-[#1e1e1e] mb-2">
                    {members[activeIndex].name}
                  </h2>
                  {members[activeIndex].description.map((line, i) => (
                    <p
                      key={i}
                      className="text-[16px] text-[#575757] mb-4 leading-[25px]"
                      style={{ textAlign: "justify" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots for swapping members */}
            <div className="flex justify-center mt-4 gap-2">
              {members.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-[#1e1e1e]" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                ></button>
              ))}
            </div>
          </div>
        ) : (
          // Desktop view: two columns side by side
          <div className="flex gap-6 px-4 md:px-16 lg:px-14">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden w-1/2"
              >
                <div
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="w-2/5 p-4">
                    <div className="rounded-xl overflow-hidden flex justify-center">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-[90%] h-auto object-cover"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="w-3/5 p-6">
                    <h2 className="text-[16px] font-semibold text-[#1e1e1e] mb-2">
                      {member.name}
                    </h2>
                    {member.description.map((line, i) => (
                      <p
                        key={i}
                        className="text-[15px] text-[#575757] mb-4 leading-[25px]"
                        style={{ textAlign: "justify" }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
