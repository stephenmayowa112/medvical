import { BookOpen, Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const articleCategories = [
  'All',
  'Maternal Health',
  'Child Health',
  'Nutrition',
  'Disease Prevention',
  'Mental Health',
  'First Aid',
];

// Placeholder articles — replace with real content
const articles: Article[] = [
  {
    id: 1,
    title: 'Understanding Antenatal Care: A Complete Guide for Expecting Mothers',
    excerpt:
      'Antenatal care is essential for a healthy pregnancy. Learn what to expect during your visits, which tests are important, and how to prepare for a safe delivery at Med-Vical.',
    category: 'Maternal Health',
    author: 'Dr. Med-Vical Team',
    date: '2026-02-20',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'understanding-antenatal-care',
  },
  {
    id: 2,
    title: 'Childhood Immunization Schedule in Nigeria: What Every Parent Should Know',
    excerpt:
      'Immunization protects your child from life-threatening diseases. Here is the recommended vaccination schedule for children in Nigeria and why you should not skip any dose.',
    category: 'Child Health',
    author: 'Dr. Med-Vical Team',
    date: '2026-02-15',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'childhood-immunization-schedule-nigeria',
  },
  {
    id: 3,
    title: 'Malaria Prevention Tips: How to Protect Your Family in Benin City',
    excerpt:
      'Malaria remains a major health challenge in Nigeria. Discover practical prevention strategies, symptoms to watch for, and when to seek emergency treatment.',
    category: 'Disease Prevention',
    author: 'Dr. Med-Vical Team',
    date: '2026-02-10',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1631549916768-4b9318e57f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'malaria-prevention-tips-benin-city',
  },
  {
    id: 4,
    title: 'Balanced Diet for Nigerians: Affordable Nutrition for the Whole Family',
    excerpt:
      'Eating well does not have to be expensive. Learn how to build a balanced diet with locally available Nigerian foods to improve your health and energy levels.',
    category: 'Nutrition',
    author: 'Dr. Med-Vical Team',
    date: '2026-02-05',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'balanced-diet-nigerians-affordable-nutrition',
  },
  {
    id: 5,
    title: 'Mental Health Awareness: Breaking the Stigma in Nigerian Communities',
    excerpt:
      'Mental health is just as important as physical health. Learn to recognize the signs of depression, anxiety, and stress, and find out where to get help in Benin City.',
    category: 'Mental Health',
    author: 'Dr. Med-Vical Team',
    date: '2026-01-28',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1493836512294-502baa1986e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'mental-health-awareness-nigerian-communities',
  },
  {
    id: 6,
    title: 'Basic First Aid Every Nigerian Home Should Know',
    excerpt:
      'Accidents can happen anywhere. Knowing basic first aid can save lives. Learn how to handle burns, cuts, choking, and other emergencies before reaching the hospital.',
    category: 'First Aid',
    author: 'Dr. Med-Vical Team',
    date: '2026-01-20',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    slug: 'basic-first-aid-nigerian-homes',
  },
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Health Education & Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Your Trusted Source for Health Information
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Well-researched, professionally reviewed health articles to keep you and your family
              informed. Written by the Med-Vical medical team in Benin City.
            </p>
          </motion.div>
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
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'hover:bg-blue-50'
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {filteredArticles.length > 0 && selectedCategory === 'All' && searchQuery === '' && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border border-white/20 bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={filteredArticles[0].image}
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 bg-blue-600">{filteredArticles[0].category}</Badge>
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
                    <Button className="w-fit bg-blue-600 hover:bg-blue-700">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(selectedCategory === 'All' && searchQuery === ''
                ? filteredArticles.slice(1)
                : filteredArticles
              ).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all h-full border border-white/20 bg-white/60 backdrop-blur-sm group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl mb-3">Stay Informed About Your Health</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest health tips, articles, and updates from Med-Vical International.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-white text-[#0d3b66] hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
