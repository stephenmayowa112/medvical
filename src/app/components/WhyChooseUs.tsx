import { DollarSign, MapPin, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Healthcare',
      description: 'Competitive pricing without compromising quality. We partner with leading HMOs and insurance providers.',
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Located in the heart of Benin City, easily accessible from GRA, Ugbowo, Sapele Road, and surrounding areas.',
    },
    {
      icon: Users,
      title: 'Patient-Centered Care',
      description: 'We prioritize your comfort, safety, and professional care in every visit. Your health is our mission.',
    },
    {
      icon: Zap,
      title: 'Fast Lab Results',
      description: 'Quick turnaround time for laboratory results with modern diagnostic equipment and technology.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium">Our Commitment</span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Why Choose Med-Vical?
          </h2>
          <p className="mt-4 text-gray-600">
            Healthcare should be accessible. As one of the most affordable private hospitals in Benin,
            we offer competitive pricing without compromising quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}