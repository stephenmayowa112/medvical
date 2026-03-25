import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { ContactForm } from './features/ContactForm';
import { GoogleMapsEmbed } from './features/GoogleMapsEmbed';
import { ALL_OFFICE_LOCATIONS } from '../data/content';

export function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/20 to-blue-50/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-blue-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wide">Get In Touch</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
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
                <ContactForm defaultInquiryType="general" />
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
                      <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-sm text-gray-600">
                        44, Boundary Road off Airport Road<br />
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
                      <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm text-gray-600">MMC: 07086080230 / 07030977820</p>
                      <p className="text-sm text-gray-600">Pharmacy: 07030943250 / 09018911685</p>
                      <p className="text-sm text-gray-600">Outreach: 07030977820</p>
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
                      <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-gray-600">medvicalhealth@gmail.com</p>
                      <p className="text-sm text-gray-600">medvicalinternational@yahoo.com</p>
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
                      <Clock className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-sm text-gray-600">
                        Emergency: 24/7<br />
                        Outpatient: Mon–Sat<br />
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