'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sprout } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';

export default function Register() {
  const router = useRouter();
  const { setUserData } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    farmSize: '',
    experience: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const keralaDistricts = [
    'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 
    'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 
    'Kozhikode', 'Wayanad', 'Kannur', 'Kasargod'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('⚠️ Passwords do not match! Please check and try again.');
      return;
    }
    
    if (formData.password.length < 6) {
      alert('⚠️ Password must be at least 6 characters long.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call with more realistic timing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Save user data to context
      setUserData({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        district: formData.district,
        farmSize: formData.farmSize,
        experience: formData.experience
      });
      
      // Show success message
      alert(
        `🎉 Welcome to Nelotsavam, ${formData.name}!\n\n` +
        `✅ Account created successfully for ${formData.district || 'your district'}\n` +
        `📱 You can now access all farming features\n\n` +
        `🚀 Redirecting to login page...`
      );
      
      // Clear form after successful registration
      setFormData({
        name: '',
        phone: '',
        email: '',
        district: '',
        farmSize: '',
        experience: '',
        password: '',
        confirmPassword: ''
      });
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        router.push('/auth/login');
      }, 1000);
      
    } catch (error) {
      alert('❌ Registration failed. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="bg-green-600 rounded-full p-3 inline-block mb-4">
            <Sprout className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-green-800">നെല്ഉത്സവം</h1>
          <p className="text-green-600">Join the Digital Harvest Festival</p>
        </div>

        <Card className="backdrop-blur-md bg-white/80 border-green-200">
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <CardDescription>
              Start your journey in sustainable rice farming with our community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="farmer@example.com (optional)"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="district">District *</Label>
                  <Select onValueChange={(value) => handleInputChange('district', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your district" />
                    </SelectTrigger>
                    <SelectContent>
                      {keralaDistricts.map((district) => (
                        <SelectItem key={district} value={district.toLowerCase()}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farmSize">Farm Size *</Label>
                  <Select onValueChange={(value) => handleInputChange('farmSize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select farm size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (&lt; 2 acres)</SelectItem>
                      <SelectItem value="medium">Medium (2-5 acres)</SelectItem>
                      <SelectItem value="large">Large (&gt; 5 acres)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Farming Experience *</Label>
                <Select onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (&lt; 2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-10 years)</SelectItem>
                    <SelectItem value="experienced">Experienced (&gt; 10 years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/auth/login" className="text-green-600 hover:underline">
                  Sign in here
                </a>
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <a href="/" className="text-sm text-green-600 hover:underline">
                ← Back to Home
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}