
import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Map from '../components/Map';
import LocationInput from '../components/LocationInput';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { Calculator, Book, LogIn, UserPlus } from 'lucide-react';

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
            
            <div className="grid grid-cols-1 gap-3 mt-6">
              <Link to="/calculator">
                <Button className="w-full bg-sa-green hover:bg-sa-green/90 flex items-center justify-center gap-2">
                  <Calculator size={18} /> {t('calculator')}
                </Button>
              </Link>
              
              <Link to="/marketplace">
                <Button className="w-full bg-sa-yellow hover:bg-sa-yellow/90 text-black flex items-center justify-center gap-2">
                  <Book size={18} /> {t('taxiMarketplace')}
                </Button>
              </Link>

              <div className="flex gap-2 mt-4">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full border-sa-blue text-sa-blue hover:bg-sa-blue/10 flex items-center justify-center gap-2">
                    <LogIn size={16} /> {t('login')}
                  </Button>
                </Link>
                
                <Link to="/signup" className="flex-1">
                  <Button variant="outline" className="w-full border-sa-green text-sa-green hover:bg-sa-green/10 flex items-center justify-center gap-2">
                    <UserPlus size={16} /> {t('signUp')}
                  </Button>
                </Link>
              </div>
            </div>
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
