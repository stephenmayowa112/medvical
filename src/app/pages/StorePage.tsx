import { ShoppingCart, Search, Filter, Plus, Minus, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const categories = [
  'All',
  'Pain Relief',
  'Vitamins & Supplements',
  'First Aid',
  'Personal Care',
  'Prescription Supplies',
  'Baby Care',
];

// Placeholder products — replace with real inventory
const products: Product[] = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    category: 'Pain Relief',
    price: 500,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Effective pain and fever relief. Pack of 12 tablets.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Vitamin C 1000mg',
    category: 'Vitamins & Supplements',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Boost your immune system with daily Vitamin C supplementation.',
    inStock: true,
  },
  {
    id: 3,
    name: 'First Aid Kit',
    category: 'First Aid',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Complete first aid kit for home and travel use.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Hand Sanitizer 500ml',
    category: 'Personal Care',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Antibacterial hand sanitizer with 70% alcohol.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Multivitamin Tablets',
    category: 'Vitamins & Supplements',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Daily multivitamin for overall wellness. 30 tablets per pack.',
    inStock: true,
  },
  {
    id: 6,
    name: 'Ibuprofen 400mg',
    category: 'Pain Relief',
    price: 800,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Anti-inflammatory pain relief tablets. Pack of 20.',
    inStock: true,
  },
  {
    id: 7,
    name: 'Baby Diapers (Pack of 30)',
    category: 'Baby Care',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Soft, absorbent diapers for babies. Size M.',
    inStock: true,
  },
  {
    id: 8,
    name: 'Digital Thermometer',
    category: 'First Aid',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Fast and accurate digital thermometer for home use.',
    inStock: true,
  },
];

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString()}`;
}

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66] via-[#1a6aa5] to-[#2a8cc4]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Med-Vical Pharmacy & Stores
          </motion.h1>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Purchase genuine pharmaceutical products, healthcare supplies, and personal care items
            at affordable prices. Delivered from our trusted pharmacy in Benin City.
          </motion.p>
        </div>
      </section>

      {/* Main Store Content */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-gray-500" />
              {categories.map((cat) => (
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
            {/* Cart Button */}
            <Button
              variant="outline"
              className="relative"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>

          <div className="flex gap-8">
            {/* Products Grid */}
            <div className={`flex-1 ${cartOpen ? 'lg:pr-80' : ''}`}>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  <p className="text-lg">No products found matching your criteria.</p>
                  <Button variant="link" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                    Clear filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all h-full border border-white/20 bg-white/60 backdrop-blur-sm group">
                        <div className="aspect-square overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="text-xs mb-2">
                            {product.category}
                          </Badge>
                          <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-[#0d3b66]">
                              {formatNaira(product.price)}
                            </span>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                              onClick={() => addToCart(product)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            {cartOpen && (
              <motion.div
                className="hidden lg:block fixed right-4 top-24 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-40 max-h-[calc(100vh-8rem)] overflow-y-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Your Cart</h3>
                  <button aria-label="Close cart" onClick={() => setCartOpen(false)}>
                    <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                {cart.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-3 mb-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                          <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">{item.name}</p>
                            <p className="text-xs text-gray-500">{formatNaira(item.price)}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <button
                                aria-label="Decrease quantity"
                                className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-medium">{item.quantity}</span>
                              <button
                                aria-label="Increase quantity"
                                className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                aria-label="Remove item"
                                className="ml-auto text-red-400 hover:text-red-600"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between mb-3">
                        <span className="font-medium text-sm">Total:</span>
                        <span className="font-bold text-[#0d3b66]">{formatNaira(cartTotal)}</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Checkout via WhatsApp
                      </Button>
                      <p className="text-[10px] text-gray-400 text-center mt-2">
                        Orders will be confirmed via WhatsApp or phone call.
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Cart Drawer */}
      {cartOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setCartOpen(false)} />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Your Cart ({cartCount})</h3>
              <button aria-label="Close cart" onClick={() => setCartOpen(false)}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">{formatNaira(item.price)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            aria-label="Decrease quantity"
                            className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium">{item.quantity}</span>
                          <button
                            aria-label="Increase quantity"
                            className="w-5 h-5 rounded bg-gray-200 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            aria-label="Remove item"
                            className="ml-auto text-red-400 hover:text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold text-[#0d3b66] text-lg">{formatNaira(cartTotal)}</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Checkout via WhatsApp
                  </Button>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Orders will be confirmed via WhatsApp or phone call.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}

      {/* Info Banner */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b66] to-[#2a8cc4]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl mb-3">Need Prescription Drugs?</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-6">
            Visit our pharmacy in Benin City or call us for prescription fulfillment.
            We guarantee authentic, quality products at affordable prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Call: 09018911685
            </Button>
            <Button size="lg" className="bg-white text-[#0d3b66] hover:bg-gray-100">
              Visit Our Pharmacy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
