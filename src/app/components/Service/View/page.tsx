import Link from "next/link";
export default function BusinessServiceSection() {
    return (
      <section className="w-full min-h-full px-4 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#231f20] text-lg mb-2 font-inter">Services</p>
  
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Manrope mb-8 text-[#231f20]">
            Turning Business <span className="text-[#ffcb05]">Ideas</span> into Reality.
          </h1>
  
          <p className="text-[#2b2b2b] text-lg md:text-xl  font-inter mb-12 max-w-3xl mx-auto text-justify">
            We provide expert business guidance, financial planning, and legal advisory to help you start, manage, and
            grow your business with confidence.
          </p>
  
          <Link
          href="#endSection"
          className="inline-block border-2 border-[#ffcb05] text-[#231f20] font-medium py-4 px-12 rounded-sm hover:bg-[#ffcb05] hover:text-[#231f20] transition-colors duration-300"
          >
            View More
          </Link>
        </div>
        <div id="endSection">
        </div>
      </section>
    )
  }
  

  