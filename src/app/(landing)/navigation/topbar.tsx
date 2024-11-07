"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import { Links } from "./topLink";

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-white"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex items-center space-x-2"
              onClick={handleLinkClick}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 transition-transform group-hover:scale-105">
                <span className="text-xl font-bold text-white">SR</span>
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                Sajilo Report
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-6">
            {Links.map((link) => (
              <CustomButton
                key={link.name}
                size="md"
                text={link.name}
                variant="link"
                link={link.link}
              />
            ))}
            <div className="ml-4">
              <CustomButton
                size="md"
                text="Get Started"
                variant="link"
                link=""
                className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transform transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        >
          <div className={`px-2 pb-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
            {Links.map((link) => (
              <div key={link.name} className="py-1" onClick={handleLinkClick}>
                <CustomButton
                  size="md"
                  text={link.name}
                  variant="link"
                  link={link.link}
                  className="w-full justify-start text-lg"
                />
              </div>
            ))}
            <div className="pt-4">
              <CustomButton
                size="md"
                text="Get Started"
                variant="link"
                link=""
                className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Gradient line */}
      <div
        className={`h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Topbar;
