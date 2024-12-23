"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden bg-white"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          href="#services"
          className="block px-3 py-2 hover:bg-gray-50 rounded-md"
          onClick={onClose}
        >
          Services
        </Link>
        <Link
          href="#about"
          className="block px-3 py-2 hover:bg-gray-50 rounded-md"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          href="#contact"
          className="block px-3 py-2 hover:bg-gray-50 rounded-md"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
}