import { Stethoscope, Package, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const divisions = [
  {
    icon: Stethoscope,
    title: 'Medical Centre',
    description:
      'Health checks, specialty clinics, diagnostics, maternity care and 24/7 emergency services.',
    link: '/services/medical-centre',
  },
  {
    icon: Package,
    title: 'Medical Supplies',
    description:
      'Pharmaceuticals, medical devices, hospital & lab equipment — wholesale prices with nationwide delivery.',
    link: '/services/medical-supplies',
  },
];

export function ServicesCTA() {
  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium">Our Services</span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-gray-600">
            Med-Vical International operates two key divisions — our Medical Centre providing clinical
            healthcare, and our Supply division distributing quality medical products nationwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link to={division.link} className="block h-full group">
                  <Card className="overflow-hidden h-full border border-white/20 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all">
                    <CardContent className="p-8 flex flex-col items-start h-full">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                        {division.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-1">{division.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services">
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
