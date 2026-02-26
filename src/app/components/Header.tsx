import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Store', href: '/store' },
  { label: 'Health Education', href: '/health-education' },
  { label: 'Contact Us', href: '/#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.slice(2);
      if (location.pathname === '/') {
        // Already on home page — scroll to section
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home, then scroll after a short delay
        window.location.href = href;
      }
    }
  };

  return (
    <header className="border-b border-white/20 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      {/* Top bar with tagline */}
      <div className="hidden md:block bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4] text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="italic">...family friendly, client-centred</span>
          <span>Pharmacy, Hospital/Lab Equipment & Consumables, Personal Healthcare & Consumer Products, & Healthcare Services</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Med-Vical International" className="h-12 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-lg text-[#0d3b66] leading-tight tracking-wide">MED-VICAL INTERNATIONAL</span>
              <span className="text-[10px] text-[#2a8cc4] leading-tight">...family friendly, client-centred</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-blue-600 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm hover:text-blue-600 transition-colors ${
                    location.pathname === link.href ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/clinic-registration">
              <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Register
              </Button>
            </Link>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => {
              if (location.pathname === '/') {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>
              Book Appointment
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm rounded-lg hover:bg-blue-50 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`block px-3 py-2.5 text-sm rounded-lg hover:bg-blue-50 transition-colors ${
                    location.pathname === link.href ? 'text-blue-600 font-medium bg-blue-50' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/clinic-registration" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" variant="outline" className="w-full border-blue-600 text-blue-600">
                  Clinic Registration
                </Button>
              </Link>
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contact';
                }
              }}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}