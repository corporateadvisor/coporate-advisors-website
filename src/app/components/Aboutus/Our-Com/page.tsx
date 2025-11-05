import { LightbulbIcon, ScaleIcon, CircleIcon } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[#1e1e1e] mb-6">OUR COMMITMENT</h2>
          <p className="text-[#575757] text-lg max-w-4xl mx-auto">
            Embark on a journey to unlock a world of financial opportunities, grow your investment with our
            comprehensive and expert services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="border-2 border-[#ffcb05] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#1e1e1e] rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <CircleIcon className="w-12 h-12 text-[#ffffff]" />
            </div>
            <p className="text-[#575757] text-lg">Providing accurate, transparent, and reliable corporate services</p>
          </div>

          {/* Second Card */}
          <div className="border-2 border-[#379777] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#1e1e1e] rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <LightbulbIcon className="w-12 h-12 text-[#ffffff]" />
            </div>
            <p className="text-[#575757] text-lg">Offering cost-effective and time-efficient solutions.</p>
          </div>

          {/* Third Card */}
          <div className="border-2 border-[#ffcb05] rounded-lg p-8 flex flex-col items-center text-center">
            <div className="bg-[#1e1e1e] rounded-full w-24 h-24 flex items-center justify-center mb-6">
              <ScaleIcon className="w-12 h-12 text-[#ffffff]" />
            </div>
            <p className="text-[#575757] text-lg">Ensuring full compliance with corporate laws and regulations.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
