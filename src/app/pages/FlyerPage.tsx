import { useParams, Link } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { flyers } from '../data/flyers';

export default function FlyerPage() {
  const { slug } = useParams<{ slug: string }>();
  const flyer = flyers.find((f) => f.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (flyer) {
      document.title = `${flyer.title} | Med-Vical International`;
    }
    return () => {
      document.title = 'Med-Vical International';
    };
  }, [flyer]);

  if (!flyer) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Flyer Not Found</h1>
        <p className="text-gray-600 mb-6">
          The flyer you're looking for doesn't exist.
        </p>
        <Link to="/flyers">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Flyers
          </Button>
        </Link>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: flyer.title,
        text: flyer.description,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/flyers"
              className="inline-flex items-center gap-1 text-sm text-blue-200 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              All Flyers
            </Link>
            <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30 block w-fit">
              Flyer
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {flyer.title}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl">{flyer.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Flyer image */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Action bar */}
            <div className="flex flex-wrap gap-3 justify-end">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <a href={flyer.image} download>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </a>
            </div>

            {/* Image */}
            <motion.img
              src={flyer.image}
              alt={flyer.title}
              className="w-full h-auto rounded-2xl shadow-xl border border-gray-100"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
