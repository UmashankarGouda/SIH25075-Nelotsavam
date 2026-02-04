'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Sprout, 
  ArrowLeft,
  ShoppingCart,
  Truck,
  MapPin,
  Phone,
  CreditCard,
  Leaf,
  CheckCircle
} from 'lucide-react';

function OrderPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  // Get product details from URL params
  const productTitle = searchParams.get('product') || 'Product';
  const productPrice = searchParams.get('price') || '0';
  const productUnit = searchParams.get('unit') || '';
  const productSeller = searchParams.get('seller') || 'Seller';
  const isOrganic = searchParams.get('organic') === 'true';
  
  const [orderData, setOrderData] = useState({
    quantity: '1',
    name: '',
    phone: '',
    address: '',
    district: '',
    pincode: '',
    deliveryDate: '',
    paymentMethod: 'cod',
    notes: ''
  });

  const districts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 
    'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 
    'Kozhikode', 'Wayanad', 'Kannur', 'Kasargod'
  ];

  const paymentMethods = [
    { value: 'cod', label: 'Cash on Delivery' },
    { value: 'upi', label: 'UPI Payment' },
    { value: 'bank', label: 'Bank Transfer' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    const quantity = parseFloat(orderData.quantity) || 0;
    const price = parseFloat(productPrice) || 0;
    return (quantity * price).toFixed(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!orderData.name || !orderData.phone || !orderData.address || !orderData.district) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setOrderPlaced(true);
    setIsLoading(false);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="text-center py-12">
            <div className="mb-6">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
              <p className="text-gray-600 mb-6">Your order has been confirmed</p>
              
              <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
                <h3 className="font-semibold mb-2">Order Details:</h3>
                <p className="text-sm text-gray-600">Product: {productTitle}</p>
                <p className="text-sm text-gray-600">Quantity: {orderData.quantity} {productUnit}</p>
                <p className="text-sm text-gray-600">Total: ₹{calculateTotal()}</p>
                <p className="text-sm text-gray-600">Payment: {orderData.paymentMethod.toUpperCase()}</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 text-left mb-6">
                <p className="text-sm text-blue-700">
                  <Phone className="inline h-4 w-4 mr-1" />
                  The seller will contact you at {orderData.phone} within 24 hours
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                className="flex-1"
                onClick={() => router.push('/marketplace')}
              >
                Continue Shopping
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/dashboard')}
              >
                Go to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              <div className="bg-green-600 rounded-full p-2">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-green-800">Place Order</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
                <CardDescription>Fill in your delivery information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Product & Quantity */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Product Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Product:</span>
                        <span className="font-medium">{productTitle}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Seller:</span>
                        <span className="font-medium">{productSeller}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="font-medium">₹{productPrice} {productUnit}</span>
                      </div>
                      {isOrganic && (
                        <Badge className="bg-green-100 text-green-700">
                          <Leaf className="h-3 w-3 mr-1" />
                          Organic Certified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="quantity">Quantity *</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={orderData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={orderData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          value={orderData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Delivery Address</h3>
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <textarea
                        id="address"
                        className="w-full p-3 border rounded-lg resize-none"
                        rows={3}
                        placeholder="House/Building, Street, Landmark"
                        value={orderData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="district">District *</Label>
                        <Select 
                          value={orderData.district}
                          onValueChange={(value) => handleInputChange('district', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select district" />
                          </SelectTrigger>
                          <SelectContent>
                            {districts.map((district) => (
                              <SelectItem key={district} value={district.toLowerCase()}>
                                {district}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                          id="pincode"
                          placeholder="6 digit pincode"
                          value={orderData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delivery & Payment */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Delivery & Payment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={orderData.deliveryDate}
                          onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="paymentMethod">Payment Method *</Label>
                        <Select 
                          value={orderData.paymentMethod}
                          onValueChange={(value) => handleInputChange('paymentMethod', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {paymentMethods.map((method) => (
                              <SelectItem key={method.value} value={method.value}>
                                {method.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <textarea
                        id="notes"
                        className="w-full p-3 border rounded-lg resize-none"
                        rows={2}
                        placeholder="Any special instructions for delivery"
                        value={orderData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing Order...' : 'Place Order'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Product</span>
                    <span>₹{productPrice} x {orderData.quantity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-green-600">₹{calculateTotal()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Delivery within 2-4 days</li>
                  <li>• Free delivery on this order</li>
                  <li>• Track your order status</li>
                  <li>• Contact seller directly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cash on Delivery available</li>
                  <li>• UPI payment accepted</li>
                  <li>• Direct bank transfer</li>
                  <li>• 100% secure payment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderPageContent />
    </Suspense>
  );
}
