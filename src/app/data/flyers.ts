export interface Flyer {
  /** URL-friendly slug used in the route */
  slug: string;
  /** Display title derived from the file name */
  title: string;
  /** Path to the image inside /public */
  image: string;
  /** Short description shown on the page */
  description: string;
}

export const flyers: Flyer[] = [
  {
    slug: 'free-medical-outreach',
    title: 'Free Medical Outreach',
    image: '/images/freeMedicalOutReach_page-0001.jpg',
    description:
      'Med-Vical International free medical outreach — providing free health screenings, consultations and treatments to communities in need.',
  },
  {
    slug: 'our-services',
    title: 'Our Services',
    image: '/images/ourServiceFlyer_page-0001.jpg',
    description:
      'An overview of the comprehensive healthcare and supply services offered by Med-Vical International.',
  },
  {
    slug: 'training-workshop',
    title: 'Training Workshop',
    image: '/images/TrainingWorkshop.png',
    description:
      'Med-Vical International training workshop — capacity building and professional development for healthcare workers.',
  },
];
