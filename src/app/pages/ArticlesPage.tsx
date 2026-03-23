import { BookOpen, Search, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router';
import { articles, articleCategories } from '../data/articles';

const gridContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Health Articles | Med-Vical International';
    return () => { document.title = 'Med-Vical International'; };
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
              <span className="text-sm">Health Articles & Resources</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Health Articles
            </h1>
            <motion.p
              className="text-lg text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Well-researched, professionally reviewed health articles to keep you and your family
              informed. Written by the Med-Vical medical team.
            </motion.p>
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
            <div className="flex gap-2 flex-wrap">
              {articleCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredArticles.map((article) => (
              <motion.div key={article.id} variants={gridItem}>
                <Link to={`/articles/${article.slug}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group border-gray-200">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white border-0">
                        {article.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span className="line-clamp-1">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
