import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import prerenderStatic from 'vite-plugin-prerender-static'

const BASE_URL = 'https://medvical.com'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    prerenderStatic({
      routes: [
        {
          path: '/',
          tags: {
            title: 'Best Hospital in Benin City Nigeria | Med-Vical Specialist Hospital',
            description: 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.',
            url: `${BASE_URL}/`,
            image: `${BASE_URL}/images/logo.png`,
            canonical: `${BASE_URL}/`,
            robots: 'index, follow',
            keywords: 'hospital in Benin City, maternity hospital Benin City, best hospital Nigeria, Med-Vical, specialist hospital Benin, emergency care Benin City, laboratory Benin City, private hospital Nigeria',
          },
        },
        {
          path: '/store',
          tags: {
            title: 'Medical Store | Med-Vical International',
            description: 'Shop for medical supplies, healthcare products, and prescription medications at Med-Vical International in Benin City, Nigeria.',
            url: `${BASE_URL}/store`,
            canonical: `${BASE_URL}/store`,
            robots: 'index, follow',
          },
        },
        {
          path: '/med-vical-health',
          tags: {
            title: 'Health Education & Resources | Med-Vical International',
            description: 'Well-researched, professionally reviewed health articles to keep you and your family informed. Written by the Med-Vical medical team in Benin City.',
            url: `${BASE_URL}/med-vical-health`,
            canonical: `${BASE_URL}/med-vical-health`,
            robots: 'index, follow',
          },
        },
        {
          path: '/med-vical-health/best-paediatric-hospitals-benin-edo-state',
          tags: {
            title: 'Best Paediatric Hospitals in Benin, Edo State | Top Children\'s Care',
            description: 'Looking for the best paediatric hospitals in Benin, Edo State? Discover advanced NICU, emergency paediatric care, and expert mother and child healthcare at Med-Vical International in Benin City.',
            url: `${BASE_URL}/med-vical-health/best-paediatric-hospitals-benin-edo-state`,
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            canonical: `${BASE_URL}/med-vical-health/best-paediatric-hospitals-benin-edo-state`,
            author: 'Med-Vical International Medical Team',
            robots: 'index, follow',
            schema: {
              '@context': 'https://schema.org',
              '@type': 'Article',
              'headline': 'Best Paediatric Hospitals in Benin, Edo State: What Every Parent Should Know',
              'description': 'Looking for the best paediatric hospitals in Benin, Edo State? Discover advanced NICU, emergency paediatric care, and expert mother and child healthcare at Med-Vical International in Benin City.',
              'image': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'datePublished': '2026-02-26',
              'author': { '@type': 'Organization', 'name': 'Med-Vical International Medical Team' },
              'publisher': {
                '@type': 'Organization',
                'name': 'Med-Vical International',
                'logo': { '@type': 'ImageObject', 'url': `${BASE_URL}/images/logo.png` },
              },
            },
          },
        },
        {
          path: '/clinic-registration',
          tags: {
            title: 'Patient Registration | Med-Vical International',
            description: 'Register as a patient at Med-Vical International in Benin City, Nigeria. Book an appointment for maternity, paediatric, emergency, and specialist medical services.',
            url: `${BASE_URL}/clinic-registration`,
            canonical: `${BASE_URL}/clinic-registration`,
            robots: 'index, follow',
          },
        },
      ],
      headTags: '',
      render: (route) => `<div id="root"></div>`,
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
