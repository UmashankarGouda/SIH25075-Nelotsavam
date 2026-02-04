'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sprout } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Login() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!email.trim() || !password.trim()) {
      alert('⚠️ Please fill in all required fields.');
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      alert(
        `🌾 Welcome back to Nelotsavam!\n\n` +
        `✅ Login successful\n` +
        `📊 Your farming dashboard is ready\n\n` +
        `🌱 Continue your sustainable farming journey!`
      );
      
      // Clear form
      setEmail('');
      setPassword('');
      
      // Redirect to dashboard
      router.push('/dashboard');
      
    } catch (error) {
      alert('❌ Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-green-600 rounded-full p-3 inline-block mb-4">
            <Sprout className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-green-800">
            {language === 'ml' ? 'നെല്ലുത്സവം' : 'നെല്ലുത്സവം'}
          </h1>
          <p className="text-green-600">{t('login.welcome.back')}</p>
        </div>

        <Card className="backdrop-blur-md bg-white/80 border-green-200">
          <CardHeader>
            <CardTitle>{t('login.title')}</CardTitle>
            <CardDescription>
              {t('login.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t('login.email.label')}</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder={t('login.email.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('login.password.label')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('login.password.placeholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? t('login.submitting') : t('login.submit')}
              </Button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                {t('login.register.text')}{' '}
                <a href="/auth/register" className="text-green-600 hover:underline">
                  {t('login.register.link')}
                </a>
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <a href="/" className="text-sm text-green-600 hover:underline">
                {t('login.back')}
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}