import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  {
    label: 'Our Services',
    href: '/services',
    children: [
      { label: 'Medical Centre', href: '/services/medical-centre' },
      { label: 'Pharmacy and Medical Supplies', href: '/services/pharmacy-supplies' },
      { label: 'Med-Vical Health', href: '/health-education' },
    ],
  },
  { label: 'Health Education', href: '/health-education' },
  { label: 'Patient Registration', href: '/clinic-registration' },
  { label: 'Flyers', href: '/flyers' },
  { label: 'Contact Us', href: '/#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

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
              link.children ? (
                <div key={link.label} className="relative" ref={servicesRef}>
                  <button
                    className={`text-sm hover:text-blue-600 transition-colors flex items-center gap-1 ${location.pathname.startsWith('/services') || location.pathname.startsWith('/store') ? 'text-blue-600 font-medium' : ''
                      }`}
                    onClick={() => setServicesOpen((prev) => !prev)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      <Link
                        to={link.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors ${location.pathname === child.href ? 'text-blue-600 font-medium bg-blue-50' : ''
                            }`}
                          onClick={() => setServicesOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.href.startsWith('/#') ? (
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
                  className={`text-sm hover:text-blue-600 transition-colors ${location.pathname === link.href ? 'text-blue-600 font-medium' : ''
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => {
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
              link.children ? (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-1">
                      <Link
                        to={link.href}
                        className="block px-3 py-2 text-sm rounded-lg hover:bg-blue-50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={`block px-3 py-2 text-sm rounded-lg hover:bg-blue-50 transition-colors ${location.pathname === child.href ? 'text-blue-600 font-medium bg-blue-50' : ''
                            }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.href.startsWith('/#') ? (
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
                  className={`block px-3 py-2.5 text-sm rounded-lg hover:bg-blue-50 transition-colors ${location.pathname === link.href ? 'text-blue-600 font-medium bg-blue-50' : ''
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/clinic-registration"
              className={`block px-3 py-2.5 text-sm rounded-lg hover:bg-blue-50 transition-colors ${location.pathname === '/clinic-registration' ? 'text-blue-600 font-medium bg-blue-50' : ''
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Patient Registration
            </Link>
            <div className="pt-3 flex flex-col gap-2">
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => {
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