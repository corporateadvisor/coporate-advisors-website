"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Page() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(""); // Track active link
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "News Events", path: "/News-Events" },
    { name: "About Us", path: "/About-Us" },
    { name: "Services", path: "/Service" },
  ];

  // Detect outside click to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle link click to set active link
  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsOpen(false); // Close the mobile menu on click
  };

  return (
    <nav className="w-full min-w-full sm:px-2 lg:px-8 py-4 mx-auto relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[180px] md:w-[250px] h-auto">
            <Image
              src="/nav/logo.png"
              alt="Logo"
              width={300}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-12 mr-[9%]">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[#2b2b2b] font-medium transition-colors hover:text-opacity-80 ${
                pathname === link.path || activeLink === link.path
                  ? "font-semibold text-black"
                  : ""
              }`}
              onClick={() => handleLinkClick(link.path)} // Track active link
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Us */}
        <div className="hidden md:block">
          <Link
            href="/Contact-Us"
            className={`${
              activeLink === "/Contact-Us"
                ? "bg-[#ffcb05] text-[#231f20] font-semibold" // "bg-[#379777] text-white font-semibold"
                : "bg-[#ffcb05] text-[#231f20] font-medium"
            } 
            px-4 py-2 text-sm 
            md:px-4 md:py-2 md:text-base 
            lg:px-5 lg:py-2 lg:text-lg 
            xl:px-5 xl:py-2 xl:text-lg 
            rounded hover:bg-opacity-90 transition-colors`}
            onClick={() => handleLinkClick("/Contact-Us")} // Track active link
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full items-center text-center bg-white shadow-md mt-2 px-4 py-4 z-50"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block text-[#2b2b2b] font-medium px-2 py-2 ${
                pathname === link.path || activeLink === link.path
                  ? "font-semibold text-black"
                  : ""
              }`}
              onClick={() => handleLinkClick(link.path)} // Track active link
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Contact Us */}
          <Link
            href="/Contact-Us"
            className={`block text-[#2b2b2b] font-medium px-2 py-2 ${
              activeLink === "/Contact-Us" ? "font-semibold text-black" : ""
            }`}
            onClick={() => handleLinkClick("/Contact-Us")} // Track active link
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
