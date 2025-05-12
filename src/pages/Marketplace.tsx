import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, School, CarTaxiFront } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample data for taxi service ads
const taxiAds = [
  {
    id: 1,
    title: 'School Transport - Cape Town',
    type: 'school',
    description: 'Daily school transport service from Khayelitsha to CBD schools. Safe and reliable.',
    postedBy: 'Themba Taxi Services',
    contact: '071 234 5678',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/School%20Transport',
    date: '2025-04-30'
  },
  {
    id: 2,
    title: 'Wedding Transport - Durban',
    type: 'wedding',
    description: 'Luxury minibus for wedding transportation. Clean vehicles with professional drivers.',
    postedBy: 'Dube Wedding Transport',
    contact: '082 345 6789',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Wedding%20Transport',
    date: '2025-05-15'
  },
  {
    id: 3,
    title: 'Corporate Events - Johannesburg',
    type: 'corporate',
    description: 'Corporate transport for events and airport transfers. Fleet of 20+ vehicles.',
    postedBy: 'Executive Taxi Services',
    contact: '083 456 7890',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Minibus%20Taxi',
    date: '2025-05-01'
  },
  {
    id: 4,
    title: 'Township Tours - Soweto',
    type: 'tour',
    description: 'Experience authentic township culture with our guided tours. Local knowledge guaranteed.',
    postedBy: 'Soweto Explorer Taxis',
    contact: '084 567 8901',
    image: 'https://placeholder.pics/svg/300x200/DEDEDE/555555/Township%20Tours',
    date: '2025-04-28'
  },
];

// Sample user requests
const userRequests = [
  {
    id: 1,
    title: 'Need School Transport in Pretoria',
    type: 'school',
    description: '2 children needing transport from Centurion to Pretoria East school, Mon-Fri.',
    budget: '1500',
    postedBy: 'Parent in need',
    contact: '076 123 4567',
    date: '2025-04-25'
  },
  {
    id: 2,
    title: 'Looking for Tour Guide with Minibus',
    type: 'tour',
    description: 'Family of 6 visiting Cape Town for 3 days, need transportation and guide.',
    budget: '5000',
    postedBy: 'Tourist Family',
    contact: '079 234 5678',
    date: '2025-05-10'
  },
];

const Marketplace = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('browse');
  const isMobile = useIsMobile();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [eventType, setEventType] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');
  const [requirements, setRequirements] = useState('');
  const [passengers, setPassengers] = useState('');
  
  const handlePostAd = () => {
    if (!name || !contact || !eventType || !date || !requirements) {
      toast({
        title: t('bookingError'),
        description: t('fillAllFields'),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('adPosted'),
      description: t('adPostedDesc'),
    });
    
    // Reset form
    setName('');
    setContact('');
    setEventType('');
    setDate('');
    setBudget('');
    setRequirements('');
    setPassengers('');
    setActiveTab('browse');
  };

  const handleContactDriver = (adId) => {
    toast({
      title: t('bookingSuccess'),
      description: t('bookingConfirmed'),
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-sa-black">{t('taxiMarketplace')}</h2>
        <p className="text-gray-600 mb-6">{t('minibusMarketplaceDesc')}</p>
        
        <Tabs defaultValue="browse" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="browse" className="data-[state=active]:bg-quantum-purple data-[state=active]:text-white">
              {t('browseAds')}
            </TabsTrigger>
            <TabsTrigger value="post" className="data-[state=active]:bg-black data-[state=active]:text-white">
              {t('postRequirement')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="mt-6">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <h3 className="text-xl font-bold text-sa-green">{t('availableServices')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {taxiAds.map((ad) => (
                  <Card key={ad.id} className="overflow-hidden bg-white shadow-md">
                    <div className="h-48 bg-gray-200">
                      {ad.id === 3 ? (
                        <div className="w-full h-full flex items-center justify-center bg-quantum-gradient bg-opacity-20">
                          <CarTaxiFront size={isMobile ? 60 : 80} className="text-quantum-purple" />
                        </div>
                      ) : (
                        <img 
                          src={ad.image} 
                          alt={ad.title} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {ad.type === 'school' && <School size={18} />}
                        {ad.type === 'wedding' && <Users size={18} />}
                        {ad.type === 'corporate' && <CarTaxiFront size={18} />}
                        {ad.type === 'tour' && <Calendar size={18} />}
                        {ad.title}
                      </CardTitle>
                      <CardDescription>{ad.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-600 mb-4">
                        <p className="mb-1"><span className="font-medium">{t('postedBy')}:</span> {ad.postedBy}</p>
                        <p><span className="font-medium">{t('postedOn')}:</span> {ad.date}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button 
                        className={`${isMobile ? 'w-full' : ''} bg-quantum-purple hover:bg-quantum-purple/90 text-white`}
                        onClick={() => handleContactDriver(ad.id)}
                      >
                        {t('contact')}: {ad.contact}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-xl font-bold text-sa-blue">{t('postRequirement')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userRequests.map((request) => (
                  <Card key={request.id} className="bg-white shadow-md">
                    <CardHeader className="bg-sa-blue/10">
                      <CardTitle className="flex items-center gap-2">
                        {request.type === 'school' && <School size={18} />}
                        {request.type === 'tour' && <Calendar size={18} />}
                        {request.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{t('budget')}: R{request.budget}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-gray-600 mb-3">{request.description}</p>
                      <div className="text-sm text-gray-600">
                        <p className="mb-1"><span className="font-medium">{t('postedBy')}:</span> {request.postedBy}</p>
                        <p><span className="font-medium">{t('postedOn')}:</span> {request.date}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-sa-yellow hover:bg-sa-yellow/90 text-black"
                        onClick={() => handleContactDriver(request.id)}
                      >
                        {t('contact')}: {request.contact}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="post" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('postRequirement')}</CardTitle>
                <CardDescription>{t('minibusMarketplaceDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('fullName')}</Label>
                    <Input 
                      id="name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">{t('phoneNumber')}</Label>
                    <Input 
                      id="contact" 
                      value={contact} 
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="071 234 5678"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">{t('eventType')}</Label>
                      <Select value={eventType} onValueChange={setEventType}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('eventType')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school">{t('school')}</SelectItem>
                          <SelectItem value="wedding">{t('wedding')}</SelectItem>
                          <SelectItem value="tour">{t('tour')}</SelectItem>
                          <SelectItem value="corporate">{t('corporate')}</SelectItem>
                          <SelectItem value="other">{t('other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">{t('date')}</Label>
                      <Input 
                        id="date" 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">{t('budget')}</Label>
                      <Input 
                        id="budget" 
                        type="number" 
                        value={budget} 
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="1000"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="passengers">{t('passengers')}</Label>
                      <Input 
                        id="passengers" 
                        type="number" 
                        min="1" 
                        value={passengers} 
                        onChange={(e) => setPassengers(e.target.value)}
                        placeholder="4"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="requirements">{t('requirements')}</Label>
                    <Textarea 
                      id="requirements" 
                      value={requirements} 
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder="Describe your transport needs in detail..."
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-quantum-purple hover:bg-quantum-purple/90"
                  onClick={handlePostAd}
                >
                  {t('postAd')}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Marketplace;
