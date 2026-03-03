import { Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../components/ui/badge';
import { flyers } from '../data/flyers';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function FlyersListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Flyers & Announcements | Med-Vical International';
    return () => {
      document.title = 'Med-Vical International';
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              Announcements
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Flyers &amp; Announcements
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Stay up to date with the latest programmes, workshops, and
              community outreach events from Med-Vical International.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {flyers.map((flyer) => (
            <motion.div key={flyer.slug} variants={cardVariants}>
              <Link to={`/flyers/${flyer.slug}`} className="group block">
                <motion.div
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-xl"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={flyer.image}
                      alt={flyer.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {flyer.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {flyer.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
