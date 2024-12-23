"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Get in Touch"
            subtitle="Let's discuss how we can help transform your ideas into reality"
          />
          
          <div className="mt-12 max-w-md mx-auto">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}