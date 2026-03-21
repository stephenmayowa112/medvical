import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Baby } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export default function PICUPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Pediatric Intensive Care Unit | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services/medical-centre">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Medical Centre
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Baby className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Pediatric Intensive Care Unit
              </h1>
              <p className="text-blue-100 text-lg">
                Specialized intensive care for critically ill children
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <img
              src="/images/paediatricIntensiveCareUnit.png"
              alt="Pediatric Intensive Care Unit"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our Pediatric Intensive Care Unit (PICU) delivers comprehensive critical care for children with severe 
              illnesses or injuries, featuring advanced monitoring systems and a dedicated team of pediatric specialists.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
