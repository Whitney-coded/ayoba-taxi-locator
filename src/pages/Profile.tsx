
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { User, Phone, Mail, MapPin, Edit } from 'lucide-react';

// Profile page content that uses the language provider
const ProfileContent = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+27 123 456 789',
    location: 'Cape Town, South Africa'
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: 'Profile Updated',
      description: 'Your profile has been successfully updated.',
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Header />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-sa-black">Profile</h1>
        <p className="text-gray-600">Manage your account information</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="w-4 h-4 mr-2" />
            {isEditing ? 'Cancel' : 'Edit'}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {t('fullName')}
              </Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t('email')}
              </Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t('phoneNumber')}
              </Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </Label>
              <Input
                id="location"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                disabled={!isEditing}
              />
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={handleSave}
                className="bg-sa-green hover:bg-sa-green/90"
              >
                Save Changes
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional Profile Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Travel History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">No recent trips found.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Language</span>
                <span className="text-sa-green">English</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Notifications</span>
                <span className="text-sa-green">Enabled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Main component wrapped with LanguageProvider
const Profile = () => {
  return (
    <LanguageProvider>
      <ProfileContent />
    </LanguageProvider>
  );
};

export default Profile;
