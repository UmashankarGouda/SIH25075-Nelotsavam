'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Sprout, 
  ArrowLeft,
  Upload,
  Plus,
  Check,
  Camera,
  Leaf,
  MapPin,
  Package
} from 'lucide-react';

export default function SellProducts() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    unit: '',
    minOrder: '',
    location: '',
    deliveryRadius: '',
    isOrganic: false,
    images: [] as string[]
  });

  const categories = [
    { value: 'seeds', label: 'Seeds & Saplings' },
    { value: 'fertilizer', label: 'Fertilizers' },
    { value: 'pesticide', label: 'Pest Control' },
    { value: 'harvest', label: 'Fresh Harvest' },
    { value: 'tools', label: 'Farming Tools' },
    { value: 'other', label: 'Other' }
  ];

  const units = [
    { value: 'kg', label: 'Per kg' },
    { value: 'quintal', label: 'Per quintal' },
    { value: 'liter', label: 'Per liter' },
    { value: 'bag', label: 'Per bag' },
    { value: 'piece', label: 'Per piece' },
    { value: 'bundle', label: 'Per bundle' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = () => {
    alert(
      `📸 Upload Product Images\n\n` +
      `• Add up to 5 photos\n` +
      `• Show product clearly\n` +
      `• Include packaging if applicable\n\n` +
      `Feature coming soon!`
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.price || !formData.unit) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert(
      `✅ Product Listed Successfully!\n\n` +
      `Product: ${formData.title}\n` +
      `Category: ${formData.category}\n` +
      `Price: ₹${formData.price} ${formData.unit}\n` +
      `${formData.isOrganic ? '🌿 Organic Certified' : ''}\n\n` +
      `Your product is now live in the marketplace!`
    );

    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      price: '',
      unit: '',
      minOrder: '',
      location: '',
      deliveryRadius: '',
      isOrganic: false,
      images: []
    });
    
    setIsLoading(false);
    
    // Redirect to marketplace
    setTimeout(() => {
      router.push('/marketplace');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push('/marketplace')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="bg-amber-600 rounded-full p-2">
                <Package className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-amber-800">List Your Product</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Sell Your Farm Products</h2>
          <p className="text-gray-600">Reach thousands of farmers across Kerala</p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-green-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <CardTitle className="text-sm">No Listing Fee</CardTitle>
              </div>
              <CardDescription className="text-xs">List products for free</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-sm">Local Reach</CardTitle>
              </div>
              <CardDescription className="text-xs">Connect with nearby farmers</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-purple-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-sm">Organic Premium</CardTitle>
              </div>
              <CardDescription className="text-xs">Get better prices for organic</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Product Form */}
        <Card>
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>Fill in the information about your product</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Product Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Fresh Matta Rice, Organic Fertilizer"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    className="w-full p-3 border rounded-lg resize-none"
                    rows={3}
                    placeholder="Describe your product quality, benefits, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select 
                      value={formData.category}
                      onValueChange={(value) => handleInputChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="organic">Organic Certification</Label>
                    <div className="flex items-center gap-3 mt-2">
                      <Button
                        type="button"
                        variant={formData.isOrganic ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleInputChange('isOrganic', true)}
                        className={formData.isOrganic ? "bg-green-600" : ""}
                      >
                        <Leaf className="h-4 w-4 mr-1" />
                        Organic
                      </Button>
                      <Button
                        type="button"
                        variant={!formData.isOrganic ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleInputChange('isOrganic', false)}
                      >
                        Regular
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-4">
                <h3 className="font-semibold">Pricing & Quantity</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Price (₹) *</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter price"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="unit">Unit *</Label>
                    <Select 
                      value={formData.unit}
                      onValueChange={(value) => handleInputChange('unit', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {units.map((unit) => (
                          <SelectItem key={unit.value} value={unit.value}>
                            {unit.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="minOrder">Min. Order</Label>
                    <Input
                      id="minOrder"
                      placeholder="e.g., 5 kg"
                      value={formData.minOrder}
                      onChange={(e) => handleInputChange('minOrder', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="font-semibold">Location & Delivery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Thrissur, Palakkad"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="deliveryRadius">Delivery Radius (km)</Label>
                    <Input
                      id="deliveryRadius"
                      type="number"
                      placeholder="e.g., 50"
                      value={formData.deliveryRadius}
                      onChange={(e) => handleInputChange('deliveryRadius', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-4">
                <h3 className="font-semibold">Product Images</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Add photos to attract more buyers</p>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleImageUpload}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Images
                  </Button>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Creating Listing...</>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      List Product
                    </>
                  )}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => router.push('/marketplace')}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Tips for Better Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use clear, well-lit photos of your products</li>
              <li>• Mention quality certifications if available</li>
              <li>• Set competitive prices based on market rates</li>
              <li>• Provide accurate product descriptions</li>
              <li>• Respond quickly to buyer inquiries</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}