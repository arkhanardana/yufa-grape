"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export default function Navbar() {
  const navItems = [
    {
      name: "Tentang kami",
      link: "#tentang-kami",
    },
    {
      name: "Produk",
      link: "#produk",
    },
    {
      name: "Benefit",
      link: "#benefit",
    },
    {
      name: "Testimoni",
      link: "#testimoni",
    },
    {
      name: "Kontak",
      link: "#Kontak",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 ${
        isScrolled ? "bg-white backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="transition-all duration-300">
            <Link
              href="/"
              className={`${
                playFair.className
              } text-2xl font-bold items-center flex gap-2 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Yufa Grape
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-800 text-white font-medium rounded-md transition-all duration-300 px-4 py-2">
              Pesan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white hover:text-gray-200"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100 py-4 bg-white/95 backdrop-blur-sm rounded-lg mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-5 rounded-md w-full mt-2"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
