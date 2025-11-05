import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-full bg-[#f5f7f8] flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="text-[#231f20] font-medium uppercase tracking-wide">START NOW</p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#231f20] leading-tight">
              Get in touch with us and let us know your concerns
            </h1>
            <div className="pt-4">
              <Link
                href="/Contact-Us"
                className="inline-block bg-[#ffcb05] hover:bg-[#ffcb05]/90 text-[#231f20] font-medium py-4 px-8 rounded-lg text-center text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-[#379777] -z-10"></div>
              <Image
                src="/contct-us-start-now/cont.png?height=400&width=400"
                alt="Magnifying glass illustration"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
