import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-[#ffffff] px-4 py-0">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-lg font-medium text-[#231f20] mb-4">About Us</h2>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#231f20] mb-8">
          Turning Business <span className="text-[#ffcb05]">Ideas</span> into Reality.
        </h1>

        <p className="text-lg md:text-xl text-[#2b2b2b] mb-12 max-w-3xl mx-auto">
          We provide expert business guidance, financial planning, and legal advisory to help you start, manage, and
          grow your business with confidence.
        </p>

        {/* View More Button - links to the bottom of the component */}
        <Link
          href="#endSection"
          className="inline-block border-2 border-[#ffcb05] text-[#231f20] font-medium py-4 px-12 rounded-sm hover:bg-[#ffcb05] hover:text-[#231f20] transition-colors duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
