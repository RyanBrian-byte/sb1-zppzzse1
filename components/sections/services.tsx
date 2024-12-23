import { Building2, Home, Truck, ShoppingBag } from "lucide-react";
import { AnimatedSection } from "../ui/animated-section";

const services = [
  {
    icon: Building2,
    title: "3D Modeling & Rendering",
    description: "High-quality 3D models and realistic renderings for the furniture industry",
    color: "text-blue-600"
  },
  {
    icon: Home,
    title: "Interior Design",
    description: "Creating personalized spaces that combine functionality and aesthetics",
    color: "text-green-600"
  },
  {
    icon: Truck,
    title: "TROYLINE Logistics",
    description: "Reliable and efficient transportation and supply chain solutions",
    color: "text-red-600"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description: "Professional templates and digital assets for online businesses",
    color: "text-purple-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection 
                key={index}
                className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
              >
                <Icon className={`w-12 h-12 mb-4 ${service.color}`} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}