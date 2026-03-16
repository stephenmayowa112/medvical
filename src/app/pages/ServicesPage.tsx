import {
  Stethoscope, Package, ArrowRight, Phone, ShoppingCart
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const serviceDivisions = [
  {
    icon: Stethoscope,
    title: 'Med-Vical Medical Centre',
    description:
      'Comprehensive healthcare services — from basic health checks and screening to specialty out-patient clinics, walk-in clinics, diagnostic services and 24/7 emergency care.',
    highlights: [
      'Health check & screening',
      'Specialty out-patient clinics',
      'Diagnostic & lab services',
      '24/7 emergency care',
      'Walk-in clinics',
      'Antenatal & obstetric care',
    ],
    link: '/services/medical-centre',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    accent: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Package,
    title: 'Med-Vical Supplies',
    description:
      'The wholesale, distribution and supply division — quality pharmaceuticals, medical devices, hospital and laboratory equipment and consumables at competitive wholesale prices with nationwide delivery.',
    highlights: [
      'Pharmaceuticals',
      'Surgicals & dressings',
      'Medical devices',
      'Hospital & lab equipment',
      'Consumables',
      'Nationwide delivery',
    ],
    link: '/services/medical-supplies',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    accent: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    icon: ShoppingCart,
    title: 'Med-Vical Store',
    description:
      'Shop our wide range of personal healthcare products, wellness items, and daily consumer goods directly online. Enjoy secure checkout and quick delivery for all your health and lifestyle needs.',
    highlights: [
      'Personal healthcare',
      'Wellness products',
      'Daily consumer goods',
      'Secure online checkout',
      'Quick nationwide delivery',
      'Verified quality products',
    ],
    link: '/store',
    image:
      'https://images.unsplash.com/photo-1576602976047-174e57a47881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    accent: 'from-violet-500 to-purple-500',
    glow: 'rgba(139,92,246,0.25)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ServicesPage() {
  const [showRetailForm, setShowRetailForm] = useState(false);
  const [showWholesaleForm, setShowWholesaleForm] = useState(false);
  const [retailName, setRetailName] = useState('');
  const [retailPhone, setRetailPhone] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [procurementOfficer, setProcurementOfficer] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  const handleRetailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Med-Vical Pharmacy!\n\nI need retail medical supplies.\n\nName: ${retailName}\nPhone: ${retailPhone}\n\nPlease contact me. Thank you!`;
    const phone = '2349018911685';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setRetailName('');
    setRetailPhone('');
    setShowRetailForm(false);
  };

  const handleWholesaleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello MedVical Supply!\n\nI need wholesale medical supplies.\n\nFacility Name: ${facilityName}\nProcurement Officer: ${procurementOfficer}\n\nPlease contact us for bulk orders. Thank you!`;
    const phone = '2348087874018';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setFacilityName('');
    setProcurementOfficer('');
    setShowWholesaleForm(false);
  };

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
              Comprehensive Healthcare &amp; Supply Solutions
            </h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Med-Vical International operates two key service divisions — our Medical Centre providing
              clinical healthcare, and our Supply division distributing quality medical products nationwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Divisions */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {serviceDivisions.map((division, index) => {
            const Icon = division.icon;
            const isReversed = index % 2 !== 0;
            return (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 25px 50px -12px ${division.glow}` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="overflow-hidden border border-white/20 bg-white/70 backdrop-blur-sm shadow-lg">
                    <div className={`grid md:grid-cols-2 ${isReversed ? 'md:[direction:rtl]' : ''}`}>
                      <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                        <motion.img
                          src={division.image}
                          alt={division.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                      <CardContent className={`p-6 md:p-10 flex flex-col justify-center ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.accent} flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <h2 className="text-2xl md:text-3xl">{division.title}</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{division.description}</p>

                        <ul className="grid grid-cols-2 gap-2 mb-6">
                          {division.highlights.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-700"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.06 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        <Link to={division.link} className="w-fit">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Button className="bg-blue-600 hover:bg-blue-700 group/btn">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Pharmacy & Supply Forms */}
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
            <span className="text-sm text-blue-600 font-medium">Get Started</span>
            <h2 className="mt-2 text-3xl md:text-4xl">MedVical Pharmacy & Medical Supplies</h2>
            <p className="mt-4 text-gray-600">
              Choose retail for quick medical needs or wholesale for clinics and government facilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Retail Form */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                  <ShoppingCart className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">MedVical Pharmacy</h3>
                  <p className="text-blue-100 text-sm">Retail - Quick Medical Needs</p>
                </div>
                <CardContent className="p-6">
                  {!showRetailForm ? (
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        For individuals and families needing quick access to quality pharmaceutical products and personal healthcare items.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          Prescription medications
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          Over-the-counter drugs
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          Personal care products
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          Fast delivery
                        </li>
                      </ul>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => setShowRetailForm(true)}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  ) : (
                    <form onSubmit={handleRetailSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="retail-name">Full Name</Label>
                        <Input
                          id="retail-name"
                          type="text"
                          placeholder="Enter your name"
                          value={retailName}
                          onChange={(e) => setRetailName(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="retail-phone">Phone Number</Label>
                        <Input
                          id="retail-phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={retailPhone}
                          onChange={(e) => setRetailPhone(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          Submit via WhatsApp
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowRetailForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Wholesale Form */}
            <motion.div
              initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card className="border border-emerald-100 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
                  <Package className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">MedVical Supply</h3>
                  <p className="text-emerald-100 text-sm">Wholesale - Clinics & Government Officials</p>
                </div>
                <CardContent className="p-6">
                  {!showWholesaleForm ? (
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        For healthcare facilities, clinics, hospitals, and government institutions requiring bulk medical supplies and equipment.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Wholesale pricing
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Bulk orders
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Medical equipment
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Nationwide delivery
                        </li>
                      </ul>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button 
                          className="w-full bg-emerald-600 hover:bg-emerald-700"
                          onClick={() => setShowWholesaleForm(true)}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  ) : (
                    <form onSubmit={handleWholesaleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="facility-name">Name of Facility</Label>
                        <Input
                          id="facility-name"
                          type="text"
                          placeholder="Enter facility name"
                          value={facilityName}
                          onChange={(e) => setFacilityName(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="procurement-officer">Procurement Officer</Label>
                        <Input
                          id="procurement-officer"
                          type="text"
                          placeholder="Enter procurement officer name"
                          value={procurementOfficer}
                          onChange={(e) => setProcurementOfficer(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                          Submit via WhatsApp
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setShowWholesaleForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}
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
            Whether you need clinical care or quality medical supplies, Med-Vical International is your trusted partner.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/clinic-registration">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                  Register as Patient
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+2349018911685">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
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
