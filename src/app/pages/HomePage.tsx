import { Hero } from '../components/Hero';
import { DivisionsOverview } from '../components/DivisionsOverview';
import { Stats } from '../components/Stats';
import { FeaturedServices } from '../components/FeaturedServices';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { NewsletterCTA } from '../components/NewsletterCTA';
import { Contact } from '../components/Contact';
import { WhatsAppWidget } from '../components/features/WhatsAppWidget';

export default function HomePage() {
  return (
    <>
      <Hero />
      <DivisionsOverview />
      <Stats />
      <FeaturedServices />
      <TestimonialsCarousel />
      <WhyChooseUs />
      <NewsletterCTA />
      <Contact />
      <WhatsAppWidget division="MMC" />
    </>
  );
}
