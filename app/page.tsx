import { HeroSection } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { AboutSection } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutSection />
      <ContactSection />
    </>
  );
}