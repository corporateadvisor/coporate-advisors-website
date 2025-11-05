"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import Link from "next/link";
import WhatsAppButton from "@/app/components/whatsApp/page";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);

      const emailParams = {
        first_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      };

      emailjs
        .send(
          "service_c555yqm",
          "template_j1lbuca",
          emailParams,
          "Eb22VPuqVzceWGrB4"
        )
        .then(
          () => setStatus("Message sent successfully!"),
          (error) => setStatus("Failed to send the message. " + error.text)
        );
    }
  };

  return (
    <div className="min-h-full bg-white flex flex-col items-center justify-center">
      {/* Consultation Section */}
      <div className="rounded-lg p-1 max-w-4xl w-full mb-8 text-center">
        <p className="text-[#231f20] text-lg mb-2 font-inter">Contact Us</p>
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Schedule a <span className="text-[#FFCB05]">Consultation</span> Today!
        </h2>

        <p className="text-gray-600 mb-6">
          We provide expert business guidance, financial planning, and legal
          advisory to help you start, manage, and grow your business with
          confidence.
        </p>
        <Link
          href="#endSection"
          className="inline-block border-2 border-[#ffcb05] text-[#231f20] font-medium py-4 px-12 rounded-sm hover:bg-[#ffcb05] hover:text-[#231f20] transition-colors duration-300"
        >
          View More
        </Link>
      </div>

      {/* Contact Section */}
      <div
        className="bg-[#F5F7F8] shadow-lg rounded-lg p-8 mb-12 max-w-5xl w-full"
        id="endSection"
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold text-gray-800 mb-1 leading-tight text-center md:text-left"
          style={{ marginBottom: "-40px", marginLeft: "20px" }} // Adjust spacing dynamically
        >
          Get in touch with us <br />
          and let us know <br />
          your concerns
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <div className="bg-[#F5F7F8] p-6 rounded-lg w-full">
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block text-gray-700 text-1xl font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent focus:border-black outline-none py-2 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-1xl font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent focus:border-black outline-none py-2 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-1xl font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 bg-transparent focus:border-black outline-none py-2 text-black resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-2 text-sm rounded-md shadow-md hover:bg-yellow-500 transition duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>

            {status && (
              <div className="mt-4 text-center text-gray-800">
                <p>{status}</p>
              </div>
            )}
          </div>

          {/* Right: Image */}
          <div className="bg-[#F5F7F8] p-4 rounded-lg flex justify-center md:justify-start items-center">
            <Image
              src="/contactus/contact-illustration.png" // Ensure the path is correct
              alt="Contact Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
