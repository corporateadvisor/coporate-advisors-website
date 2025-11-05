import { Check, User } from "lucide-react"

export default function WhoWeAreCustom() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16" id="endSection">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-6 text-center md:text-left">WHO WE ARE</h2>
          <div className="space-y-6 text-[#575757] text-lg text-justify">
            <p>
              Corporate Advisors (Pvt) Ltd. is a leading corporate advisory firm in Sri Lanka, providing expert company
              secretarial, legal, and corporate governance services. Our mission is to help businesses meet regulatory,
              compliance, and governance standards efficiently, allowing them to focus on growth and innovation.
            </p>
            <p>
              With years of industry experience, we serve startups, SMEs, and large corporations across various sectors.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[400px] md:h-[500px]">
            {/* Yellow blob background */}
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-[#ffcb05] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"></div>
            </div>

            {/* Phone in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] h-[360px] md:w-[200px] md:h-[400px]">
              <div className="w-full h-full bg-[#292a2e] rounded-[36px] border-4 border-[#1e1e1e] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[32px] bg-[#1e1e1e] flex justify-center items-end pb-1">
                  <div className="w-[80px] h-[20px] bg-[#1e1e1e] rounded-b-xl"></div>
                </div>
                <div className="absolute bottom-[40%] right-[20px] z-20">
                  <div className="w-[60px] h-[60px] bg-[#379777] rounded-lg flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-[20%] right-[30px] z-20">
                  <div className="w-[80px] h-[80px] bg-[#e98862] rounded-full flex items-center justify-center">
                    <div className="w-[70px] h-[70px] bg-[#ffcb05] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Megaphone */}
            <div className="absolute right-[15%] top-[30%] z-20 transform rotate-12">
              <div className="w-[80px] h-[80px] bg-[#379777] rounded-lg transform rotate-45 flex items-center justify-center">
                <div className="w-[40px] h-[60px] bg-[#292a2e] rounded-t-lg transform -rotate-45"></div>
              </div>
            </div>

            {/* Person circles */}
            <div className="absolute right-[5%] top-[10%] z-20">
              <div className="w-[100px] h-[100px] bg-[#f5f7f8] rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-[#379777]" />
              </div>
            </div>

            <div className="absolute left-[15%] bottom-[20%] z-20">
              <div className="w-[100px] h-[100px] bg-[#f5f7f8] rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-[#379777]" />
              </div>
            </div>

            <div className="absolute right-[10%] bottom-[10%] z-20">
              <div className="w-[100px] h-[100px] bg-[#f5f7f8] rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-[#379777]" />
              </div>
            </div>

            {/* Paper airplane */}
            <div className="absolute left-[30%] top-[20%] z-20 transform -rotate-45">
              <div className="w-[40px] h-[40px] border-t-[20px] border-l-[20px] border-t-[#379777] border-l-[#379777] border-r-0 border-b-0"></div>
            </div>

            {/* Dotted lines */}
            <div className="absolute left-[25%] top-[30%] z-10 w-[100px] border-t-2 border-dashed border-[#292a2e] transform rotate-45"></div>
            <div className="absolute right-[20%] bottom-[40%] z-10 w-[100px] border-t-2 border-dashed border-[#292a2e] transform -rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

