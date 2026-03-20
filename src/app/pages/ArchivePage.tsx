import { Archive, Calendar, Download } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { flyers } from '../data/flyers';

export default function ArchivePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Archive | Med-Vical International';
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
              <Archive className="w-3 h-3 mr-1" />
              Archive
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Event Archive
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Browse flyers and materials from our past events, training programmes, outreaches, and health screening initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {flyers.length === 0 ? (
            <div className="text-center py-16">
              <Archive className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2">No Archived Materials</h3>
              <p className="text-gray-600">Check back soon for archived event materials.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flyers.map((flyer, index) => (
                <motion.div
                  key={flyer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all h-full">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={flyer.image}
                        alt={flyer.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-blue-100 text-blue-700">
                        {flyer.category}
                      </Badge>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {flyer.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {flyer.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <Calendar className="w-3 h-3" />
                        <span>{flyer.date}</span>
                      </div>
                      <Link to={`/flyers/${flyer.slug}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="w-3 h-3 mr-2" />
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
