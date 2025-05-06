
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import LocationInput from '@/components/LocationInput';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Sample data for minibus options
const minibuses = [
  {
    id: 1,
    name: 'Standard Minibus',
    capacity: 14,
    price: 450,
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Taxi%20Minibus',
    features: ['Air conditioning', 'Radio', 'Standard seating']
  },
  {
    id: 2,
    name: 'Luxury Minibus',
    capacity: 12,
    price: 700,
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Luxury%20Minibus',
    features: ['Leather seats', 'WiFi', 'Refreshments', 'TV screens']
  },
  {
    id: 3,
    name: 'Economy Minibus',
    capacity: 16,
    price: 350,
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Economy%20Minibus',
    features: ['Basic seating', 'Radio']
  },
  {
    id: 4,
    name: 'Party Minibus',
    capacity: 10,
    price: 850,
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Party%20Minibus',
    features: ['LED lights', 'Sound system', 'Party setup', 'Cooler']
  },
];

// Marketplace page content that uses the language provider
const MarketplaceContent = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedMinibus, setSelectedMinibus] = useState(null);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleLocationSelected = (location: string) => {
    setDestination(location);
  };

  const handleBooking = (minibusId: number) => {
    const selected = minibuses.find(bus => bus.id === minibusId);
    setSelectedMinibus(selected);
    setIsDrawerOpen(true);
  };

  const confirmBooking = () => {
    if (!destination || !date || !time) {
      toast({
        title: t('bookingError'),
        description: t('fillAllFields'),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('bookingSuccess'),
      description: t('bookingConfirmed'),
    });
    setIsDrawerOpen(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-sa-black">{t('bookMinibus')}</h2>
        <p className="text-gray-600 mb-6">{t('minibusMarketplaceDesc')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle>{t('destination')}</CardTitle>
            </CardHeader>
            <CardContent>
              <LocationInput onLocationSelected={handleLocationSelected} />
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle>{t('tripDetails')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">{t('date')}</Label>
                  <Input 
                    id="date" 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">{t('time')}</Label>
                  <Input 
                    id="time" 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passengers">{t('passengers')}</Label>
                  <Input 
                    id="passengers" 
                    type="number" 
                    min="1" 
                    max="16" 
                    value={passengers} 
                    onChange={(e) => setPassengers(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-sa-black">{t('availableMinibuses')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {minibuses.map((minibus) => (
            <Card key={minibus.id} className="overflow-hidden bg-white shadow-md">
              <div className="h-48 bg-gray-200">
                <img 
                  src={minibus.image} 
                  alt={minibus.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{minibus.name}</CardTitle>
                <CardDescription>{t('capacity')}: {minibus.capacity} {t('passengers')}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {minibus.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-sa-green">
                  R{minibus.price} <span className="text-sm font-normal text-gray-600">{t('perDay')}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-sa-yellow hover:bg-sa-yellow/90 text-black"
                  onClick={() => handleBooking(minibus.id)}
                >
                  {t('book')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t('confirmBooking')}</DrawerTitle>
            <DrawerDescription>
              {selectedMinibus && 
                `${selectedMinibus.name} - R${selectedMinibus.price} ${t('perDay')}`
              }
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-2">
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">{t('destination')}:</p>
                <p className="text-sm text-gray-600">{destination || t('notSpecified')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t('date')}:</p>
                  <p className="text-sm text-gray-600">{date || t('notSpecified')}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t('time')}:</p>
                  <p className="text-sm text-gray-600">{time || t('notSpecified')}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">{t('passengers')}:</p>
                <p className="text-sm text-gray-600">{passengers}</p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={confirmBooking} className="bg-sa-green hover:bg-sa-green/90">
              {t('confirmAndPay')}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">{t('cancel')}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

// Main component wrapped with LanguageProvider
const Marketplace = () => {
  return (
    <LanguageProvider>
      <MarketplaceContent />
    </LanguageProvider>
  );
};

export default Marketplace;
