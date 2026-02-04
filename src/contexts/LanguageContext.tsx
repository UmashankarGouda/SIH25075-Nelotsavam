'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'app.name': 'Nelotsavam',
    'app.tagline': 'Digital Harvest Festival',
    'nav.join': 'Join Now',
    'nav.language.english': 'English',
    'nav.language.malayalam': 'Malayalam',
    
    // Hero Section
    'hero.title': "Empowering Kerala's Rice Farmers",
    'hero.description': 'Join thousands of farmers in a gamified journey of sustainable rice cultivation. Learn traditional methods, earn rewards, and build community connections.',
    'hero.cta.start': 'Start Your Journey',
    'hero.cta.learn': 'Learn More',
    
    // Features
    'features.title': 'Why Nelotsavam?',
    'features.gamified.title': 'Gamified Learning',
    'features.gamified.description': 'Complete "Sevas" (farming tasks) to earn Dhanya points, unlock badges, and level up your farming expertise.',
    'features.sustainable.title': 'Sustainable Practices',
    'features.sustainable.description': "Learn water conservation, organic farming, and indigenous rice varieties while protecting Kerala's ecosystem.",
    'features.community.title': 'Farmer Community',
    'features.community.description': 'Connect with fellow farmers, share experiences, ask questions, and build lasting relationships.',
    'features.expert.title': 'Expert Guidance',
    'features.expert.description': 'Get direct access to agricultural experts for personalized advice on crop management and problem-solving.',
    'features.weather.title': 'Local Weather & Insights',
    'features.weather.description': 'Receive location-specific weather updates and farming advice tailored to your district and conditions.',
    'features.marketplace.title': 'Marketplace',
    'features.marketplace.description': 'Buy and sell farming inputs, seeds, and harvest produce with sustainability scores and organic certification.',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Farming?',
    'cta.description': "Join the digital harvest festival and become part of Kerala's sustainable farming revolution.",
    'cta.download': 'Download App',
    'cta.demo': 'Watch Demo',
    
    // Footer
    'footer.tagline': "Empowering Kerala's farmers through technology and tradition",
    'footer.copyright': '© 2024 Nelotsavam. Built for Smart India Hackathon.',
    
    // Login Page
    'login.title': 'Sign In',
    'login.description': 'Enter your credentials to access your farming dashboard',
    'login.email.label': 'Email or Phone',
    'login.email.placeholder': 'farmer@example.com or +91 9876543210',
    'login.password.label': 'Password',
    'login.password.placeholder': 'Enter your password',
    'login.submit': 'Sign In',
    'login.submitting': 'Signing in...',
    'login.register.text': "Don't have an account?",
    'login.register.link': 'Register here',
    'login.back': '← Back to Home',
    'login.welcome.back': 'Welcome back to Nelotsavam',
  },
  ml: {
    // Header
    'app.name': 'നെല്ലുത്സവം',
    'app.tagline': 'ഡിജിറ്റൽ വിളവെടുപ്പ് ഉത്സവം',
    'nav.join': 'ഇപ്പോൾ ചേരുക',
    'nav.language.english': 'English',
    'nav.language.malayalam': 'മലയാളം',
    
    // Hero Section
    'hero.title': 'കേരളത്തിലെ നെൽകർഷകരെ ശാക്തീകരിക്കുന്നു',
    'hero.description': 'സുസ്ഥിര നെൽകൃഷിയുടെ ഗെയിമിഫൈഡ് യാത്രയിൽ ആയിരക്കണക്കിന് കർഷകരോടൊപ്പം ചേരുക. പരമ്പരാഗത രീതികൾ പഠിക്കുക, പ്രതിഫലം നേടുക, സമൂഹ ബന്ധങ്ങൾ കെട്ടിപ്പടുക്കുക.',
    'hero.cta.start': 'നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക',
    'hero.cta.learn': 'കൂടുതൽ അറിയുക',
    
    // Features
    'features.title': 'എന്തുകൊണ്ട് നെല്ലുത്സവം?',
    'features.gamified.title': 'ഗെയിമിഫൈഡ് പഠനം',
    'features.gamified.description': '"സേവകൾ" (കൃഷി ജോലികൾ) പൂർത്തിയാക്കി ധാന്യ പോയിന്റുകൾ നേടുക, ബാഡ്ജുകൾ അൺലോക്ക് ചെയ്യുക, നിങ്ങളുടെ കൃഷി വൈദഗ്ധ്യം ലെവൽ അപ്പ് ചെയ്യുക.',
    'features.sustainable.title': 'സുസ്ഥിര രീതികൾ',
    'features.sustainable.description': 'കേരളത്തിന്റെ ആവാസവ്യവസ്ഥ സംരക്ഷിക്കുമ്പോൾ ജലസംരക്ഷണം, ജൈവകൃഷി, തദ്ദേശീയ നെൽ ഇനങ്ങൾ എന്നിവ പഠിക്കുക.',
    'features.community.title': 'കർഷക സമൂഹം',
    'features.community.description': 'സഹകർഷകരുമായി ബന്ധപ്പെടുക, അനുഭവങ്ങൾ പങ്കിടുക, ചോദ്യങ്ങൾ ചോദിക്കുക, ദീർഘകാല ബന്ധങ്ങൾ കെട്ടിപ്പടുക്കുക.',
    'features.expert.title': 'വിദഗ്ധ മാർഗ്ഗനിർദ്ദേശം',
    'features.expert.description': 'വിള പരിപാലനത്തിനും പ്രശ്ന പരിഹാരത്തിനും വ്യക്തിഗത ഉപദേശത്തിനായി കാർഷിക വിദഗ്ധരിലേക്ക് നേരിട്ട് പ്രവേശനം നേടുക.',
    'features.weather.title': 'പ്രാദേശിക കാലാവസ്ഥയും സൂചനകളും',
    'features.weather.description': 'നിങ്ങളുടെ ജില്ലയ്ക്കും സാഹചര്യങ്ങൾക്കും അനുയോജ്യമായ സ്ഥാന-നിർദ്ദിഷ്ട കാലാവസ്ഥ അപ്ഡേറ്റുകളും കൃഷി ഉപദേശങ്ങളും സ്വീകരിക്കുക.',
    'features.marketplace.title': 'മാർക്കറ്റ്പ്ലേസ്',
    'features.marketplace.description': 'സുസ്ഥിരത സ്കോറുകളും ജൈവ സർട്ടിഫിക്കേഷനും ഉള്ള കൃഷി ഇൻപുട്ടുകൾ, വിത്തുകൾ, വിളവെടുത്ത ഉൽപ്പന്നങ്ങൾ എന്നിവ വാങ്ങുകയും വിൽക്കുകയും ചെയ്യുക.',
    
    // CTA Section
    'cta.title': 'നിങ്ങളുടെ കൃഷിയെ പരിവർത്തനം ചെയ്യാൻ തയ്യാറാണോ?',
    'cta.description': 'ഡിജിറ്റൽ വിളവെടുപ്പ് ഉത്സവത്തിൽ ചേരുക, കേരളത്തിന്റെ സുസ്ഥിര കൃഷി വിപ്ലവത്തിന്റെ ഭാഗമാകുക.',
    'cta.download': 'ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക',
    'cta.demo': 'ഡെമോ കാണുക',
    
    // Footer
    'footer.tagline': 'സാങ്കേതികവിദ്യയിലൂടെയും പാരമ്പര്യത്തിലൂടെയും കേരളത്തിലെ കർഷകരെ ശാക്തീകരിക്കുന്നു',
    'footer.copyright': '© 2024 നെല്ലുത്സവം. സ്മാർട്ട് ഇന്ത്യ ഹാക്കത്തോണിനായി നിർമ്മിച്ചത്.',
    
    // Login Page
    'login.title': 'സൈൻ ഇൻ',
    'login.description': 'നിങ്ങളുടെ കൃഷി ഡാഷ്ബോർഡ് ആക്സസ് ചെയ്യാൻ ക്രെഡൻഷ്യലുകൾ നൽകുക',
    'login.email.label': 'ഇമെയിൽ അല്ലെങ്കിൽ ഫോൺ',
    'login.email.placeholder': 'farmer@example.com അല്ലെങ്കിൽ +91 9876543210',
    'login.password.label': 'പാസ്‌വേഡ്',
    'login.password.placeholder': 'നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക',
    'login.submit': 'സൈൻ ഇൻ',
    'login.submitting': 'സൈൻ ഇൻ ചെയ്യുന്നു...',
    'login.register.text': 'അക്കൗണ്ട് ഇല്ലേ?',
    'login.register.link': 'ഇവിടെ രജിസ്റ്റർ ചെയ്യുക',
    'login.back': '← ഹോമിലേക്ക് മടങ്ങുക',
    'login.welcome.back': 'നെല്ലുത്സവത്തിലേക്ക് തിരികെ സ്വാഗതം',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};