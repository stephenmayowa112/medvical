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
  'School Health',
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
      '/images/blackDoctor2.png',
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
  {
    id: 2,
    title: 'Building Healthier Schools, One Child at a Time',
    excerpt:
      'A child\'s ability to learn, grow, and succeed is inseparable from their health. The Med-Vical School Health Programme brings structured, preventive healthcare directly into the school environment.',
    category: 'School Health',
    author: 'Med-Vical Medical Centre',
    date: '2025-03-20',
    readTime: '8 min read',
    image: '/images/blackDoctor.png',
    slug: 'building-healthier-schools-one-child-at-a-time',
    metaTitle: 'Building Healthier Schools | Med-Vical School Health Programme',
    metaDescription:
      'Learn how the Med-Vical School Health Programme is transforming child health through preventive care, early detection, and comprehensive school-based healthcare solutions.',
    content: [
      {
        type: 'paragraph',
        text: 'A child\'s ability to learn, grow, and succeed is inseparable from their health. Recognising this connection, the Med-Vical School Health Programme was established to bring structured, preventive healthcare directly into the school environment — addressing health-related barriers to learning before they take hold.',
      },
      {
        type: 'paragraph',
        text: 'The Med-Vical School Health Programme is an initiative of Med-Vical International and simHealth Africa, delivered through Med-Vical Medical Centre. Launched in 2022, it has grown into a comprehensive, school-based healthcare model built on prevention, early detection, and long-term community engagement. Working in close partnership with school administrators, the programme delivers tailored health solutions that meet the distinct needs of each institution.',
      },
      {
        type: 'heading',
        text: 'A Proactive Approach to Child Health',
      },
      {
        type: 'paragraph',
        text: 'At the centre of the programme is a commitment to prevention over reaction. Each academic session begins with a comprehensive back-to-school health screening for both school children and staff. These assessments extend well beyond routine checks — encompassing general health evaluations, vision, dental, paediatric and ENT (ear, nose and throat) examinations, nutrition monitoring and counselling, as well as immunisation review and guidance.',
      },
      {
        type: 'paragraph',
        text: 'Following every screening cycle, schools receive individual medical reports for each child assessed — giving parents and administrators the detailed, actionable insights needed to support timely follow-up, informed decision-making, and sustained health monitoring throughout the school year.',
      },
      {
        type: 'paragraph',
        text: 'This structured approach ensures that potential health concerns are identified early, reducing the risk that undetected conditions will disrupt a child\'s education or development.',
      },
      {
        type: 'heading',
        text: 'Strengthening School Health Systems',
      },
      {
        type: 'paragraph',
        text: 'The Med-Vical School Health Programme looks beyond individual screenings to build lasting health infrastructure within schools. Partner institutions receive direct support in establishing or upgrading functional sickbays, including the donation of essential medical equipment. Teachers and school staff also undergo practical training in first aid in schools, early recognition of illness, and effective emergency response, equipping schools to manage health situations with confidence during school hours.',
      },
      {
        type: 'paragraph',
        text: 'Complementing these structural investments, the programme delivers engaging health education sessions for school children, teachers, and parents. These sessions address hygiene, nutrition, mental health, and preventive care, designed not only to inform but to inspire sustainable behavioural change across the school community.',
      },
      {
        type: 'heading',
        text: 'Extending Care to Families and Communities',
      },
      {
        type: 'paragraph',
        text: 'The programme recognises that a child\'s health extends beyond the school gate. Through targeted community health outreaches, Med-Vical organises health education seminars and free screening exercises for parents and families. This broader engagement reinforces a culture of preventive care at home, strengthening the health ecosystem that surrounds each child.',
      },
      {
        type: 'paragraph',
        text: 'For new students, the programme additionally provides pre-resumption medical screenings, generating detailed health reports that support informed decisions during the admissions process.',
      },
      {
        type: 'heading',
        text: 'Direct Access to Quality Healthcare',
      },
      {
        type: 'paragraph',
        text: 'Children enrolled in the programme benefit from free hospital registration and free paediatric outpatient consultations at Med-Vical Medical Centre within the school year. Emergency ambulance services are also available upon request, ensuring that pupils can be transferred safely and promptly in the event of a medical emergency. Together, these provisions ensure that access to professional healthcare is never a barrier for enrolled students.',
      },
      {
        type: 'heading',
        text: 'Impact to Date',
      },
      {
        type: 'list',
        items: [
          '2022: Year the programme was launched',
          '6: Partner schools in 2025/2026 school session',
          '1,643: Pupils screened in 2025/2026 school session',
        ],
      },
      {
        type: 'paragraph',
        text: 'These figures represent more than programme growth — they reflect the increasing trust that schools and families are placing in a model that delivers measurable, on-the-ground impact.',
      },
      {
        type: 'heading',
        text: 'A Long-Term Investment in the Future',
      },
      {
        type: 'paragraph',
        text: 'The Med-Vical School Health Programme is, at its core, a strategic investment in human potential. By promoting healthier lifestyles, enabling early diagnosis, strengthening school health systems, and engaging families in preventive care, it creates the conditions in which children can stay in school, learn better, and thrive.',
      },
      {
        type: 'paragraph',
        text: 'As the programme continues to expand, Med-Vical remains committed to deepening its partnerships, broadening its reach, and ensuring that every child, regardless of circumstance, has access to the quality healthcare they need to succeed.',
      },
      {
        type: 'callout',
        text: 'For further information/inquiries, including request for partnership and/or sponsorship, contact us at: Email: info@medvical.com; medvicalschoolhealth@medvical.com; Tel/WhatsApp: +234 9126976533/9019305059',
      },
      {
        type: 'address',
        text: 'Med-Vical International\n#44 Boundary Road, GRA\nBenin City',
      },
    ],
  },
  {
    id: 3,
    title: 'Med-Vical School Health Programme: Promoting Health and Educational Outcomes',
    excerpt:
      'A holistic and impact-driven initiative designed to improve the health, wellbeing, and overall development of school children while fostering a safe and supportive learning environment.',
    category: 'School Health',
    author: 'Med-Vical Medical Centre',
    date: '2025-03-15',
    readTime: '5 min read',
    image: '/images/blackDoctor2.png',
    slug: 'med-vical-school-health-programme-overview',
    metaTitle: 'Med-Vical School Health Programme | Promoting Health in Schools',
    metaDescription:
      'Discover how the Med-Vical School Health Programme supports schools with preventive healthcare, health education, and comprehensive screening services for students and staff.',
    content: [
      {
        type: 'paragraph',
        text: 'The Med-Vical School Health Programme (MSH) is a holistic and impact-driven initiative designed to improve the health, wellbeing, and overall development of school children while fostering a safe and supportive learning environment.',
      },
      {
        type: 'paragraph',
        text: 'The programme is an initiative of Med-Vical International and simHealth Africa, delivered through Med-Vical Medical Centre. Since its launch in 2022, it has continued to grow in reach and impact, providing schools with structured, preventive healthcare solutions that support both learning and child development.',
      },
      {
        type: 'heading',
        text: 'Our Vision',
      },
      {
        type: 'paragraph',
        text: 'At Med-Vical, we believe that a child\'s health is fundamental to their academic success and lifelong potential. The MSH Programme was created to address health-related barriers to learning by integrating preventive healthcare, early detection, and health education into the school system.',
      },
      {
        type: 'paragraph',
        text: 'Through strategic partnerships with schools, we deliver tailored health solutions that support not only school children, but also the wider school community.',
      },
      {
        type: 'heading',
        text: 'Our Services',
      },
      {
        type: 'paragraph',
        text: 'Our programme delivers a range of services including:',
      },
      {
        type: 'list',
        items: [
          'Health education and wellness campaigns to promote healthy lifestyles among students and staff',
          'Comprehensive school health screening, covering general health, vision, dental, paediatric, ENT, nutrition, and overall wellbeing',
          'Individual medical reports',
          'Establishment and support of school sickbays/first aid systems',
          'Training for teachers and staff on first aid, emergency response, and child health monitoring',
          'Access to pediatric care, including free registration and consultation at our facility',
        ],
      },
      {
        type: 'callout',
        text: 'Through the Med-Vical School Health Programme, we continue to build healthier school communities and support every child\'s right to thrive.',
      },
      {
        type: 'address',
        text: 'Med-Vical International\n#44 Boundary Road, GRA\nBenin City',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
