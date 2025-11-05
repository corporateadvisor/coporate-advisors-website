export default function LegalConsultancyServices() {
  return (
    <section className="bg-[#f5f7f8] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image Container */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-72 md:w-80 md:h-96">
              <div className="absolute inset-0 bg-white border border-gray-200 rounded-lg shadow-lg transform rotate-2">
                <div className="p-6">
                  <div className="flex justify-center mt-3">
                    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="h-2 bg-gray-800 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="h-1 bg-gray-200 rounded"></div>
                    <div className="mt-8 flex justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          <div className="w-16 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          <div className="w-16 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          <div className="w-16 h-1 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          <div className="w-16 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          <div className="w-16 h-1 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          <div className="w-16 h-1 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Left Image Container */}

          {/* Right Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black tracking-tight text-center md:text-left">
              Corporate Legal Consultantancy
            </h2>

            <p className="text-gray-700 mb-6 max-w-2xl text-justify">
              Our legal experts offer comprehensive legal advisory services to ensure businesses operate within legal
              and regulatory frameworks.
            </p>

            <div className="space-y-4">
              <h3 className="font-medium text-lg text-[#1e1e1e]">Key Legal Areas We Cover:</h3>

              <ul className="space-y-3">
                <li className="flex items-start font-semibold text-[#575757]">
                  <span className="text-[#1e1e1e] mr-3">•</span>
                  <span>Corporate & Commercial Law</span>
                </li>
                <li className="flex items-start font-semibold text-[#575757]">
                  <span className="text-[#1e1e1e] mr-3">•</span>
                  <span>Employment & Labor Law</span>
                </li>
                <li className="flex items-start font-semibold text-[#575757]">
                  <span className="text-[#1e1e1e] mr-3">•</span>
                  <span>Intellectual Property (IP) Law</span>
                </li>
                <li className="flex items-start font-semibold text-[#575757]">
                  <span className="text-[#1e1e1e] mr-3">•</span>
                  <span>Dispute Resolution</span>
                </li>
                <li className="flex items-start font-semibold text-[#575757]">
                  <span className="text-[#1e1e1e] mr-3">•</span>
                  <span>Commercial Property Law</span>
                </li>
              </ul>
            </div>
          </div>
          {/* End of Right Text Content */}
        </div>
      </div>
    </section>
  );
}
