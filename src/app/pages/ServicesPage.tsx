import {
  Stethoscope, Package, Heart, ArrowRight, Phone, MessageCircle, Users, Hospital, Pill
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { ContactForm } from '../components/features/ContactForm';
import { generateWhatsAppLink, ALL_DIVISIONS, type DivisionId } from '../data/content';

// Map division icons from content.ts to lucide-react icons
const getDivisionIcon = (iconName: string) => {
  switch (iconName) {
    case 'hospital':
      return Hospital;
    case 'pharmacy':
      return Package;
    case 'heart':
      return Heart;
    default:
      return Stethoscope;
  }
};

// Map division colors to Tailwind classes
const getDivisionColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        gradient: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        glow: 'rgba(59,130,246,0.25)',
        dot: 'bg-blue-600'
      };
    case 'red':
      return {
        gradient: 'from-red-500 to-orange-500',
        bg: 'bg-red-50',
        border: 'border-red-100',
        text: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        glow: 'rgba(239,68,68,0.25)',
        dot: 'bg-red-600'
      };
    case 'orange':
      return {
        gradient: 'from-orange-500 to-amber-500',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        glow: 'rgba(249,115,22,0.25)',
        dot: 'bg-orange-600'
      };
    default:
      return {
        gradient: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        glow: 'rgba(59,130,246,0.25)',
        dot: 'bg-blue-600'
      };
  }
};

// Get division-specific inquiry type
const getDivisionInquiryType = (divisionId: DivisionId) => {
  switch (divisionId) {
    case 'MMC':
      return 'medical-services';
    case 'MPPS':
      return 'pharmacy-supplies';
    case 'MHS':
      return 'health-programs';
    default:
      return 'general';
  }
};

// Get division image
const getDivisionImage = (divisionId: DivisionId) => {
  switch (divisionId) {
    case 'MMC':
      return 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
    case 'MPPS':
      return 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
    case 'MHS':
      return 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
    default:
      return 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800';
  }
};

// Get division page link
const getDivisionLink = (divisionId: DivisionId) => {
  switch (divisionId) {
    case 'MMC':
      return '/services/medical-centre';
    case 'MPPS':
      return '/services/pharmacy-supplies';
    case 'MHS':
      return '/med-vical-health';
    default:
      return '/services';
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/Regenerate_Video_With_Black_People.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                Our Services
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Comprehensive Healthcare Solutions Across Three Divisions
            </h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Med-Vical International operates three specialized divisions to meet all your healthcare needs — 
              from clinical services and medical supplies to community health programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Divisions Overview */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-blue-600 font-medium">Our Divisions</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Three Specialized Healthcare Divisions</h2>
            <p className="mt-4 text-gray-600">
              Each division focuses on specific aspects of healthcare delivery, ensuring comprehensive coverage 
              for all your medical needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ALL_DIVISIONS.map((division, index) => {
              const Icon = getDivisionIcon(division.icon);
              const colors = getDivisionColorClasses(division.color);
              const image = getDivisionImage(division.id);
              const link = getDivisionLink(division.id);
              
              return (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`border ${colors.border} ${colors.bg} backdrop-blur-sm shadow-lg overflow-hidden h-full`}>
                    <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                      <Icon className="w-10 h-10 mb-3" />
                      <h3 className="text-xl font-bold mb-1">{division.name}</h3>
                      <p className="text-white/80 text-sm">{division.fullName}</p>
                    </div>
                    <CardContent className="p-6">
                      <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                        <img
                          src={image}
                          alt={division.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {division.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <h4 className="font-medium text-gray-800">Key Services:</h4>
                        <ul className="space-y-2">
                          {division.services.slice(0, 4).map((service, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link to={link} className="w-full">
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Button className={`w-full ${colors.button} text-white`}>
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </motion.div>
                        </Link>
                        <a 
                          href={generateWhatsAppLink(division.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Button variant="outline" className="w-full border-gray-300">
                              <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                              WhatsApp Inquiry
                            </Button>
                          </motion.div>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Division Cards */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {ALL_DIVISIONS.map((division, index) => {
            const Icon = getDivisionIcon(division.icon);
            const colors = getDivisionColorClasses(division.color);
            const image = getDivisionImage(division.id);
            const link = getDivisionLink(division.id);
            const isReversed = index % 2 !== 0;
            
            return (
              <motion.div key={division.id} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 25px 50px -12px ${colors.glow}` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="overflow-hidden border border-white/20 bg-white/70 backdrop-blur-sm shadow-lg">
                    <div className={`grid md:grid-cols-2 ${isReversed ? 'md:[direction:rtl]' : ''}`}>
                      <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                        <motion.img
                          src={image}
                          alt={division.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                      <CardContent className={`p-6 md:p-10 flex flex-col justify-center ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h2 className="text-2xl md:text-3xl">{division.fullName}</h2>
                            <p className="text-gray-500 text-sm">({division.name})</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{division.description}</p>

                        <div className="mb-6">
                          <h3 className="font-medium text-gray-800 mb-3">Services Offered:</h3>
                          <ul className="grid grid-cols-2 gap-2">
                            {division.services.map((service, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-700"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.06 }}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0`} />
                                {service}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Link to={link} className="w-fit">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                              <Button className={`${colors.button} text-white group/btn`}>
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </motion.div>
                          </Link>
                          <a 
                            href={generateWhatsAppLink(division.id)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit"
                          >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                              <Button variant="outline" className="border-gray-300">
                                <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                                WhatsApp Inquiry
                              </Button>
                            </motion.div>
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm text-blue-600 font-medium">Get in Touch</span>
              <h2 className="mt-2 text-3xl md:text-4xl">Contact Our Divisions</h2>
              <p className="mt-4 text-gray-600">
                Have questions or need more information about our services? Contact the appropriate division 
                directly or use the form to send your inquiry.
              </p>
              
              <div className="mt-8 space-y-6">
                {ALL_DIVISIONS.map((division) => {
                  const colors = getDivisionColorClasses(division.color);
                  const inquiryType = getDivisionInquiryType(division.id);
                  
                  return (
                    <div key={division.id} className="p-4 border border-gray-200 rounded-lg bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${colors.dot}`} />
                        <h3 className="font-medium text-gray-800">{division.fullName}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{division.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <a 
                          href={`tel:${division.contactPhone}`}
                          className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          {division.contactPhone}
                        </a>
                        <span className="text-gray-300">•</span>
                        <a 
                          href={generateWhatsAppLink(division.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-green-600 hover:text-green-800 flex items-center gap-1"
                        >
                          <MessageCircle className="w-3 h-3" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Fill out the form below and we'll route your inquiry to the appropriate division.
                  </p>
                  <ContactForm defaultInquiryType="general" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2
            className="text-2xl md:text-3xl mb-3"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your Health Is Our Priority
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Whether you need clinical care, medical supplies, or community health programs, 
            Med-Vical International is your trusted partner across all three divisions.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/patient-registration">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100 hover:text-[#0d3b66]">
                  Register as Patient
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+2349019305059">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" className="!text-yellow-300 border-white hover:bg-white/10 hover:!text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}