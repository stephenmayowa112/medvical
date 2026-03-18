import {
  Stethoscope, Baby, FlaskConical, Ambulance, Heart, Brain,
  Activity, Bone, ShieldCheck, GraduationCap, Building2, Phone,
  ArrowRight, CheckCircle2, Clock, Calendar, MessageCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { WhatsAppWidget } from '../components/features/WhatsAppWidget';

const cardColors = [
  { accent: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.2)' },
  { accent: 'from-emerald-500 to-teal-500', glow: 'rgba(16,185,129,0.2)' },
  { accent: 'from-violet-500 to-purple-500', glow: 'rgba(139,92,246,0.2)' },
  { accent: 'from-amber-500 to-orange-500', glow: 'rgba(245,158,11,0.2)' },
  { accent: 'from-rose-500 to-pink-500', glow: 'rgba(244,63,94,0.2)' },
  { accent: 'from-indigo-500 to-blue-500', glow: 'rgba(99,102,241,0.2)' },
];

const coreServices = [
  {
    icon: ShieldCheck,
    title: 'Health Check & Screening',
    description: 'Basic and advanced health checks and screenings to detect conditions early and maintain optimal health.',
  },
  {
    icon: GraduationCap,
    title: 'Health & Wellness Education',
    description: 'Educational programmes to empower individuals, families and communities with reliable health knowledge.',
  },
  {
    icon: Baby,
    title: 'School & Adolescent Health',
    description: 'Comprehensive school health programmes and back-to-school health checks for children and adolescents.',
  },
  {
    icon: Building2,
    title: 'Primary Healthcare',
    description: 'Primary healthcare services, pre-employment medical checks, and disease prevention services.',
  },
  {
    icon: Ambulance,
    title: 'Medicare & Emergency Services',
    description: 'Medical coverage and emergency services during major events, rallies, conventions, and church programmes.',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Services',
    description: 'Full diagnostic laboratory and radiological services including MRI, CT scan, X-ray, Mammography, Ultrasonography, and ECG.',
  },
];

const specialtyClinics = [
  { icon: Baby, label: 'Paediatric Clinic' },
  { icon: Heart, label: 'Cardiology' },
  { icon: Activity, label: 'Endocrinology' },
  { icon: Stethoscope, label: 'Dermatology' },
  { icon: Bone, label: 'Rheumatology' },
  { icon: Brain, label: 'Neurology' },
  { icon: ShieldCheck, label: 'Surgery' },
  { icon: Activity, label: 'Physiotherapy' },
  { icon: Baby, label: 'Antenatal & Obstetric Care' },
  { icon: Heart, label: 'Cardiac Care' },
  { icon: Brain, label: 'Neurology & Neurosurgery' },
  { icon: Stethoscope, label: 'General Medicine' },
];

const nicuPICUInfo = {
  title: 'NICU & PICU Services',
  description: 'Our state-of-the-art Neonatal Intensive Care Unit (NICU) and Pediatric Intensive Care Unit (PICU) provide specialized care for newborns and children requiring intensive care.',
  features: [
    '24/7 Neonatal Intensive Care',
    'Pediatric Intensive Care Unit',
    'Advanced Ventilation Support',
    'Neonatal Surgery Support',
    'Family-Centered Care Approach'
  ]
};

const ambulanceServices = {
  title: '24/7 Ambulance Service',
  description: 'Our 24/7 ambulance service is equipped with advanced life support systems and staffed by trained paramedics for emergency medical situations.',
  contact: {
    phone: '+2347086080230',
    emergency: '07086080230',
    hours: '24/7 Emergency Service'
  }
};

const diagnosticServices = [
  'MRI & CT Scan',
  'Digital X-Ray',
  'Ultrasound & Sonography',
  'ECG & Echocardiography',
  'Laboratory Services',
  'Mammography',
  'Endoscopy & Colonoscopy'
];

const gridContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const gridItem = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function MedicalCentrePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Medical Centre | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        >
          <source src="/images/Regenerate_Video_With_Black_People.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                Our Services
              </Badge>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Med-Vical Medical Centre
            </h1>
            
            <motion.p
              className="text-lg text-blue-100 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Comprehensive healthcare services delivered with compassion. From routine check-ups to specialty care, 
              our medical centre is equipped to meet your family's healthcare needs with state-of-the-art facilities 
              and expert medical professionals.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/patient-registration">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                    Register as Patient
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <a href="tel:+2347086080230">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="text-yellow-300 border-white hover:bg-white/10 hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-blue-600 font-medium">What We Offer</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Our Clinical Services</h2>
            <p className="mt-4 text-gray-600">
              We provide a comprehensive range of clinical and preventive healthcare services at our facility in Benin City.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              const color = cardColors[index % cardColors.length];
              return (
                <motion.div key={index} variants={gridItem}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: `0 20px 40px -12px ${color.glow}` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="h-full"
                  >
                    <Card className="h-full border border-white/20 bg-white/70 backdrop-blur-sm shadow-md group">
                      <CardContent className="p-6">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.accent} flex items-center justify-center shadow-lg mb-4`}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Specialty Clinics */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm text-blue-600 font-medium">Specialty Care</span>
              <h2 className="mt-2 text-3xl md:text-4xl mb-4">Specialty Clinics</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our specialty clinics are staffed by experienced consultants across a wide range of medical disciplines, 
                ensuring expert care for specific health conditions.
              </p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={gridContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {specialtyClinics.map((clinic, index) => {
                  const Icon = clinic.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={gridItem}
                      whileHover={{ x: 6, boxShadow: '0 8px 25px -8px rgba(59,130,246,0.2)' }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-default"
                    >
                      <motion.div
                        className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Icon className="w-4 h-4 text-blue-600" />
                      </motion.div>
                      <span className="text-sm font-medium text-gray-800">{clinic.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ filter: 'blur(24px)' }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1666214280557-0b7cc7940c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Specialist doctors providing consultations"
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NICU/PICU Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {nicuPICUInfo.title}
              </h3>
              <p className="text-gray-600 mb-6">{nicuPICUInfo.description}</p>
              <ul className="space-y-3">
                {nicuPICUInfo.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-xl font-semibold mb-4">24/7 Ambulance Service</h4>
                <p className="text-gray-600 mb-4">
                  Our 24/7 ambulance service is equipped with advanced life support systems and 
                  staffed by trained paramedics for emergency medical situations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Emergency Contact</p>
                      <p className="text-gray-600">{ambulanceServices.contact.emergency}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{ambulanceServices.contact.hours}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Diagnostic Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State-of-the-art diagnostic facilities for accurate and timely diagnosis
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {diagnosticServices.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-center">
                  <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-medium">{service}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Walk-in Clinic CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="text-2xl md:text-3xl mb-3 relative">Walk-in Clinic</h2>
            <p className="text-blue-100 text-lg mb-2 relative">Healthcare services on the go!</p>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto relative">
              Our walk-in clinics provide convenient healthcare services without appointments. 
              Quality medical care when you need it.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="tel:+2347086080230">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Call 07086080230
                  </Button>
                </motion.div>
              </a>
              <Link to="/patient-registration">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="text-yellow-300 border-white hover:bg-white/10 hover:text-white">
                    Register Online
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {['No appointment needed', '24/7 emergency care', 'Family-friendly environment'].map((text, i) => (
                <motion.span
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-300" />
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget division="MMC" defaultMessage="Hello Med-Vical Medical Centre, I would like to book an appointment..." />

      {/* Appointment Booking CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
          <p className="text-gray-600 mb-6">Schedule your consultation with our specialists</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon components
const BabyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h.01M12 12h.01M12 8h.01M12 4V2m0 0V2m0 0h.01M12 2h.01M18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
  </svg>
);

const StethoscopeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m-6 4h4" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m4.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.99-2.386l-.548-.548z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AmbulanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.837L3 21l1.338-3.123A8.949 8.949 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);