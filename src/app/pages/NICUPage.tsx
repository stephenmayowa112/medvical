import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Baby } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export default function NICUPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Neonatal Intensive Care Unit | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Minimal Header */}
      <section className="py-3 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/services/medical-centre">
              <Button variant="ghost" className="text-white hover:bg-white/20" size="sm">
                <ArrowLeft className="w-3 h-3 mr-1" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Baby className="w-4 h-4 text-white" />
              <h1 className="text-lg md:text-xl font-bold text-white">
                24/7 Neonatal Intensive Care Unit
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/images/neonatalIntensiveCareUnit.png"
              alt="Neonatal Intensive Care Unit"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-center"
          >
            <p className="text-gray-600 text-sm max-w-3xl mx-auto">
              Our Neonatal Intensive Care Unit (NICU) provides specialized care for premature and critically ill newborns, 
              equipped with advanced medical technology and staffed by experienced neonatal specialists available 24/7.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
