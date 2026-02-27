export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  content: ArticleSection[];
}

export interface ArticleSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'callout' | 'address';
  text?: string;
  items?: string[];
}

export const articleCategories = [
  'All',
  'Paediatrics',
];

export const articles: Article[] = [
  {
    id: 1,
    title: 'Best Paediatric Hospitals in Benin, Edo State: What Every Parent Should Know',
    excerpt:
      'When searching for the best paediatric hospitals in Benin, Edo State, parents are not just looking for treatment. They are looking for expertise, advanced technology, and a safe environment for their children.',
    category: 'Paediatrics',
    author: 'Medvical International Medical Team',
    date: '2026-02-26',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'best-paediatric-hospitals-benin-edo-state',
    metaTitle: 'Best Paediatric Hospitals in Benin, Edo State | Top Children\'s Care',
    metaDescription:
      'Looking for the best paediatric hospitals in Benin, Edo State? Discover advanced NICU, emergency paediatric care, and expert mother and child healthcare at Medvical International Ltd in Benin City.',
    content: [
      {
        type: 'paragraph',
        text: 'When searching for the best paediatric hospitals in Benin, Edo State, parents are not just looking for treatment. They are looking for expertise, advanced technology, and a safe environment for their children.',
      },
      {
        type: 'paragraph',
        text: 'Children require specialized medical attention that differs from adult care. From neonatal support to adolescent medicine, choosing the right hospital can significantly impact outcomes.',
      },
      {
        type: 'heading',
        text: 'What Makes a Hospital One of the Top Children\'s Hospitals in Benin City?',
      },
      {
        type: 'subheading',
        text: '1. Advanced Neonatal Intensive Care (NICU)',
      },
      {
        type: 'paragraph',
        text: 'A hospital offering a fully equipped Neonatal Intensive Care Unit (NICU) in Benin City is essential for:',
      },
      {
        type: 'list',
        items: [
          'Premature births',
          'Low birth weight babies',
          'Respiratory distress',
          'Neonatal infections',
        ],
      },
      {
        type: 'paragraph',
        text: 'Modern NICUs should include ventilators, incubators, advanced monitoring systems, and highly trained neonatal specialists.',
      },
      {
        type: 'subheading',
        text: '2. Paediatric Intensive Care Services',
      },
      {
        type: 'paragraph',
        text: 'For critically ill children, access to paediatric intensive care in Edo State ensures rapid response and continuous monitoring.',
      },
      {
        type: 'paragraph',
        text: 'Hospitals that receive referrals from primary, secondary, and tertiary (teaching) hospitals are typically among the best paediatric hospitals in Benin because they are trusted for complex cases.',
      },
      {
        type: 'subheading',
        text: '3. Experienced Paediatric Specialists',
      },
      {
        type: 'paragraph',
        text: 'Look for hospitals with:',
      },
      {
        type: 'list',
        items: [
          'Consultant paediatricians',
          'Neonatologists',
          'Emergency response teams',
          '24-hour care services',
        ],
      },
      {
        type: 'paragraph',
        text: 'Experience and clinical governance matter when dealing with children\'s health.',
      },
      {
        type: 'heading',
        text: 'Why Parents Choose Medvical International Ltd',
      },
      {
        type: 'paragraph',
        text: 'Medvical International Ltd is a leading healthcare organization in Nigeria, offering:',
      },
      {
        type: 'list',
        items: [
          'State-of-the-art paediatric and neonatal intensive care services',
          'Advanced medical technology',
          'Highly professional and experienced medical staff',
          'Referrals from within and outside Edo State, including teaching hospitals',
        ],
      },
      {
        type: 'paragraph',
        text: 'In addition to clinical excellence, Medvical International also operates one of the most affordable and well-stocked pharmacies in Benin City, offering:',
      },
      {
        type: 'list',
        items: [
          'Prescription medications',
          'Over-the-counter drugs',
          'Medical supplies and healthcare products',
        ],
      },
      {
        type: 'callout',
        text: 'If you are searching for one of the best paediatric hospitals in Benin, Edo State, Medvical International Ltd provides trusted, comprehensive child healthcare services.',
      },
      {
        type: 'address',
        text: 'Medvical International Ltd\n42, Boundary Road\nBenin City, Edo State',
      },
      {
        type: 'paragraph',
        text: 'Your child\'s health deserves expert care.',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
