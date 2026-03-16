import { CheckCircle, Clock, Award, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function About() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Emergency Services',
      description: '24/7 emergency medical services available round the clock'
    },
    {
      icon: Award,
      title: 'Experienced Doctors',
      description: 'Experienced and licensed medical doctors'
    },
    {
      icon: Building2,
      title: 'Modern Facility',
      description: 'Modern diagnostic laboratory in Benin City'
    },
    {
      icon: CheckCircle,
      title: 'Maternity Unit',
      description: 'Fully equipped maternity and delivery unit'
    },
    {
      icon: CheckCircle,
      title: 'Affordable Care',
      description: 'Affordable healthcare services'
    },
    {
      icon: CheckCircle,
      title: 'Safe Environment',
      description: 'Clean, safe and comfortable environment'
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium">Why Choose Med-Vical</span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Why Med-Vical is a Leading Hospital in Benin City
          </h2>
          <p className="mt-4 text-gray-600">
            Choosing the right hospital in Benin City can make all the difference in your healthcare experience. 
            At Med-Vical, we combine modern medical technology with compassionate care to deliver exceptional outcomes. 
            Located in the heart of Benin City, we serve families, individuals, corporate organizations and HMOs with 
            world-class medical services delivered by experienced doctors and trained healthcare professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="p-6 border border-white/20 rounded-xl bg-white/40 backdrop-blur-md hover:shadow-xl hover:bg-white/60 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}