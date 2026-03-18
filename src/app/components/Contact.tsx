import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { useState } from 'react';
import { sendFormEmail } from '../../config/email';
import { GoogleMapsEmbed } from './features/GoogleMapsEmbed';
import { ALL_OFFICE_LOCATIONS } from '../data/content';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendFormEmail({
      subject: 'New Appointment Booking - MedVical',
      fromName: 'MedVical Contact Form',
      formType: 'Contact/Appointment Booking',
      fields: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: `New appointment booking request:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
      },
    });

    setIsSubmitting(false);

    if (success) {
      alert('Thank you! Your appointment request has been submitted. We will contact you shortly.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      alert('There was an error submitting your request. Please try again or call us directly at 09018911685.');
    }
  };
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-purple-50/20 to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-purple-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium">Get In Touch</span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Book an Appointment
          </h2>
          <p className="mt-4 text-gray-600">
            Your health matters. Whether you need a maternity hospital in Benin, a reliable laboratory in Benin City,
            or 24/7 emergency treatment, Med-Vical is here to help. Call us today or book an appointment online to
            experience quality healthcare from one of the most trusted hospitals in Benin Nigeria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-white/20 bg-white/60 backdrop-blur-md shadow-xl">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <Input 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone</label>
                      <Input 
                        type="tel" 
                        placeholder="+234 xxx xxx xxxx" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border border-white/20 bg-white/50 backdrop-blur-md hover:bg-white/70 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-sm text-gray-600">
                        44 Boundary Road, GRA<br />
                        Benin City, Edo State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border border-white/20 bg-white/50 backdrop-blur-md hover:bg-white/70 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm text-gray-600">09018911685</p>
                      <p className="text-sm text-gray-600">Emergency: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border border-white/20 bg-white/50 backdrop-blur-md hover:bg-white/70 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-gray-600">info@medvical.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border border-white/20 bg-white/50 backdrop-blur-md hover:bg-white/70 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-sm text-gray-600">
                        Emergency: 24/7<br />
                        Outpatient: Mon-Sat<br />
                        Always Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Google Maps Integration */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">Our Locations</h3>
          <GoogleMapsEmbed 
            locations={ALL_OFFICE_LOCATIONS}
            height="500px"
            className="shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}