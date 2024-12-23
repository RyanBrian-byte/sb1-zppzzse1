"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="About Utatra Group"
            subtitle="A dynamic and versatile group company specializing in innovative solutions across multiple industries"
          />
          
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-muted">
              At Utatra Group, we are dedicated to seamlessly adapting current technologies 
              to the ever-evolving and dynamic customer profiles of today. With a team of 
              experts in diverse fields, we work tirelessly to develop innovative solutions 
              that simplify life, whether in physical environments or virtual spaces.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}