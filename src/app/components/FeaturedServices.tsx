import { motion } from 'motion/react';
import { Stethoscope, ShoppingCart, Gift, ArrowRight, Ambulance } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ServiceItem {
  title: string;
  description: string;
  division: string;
  divisionColor: string;
  icon: React.ElementType;
  link: string;
}

const FEATURED_SERVICES: ServiceItem[] = [
  {
    title: 'Specialty Clinics',
    description: 'Expert consultations across multiple specialties including cardiology, paediatrics, obstetrics, and more — all under one roof.',
    division: 'MMC',
    divisionColor: 'blue',
    icon: Stethoscope,
    link: '/services/medical-centre',
  },
  {
    title: '24/7 Emergency & Ambulance',
    description: 'Round-the-clock emergency care with a fully equipped ambulance service ready to respond at any time.',
    division: 'MMC',
    divisionColor: 'blue',
    icon: Ambulance,
    link: '/services/medical-centre',
  },
  {
    title: 'Retail & Wholesale Pharmacy',
    description: 'Quality pharmaceutical products available for retail customers and wholesale orders for clinics and hospitals.',
    division: 'MPPS',
    divisionColor: 'red',
    icon: ShoppingCart,
    link: '/services/pharmacy-supplies',
  },
  {
    title: 'Online Ordering via WhatsApp',
    description: 'Convenient WhatsApp ordering for medical supplies and pharmaceutical products with prompt delivery.',
    division: 'MPPS',
    divisionColor: 'red',
    icon: ShoppingCart,
    link: '/services/pharmacy-supplies',
  },
  {
    title: 'School Health Programme',
    description: 'Comprehensive health education and preventive care initiatives designed to improve student wellness.',
    division: 'MHS',
    divisionColor: 'orange',
    icon: Gift,
    link: '/med-vical-health',
  },
  {
    title: 'Community Outreach',
    description: 'Bringing quality healthcare to underserved communities through outreach programmes and the AccessHealth platform.',
    division: 'MHS',
    divisionColor: 'orange',
    icon: Gift,
    link: '/med-vical-health',
  },
];

const badgeColors: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
};

const iconColors: Record<string, string> = {
  blue: 'from-blue-500 to-blue-700',
  red: 'from-red-500 to-red-700',
  orange: 'from-orange-400 to-orange-600',
};

export function FeaturedServices() {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">What We Offer</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Featured Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From clinical care to community health, our services are designed to meet you wherever you are on your health journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconColors[service.divisionColor]} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <Badge className={`text-xs font-semibold ${badgeColors[service.divisionColor]}`}>
                        {service.division}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>

                    <a
                      href={service.link}
                      className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="/services">
              View All Services <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
