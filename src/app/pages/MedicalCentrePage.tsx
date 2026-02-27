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

export default function MedicalCentrePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Medical Centre | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl leading-tight mb-4">
                Med-Vical Medical Centre
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Comprehensive healthcare services delivered with compassion.
                From routine check-ups to specialty consultations, our medical
                centre is equipped to meet your family's healthcare needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/clinic-registration">
                  <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                    Register as Patient
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+2347086080230">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Med-Vical Medical Centre – modern healthcare facility in Benin City"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-blue-600 font-medium">What We Offer</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Our Clinical Services</h2>
            <p className="mt-4 text-gray-600">
              We provide a broad range of clinical and preventive healthcare services at our facility in Benin City.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="h-full border border-white/20 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Clinics */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-blue-600 font-medium">Specialty Care</span>
              <h2 className="mt-2 text-3xl md:text-4xl mb-4">
                Out-Patient Specialty Clinics
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our specialty clinics are staffed by experienced consultants across a wide range of
                medical disciplines, ensuring you receive expert care for specific health conditions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialtyClinics.map((clinic, index) => {
                  const Icon = clinic.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{clinic.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Specialist doctors providing consultations at Med-Vical"
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
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
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl mb-3">Walk-In Clinic</h2>
            <p className="text-blue-100 mb-2 text-lg">Healthcare services on the go!</p>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Our walk-in clinics are very convenient for busy clients and their families.
              No appointment necessary — just come in for quality medical care when you need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+2347086080230">
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 07086080230
                </Button>
              </a>
              <Link to="/clinic-registration">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Register Online
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                No appointment needed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                24/7 emergency care
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                Family-friendly
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
