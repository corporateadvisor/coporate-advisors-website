"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showPopup, setShowPopup] = useState(true)
  const [displayedText, setDisplayedText] = useState("")
  const [positionAtTop, setPositionAtTop] = useState(true)

  const fullText = "  Hello and welcome to Corporate Advisors! How can we assist you today? "

  useEffect(() => {
    const audio = new Audio("/popup-sound.mp3")
    audio.play().catch(() => {})

    let charIndex = 0
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(charIndex))
      charIndex++
      if (charIndex === fullText.length) {
        clearInterval(typingInterval)
      }
    }, 40)

    const moveDownTimer = setTimeout(() => setPositionAtTop(false), fullText.length * 40 + 2000)
    const hidePopupTimer = setTimeout(() => setShowPopup(false), fullText.length * 40 + 3000)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(moveDownTimer)
      clearTimeout(hidePopupTimer)
    }
  }, [])

  return (
    <div
  className={`fixed z-50 transition-all duration-1000 ease-in-out ${
    positionAtTop ? "bottom-32" : "bottom-12"
  } right-5 sm:right-9`}
>

      <a
        href="https://wa.me/94771325070"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 no-underline transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showPopup && (
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-[280px] sm:w-[320px] md:max-w-xs animate-fade-in">
            <p className="text-[16px] text-gray-800 whitespace-pre-line">{displayedText}</p>
          </div>
        )}

        <div className="relative">
          <div
            className={`absolute inset-0 bg-[#135e28] rounded-full blur-md transition-opacity duration-300 ${
              isHovered ? "opacity-60" : "opacity-30"
            }`}
          ></div>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#135e28] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl">
            <FaWhatsapp />
          </div>
        </div>
      </a>
    </div>
  )
}
