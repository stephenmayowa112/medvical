import { Presentation, Target, CheckCircle2, ArrowRight, Calendar, MapPin, Package, TrendingUp, Wrench, Lightbulb, Users, Mic, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { sendFormEmail } from '../../config/email';

const corePillars = [
  {
    icon: Package,
    title: 'Access to Essential Healthcare Products and Technology',
    description: 'Establishing direct pathways to the vital tools required for modern healthcare services:',
    items: [
      'Medical Infrastructure: Essential medical and diagnostic equipment and devices, hospital furniture, and other medical technologies.',
      'Medical Consumables: High-volume daily medical consumables and disposables.',
      'Pharmaceuticals: Essential medicines, specialty drugs, and vaccines.',
      'Specialized Healthcare Products: Biologicals, nutraceuticals, and wellness technologies.',
    ],
    color: 'blue',
  },
  {
    icon: TrendingUp,
    title: 'Supply Chain and Market Strategy',
    description: 'Overcoming barriers to access between manufacturers, importers, distributors, and end-users (patients and providers):',
    items: [
      'Logistics Excellence: Streamlining the healthcare supply chain.',
      'Market Insights: Understanding user perspectives and navigating market entry.',
      'Local Adaptation: Tailoring global technologies to meet local technical capabilities and needs.',
    ],
    color: 'emerald',
  },
  {
    icon: Wrench,
    title: 'Technical Sustainability',
    description: 'Ensuring technology remains functional long after the purchase:',
    items: [
      'Engineering & Maintenance: Providing specialized servicing and repair of medical and laboratory equipment and devices.',
      'Capacity Building: Offering professional training programmes for healthcare providers and technicians.',
    ],
    color: 'orange',
  },
  {
    icon: Lightbulb,
    title: 'Innovation and Design',
    description: 'Driving future innovations in healthcare products and technologies (design, production, adoption and supply chain):',
    items: [
      'Future Tech: Promoting breakthroughs of new technologies in healthcare, including human-centred design, digital integration, and personalized care, aiming to enhance patient outcomes, improve efficiency, and reduce costs.',
      'Process Innovation: Promoting the development and adoption of new models for efficient production and supply chain of healthcare products and technologies.',
    ],
    color: 'purple',
  },
];

const colorClasses = {
  blue: {
    bg: 'from-blue-500 to-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200',
  },
  emerald: {
    bg: 'from-emerald-500 to-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    border: 'border-emerald-200',
  },
  orange: {
    bg: 'from-orange-500 to-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    border: 'border-orange-200',
  },
  purple: {
    bg: 'from-purple-500 to-purple-700',
    badge: 'bg-purple-100 text-purple-700',
    border: 'border-purple-200',
  },
};

export default function MACEConferencePage() {
  const [selectedRegistrationType, setSelectedRegistrationType] = useState<'participant' | 'speaker' | 'exhibitor' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    jobTitle: '',
    message: '',
    // Speaker specific
    topicTitle: '',
    topicDescription: '',
    // Exhibitor specific
    companyName: '',
    productsServices: '',
    boothSize: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'MACE Conference | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      jobTitle: '',
      message: '',
      topicTitle: '',
      topicDescription: '',
      companyName: '',
      productsServices: '',
      boothSize: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let subject = '';
    let formType = '';
    let messageContent = '';

    if (selectedRegistrationType === 'participant') {
      subject = 'MACE 2026 - Participant Registration';
      formType = 'MACE Participant Registration';
      messageContent = `New participant registration for MACE 2026:\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nJob Title: ${formData.jobTitle}\n\nAdditional Information:\n${formData.message || 'None provided'}`;
    } else if (selectedRegistrationType === 'speaker') {
      subject = 'MACE 2026 - Speaker Registration';
      formType = 'MACE Speaker Registration';
      messageContent = `New speaker registration for MACE 2026:\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nJob Title: ${formData.jobTitle}\n\nProposed Topic:\nTitle: ${formData.topicTitle}\nDescription: ${formData.topicDescription}\n\nAdditional Information:\n${formData.message || 'None provided'}`;
    } else if (selectedRegistrationType === 'exhibitor') {
      subject = 'MACE 2026 - Exhibitor Registration';
      formType = 'MACE Exhibitor Registration';
      messageContent = `New exhibitor registration for MACE 2026:\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany Name: ${formData.companyName}\nJob Title: ${formData.jobTitle}\n\nProducts/Services: ${formData.productsServices}\nPreferred Booth Size: ${formData.boothSize}\n\nAdditional Information:\n${formData.message || 'None provided'}`;
    }

    const success = await sendFormEmail({
      subject,
      fromName: 'MACE Conference Registration',
      formType,
      fields: {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization || formData.companyName,
        job_title: formData.jobTitle,
        message: messageContent,
      },
    });

    setIsSubmitting(false);

    if (success) {
      alert('Thank you for your registration! Our team will contact you with more details about MACE 2026.');
      setSelectedRegistrationType(null);
      resetForm();
    } else {
      alert('There was an error submitting your registration. Please try again or contact us directly.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <motion.div
          className="absolute bottom-10 right-10 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              <Presentation className="w-3 h-3 mr-1" />
              Conference & Exhibition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MedAccess Conference & Exhibition
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              (MACE)
            </p>
            <motion.p
              className="text-lg text-blue-100 max-w-3xl mx-auto mt-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Promoting Sustainable Access to Quality & Affordable Healthcare Products & Technology
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Conference</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                MedAccess Conference and Exhibition (MACE) is dedicated to ensuring that essential healthcare 
                products and technologies are accessible, reliable, affordable, and effective for patient care 
                and improved health outcomes.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This conference is organized by <span className="font-semibold text-blue-600">Med-Vical International</span>, 
                a healthcare organization committed to enhancing access to quality and affordable health products 
                and services, and it is facilitated by <span className="font-semibold text-blue-600">simHealth Africa</span> (Health | Capacity | Innovation).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Products & Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the range of essential healthcare products and technologies featured at MACE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/mace1.jpg', alt: 'Med-Vical delivery truck for healthcare logistics' },
              { src: '/images/mace2.jpg', alt: 'Medical laboratory equipment and devices' },
              { src: '/images/mace3.jpg', alt: 'Pharmaceutical products and medications' },
              { src: '/images/mace4.jpg', alt: 'Medical devices including wheelchair and hospital bed' },
              { src: '/images/mace5.jpg', alt: 'Neonatal incubator and medical technology' },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Areas of Focus */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Areas of Focus</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our programme is structured around four (4) critical pillars, which aim to enhance the overall 
              sustainability and effectiveness of healthcare delivery systems.
            </p>
          </motion.div>

          <div className="space-y-8">
            {corePillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const colors = colorClasses[pillar.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`border-2 ${colors.border} hover:shadow-xl transition-all duration-300`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge className={`mb-2 ${colors.badge}`}>
                            Pillar {index + 1}
                          </Badge>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {pillar.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{pillar.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 ml-16">
                        {pillar.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MACE 2026 Registration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              MedAccess Conference & Exhibition (MACE 2026)
            </h2>
            <p className="text-gray-600 text-lg">
              Join us for MACE 2026 and be part of the conversation on sustainable healthcare access.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: Users,
                title: 'Register as a Participant',
                description: 'Attend sessions, network with industry leaders, and gain valuable insights.',
                color: 'blue',
              },
              {
                icon: Mic,
                title: 'Register as a Speaker',
                description: 'Share your expertise and contribute to the healthcare innovation dialogue.',
                color: 'emerald',
              },
              {
                icon: Building2,
                title: 'Register as an Exhibitor',
                description: 'Showcase your products and services to healthcare professionals and decision-makers.',
                color: 'purple',
              },
            ].map((option, index) => {
              const Icon = option.icon;
              const colors = colorClasses[option.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => setSelectedRegistrationType(option.color === 'blue' ? 'participant' : option.color === 'emerald' ? 'speaker' : 'exhibitor')}
                      >
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 rounded-full border border-blue-200">
              <Calendar className="w-5 h-5 text-blue-600" />
              <p className="text-blue-700 font-medium">
                Kindly check back for updates on MACE 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#0d3b66] to-[#2a8cc4] rounded-3xl p-8 md:p-12 text-white text-center overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">
              Stay Connected
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative">
              Get the latest updates on MACE 2026, including dates, venue, speakers, and registration details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Link to="/#contact">
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/upcoming-events">
                <Button size="lg" variant="outline" className="!text-yellow-300 border-white hover:bg-white/10 hover:!text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  View All Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Forms Dialog */}
      <Dialog open={selectedRegistrationType !== null} onOpenChange={(open) => !open && setSelectedRegistrationType(null)}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedRegistrationType === 'participant' && 'Register as a Participant'}
              {selectedRegistrationType === 'speaker' && 'Register as a Speaker'}
              {selectedRegistrationType === 'exhibitor' && 'Register as an Exhibitor'}
            </DialogTitle>
            <DialogDescription>
              {selectedRegistrationType === 'participant' && 'Fill in your details to register for MACE 2026 as a participant.'}
              {selectedRegistrationType === 'speaker' && 'Share your expertise at MACE 2026. Fill in your details and proposed topic.'}
              {selectedRegistrationType === 'exhibitor' && 'Showcase your products and services at MACE 2026. Complete the form below.'}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Common Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title <span className="text-red-500">*</span></Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  required
                  placeholder="Your position"
                />
              </div>
            </div>

            {/* Conditional Fields */}
            {selectedRegistrationType === 'exhibitor' ? (
              <div>
                <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  placeholder="Your company name"
                />
              </div>
            ) : (
              <div>
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Your organization (optional)"
                />
              </div>
            )}

            {/* Speaker Specific Fields */}
            {selectedRegistrationType === 'speaker' && (
              <>
                <div>
                  <Label htmlFor="topicTitle">Proposed Topic Title <span className="text-red-500">*</span></Label>
                  <Input
                    id="topicTitle"
                    name="topicTitle"
                    value={formData.topicTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="Title of your presentation"
                  />
                </div>
                <div>
                  <Label htmlFor="topicDescription">Topic Description <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="topicDescription"
                    name="topicDescription"
                    value={formData.topicDescription}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your proposed topic (200-300 words)"
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </>
            )}

            {/* Exhibitor Specific Fields */}
            {selectedRegistrationType === 'exhibitor' && (
              <>
                <div>
                  <Label htmlFor="productsServices">Products/Services <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="productsServices"
                    name="productsServices"
                    value={formData.productsServices}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe the products or services you wish to exhibit"
                    rows={3}
                    className="resize-none"
                  />
                </div>
                <div>
                  <Label htmlFor="boothSize">Preferred Booth Size</Label>
                  <Input
                    id="boothSize"
                    name="boothSize"
                    value={formData.boothSize}
                    onChange={handleInputChange}
                    placeholder="e.g., 3m x 3m, 6m x 3m (optional)"
                  />
                </div>
              </>
            )}

            {/* Additional Information */}
            <div>
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any additional information you'd like to share (optional)"
                rows={3}
                className="resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setSelectedRegistrationType(null)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
