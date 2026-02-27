import {
  Stethoscope, Package, ArrowRight, Phone,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

const serviceDivisions = [
  {
    icon: Stethoscope,
    title: 'Med-Vical Medical Centre',
    description:
      'Comprehensive healthcare services — from basic health checks and screening to specialty out-patient clinics, walk-in clinics, diagnostic services and 24/7 emergency care.',
    highlights: [
      'Health check & screening',
      'Specialty out-patient clinics',
      'Diagnostic & lab services',
      '24/7 emergency care',
      'Walk-in clinics',
      'Antenatal & obstetric care',
    ],
    link: '/services/medical-centre',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    icon: Package,
    title: 'Med-Vical Supplies',
    description:
      'The wholesale, distribution and supply division — quality pharmaceuticals, medical devices, hospital and laboratory equipment and consumables at competitive wholesale prices with nationwide delivery.',
    highlights: [
      'Pharmaceuticals',
      'Surgicals & dressings',
      'Medical devices',
      'Hospital & lab equipment',
      'Consumables',
      'Nationwide delivery',
    ],
    link: '/services/medical-supplies',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl mb-4">
              Comprehensive Healthcare &amp; Supply Solutions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Med-Vical International operates two key service divisions — our Medical Centre providing
              clinical healthcare, and our Supply division distributing quality medical products nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Divisions */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {serviceDivisions.map((division, index) => {
            const Icon = division.icon;
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden border border-white/20 bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all">
                  <div className={`grid md:grid-cols-2 ${isReversed ? 'md:[direction:rtl]' : ''}`}>
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img
                        src={division.image}
                        alt={division.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className={`p-6 md:p-10 flex flex-col justify-center ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl">{division.title}</h2>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{division.description}</p>

                      <ul className="grid grid-cols-2 gap-2 mb-6">
                        {division.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link to={division.link} className="w-fit">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl mb-3">Your Health Is Our Priority</h2>
          <p className="text-blue-100 mb-6">
            Whether you need clinical care or quality medical supplies, Med-Vical International is your trusted partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/clinic-registration">
              <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                Register as Patient
              </Button>
            </Link>
            <a href="tel:+2349018911685">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
