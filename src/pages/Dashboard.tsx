
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Store, User, Navigation } from 'lucide-react';

// Dashboard content that uses the language provider
const DashboardContent = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-sa-black">{t('welcome')}</h1>
        <p className="text-gray-600">{t('welcomeMessage')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pin Location Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-sa-green/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-sa-green" />
            </div>
            <CardTitle className="text-sa-green">{t('pinLocation')}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">{t('whereToGo')}</p>
            <Button className="w-full bg-sa-green hover:bg-sa-green/90 text-white">
              <Navigation className="w-4 h-4 mr-2" />
              {t('pinLocation')}
            </Button>
          </CardContent>
        </Card>

        {/* Taxi Marketplace Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-sa-yellow/10 rounded-full flex items-center justify-center mb-4">
              <Store className="w-8 h-8 text-sa-yellow" />
            </div>
            <CardTitle className="text-sa-black">{t('taxiMarketplace')}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">{t('minibusMarketplaceDesc')}</p>
            <Link to="/marketplace" className="block">
              <Button className="w-full bg-sa-yellow hover:bg-sa-yellow/90 text-black">
                <Store className="w-4 h-4 mr-2" />
                {t('browseAds')}
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Profile Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-sa-blue/10 rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-sa-blue" />
            </div>
            <CardTitle className="text-sa-blue">{t('profile')}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-4">View and edit your profile details</p>
            <Link to="/profile" className="block">
              <Button className="w-full bg-sa-blue hover:bg-sa-blue/90 text-white">
                <User className="w-4 h-4 mr-2" />
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-sa-black">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/calculator">
            <Button variant="outline" className="w-full justify-start border-sa-green text-sa-green hover:bg-sa-green/10">
              {t('calculator')}
            </Button>
          </Link>
          <Button variant="outline" className="w-full justify-start border-sa-red text-sa-red hover:bg-sa-red/10">
            Emergency Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

// Main component wrapped with LanguageProvider
const Dashboard = () => {
  return (
    <LanguageProvider>
      <DashboardContent />
    </LanguageProvider>
  );
};

export default Dashboard;
