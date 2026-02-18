import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { motion } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: 'What is the best hospital in Benin City?',
      answer: 'Med-Vical Specialist Hospital is widely recognized as one of the best hospitals in Benin City due to its experienced doctors, modern equipment and 24/7 emergency services.',
    },
    {
      question: 'Which hospital in Benin offers maternity services?',
      answer: 'Med-Vical is a trusted maternity hospital in Benin City providing antenatal care, safe delivery and postnatal services.',
    },
    {
      question: 'Where can I do medical laboratory tests in Benin City?',
      answer: 'Our fully equipped laboratory in Benin City provides fast, accurate and affordable diagnostic services.',
    },
    {
      question: 'Do you accept insurance and HMO?',
      answer: 'Yes, we partner with leading HMOs and insurance providers to ensure seamless access to medical care. Contact us to confirm if we work with your provider.',
    },
    {
      question: 'Is Med-Vical open 24/7?',
      answer: 'Yes, our emergency services are available 24 hours a day, 7 days a week. We are always ready to respond to medical emergencies.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20" />
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-blue-600 font-medium">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="border border-white/20 rounded-xl px-6 bg-white/50 backdrop-blur-md hover:bg-white/70 transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}