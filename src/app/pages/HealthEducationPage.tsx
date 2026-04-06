import { BookOpen, Search, Calendar, User, ArrowRight, Clock, CheckCircle2, GraduationCap, Heart, Briefcase, MessageSquare, Lightbulb, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router';
import { articles, articleCategories } from '../data/articles';
import { WhatsAppWidget } from '../components/features/WhatsAppWidget';

const gridContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const mhsPrograms = [
  {
    title: 'School Health Programme',
    description: 'Routine screenings, health talks, immunization support, and school wellness planning for learners and staff.',
    icon: GraduationCap,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Community Outreach Initiatives',
    description: 'Mobile outreaches focused on prevention, early detection, and referral support in underserved communities.',
    icon: Heart,
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Health Retainership Services',
    description: 'Structured retainership packages for organizations with periodic checkups, health education, and rapid referral access.',
    icon: Briefcase,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'AccessHealth Platform',
    description: 'A practical channel for continuous health engagement, appointment guidance, and community health communication.',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Social Innovation',
    description: 'We promote creativity and innovation that address critical social problems in the community.',
    icon: Lightbulb,
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Community Engagement',
    description: 'We engage with the community, building sustainable relationships. We identify and address issues that affect their wellbeing.',
    icon: Users,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Training and Capacity Building Programmes',
    description: 'We offer curated and hands-on training and capacity building programmes for clinical and non-clinical staff, e.g. training programme on helping babies breathe and essential newborn care.',
    icon: Award,
    color: 'from-indigo-500 to-indigo-600',
  },
];

const upcomingEvents = [
  { name: 'School Health Screening Week', date: 'April 10 - April 14, 2026', venue: 'Benin City Partner Schools' },
  { name: 'Community BP & Diabetes Check', date: 'April 27, 2026', venue: 'Uselu Community Hall' },
  { name: 'Corporate Wellness Roundtable', date: 'May 8, 2026', venue: 'Med-Vical Conference Hub' },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function HealthEducationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    const BASE_URL = 'https://medvical.com';
    const pageUrl = `${BASE_URL}/med-vical-health`;
    const pageTitle = 'Health Education & Resources | Med-Vical International';
    const pageDesc = 'Well-researched, professionally reviewed health articles to keep you and your family informed. Written by the Med-Vical medical team in Benin City.';

    document.title = pageTitle;

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
    };

    setMeta('name', 'description', pageDesc);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDesc);
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDesc);

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = pageUrl;

    return () => {
      document.title = 'Best Hospital in Benin City Nigeria | Med-Vical Specialist Hospital';
      setMeta('name', 'description', 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.');
      setMeta('property', 'og:title', 'Best Hospital in Benin City Nigeria | Med-Vical Specialist Hospital');
      setMeta('property', 'og:description', 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.');
      setMeta('property', 'og:url', `${BASE_URL}/`);
      setMeta('property', 'og:type', 'website');
      setMeta('name', 'twitter:title', 'Maternity Hospital in Benin City | Med-Vical Nigeria');
      setMeta('name', 'twitter:description', 'Med-Vical is a leading private hospital in Benin City, Nigeria offering maternity, laboratory, emergency and specialist medical services. Open 24/7.');
      if (canonical) canonical.href = `${BASE_URL}/`;
    };
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
      const matchesSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <motion.div
          className="absolute bottom-10 left-10 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Med-Vical Health (MHS)</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Med-Vical International<br />
              <span className="italic">Mission Driven, Community Focused</span>
            </h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Well-researched, professionally reviewed health articles to keep you and your family
              informed. Written by the Med-Vical medical team in Benin City.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MHS Programmes */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Med-Vical Health (MHS) Programmes</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-center">
              <p className="text-gray-700 leading-relaxed">
                Med-Vical International is a mission-driven organisation that provides access to quality and affordable healthcare services and products. We are impact driven and community focused. As a result, we commit a part of our resources for philanthropy and charity, addressing social problems among individuals, families and communities, particularly in the areas of health, education and livelihood. We do this because we truly care about our neighbours and their wellbeing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Med-Vical International combines education, outreach, and institutional support to improve health outcomes. We are your trusted source for health information: well-researched, professionally reviewed health articles to keep you and your family informed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our social impact programmes are complemented by <a href="https://simhealthafrica.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">simHealth</a> (the not for profit arm of our services), through systematic support for health programmes; research, training and dissemination; social innovation; policy, advocacy and collaboration.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mhsPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border border-blue-100 bg-white hover:shadow-xl transition-all h-full group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">{program.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{program.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-blue-100 bg-white shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Event Calendar</h3>
                  </div>
                  <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.name} className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors rounded-r">
                      <p className="font-semibold text-gray-900">{event.name}</p>
                      <p className="text-sm text-blue-600 font-medium mt-1">{event.date}</p>
                      <p className="text-sm text-gray-600 mt-1">{event.venue}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-blue-100 bg-white shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Educational Resources</h3>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Monthly family health briefs and preventive care guides.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>School-ready policy templates for safe and healthy learning environments.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Corporate wellness toolkits and periodic screening schedules.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Community-first referral information for fast access to specialist support.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {articleCategories.map((cat) => (
                <motion.div key={cat} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    className={`cursor-pointer transition-all ${selectedCategory === cat
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'hover:bg-blue-50'
                      }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {filteredArticles.length > 0 && selectedCategory === 'All' && searchQuery === '' && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(59,130,246,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Card className="overflow-hidden border border-white/20 bg-white/60 backdrop-blur-sm">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <motion.img
                        src={filteredArticles[0].image}
                        alt={filteredArticles[0].title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-3 bg-blue-600 text-white">{filteredArticles[0].category}</Badge>
                      <h2 className="text-2xl md:text-3xl mb-3">{filteredArticles[0].title}</h2>
                      <p className="text-gray-600 mb-4">{filteredArticles[0].excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {filteredArticles[0].author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(filteredArticles[0].date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {filteredArticles[0].readTime}
                        </span>
                      </div>
                      <Link to={`/med-vical-health/${filteredArticles[0].slug}`}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-fit">
                          <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </motion.div>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">No articles found matching your criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={gridContainer}
              initial="hidden"
              animate="visible"
              key={selectedCategory + searchQuery}
            >
              {(selectedCategory === 'All' && searchQuery === ''
                ? filteredArticles.slice(1)
                : filteredArticles
              ).map((article) => (
                <motion.div key={article.id} variants={gridItem}>
                  <Link to={`/med-vical-health/${article.slug}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(59,130,246,0.12)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="h-full"
                    >
                      <Card className="overflow-hidden h-full border border-white/20 bg-white/60 backdrop-blur-sm group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden">
                          <motion.img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">
                              {article.category}
                            </Badge>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <h3 className="font-semibold text-base mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {article.author}
                            </span>
                            <span>{formatDate(article.date)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <motion.div
          className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2
            className="text-2xl md:text-3xl mb-3"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Stay Informed About Your Health
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subscribe to our newsletter for the latest health tips, articles, and updates from Med-Vical International.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button className="bg-white text-[#0d3b66] hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {['Free weekly articles', 'Expert medical advice', 'Health tips & updates'].map((text, i) => (
              <motion.span
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-300" />
                {text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <WhatsAppWidget division="MHS" defaultMessage="Hello Med-Vical Health, I would like information about your school health and outreach programmes." />
    </div>
  );
}
