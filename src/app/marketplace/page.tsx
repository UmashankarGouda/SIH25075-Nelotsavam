'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Sprout, 
  ArrowLeft,
  ShoppingCart,
  Filter,
  MapPin,
  Star,
  Truck,
  Leaf,
  Plus,
  Search
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  seller: string;
  location: string;
  price: number;
  unit: string;
  category: string;
  isOrganic: boolean;
  rating: number;
  reviews: number;
  image: string;
  deliveryTime: string;
  minOrder: string;
}

export default function Marketplace() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: '1',
      title: 'Organic Neem Cake Fertilizer',
      seller: 'Green Farm Supplies',
      location: 'Thrissur',
      price: 450,
      unit: 'per 25kg bag',
      category: 'fertilizer',
      isOrganic: true,
      rating: 4.8,
      reviews: 124,
      image: '🌿',
      deliveryTime: '2-3 days',
      minOrder: '2 bags'
    },
    {
      id: '2',
      title: 'Premium Jyothi Rice Seeds',
      seller: 'Kerala Seeds Co.',
      location: 'Palakkad',
      price: 320,
      unit: 'per kg',
      category: 'seeds',
      isOrganic: false,
      rating: 4.6,
      reviews: 89,
      image: '🌾',
      deliveryTime: '1-2 days',
      minOrder: '5 kg'
    },
    {
      id: '3',
      title: 'Fresh Harvest Matta Rice',
      seller: 'Farmer Direct',
      location: 'Alappuzha',
      price: 1200,
      unit: 'per quintal',
      category: 'harvest',
      isOrganic: true,
      rating: 4.9,
      reviews: 256,
      image: '🍚',
      deliveryTime: '3-4 days',
      minOrder: '1 quintal'
    },
    {
      id: '4',
      title: 'Organic Pest Control Spray',
      seller: 'Bio Solutions Kerala',
      location: 'Kottayam',
      price: 280,
      unit: 'per liter',
      category: 'pesticide',
      isOrganic: true,
      rating: 4.5,
      reviews: 67,
      image: '🦟',
      deliveryTime: '2-3 days',
      minOrder: '2 liters'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'seeds', label: 'Seeds' },
    { value: 'fertilizer', label: 'Fertilizers' },
    { value: 'pesticide', label: 'Pest Control' },
    { value: 'harvest', label: 'Harvest' },
    { value: 'tools', label: 'Tools' }
  ];

  const handleBuy = (product: Product) => {
    // Navigate to order page with product details
    const params = new URLSearchParams({
      product: product.title,
      price: product.price.toString(),
      unit: product.unit,
      seller: product.seller,
      organic: product.isOrganic.toString()
    });
    
    router.push(`/marketplace/order?${params.toString()}`);
  };

  const handleSell = () => {
    router.push('/marketplace/sell');
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push('/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="bg-green-600 rounded-full p-2">
                <Sprout className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-green-800">Local Marketplace</h1>
            </div>
          </div>
          <Button 
            className="bg-amber-600 hover:bg-amber-700"
            onClick={handleSell}
          >
            <Plus className="h-4 w-4 mr-2" />
            Sell Products
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <Card className="mb-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">🚚 Free Delivery Week!</CardTitle>
            <CardDescription className="text-green-50">
              Get free delivery on all orders above ₹2000. Limited time offer!
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">{product.image}</span>
                  {product.isOrganic && (
                    <Badge className="bg-green-100 text-green-700">
                      <Leaf className="h-3 w-3 mr-1" />
                      Organic
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{product.seller}</span>
                  <span>•</span>
                  <MapPin className="h-3 w-3" />
                  <span>{product.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-sm text-gray-500">{product.unit}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="h-4 w-4" />
                      <span>{product.deliveryTime}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Min. order: <span className="font-medium">{product.minOrder}</span>
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleBuy(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 mb-4">No products found matching your search.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card className="border-green-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-100 text-green-700">
                  <Leaf className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
                <CardTitle className="text-sm">Quality Assured</CardTitle>
              </div>
              <CardDescription className="text-xs">
                All organic products are verified and certified
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-blue-600" />
                <CardTitle className="text-sm">Fast Delivery</CardTitle>
              </div>
              <CardDescription className="text-xs">
                Get products delivered within 2-4 days
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-purple-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-purple-600" />
                <CardTitle className="text-sm">Farmer Ratings</CardTitle>
              </div>
              <CardDescription className="text-xs">
                Buy from trusted farmers with genuine reviews
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}