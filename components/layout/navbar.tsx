"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Menu, X } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8" />
            <span className="font-bold text-xl">Utatra Group</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  );
}

function NavLinks() {
  return (
    <>
      <Link href="#services" className="hover:text-primary transition-colors">
        Services
      </Link>
      <Link href="#about" className="hover:text-primary transition-colors">
        About
      </Link>
      <Link href="#contact" className="hover:text-primary transition-colors">
        Contact
      </Link>
    </>
  );
}