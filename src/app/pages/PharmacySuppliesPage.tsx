import { ShoppingCart, Package, ArrowRight, Phone, Store } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { sendFormEmail } from '../../config/email';

export default function PharmacySuppliesPage() {
  const [showRetailForm, setShowRetailForm] = useState(false);
  const [showWholesaleForm, setShowWholesaleForm] = useState(false);
  const [retailName, setRetailName] = useState('');
  const [retailPhone, setRetailPhone] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [procurementOfficer, setProcurementOfficer] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Pharmacy and Medical Supplies | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
  }, []);

  const handleRetailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await sendFormEmail({
      subject: 'New Retail Pharmacy Order - MedVical',
      fromName: 'MedVical Pharmacy (Retail)',
      formType: 'Retail - Quick Medical Needs',
      fields: {
        name: retailName,
        phone: retailPhone,
        message: `New retail pharmacy order request:\n\nCustomer Name: ${retailName}\nPhone Number: ${retailPhone}`,
      },
    });

    if (success) {
      alert('Thank you! Your request has been submitted. We will contact you shortly.');
      setRetailName('');
      setRetailPhone('');
      setShowRetailForm(false);
    } else {
      alert('There was an error submitting your request. Please try again or call us directly at 09018911685.');
    }
  };

  const handleWholesaleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await sendFormEmail({
      subject: 'New Wholesale Medical Supplies Order - MedVical',
      fromName: 'MedVical Supply (Wholesale)',
      formType: 'Wholesale - Clinics & Government Officials',
      fields: {
        facility_name: facilityName,
        procurement_officer: procurementOfficer,
        message: `New wholesale medical supplies order request:\n\nFacility Name: ${facilityName}\nProcurement Officer: ${procurementOfficer}`,
      },
    });

    if (success) {
      alert('Thank you! Your request has been submitted. We will contact you shortly.');
      setFacilityName('');
      setProcurementOfficer('');
      setShowWholesaleForm(false);
    } else {
      alert('There was an error submitting your request. Please try again or call us directly at 07030943250.');
    }
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
              Pharmacy &amp; Medical Supplies
            </h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Quality pharmaceutical products and medical supplies for individuals, families, healthcare facilities, and government institutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Retail and Wholesale Forms */}
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
            <span className="text-sm text-blue-600 font-medium">Choose Your Service</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Retail or Wholesale</h2>
            <p className="mt-4 text-gray-600">
              Select retail for quick medical needs or wholesale for bulk orders to clinics and government facilities.
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
              <Card className="border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden h-full">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                  <ShoppingCart className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">Retail</h3>
                  <p className="text-blue-100 text-sm">Quick Medical Needs</p>
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
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
                        <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                          Submit
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
              <Card className="border border-emerald-100 bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden h-full">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
                  <Package className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">Wholesale</h3>
                  <p className="text-emerald-100 text-sm">Clinics & Government Officials</p>
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
                          Medical equipments and devices
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Pharmaceuticals
                        </li>
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
                          Nationwide delivery
                        </li>
                      </ul>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button 
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
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
                        <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                          Submit
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

      {/* Contact CTA */}
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
            Need Help Choosing?
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Our team is ready to assist you with your pharmaceutical and medical supply needs.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="tel:+2349018911685">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100 hover:text-[#0d3b66]">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Retail: 09018911685
                </Button>
              </motion.div>
            </a>
            <a href="tel:+2347030943250">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" className="!text-yellow-300 border-white hover:bg-white/10 hover:!text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Wholesale: 07030943250
                </Button>
              </motion.div>
            </a>
            <Link to="/store">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100 hover:text-[#0d3b66]">
                  <Store className="w-4 h-4 mr-2" />
                  Visit Our Store
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
