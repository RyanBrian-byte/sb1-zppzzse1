import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background-darker border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Utatra Group" className="h-12 w-auto" />
              <span className="text-xl font-bold">Utatra Group</span>
            </Link>
            <p className="mt-4 text-sm text-text-muted">
              A dynamic and versatile group company specializing in innovative solutions
              across multiple industries.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-text-muted hover:text-text transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-text transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-text transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/departments/3d" className="text-text-muted hover:text-text transition-colors">
                  3D Department
                </Link>
              </li>
              <li>
                <Link href="/departments/interior" className="text-text-muted hover:text-text transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/departments/logistics" className="text-text-muted hover:text-text transition-colors">
                  Troyline Logistics
                </Link>
              </li>
              <li>
                <Link href="/departments/ecommerce" className="text-text-muted hover:text-text transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-text-muted" />
                <span>info@utatra.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-text-muted" />
                <span>+90 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-text-muted" />
                <span>Turkey</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Utatra Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}