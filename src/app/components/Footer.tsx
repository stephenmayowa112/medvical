import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/logo.png" alt="Med-Vical International" className="h-12 w-auto" />
              <div>
                <span className="font-bold text-white text-lg block leading-tight">MED-VICAL INTERNATIONAL</span>
                <span className="text-blue-400 text-xs italic">...family friendly, client-centred</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Pharmacy, Hospital/Lab Equipment & Consumables, Personal Healthcare & Consumer Products, & Healthcare Services
            </p>
            <p className="text-sm mb-4">
              Best Hospital in Benin City Nigeria. Providing exceptional medical care for maternity,
              laboratory services, and emergency treatment since 2014.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Pharmacy</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Hospital/Lab Equipment</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Maternity Care</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Laboratory Tests</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Emergency Care</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Healthcare Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li>44 Boundary Road, GRA<br />Benin City, Edo State, Nigeria</li>
              <li>Phone: 09018911685</li>
              <li>Email: info@medvical.com</li>
              <li className="pt-2">
                <span className="text-white">Emergency:</span><br />
                Available 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; 2026 Med-Vical International. Best Hospital in Benin City Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}