import { ArrowLeft, Calendar, User, Clock, MapPin, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { useEffect } from 'react';
import { getArticleBySlug, articles, type ArticleSection } from '../data/articles';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderSection(section: ArticleSection, index: number) {
  switch (section.type) {
    case 'heading':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {section.text}
        </h2>
      );
    case 'subheading':
      return (
        <h3 key={index} className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-3">
          {section.text}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2 mb-6 ml-4">
          {section.items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div
          key={index}
          className="my-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 border-l-4 border-blue-600 rounded-r-xl"
        >
          <p className="text-gray-800 font-medium leading-relaxed">{section.text}</p>
        </div>
      );
    case 'address':
      return (
        <div
          key={index}
          className="my-6 p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-3"
        >
          <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700 whitespace-pre-line font-medium">{section.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  // Update document meta tags for SEO
  useEffect(() => {
    if (!article) return;

    const BASE_URL = 'https://medvical.com';
    const articleUrl = `${BASE_URL}/health-education/${article.slug}`;

    // Title
    document.title = article.metaTitle || article.title;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        el.content = content;
        document.head.appendChild(el);
      }
      return el;
    };

    // Meta description
    setMeta('name', 'description', article.metaDescription || article.excerpt);

    // Open Graph
    setMeta('property', 'og:title', article.metaTitle || article.title);
    setMeta('property', 'og:description', article.metaDescription || article.excerpt);
    setMeta('property', 'og:url', articleUrl);
    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:image', article.image);
    setMeta('property', 'og:site_name', 'Med-Vical International');
    setMeta('property', 'article:published_time', article.date);

    // Twitter Card
    setMeta('name', 'twitter:title', article.metaTitle || article.title);
    setMeta('name', 'twitter:description', article.metaDescription || article.excerpt);
    setMeta('name', 'twitter:image', article.image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = articleUrl;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = articleUrl;
      document.head.appendChild(canonical);
    }

    // JSON-LD Article schema
    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.id = 'article-jsonld';
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.metaDescription || article.excerpt,
      'image': article.image,
      'datePublished': article.date,
      'author': {
        '@type': 'Organization',
        'name': article.author,
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Med-Vical International',
        'logo': {
          '@type': 'ImageObject',
          'url': `${BASE_URL}/images/logo.png`,
        },
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': articleUrl,
      },
    });
    document.head.appendChild(jsonLd);

    // Cleanup on unmount — restore homepage defaults
    return () => {
      document.title = 'Best Hospital in Benin City Nigeria | Med-Vical Specialist Hospital';
      setMeta('name', 'description', 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.');
      setMeta('property', 'og:title', 'Best Hospital in Benin City Nigeria | Med-Vical Specialist Hospital');
      setMeta('property', 'og:description', 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.');
      setMeta('property', 'og:url', `${BASE_URL}/`);
      setMeta('property', 'og:type', 'website');
      setMeta('property', 'og:image', `${BASE_URL}/images/logo.png`);
      setMeta('name', 'twitter:title', 'Maternity Hospital in Benin City | Med-Vical Nigeria');
      setMeta('name', 'twitter:description', 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.');
      setMeta('name', 'twitter:image', `${BASE_URL}/images/logo.png`);
      if (canonical) canonical.href = `${BASE_URL}/`;
      const existingJsonLd = document.getElementById('article-jsonld');
      if (existingJsonLd) existingJsonLd.remove();
    };
  }, [article]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-6">The article you are looking for does not exist or has been moved.</p>
          <Link to="/health-education">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Health Education
            </Button>
          </Link>
        </div>
      </div>
    );
  }


  // Related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id && a.content.length > 0)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/health-education"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Health Education</span>
            </Link>

            <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            {/* Main Content */}
            <motion.article
              className="prose-article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
              </div>

              {/* Article Body */}
              <div className="space-y-0">
                {article.content.map((section, index) => renderSection(section, index))}
              </div>

              {/* Share & CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-500">Share this article</span>
                  </div>
                  <Link to="/clinic-registration">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Book an Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6">
              {/* CTA Card */}
              <Card className="border border-blue-100 bg-blue-50/50 sticky top-24">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-[#0d3b66] mb-2">Need Paediatric Care?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Medvical International provides trusted, comprehensive child healthcare services in Benin City.
                  </p>
                  <Link to="/clinic-registration" className="block">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-2" size="sm">
                      Register Now
                    </Button>
                  </Link>
                  <a href="tel:+2348147982690" className="block">
                    <Button variant="outline" className="w-full" size="sm">
                      Call: 08147982690
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="font-semibold text-sm text-gray-800 mb-3">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        to={`/health-education/${related.slug}`}
                        className="block group"
                      >
                        <Card className="border border-gray-100 hover:shadow-md transition-all">
                          <CardContent className="p-3">
                            <p className="text-sm font-medium group-hover:text-blue-600 transition-colors line-clamp-2">
                              {related.title}
                            </p>
                            <span className="text-xs text-gray-400 mt-1 block">
                              {related.readTime}
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl mb-3">Your Child's Health Deserves Expert Care</h2>
          <p className="text-blue-100 mb-6">
            Visit Medvical International Ltd in Benin City for advanced paediatric care, NICU services, and trusted healthcare.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/clinic-registration">
              <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
                Register as a Patient
              </Button>
            </Link>
            <Link to="/health-education">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                More Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
