'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@/contexts/UserContext';

export default function TestRegister() {
  const router = useRouter();
  const { setUserData } = useUser();
  const [formData, setFormData] = useState({
    name: 'John Farmer',
    phone: '+91 9876543210',
    email: 'john@farm.com',
    district: 'alappuzha',
    farmSize: 'small',
    experience: 'beginner'
  });

  const handleQuickRegister = () => {
    setUserData({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      district: formData.district,
      farmSize: formData.farmSize,
      experience: formData.experience
    });
    
    alert(`✅ Test user registered!\n\nName: ${formData.name}\nDistrict: ${formData.district}`);
    router.push('/profile');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Quick Test Registration</CardTitle>
          <CardDescription>Create a test user to see profile data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label>District</Label>
              <select
                value={formData.district}
                onChange={(e) => handleInputChange('district', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="alappuzha">Alappuzha</option>
                <option value="thrissur">Thrissur</option>
                <option value="palakkad">Palakkad</option>
                <option value="kottayam">Kottayam</option>
              </select>
            </div>
            <div>
              <Label>Farm Size</Label>
              <select
                value={formData.farmSize}
                onChange={(e) => handleInputChange('farmSize', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="small">Small (&lt; 2 acres)</option>
                <option value="medium">Medium (2-5 acres)</option>
                <option value="large">Large (&gt; 5 acres)</option>
              </select>
            </div>
            <div>
              <Label>Experience</Label>
              <select
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="beginner">Beginner (&lt; 2 years)</option>
                <option value="intermediate">Intermediate (2-10 years)</option>
                <option value="experienced">Experienced (&gt; 10 years)</option>
              </select>
            </div>
            <Button 
              onClick={handleQuickRegister}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Register & Go to Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}