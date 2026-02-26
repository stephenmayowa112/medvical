import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
