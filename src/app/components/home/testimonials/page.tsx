"use client"

import { useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  position: string
  quote: string
  image: string
  accentColor: string
}

export default function Page() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Full Name",
      position: "Position",
      quote:
        "The expert business advice we received significantly strengthened our financial foundation, allowing us to make smarter decisions and drive sustainable growth.",
      image: "/home/Female 1.png?height=80&width=80",
      accentColor: "#379777",
    },
    {
      id: 2,
      name: "Full Name",
      position: "Position",
      quote:
        "The expert business advice we received significantly strengthened our financial foundation, allowing us to make smarter decisions and drive sustainable growth.",
      image: "/home/Female 2.png?height=80&width=80",
      accentColor: "#379777",
    },
    {
      id: 3,
      name: "Full Name",
      position: "Position",
      quote:
        "The expert business advice we received significantly strengthened our financial foundation, allowing us to make smarter decisions and drive sustainable growth.",
      image: "/home/Male 1.png?height=80&width=80",
      accentColor: "#379777",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // Mobile functionality: When the user clicks the dot, it changes to the corresponding testimonial
  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="relative text-xl font-bold bg-[#ffb71d1a] inline-block px-4 py-2 pr-8 rounded-md after:content-[''] after:absolute after:w-[40%] after:h-[3px] after:bg-black after:right-[-50%] after:top-1/2 after:-translate-y-1/2">
              Testimonials
            </h2>
          </div>
          <h1 className="text-[#231f20] text-5xl font-bold mb-4 text-center md:text-left">What Our Customers Say</h1>
          <p className="text-[#575757] text-xl max-w-3xl">
            Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and
            Personalized Business Guidance
          </p>
        </div>
      </div>

      {/* Show 1 testimonial at a time on mobile */}
      <div className="relative">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {/* Mobile: Show one testimonial at a time */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                index === activeIndex ? "block" : "hidden"
              } md:block relative p-8 border-2 rounded-tl-3xl rounded-br-3xl`}
              style={{ borderColor: testimonial.accentColor }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#231f20]">{testimonial.name}</h3>
                  <p className="text-[#575757]">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-[#575757] mb-8">{testimonial.quote}</p>
              <div
                className="absolute bottom-6 right-8 text-6xl"
                style={{ color: testimonial.accentColor }}
              >
                &#8220;&#8221;
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigation for mobile */}
      <div className="flex justify-center mt-12 gap-2 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#231f20] ring-2 ring-[#d9d9d9] scale-110" : "bg-[#d9d9d9]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
