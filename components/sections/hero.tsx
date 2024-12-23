"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0F]">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0F]/80" />
      
      {/* 3D object background - placeholder for your actual 3D element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Welcome to <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            UTATRA Group!
          </span>{" "}
          
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Start now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}