export default function CSRPage() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-0 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <CSRIllustration />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-6 text-center md:text-left">
              OUR CORPORATE SOCIAL RESPONSIBILITY (CSR)
            </h1>
            <p className="text-[#575757] text-lg mb-6">
              We collaborate with corporate partners on CSR projects that make a lasting impact. We are committed to
              giving back to the community. For every invoice processed, we allocate LKR 100 to:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-2">
                <span className="text-[#e98862] font-bold text-xl">•</span>
                <span className="text-[#575757]">
                  <strong>The National Institute of Mental Health (Angoda Mental Hospital)</strong> – Supporting mental
                  health initiatives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#e98862] font-bold text-xl">•</span>
                <span className="text-[#575757]">
                  <strong>The National Cancer Institute (Apeksha Cancer Hospital)</strong> – Contributing to cancer
                  treatment and research.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  function CSRIllustration() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 700 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="350" cy="300" r="300" fill="#f5f7f8" />
  
        {/* Social media icons */}
        <circle cx="512" cy="216" r="50" fill="#379777" />
        <text x="512" y="236" textAnchor="middle" fontSize="50" fill="white">
          @
        </text>
  
        <circle cx="512" cy="400" r="30" fill="#379777" />
        <rect x="522" y="390" width="20" height="20" fill="white" />
  
        <circle cx="470" cy="300" r="40" fill="#ffcb05" />
        <text x="470" y="315" textAnchor="middle" fontSize="40" fill="white">
          ♥
        </text>
  
        <circle cx="375" cy="216" r="40" fill="#379777" />
        <text x="375" y="226" textAnchor="middle" fontSize="24" fill="white">
          💬
        </text>
  
        <circle cx="512" cy="140" r="40" fill="#ffcb05" />
        <text x="512" y="155" textAnchor="middle" fontSize="40" fill="white">
          #
        </text>
  
        {/* Person with megaphone */}
        <g transform="translate(200, 300)">
          {/* Head */}
          <circle cx="40" cy="40" r="30" fill="#231f20" />
  
          {/* Face */}
          <circle cx="30" cy="35" r="3" fill="black" />
          <circle cx="50" cy="35" r="3" fill="black" />
          <path d="M35 45 C40 50, 45 45, 45 45" stroke="black" strokeWidth="2" fill="none" />
  
          {/* Hair */}
          <path d="M20 25 C10 15, 30 10, 40 15 C50 10, 60 20, 60 30" fill="black" />
  
          {/* Body - jacket */}
          <path d="M10 70 L30 180 L50 180 L70 70" fill="#1e1e1e" />
  
          {/* Arms */}
          <rect x="10" y="70" width="60" height="15" fill="#1e1e1e" />
  
          {/* Left arm raised with megaphone */}
          <rect x="10" y="70" width="10" height="60" transform="rotate(-30, 10, 70)" fill="#1e1e1e" />
  
          {/* Megaphone */}
          <path d="M-20 40 L0 50 L0 70 L-20 80 Z" fill="#ffcb05" />
          <rect x="-30" y="55" width="10" height="10" fill="#ffcb05" />
  
          {/* Pants */}
          <rect x="30" y="180" width="20" height="100" fill="#ffcb05" />
          <rect x="30" y="280" width="20" height="10" fill="#ffcb05" />
  
          {/* Legs */}
          <rect x="10" y="180" width="20" height="100" fill="#ffcb05" />
          <rect x="10" y="280" width="20" height="10" fill="#ffcb05" />
        </g>
  
        {/* Plants */}
        <rect x="70" y="450" width="30" height="50" fill="#379777" />
        <path d="M70 450 C50 400, 90 380, 100 450" fill="#379777" />
        <path d="M100 450 C120 400, 90 380, 70 450" fill="#ffcb05" />
  
        {/* Desk with plant */}
        <rect x="480" y="470" width="120" height="80" fill="#1e1e1e" />
        <circle cx="500" cy="500" r="5" fill="white" />
        <circle cx="500" cy="530" r="5" fill="white" />
        <circle cx="500" cy="560" r="5" fill="white" />
  
        {/* Cup on desk */}
        <rect x="540" cy="450" width="20" height="20" fill="#379777" />
  
        {/* Plant on desk */}
        <rect x="580" y="430" width="20" height="40" fill="#379777" />
        <path d="M590 430 C570 400, 610 380, 600 430" fill="#379777" />
      </svg>
    )
  }
  
  