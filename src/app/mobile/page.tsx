'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Sprout, 
  Smartphone,
  Download,
  Bell,
  Check,
  Wifi,
  Battery,
  Users,
  Star
} from 'lucide-react';

export default function MobileApp() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('⚠️ Please enter your email address');
      return;
    }
    
    setIsSubscribed(true);
    alert(
      `🎉 Thank you for your interest!\\n\\n` +
      `📧 We'll notify ${email} when the mobile app launches\\n\\n` +
      `🌾 Meanwhile, enjoy the full web experience!`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-green-600 rounded-full p-4 inline-block mb-6">
              <Smartphone className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
              Nelotsavam Mobile App
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Take Kerala&apos;s digital farming revolution wherever you go
            </p>
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">
              🚀 Coming Soon - Q2 2024
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* App Features */}
            <Card className="backdrop-blur-md bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Mobile-First Features
                </CardTitle>
                <CardDescription>
                  Designed specifically for farmers in the field
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Wifi className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Offline Mode</h4>
                    <p className="text-sm text-gray-600">Access key features without internet</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Bell className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Notifications</h4>
                    <p className="text-sm text-gray-600">Weather alerts & task reminders</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Battery className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Battery Optimized</h4>
                    <p className="text-sm text-gray-600">Efficient for all-day farming use</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 rounded-full p-2">
                    <Users className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Voice Commands</h4>
                    <p className="text-sm text-gray-600">Malayalam voice interface</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Web App */}
            <Card className="backdrop-blur-md bg-white/80 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-green-600" />
                  Available Now - Web App
                </CardTitle>
                <CardDescription>
                  Full experience on any device with internet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Complete farming dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Gamified learning system</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Expert consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Community features</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Weather integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Sustainable marketplace</span>
                </div>

                <div className="pt-4">
                  <a href="/auth/register">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Sprout className="mr-2 h-4 w-4" />
                      Start Using Web App
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notify Me Section */}
          <Card className="backdrop-blur-md bg-white/80 mb-8">
            <CardHeader className="text-center">
              <CardTitle>Get Notified When Mobile App Launches</CardTitle>
              <CardDescription>
                Be among the first farmers to experience Nelotsavam on mobile
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubscribed ? (
                <form onSubmit={handleNotifyMe} className="max-w-md mx-auto">
                  <div className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="farmer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      <Bell className="mr-2 h-4 w-4" />
                      Notify Me
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center max-w-md mx-auto">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-medium text-green-800 mb-1">You&apos;re all set! 🎉</h3>
                    <p className="text-sm text-green-700">
                      We&apos;ll email you when the mobile app is ready for download.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* App Store Preview */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Coming to App Stores</h3>
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 opacity-60">
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </div>
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 opacity-60">
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/" className="text-green-600 hover:underline">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}