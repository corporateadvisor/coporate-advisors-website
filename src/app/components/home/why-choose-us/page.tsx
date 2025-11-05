import Image from "next/image";
import Link from 'next/link';

export default function page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-[45%] p-8 flex items-center justify-center">
        <div className="max-w-full w-full">
          <div className="w-full h-full">
            <Image
                src="/home/whychooseus.png?height=100&width=100"
                alt="Logo"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
            />
            </div>
        </div>
      </div>
      {/* Left Section */}
      <div className="w-full md:w-[55%] p-8 bg-white">
      <div className="pb-5">
        <h2 className="relative text-xl font-bold bg-[#ffb71d1d] inline-block px-4 py-2 pr-8 rounded-md after:content-[''] after:absolute after:w-[40%] after:h-[3px] after:bg-black after:right-[-50%] after:top-1/2 after:-translate-y-1/2">
            WHY CHOOSE US
        </h2>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-[#000000] text-center md:text-left">
            Securing Your Business - <br />
            Safeguarding Your Future
          </h1>

          <ul className="space-y-8">
            <li className="flex items-start gap-3">
              <span className="text-[#000000] font-bold text-lg">•</span>
              <div>
                <span className="font-bold text-lg">Industry Expertise</span>
                <span className="text-lg"> - A team of qualified legal, corporate, and governance professionals.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#000000] font-bold text-lg">•</span>
              <div>
                <span className="font-bold text-lg">Comprehensive Corporate Solutions</span>
                <span className="text-lg">
                  {" "}
                  - From incorporation to compliance, governance, and legal advisory, we cover all your corporate needs.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#000000] font-bold text-lg">•</span>
              <div>
                <span className="font-bold text-lg">Seamless Compliance Management</span>
                <span className="text-lg"> - Digital solutions for accurate and timely statutory filings.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#000000] font-bold text-lg">•</span>
              <div>
                <span className="font-bold text-lg">Trusted Business Partner</span>
                <span className="text-lg"> - Providing strategic guidance to help businesses grow sustainably.</span>
              </div>
            </li>
          </ul>

          <button className="mt-12 border-2 border-[#20b2aa] text-[#000000] font-medium px-8 py-3 rounded-md hover:bg-[#20b2aa] hover:text-white transition-colors w-48 self-center md:self-start">
            <Link href="/About-Us">Read More</Link>
          </button>
        
      </div>
      
    </div>
  )
}

