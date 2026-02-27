import { ClipboardList, User, Phone, Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const contactColors = [
  { accent: 'from-blue-500 to-cyan-500', glow: 'rgba(59,130,246,0.15)' },
  { accent: 'from-emerald-500 to-teal-500', glow: 'rgba(16,185,129,0.15)' },
  { accent: 'from-violet-500 to-purple-500', glow: 'rgba(139,92,246,0.15)' },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  bloodGroup: string;
  existingConditions: string;
  allergies: string;
  preferredDoctor: string;
  serviceInterest: string;
  howDidYouHear: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  address: '',
  city: '',
  state: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
  bloodGroup: '',
  existingConditions: '',
  allergies: '',
  preferredDoctor: '',
  serviceInterest: '',
  howDidYouHear: '',
  additionalNotes: '',
};

const services = [
  'General Consultation',
  'Maternity & Obstetrics',
  'Pediatrics',
  'Laboratory Tests',
  'Pharmacy',
  'Emergency Care',
  'Family Planning',
  'Medical Check-up',
];

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'];

export default function ClinicRegistrationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send data to a backend
    setSubmitted(true);
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
              Thank you for registering with Med-Vical International. Our team will review your
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
                    setStep(1);
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
    <div className="min-h-screen">
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
            <h1 className="text-4xl md:text-5xl mb-4">Clinic Registration</h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Register as a new patient at Med-Vical International. Fill in your details below and
              our team will get in touch with you to complete the process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              { num: 1, label: 'Personal Info' },
              { num: 2, label: 'Medical Info' },
              { num: 3, label: 'Preferences' },
            ].map((s) => (
              <motion.button
                key={s.num}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  step === s.num
                    ? 'bg-blue-600 text-white shadow-lg'
                    : step > s.num
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}
                onClick={() => setStep(s.num)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {step > s.num ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span className="w-5 h-5 rounded-full bg-current/10 flex items-center justify-center text-xs font-bold">
                    {s.num}
                  </span>
                )}
                <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
              </motion.button>
            ))}
          </motion.div>

          <form onSubmit={handleSubmit}>
            <Card className="border border-white/20 bg-white/60 backdrop-blur-md shadow-xl">
              <CardContent className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Personal Information</h2>
                        <p className="text-sm text-gray-500">Basic details about the patient</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={(e) => updateField('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          required
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={(e) => updateField('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            required
                            type="email"
                            className="pl-10"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            required
                            type="tel"
                            className="pl-10"
                            placeholder="+234 xxx xxx xxxx"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            required
                            type="date"
                            className="pl-10"
                            value={formData.dateOfBirth}
                            onChange={(e) => updateField('dateOfBirth', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          aria-label="Gender"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                          value={formData.gender}
                          onChange={(e) => updateField('gender', e.target.value)}
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          required
                          className="pl-10"
                          placeholder="Street address"
                          value={formData.address}
                          onChange={(e) => updateField('address', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">City</label>
                        <Input
                          placeholder="e.g. Benin City"
                          value={formData.city}
                          onChange={(e) => updateField('city', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State</label>
                        <Input
                          placeholder="e.g. Edo State"
                          value={formData.state}
                          onChange={(e) => updateField('state', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Emergency Contact Name</label>
                        <Input
                          placeholder="Full name"
                          value={formData.emergencyContactName}
                          onChange={(e) => updateField('emergencyContactName', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Emergency Contact Phone</label>
                        <Input
                          type="tel"
                          placeholder="+234 xxx xxx xxxx"
                          value={formData.emergencyContactPhone}
                          onChange={(e) => updateField('emergencyContactPhone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => setStep(2)}
                        >
                          Next: Medical Info
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Medical Information */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <ClipboardList className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Medical Information</h2>
                        <p className="text-sm text-gray-500">Help us understand your medical history</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Blood Group</label>
                      <select
                        aria-label="Blood Group"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        value={formData.bloodGroup}
                        onChange={(e) => updateField('bloodGroup', e.target.value)}
                      >
                        <option value="">Select blood group</option>
                        {bloodGroups.map((bg) => (
                          <option key={bg} value={bg}>
                            {bg}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Existing Medical Conditions
                      </label>
                      <Textarea
                        placeholder="List any existing medical conditions (e.g., diabetes, hypertension, asthma)..."
                        rows={3}
                        value={formData.existingConditions}
                        onChange={(e) => updateField('existingConditions', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Known Allergies
                      </label>
                      <Textarea
                        placeholder="List any known allergies (drugs, food, etc.)..."
                        rows={3}
                        value={formData.allergies}
                        onChange={(e) => updateField('allergies', e.target.value)}
                      />
                    </div>

                    <div className="flex justify-between">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button type="button" variant="outline" onClick={() => setStep(1)}>
                          Back
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => setStep(3)}
                        >
                          Next: Preferences
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Preferences */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">Preferences & Additional Info</h2>
                        <p className="text-sm text-gray-500">Almost done! Just a few more details.</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service You Are Interested In
                      </label>
                      <select
                        aria-label="Service interest"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        value={formData.serviceInterest}
                        onChange={(e) => updateField('serviceInterest', e.target.value)}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Doctor (if any)</label>
                      <Input
                        placeholder="Enter doctor's name or leave blank"
                        value={formData.preferredDoctor}
                        onChange={(e) => updateField('preferredDoctor', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">How Did You Hear About Us?</label>
                      <select
                        aria-label="How did you hear about us"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        value={formData.howDidYouHear}
                        onChange={(e) => updateField('howDidYouHear', e.target.value)}
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend-family">Friend / Family</option>
                        <option value="walk-in">Walk-in</option>
                        <option value="referral">Doctor Referral</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Notes</label>
                      <Textarea
                        placeholder="Anything else you'd like us to know..."
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => updateField('additionalNotes', e.target.value)}
                      />
                    </div>

                    <div className="flex justify-between">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button type="button" variant="outline" onClick={() => setStep(2)}>
                          Back
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Submit Registration
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </form>

          {/* Contact Info */}
          <motion.div
            className="mt-12 grid sm:grid-cols-3 gap-6"
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
                    <Card className="border border-white/20 bg-white/60 backdrop-blur-sm text-center p-6">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${color.accent} flex items-center justify-center mx-auto mb-3 shadow-md`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-800">{item.info}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
