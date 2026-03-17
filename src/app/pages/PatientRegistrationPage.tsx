import { ClipboardList, User, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { useState } from 'react';

const contactColors = [
  { accent: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.15)' },
  { accent: 'from-emerald-500 to-teal-500', glow: 'rgba(16,185,129,0.15)' },
  { accent: 'from-violet-500 to-purple-500', glow: 'rgba(139,92,246,0.15)' },
];

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  maritalStatus: string;
  organization: string;
  nextOfKinName: string;
  nextOfKinAddress: string;
  nextOfKinPhone: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  middleName: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  maritalStatus: 'Single',
  organization: '',
  nextOfKinName: '',
  nextOfKinAddress: '',
  nextOfKinPhone: '',
};

const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed', 'Separated'];


export default function ClinicRegistrationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500)
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
          <motion.div
            className="absolute top-10 right-20 w-48 h-48 bg-green-300/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative max-w-2xl mx-auto px-4 text-center text-white py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            >
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-green-300" />
            </motion.div>
            <motion.h1
              className="text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Registration Submitted Successfully!
            </motion.h1>
            <motion.p
              className="text-lg text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Thank you for registering with medvical medical centre. Our team will review your
              information and contact you within 24 hours to confirm your registration and schedule
              your first appointment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  className="bg-white text-[#0d3b66] hover:bg-gray-100"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                  }}
                >
                  Register Another Patient
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                  onClick={() => (window.location.href = '/')}
                >
                  Return to Home
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <motion.div
          className="absolute bottom-10 left-10 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <ClipboardList className="w-4 h-4" />
              <span className="text-sm">Patient Registration</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl mb-4">Register as a New Patient at Med-Vical Centre</h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Register as a new patient at medvical medical centre. Fill in your details below and
              our team will get in touch with you to complete the process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="relative py-12 md:py-16">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <Card className="border-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/10 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 md:p-8 space-y-8"
                >
                  {/* Section 1: Name & Contact */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Personal Details</h2>
                    </div>

                    <div className="space-y-5">
                      <div className="grid md:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Name <span className="text-red-500">*</span>
                            <span className="block text-xs font-medium text-slate-500 mt-0.5">First</span>
                          </label>
                          <Input
                            required
                            value={formData.firstName}
                            onChange={(e) => updateField('firstName', e.target.value)}
                            className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            <span className="invisible">Name</span>
                            <span className="block text-xs font-medium text-slate-500 mt-0.5">Last</span>
                          </label>
                          <Input
                            required
                            value={formData.lastName}
                            onChange={(e) => updateField('lastName', e.target.value)}
                            className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            <span className="invisible">Name</span>
                            <span className="block text-xs font-medium text-slate-500 mt-0.5">Middle Name</span>
                          </label>
                          <Input
                            value={formData.middleName}
                            onChange={(e) => updateField('middleName', e.target.value)}
                            className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                              required
                              type="tel"
                              className="pl-11 bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                              value={formData.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                              required
                              type="email"
                              className="pl-11 bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                              value={formData.email}
                              onChange={(e) => updateField('email', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Address */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Address Details</h2>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Home Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          value={formData.address}
                          onChange={(e) => updateField('address', e.target.value)}
                          className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            City <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            value={formData.city}
                            onChange={(e) => updateField('city', e.target.value)}
                            className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            State <span className="text-red-500">*</span>
                          </label>
                          <Input
                            required
                            value={formData.state}
                            onChange={(e) => updateField('state', e.target.value)}
                            className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Additional Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Additional Information</h2>
                    </div>

                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Marital Status</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {maritalStatuses.map((status) => (
                              <label key={status} className={`flex items-center px-2 py-3 sm:px-3 sm:py-3 border-2 rounded-xl cursor-pointer transition-all ${formData.maritalStatus === status ? 'border-blue-500 bg-blue-50/50 shadow-sm ring-4 ring-blue-500/10' : 'border-slate-300 bg-white hover:border-blue-300 shadow-sm'}`}>
                                <input
                                  type="radio"
                                  name="maritalStatus"
                                  value={status}
                                  checked={formData.maritalStatus === status}
                                  onChange={(e) => updateField('maritalStatus', e.target.value)}
                                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-blue-600 border-slate-300 focus:ring-blue-500 shrink-0"
                                />
                                <span className={`ml-1.5 sm:ml-2 text-xs sm:text-sm font-semibold truncate ${formData.maritalStatus === status ? 'text-blue-700' : 'text-slate-700'}`} title={status}>{status}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Name Of Organization/School</label>
                          <Input
                            value={formData.organization}
                            onChange={(e) => updateField('organization', e.target.value)}
                            className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Next of Kin */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 shadow-sm flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 tracking-tight">Next Of Kin Information</h2>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Next Of Kin <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          value={formData.nextOfKinName}
                          onChange={(e) => updateField('nextOfKinName', e.target.value)}
                          className="bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Next Of Kin Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                              required
                              className="pl-11 bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                              value={formData.nextOfKinAddress}
                              onChange={(e) => updateField('nextOfKinAddress', e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                            Next Of Kin Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                              required
                              type="tel"
                              className="pl-11 bg-white border-2 border-slate-300 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all rounded-lg text-slate-800 font-medium"
                              value={formData.nextOfKinPhone}
                              onChange={(e) => updateField('nextOfKinPhone', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-xl text-base font-semibold shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : 'Submit Registration'}
                    </Button>
                  </div>

                </motion.div>
              </CardContent>
            </Card>
          </form>

          {/* Contact Info */}
          <motion.div
            className="mt-16 grid sm:grid-cols-3 gap-6 pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '09018911685',
                sub: 'Mon–Sat: 8am to 5pm',
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@medvical.com',
                sub: 'We respond within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: '44 Boundary Road, GRA',
                sub: 'Benin City, Edo State',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const color = contactColors[index % contactColors.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -6, boxShadow: `0 20px 40px -12px ${color.glow}` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <Card className="border border-white/20 bg-white shadow-sm hover:shadow-md transition-shadow text-center p-6">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${color.accent} flex items-center justify-center mx-auto mb-3 shadow-sm`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="font-semibold text-sm mb-1 text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-700">{item.info}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer Logo */}
          <div className="text-center pb-8 border-t border-gray-200 pt-8 mt-8">
            <h5 className="text-gray-500 text-sm">Supported By <a href="https://simhealthafrica.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">simHealth Africa</a></h5>
          </div>

        </div>
      </section>
    </div>
  );
}
