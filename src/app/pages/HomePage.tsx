import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Stats } from '../components/Stats';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { ServicesCTA } from '../components/ServicesCTA';
import { WhatsAppWidget } from '../components/features/WhatsAppWidget';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <ServicesCTA />
      <WhyChooseUs />
      <Gallery />
      <FAQ />
      <Contact />
      <WhatsAppWidget division="MMC" />
    </>
  );
}
