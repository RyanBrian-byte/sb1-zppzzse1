import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { notFound } from 'next/navigation';

// Department data
const departments = {
  '3d': {
    title: '3D Department',
    subtitle: 'Creating stunning 3D visualizations and models',
    heroImage:
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80',
    description:
      'Our 3D Department specializes in creating photorealistic visualizations and detailed models for various industries.',
    services: [
      'Architectural Visualization',
      'Product Modeling',
      'Animation',
      'Virtual Reality Experiences',
    ],
  },
  interior: {
    title: 'Interior Design',
    subtitle: 'Transforming spaces into extraordinary experiences',
    heroImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    description:
      'We create innovative interior designs that blend functionality with aesthetic excellence.',
    services: [
      'Residential Design',
      'Commercial Spaces',
      'Space Planning',
      'Custom Furniture Design',
    ],
  },
  logistics: {
    title: 'Troyline Logistics',
    subtitle: 'Efficient and reliable logistics solutions',
    heroImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    description:
      'TROYLINE provides comprehensive logistics and supply chain solutions for businesses worldwide.',
    services: [
      'Global Transportation',
      'Warehouse Management',
      'Supply Chain Optimization',
      'Custom Logistics Solutions',
    ],
  },
  ecommerce: {
    title: 'E-Commerce Solutions',
    subtitle: 'Powering your online business success',
    heroImage:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    description:
      'We provide end-to-end e-commerce solutions to help businesses thrive in the digital marketplace.',
    services: [
      'Online Store Development',
      'Payment Integration',
      'Inventory Management',
      'Digital Marketing',
    ],
  },
};

// Ensure params are typed as expected
type PageProps = {
  params: {
    slug: string;
  };
};

// Generate static params for dynamic routing
export function generateStaticParams(): { params: { slug: string } }[] {
  return Object.keys(departments).map((slug) => ({
    params: { slug }, // Adjust static slug to match expected shape
  }));
}

// Updated DepartmentPage Component
export default function DepartmentPage({ params }: PageProps) {
  const department = departments[params.slug as keyof typeof departments];

  // If the department doesn't exist, show 404
  if (!department) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={department.title}
        subtitle={department.subtitle}
        backgroundImage={department.heroImage}
      />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="About Our Department"
            subtitle={department.description}
          />

          {/* Services Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8">Our Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {department.services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-xl font-medium mb-4">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
