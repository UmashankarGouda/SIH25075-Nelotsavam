'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sprout, 
  Users, 
  Award, 
  Droplets, 
  MessageSquare, 
  BookOpen,
  Smartphone,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  const handleStartJourney = () => {
    router.push('/auth/register');
  };

  const handleJoinNow = () => {
    router.push('/auth/login');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  const handleDownloadApp = () => {
    const userResponse = confirm(
      `📱 Nelotsavam Mobile App\n\n` +
      `🚀 Coming Soon to App Stores!\n\n` +
      `🌾 Currently Available:\n` +
      `• Full web app experience\n` +
      `• Mobile-optimized interface\n` +
      `• Offline-ready functionality\n\n` +
      `📅 Expected Launch: Q2 2024\n\n` +
      `🔔 Want to get notified when it\'s ready?\n\n` +
      `Click OK to learn more and subscribe for updates!`
    );
    
    if (userResponse) {
      router.push('/mobile');
    }
  };

  const handleWatchDemo = () => {
    router.push('/demo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 rounded-full p-2">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                {language === 'ml' ? 'നെല്ലുത്സവം' : 'നെല്ലുത്സവം'}
              </h1>
              <p className="text-sm text-green-600">{t('app.name')}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={language === 'en' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setLanguage('en')}
            >
              {t('nav.language.english')}
            </Button>
            <Button 
              variant={language === 'ml' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setLanguage('ml')}
            >
              {t('nav.language.malayalam')}
            </Button>
            <Button onClick={handleJoinNow}>{t('nav.join')}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            🌾 {t('app.tagline')}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8"
              onClick={handleStartJourney}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              {t('hero.cta.start')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleLearnMore}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {t('hero.cta.learn')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>{t('features.gamified.title')}</CardTitle>
                <CardDescription>
                  {t('features.gamified.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{t('features.sustainable.title')}</CardTitle>
                <CardDescription>
                  {t('features.sustainable.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>{t('features.community.title')}</CardTitle>
                <CardDescription>
                  {t('features.community.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>{t('features.expert.title')}</CardTitle>
                <CardDescription>
                  {t('features.expert.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-indigo-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>{t('features.weather.title')}</CardTitle>
                <CardDescription>
                  {t('features.weather.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>{t('features.marketplace.title')}</CardTitle>
                <CardDescription>
                  {t('features.marketplace.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={handleDownloadApp}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              {t('cta.download')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={handleWatchDemo}
            >
              {t('cta.demo')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-green-600 rounded-full p-2">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {language === 'ml' ? 'നെല്ലുത്സവം' : 'നെല്ലുത്സവം'} {t('app.name')}
              </h3>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{t('footer.tagline')}</p>
          <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}