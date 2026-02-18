import { Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="border-b border-white/20 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Med-Vical Specialist Hospital" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Med-Vical</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-sm hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-sm hover:text-blue-600 transition-colors">Services</a>
            <a href="#gallery" className="text-sm hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-sm hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Appointment
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}