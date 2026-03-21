import { GraduationCap, Users, BookOpen, Award, CheckCircle2, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

const trainingPrograms = [
  {
    title: 'Helping Babies Breathe',
    description: 'Training programme on helping babies breathe and essential newborn care for clinical staff.',
    audience: 'Clinical Staff',
    icon: Users,
  },
  {
    title: 'Essential Newborn Care',
    description: 'Training programme on helping babies breathe and essential newborn care for clinical staff.',
    audience: 'Clinical Staff',
    icon: BookOpen,
  },
  {
    title: 'Training for Non-Clinical Staff',
    description: 'Capacity building programmes designed for non-clinical healthcare staff.',
    audience: 'Non-Clinical Staff',
    icon: GraduationCap,
  },
];

const benefits = [
  'Curated training programmes',
  'Hands-on training',
  'For clinical and non-clinical staff',
];

export default function TrainingCapacityBuildingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Training & Capacity Building | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              <GraduationCap className="w-3 h-3 mr-1" />
              Professional Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Training & Capacity Building Programmes
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We offer curated and hands-on training and capacity building programmes for clinical and non-clinical staff to enhance healthcare delivery and improve patient outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Empowering Healthcare Professionals</h2>
            <p className="text-gray-600 leading-relaxed">
              At Med-Vical International, we believe that quality healthcare begins with well-trained professionals. 
              Our training programmes are designed to build capacity, enhance skills, and improve healthcare outcomes 
              across clinical and non-clinical settings.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Training Programmes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions tailored to meet the needs of healthcare professionals at all levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border border-gray-200 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                          <Badge className="bg-blue-100 text-blue-700 text-xs">
                            {program.audience}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Our Training Programmes?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our training and capacity building programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Partnership & Collaboration</h3>
          <p className="text-gray-600 mb-6">
            Our social impact programmes are complemented by <a href="https://simhealthafrica.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">simHealth Africa</a> (the not for profit arm of our services), 
            through systematic support for health programmes; research, training and dissemination; social innovation; policy, advocacy and collaboration.
          </p>
        </div>
      </section>
    </div>
  );
}
