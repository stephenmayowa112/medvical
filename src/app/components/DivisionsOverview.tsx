import { motion } from 'motion/react';
import { ArrowRight, Building2, Package, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router';
import { ALL_DIVISIONS, type DivisionInfo } from '../data/content';

const divisionIcons: Record<string, React.ElementType> = {
  hospital: Building2,
  pharmacy: Package,
  heart: Heart,
};

const divisionLinks: Record<string, string> = {
  MMC: '/services/medical-centre',
  MPPS: '/services/pharmacy-supplies',
  MHS: '/med-vical-health',
};

const colorClasses: Record<string, { bg: string; border: string; badge: string; btn: string; icon: string }> = {
  blue: {
    bg: 'from-blue-50 to-white',
    border: 'border-blue-100 hover:border-blue-300',
    badge: 'bg-blue-100 text-blue-700',
    btn: 'bg-blue-600 hover:bg-blue-700 text-white',
    icon: 'from-blue-500 to-blue-700',
  },
  red: {
    bg: 'from-red-50 to-white',
    border: 'border-red-100 hover:border-red-300',
    badge: 'bg-red-100 text-red-700',
    btn: 'bg-red-600 hover:bg-red-700 text-white',
    icon: 'from-red-500 to-red-700',
  },
  orange: {
    bg: 'from-orange-50 to-white',
    border: 'border-orange-100 hover:border-orange-300',
    badge: 'bg-orange-100 text-orange-700',
    btn: 'bg-orange-500 hover:bg-orange-600 text-white',
    icon: 'from-orange-400 to-orange-600',
  },
};

function DivisionCard({ division, index }: { division: DivisionInfo; index: number }) {
  const Icon = divisionIcons[division.icon] ?? Building2;
  const colors = colorClasses[division.color] ?? colorClasses.blue;
  const link = divisionLinks[division.id] ?? '/services';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className={`h-full bg-gradient-to-br ${colors.bg} border ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
        <CardContent className="p-6 flex flex-col h-full">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.icon} text-white mb-4 shadow-md`}>
            <Icon className="w-7 h-7" aria-hidden="true" />
          </div>

          {/* Division ID badge */}
          <Badge className={`self-start mb-3 text-xs font-semibold ${colors.badge}`}>
            {division.id}
          </Badge>

          {/* Name & description */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{division.fullName}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{division.description}</p>

          {/* Top services */}
          <ul className="space-y-1 mb-6">
            {division.services.slice(0, 4).map((service) => (
              <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to={link}>
            <Button size="sm" className={`w-full ${colors.btn}`}>
              Learn More <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function DivisionsOverview() {
  return (
    <section id="divisions" className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">Our Divisions</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Three Divisions, One Mission
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Med-Vical International delivers comprehensive healthcare through three specialised divisions,
            each dedicated to a distinct aspect of your health and wellbeing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ALL_DIVISIONS.map((division, index) => (
            <DivisionCard key={division.id} division={division} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
