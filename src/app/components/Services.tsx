import { Baby, FlaskConical, Ambulance, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      icon: Baby,
      title: 'Maternity and Obstetrics Care',
      description: 'Antenatal care, safe delivery (normal and cesarean section), postnatal care, fertility consultations, and family planning services.',
      features: ['Antenatal care', 'Safe delivery', 'Postnatal care', 'Fertility consultations', 'Family planning'],
      image: 'https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwc21pbGUlMjB0ZWV0aHxlbnwxfHx8fDE3NzEyNzc5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: FlaskConical,
      title: 'Laboratory and Diagnostic Services',
      description: 'Modern diagnostic center offering blood tests, urine analysis, pregnancy tests, infection screening, and comprehensive medical check-ups.',
      features: ['Blood tests', 'Urine analysis', 'Pregnancy tests', 'Infection screening', 'Rapid lab results'],
      image: 'https://images.unsplash.com/photo-1684607632313-ededff0c700e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NzEyMzY1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Ambulance,
      title: '24/7 Emergency Care',
      description: 'Medical emergencies can happen at any time. Med-Vical provides 24-hour emergency services in Benin City with trained medical staff.',
      features: ['24/7 availability', 'Trained medical staff', 'Quick response', 'Urgent treatment', 'Always open'],
      image: 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5lJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMyOTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Heart,
      title: 'Pediatric and Family Healthcare',
      description: 'Comprehensive child healthcare services including immunization, pediatric consultations, growth monitoring, and treatment of childhood illnesses.',
      features: ['Immunization', 'Pediatric consultations', 'Growth monitoring', 'Childhood illness treatment'],
      image: 'https://images.unsplash.com/photo-1770321119305-f191c09c5801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0b29scyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzEzMjkxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-blue-50/30" />
      
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
            Our Medical Services in Benin City
          </h2>
          <p className="mt-4 text-gray-600">
            As a full-service private hospital in Benin City, Med-Vical provides comprehensive healthcare services including:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all h-full border border-white/20 bg-white/60 backdrop-blur-sm">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}