import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Medical Supply Conference and Exhibition',
    date: 'June 15-17, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Med-Vical Conference Centre, Benin City',
    description: 'Join us for a comprehensive conference showcasing the latest in medical supplies, equipment, and healthcare innovations. Network with industry leaders and explore cutting-edge solutions.',
    category: 'Conference',
    attendees: '200+ Expected',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 2,
    title: 'Back to School Health Screening',
    date: 'September 2026',
    time: 'TBA',
    location: 'Partner Schools, Benin City',
    description: 'Annual health screening programme for students to ensure they are healthy and ready for the new academic year.',
    category: 'Health Screening',
    attendees: 'Multiple Schools',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export default function UpcomingEventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Upcoming Events | Med-Vical International';
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
              <Calendar className="w-3 h-3 mr-1" />
              Events
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming Events
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Stay informed about our upcoming conferences, health screenings, training programmes, and community outreach initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
              <p className="text-gray-600">Check back soon for new events and programmes.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                        <Badge className="w-fit mb-3 bg-blue-600 text-white">
                          {event.category}
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">{event.title}</h2>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>

                        <Link to="/#contact">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Register Interest
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
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
