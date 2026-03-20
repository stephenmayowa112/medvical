import { motion } from 'motion/react';

export function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1764004450351-37fb72cb8e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Modern Facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Expert Medical Care',
    },
    {
      url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: 'Patient Consultation',
    },
  ];

  return (
    <section id="gallery" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/30 to-white" />
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-50/20 via-transparent to-blue-50/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium">Serving Benin City</span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Serving Benin City and Surrounding Areas
          </h2>
          <p className="mt-4 text-gray-600">
            Med-Vical Specialist Hospital proudly serves residents in GRA Benin, Ugbowo, Sapele Road,
            Airport Road, Ikpoba Hill, Aduwawa, and Upper Mission Road. If you are searching online for
            "hospitals in Benin Nigeria near me" or "best hospital in Benin City," Med-Vical is conveniently
            located and easily accessible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] border border-white/20 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}