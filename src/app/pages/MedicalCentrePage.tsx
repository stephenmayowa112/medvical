import {
  Stethoscope, Baby, FlaskConical, Ambulance, Heart, Brain,
  Activity, Bone, ShieldCheck, GraduationCap, Building2, Phone,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect } from 'react';

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
    description:
      'Basic and advanced health checks and screenings to detect conditions early and keep you in optimal health.',
  },
  {
    icon: GraduationCap,
    title: 'Health & Wellness Education',
    description:
      'Educational programmes designed to empower individuals, families and communities with reliable health knowledge.',
  },
  {
    icon: Baby,
    title: 'School & Adolescent Health',
    description:
      'Comprehensive school health programmes and back-to-school health checks and screenings for children and adolescents.',
  },
  {
    icon: Building2,
    title: 'Primary Healthcare',
    description:
      'Primary healthcare services, pre-employment medical checks, health promotion and disease prevention services.',
  },
  {
    icon: Ambulance,
    title: 'Medicare & Emergency Services',
    description:
      'Medical coverage and emergency services during major events — rallies, conventions, church programmes and more.',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Services',
    description:
      'Full diagnostic laboratory and radiological services including MRI, CT scan, X-ray, Mammography, Ultrasonography and ECG.',
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
];

const gridContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function MedicalCentrePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Medical Centre | Med-Vical International';
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
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        >
          <source
            src="/images/Regenerate_Video_With_Black_People.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white max-w-3xl"
          >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                Our Services
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl leading-tight mb-4">
              Med-Vical Medical Centre
            </h1>
            <motion.p
              className="text-lg text-blue-100 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Comprehensive healthcare services delivered with compassion.
              From routine check-ups to specialty consultations, our medical
              centre is equipped to meet your family's healthcare needs.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/clinic-registration">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100 hover:text-[#0d3b66]">
                    Register as Patient
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </Link>
              <a href="tel:+2347086080230">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="!text-yellow-300 border-white hover:bg-white/10 hover:!text-white">
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
              We provide a broad range of clinical and preventive healthcare services at our facility in Benin City.
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
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color.accent} flex items-center justify-center mb-4 shadow-lg`}
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
              <h2 className="mt-2 text-3xl md:text-4xl mb-4">
                Out-Patient Specialty Clinics
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our specialty clinics are staffed by experienced consultants across a wide range of
                medical disciplines, ensuring you receive expert care for specific health conditions.
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
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
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
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ filter: 'blur(24px)' }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Specialist doctors providing consultations at Med-Vical"
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Walk-in Clinic CTA */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden relative"
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
            <h2 className="text-2xl md:text-3xl mb-3 relative">Walk-In Clinic</h2>
            <p className="text-blue-100 mb-2 text-lg relative">Healthcare services on the go!</p>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto relative">
              Our walk-in clinics are very convenient for busy clients and their families.
              No appointment necessary — just come in for quality medical care when you need it.
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
                  <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100 hover:text-[#0d3b66]">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 07086080230
                  </Button>
                </motion.div>
              </a>
              <Link to="/clinic-registration">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="!text-yellow-300 border-white hover:bg-white/10 hover:!text-white">
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
              {['No appointment needed', '24/7 emergency care', 'Family-friendly'].map((text, i) => (
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
    </div>
  );
}
