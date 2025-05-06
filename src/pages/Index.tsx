
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Map from '../components/Map';
import LocationInput from '../components/LocationInput';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

// WelcomeContent needs to be inside the language provider to access translations
const WelcomeContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="grid gap-6 md:grid-cols-5">
        <Card className="p-4 md:col-span-2 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-sa-black">{t('findTaxi')}</h2>
          <p className="text-gray-600 mb-4">{t('welcomeMessage')}</p>
          
          <LocationInput />
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="font-bold text-sa-green mb-2">{t('travelingSoon')}</h3>
            <Button className="w-full bg-sa-red hover:bg-sa-red/90 text-white">
              {t('requestPickup')}
            </Button>
          </div>
        </Card>
        
        <div className="md:col-span-3">
          <Map />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

// Main component wrapped with LanguageProvider
const Index = () => {
  return (
    <LanguageProvider>
      <WelcomeContent />
    </LanguageProvider>
  );
};

export default Index;
