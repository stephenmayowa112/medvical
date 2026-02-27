import {
  Package, Pill, Syringe, Monitor, FlaskConical, Wrench,
  Truck, Phone, ArrowRight, CheckCircle2, ShieldCheck, Globe,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

const productRanges = [
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description: 'Quality prescription and over-the-counter medications sourced from trusted national and international manufacturers.',
  },
  {
    icon: Syringe,
    title: 'Surgicals & Dressings',
    description: 'A comprehensive range of surgical instruments, sutures, wound-care products and dressing materials.',
  },
  {
    icon: Monitor,
    title: 'Medical Devices',
    description: 'Diagnostic and therapeutic medical devices selected for durability, accuracy and adaptability to the local environment.',
  },
  {
    icon: Package,
    title: 'Hospital Equipment',
    description: 'Hospital-grade beds, theatre equipment, patient monitors and other infrastructure essentials for modern facilities.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Equipment',
    description: 'Analyzers, microscopes, centrifuges and lab workstations designed for reliable results in clinical laboratories.',
  },
  {
    icon: Package,
    title: 'Hospital & Lab Consumables',
    description: 'Gloves, specimen containers, reagents and everyday consumables that keep hospitals and labs running smoothly.',
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Quality-First Recommendations',
    description: 'We don\'t just fill orders — we recommend high quality, durable products adapted to our environment (temperature, voltage, ease of maintenance).',
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: 'Add-on support and technical services to ensure optimal performance and patient care outcomes from every product.',
  },
  {
    icon: Globe,
    title: 'National & International Brands',
    description: 'We represent several national and international manufacturers and distributors, giving you access to a wide catalogue.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Your geographical location is not a barrier — we deliver whenever and wherever you need it across Nigeria.',
  },
];

export default function MedicalSuppliesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Medical Supplies | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl leading-tight mb-4">
                Med-Vical Supplies
              </h1>
              <p className="text-lg text-blue-100 mb-3 leading-relaxed">
                The wholesale, distribution and supply division of Med-Vical International.
              </p>
              <p className="text-blue-200 mb-6">
                We supply quality products and provide technical support for optimal experience.
                Receive orders and supplies at wholesale prices you cannot get anywhere else.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+2348087874018">
                  <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 08087874018
                  </Button>
                </a>
                <a href="tel:+2348035673681">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 08035673681
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Medical equipment and pharmaceutical supplies"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Ranges */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-blue-600 font-medium">Product Catalogue</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Our Product Ranges</h2>
            <p className="mt-4 text-gray-600">
              Quality healthcare products sourced from trusted manufacturers, supplied at competitive wholesale prices.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productRanges.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="h-full border border-white/20 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-blue-600 font-medium">Our Advantage</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Why Choose Med-Vical Supplies?</h2>
            <p className="mt-4 text-gray-600">
              We assist busy healthcare professionals to gain access to quality products and offer add-on
              support and technical services for optimal patient care and outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl mb-3">Place Your Order Today</h2>
            <p className="text-blue-100 mb-2 text-lg">Wholesale prices you cannot get anywhere else.</p>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              We receive orders and make supplies to different parts of Nigeria.
              Your geographical location is not a barrier to us — we deliver whenever and wherever you need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+2348087874018">
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 08087874018
                </Button>
              </a>
              <a href="tel:+2348035673681">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 08035673681
                </Button>
              </a>
              <Link to="/store">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Visit Our Store
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                Nationwide delivery
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                Wholesale prices
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                Technical support
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
