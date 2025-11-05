import { Facebook, Mail, MapPin, Phone, Linkedin } from "lucide-react"
import Image from "next/image";
export default function page() {
  return (
    <div className="bg-[#f5f7f8] text-[#1e1e1e] py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main content section */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start mb-12 gap-8 text-center lg:text-left">
          
          {/* Left side - Logo and consultation */}
          <div className="space-y-6 max-w-xl">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-[150px] md:w-[200px]">
                <Image
                  src="/nav/logo.png"
                  alt="Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold uppercase">Schedule a consultation today!</h2>
              <p className="text-sm">
                High level experience in web design and development knowledge, producing quality work.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="https://www.facebook.com/profile.php?id=61556126040974" className="w-10 h-10 bg-[#0c0c0c] text-white rounded-full flex items-center justify-center hover:bg-[#231f20] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/corporateadvisorslk/posts/?feedView=all" className="w-10 h-10 bg-[#0c0c0c] text-white rounded-full flex items-center justify-center hover:bg-[#231f20] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Contact information */}
          <div className="space-y-3 lg:space-y-6 flex flex-col items-center lg:items-start">
  <div className="flex items-start gap-2 lg:gap-3 max-w-md">
    <MapPin className="text-[#1e1e1e] mt-1 flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5" />
    <p className="text-sm">506, 3rd Floor, No.165, Sawsiri Building, High Level Road, Nugegoda, Sri Lanka</p>
  </div>

  <div className="flex items-center gap-2 lg:gap-3">
    <Mail className="text-[#1e1e1e] flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5" />
    <a href="info@pvtltd.lk" className="text-sm hover:underline">
      info@pvtltd.lk
    </a>
  </div>

  <div className="flex items-start gap-2 lg:gap-3">
    <Phone className="text-[#1e1e1e] mt-1 flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5" />
    <div className="space-y-0.5 lg:space-y-1">
      <a href="tel:+94112576881" className="text-sm block hover:underline">
        +94(0)11-257-6881
      </a>
      <a href="tel:+94070-132-5070" className="text-sm block hover:underline">
        +94(0)70-132-5070
      </a>
    </div>
  </div>
</div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1e1e1e] opacity-20 my-6"></div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center">
          <div className="text-sm">Zenit IT © All rights reserved</div>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}