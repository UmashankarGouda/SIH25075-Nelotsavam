'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Sprout, 
  ArrowLeft,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  User,
  HelpCircle
} from 'lucide-react';

interface Expert {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  availability: string;
  rating: number;
  consultations: number;
}

export default function ExpertConsultation() {
  const router = useRouter();
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);
  const [question, setQuestion] = useState('');

  const experts: Expert[] = [
    {
      id: '1',
      name: 'Dr. Radhakrishnan',
      specialization: 'Pest & Disease Management',
      experience: '15 years',
      availability: 'Available Now',
      rating: 4.8,
      consultations: 342
    },
    {
      id: '2',
      name: 'Prof. Lakshmi Nair',
      specialization: 'Soil Health & Nutrition',
      experience: '12 years',
      availability: 'Available at 2 PM',
      rating: 4.9,
      consultations: 289
    },
    {
      id: '3',
      name: 'Er. Suresh Kumar',
      specialization: 'Water Management',
      experience: '10 years',
      availability: 'Available Now',
      rating: 4.7,
      consultations: 198
    }
  ];

  const handleBookConsultation = () => {
    if (!selectedExpert || !question.trim()) {
      alert('Please select an expert and describe your issue');
      return;
    }
    
    const expert = experts.find(e => e.id === selectedExpert);
    alert(
      `✅ Consultation Booked!\n\n` +
      `Expert: ${expert?.name}\n` +
      `Topic: ${question}\n` +
      `Time: ${expert?.availability}\n\n` +
      `You will receive a call shortly!`
    );
    
    setQuestion('');
    setSelectedExpert(null);
  };

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
              <h1 className="text-xl font-bold text-green-800">Expert Consultation</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Expert Advice</h2>
          <p className="text-gray-600">Connect with agricultural experts for personalized guidance</p>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-green-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <CardTitle className="text-sm">Helpline</CardTitle>
              </div>
              <p className="text-lg font-bold">1800-123-4567</p>
            </CardHeader>
          </Card>
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-sm">Available Hours</CardTitle>
              </div>
              <p className="text-lg font-bold">9 AM - 6 PM</p>
            </CardHeader>
          </Card>
          <Card className="border-purple-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-sm">Response Time</CardTitle>
              </div>
              <p className="text-lg font-bold">Within 30 mins</p>
            </CardHeader>
          </Card>
        </div>

        {/* Expert List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Available Experts</h3>
            <div className="space-y-4">
              {experts.map((expert) => (
                <Card 
                  key={expert.id}
                  className={`cursor-pointer transition-all ${
                    selectedExpert === expert.id 
                      ? 'border-green-500 bg-green-50' 
                      : 'hover:border-green-300'
                  }`}
                  onClick={() => setSelectedExpert(expert.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-100 rounded-full p-3">
                          <User className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{expert.name}</CardTitle>
                          <p className="text-sm text-gray-600">{expert.specialization}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm">
                            <span className="text-gray-500">{expert.experience}</span>
                            <span className="flex items-center gap-1">
                              ⭐ {expert.rating} ({expert.consultations})
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={
                          expert.availability === 'Available Now' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-amber-100 text-amber-700'
                        }
                      >
                        {expert.availability}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ask Your Question</h3>
            <Card>
              <CardHeader>
                <CardTitle>Describe Your Issue</CardTitle>
                <CardDescription>
                  Provide details about your farming concern
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="question">Your Question</Label>
                  <textarea
                    id="question"
                    className="w-full mt-2 p-3 border rounded-lg resize-none"
                    rows={4}
                    placeholder="Example: My rice plants are showing yellow leaves. What could be the cause?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <HelpCircle className="inline h-4 w-4 mr-1" />
                    Tip: Include details about your location, crop stage, and any recent changes
                  </p>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleBookConsultation}
                  disabled={!selectedExpert || !question.trim()}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Recent Topics */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-base">Popular Topics This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2">Yellowing leaves</Badge>
                  <Badge variant="outline" className="mr-2">Water management</Badge>
                  <Badge variant="outline" className="mr-2">Pest control</Badge>
                  <Badge variant="outline" className="mr-2">Fertilizer timing</Badge>
                  <Badge variant="outline">Harvest preparation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}