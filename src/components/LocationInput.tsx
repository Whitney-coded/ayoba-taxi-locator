
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface LocationInputProps {
  onLocationSelected?: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationSelected }) => {
  const { t } = useLanguage();
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Mock location suggestions
  const mockSuggestions = [
    "Sandton City Mall",
    "Park Station",
    "Soweto",
    "Alexandra",
    "Randburg",
    "Midrand",
    "Fourways Mall",
    "Rosebank",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    
    // Simple mock location search
    if (value.length > 2) {
      const filtered = mockSuggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setDestination(suggestion);
    setSuggestions([]);
    if (onLocationSelected) {
      onLocationSelected(suggestion);
    }
  };

  return (
    <div className="relative mb-4">
      <div className="flex items-center gap-2">
        <div className="flex-grow">
          <Input
            placeholder={t('whereToGo')}
            value={destination}
            onChange={handleInputChange}
            className="bg-white border-sa-green"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
          />
        </div>
        <Button className="bg-sa-yellow hover:bg-sa-yellow/90 text-black">
          <MapPin className="w-4 h-4 mr-2" /> {t('pinLocation')}
        </Button>
      </div>
      
      {isInputFocused && suggestions.length > 0 && (
        <Card className="absolute z-20 w-full mt-1 p-2 shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index} 
              className="p-2 hover:bg-gray-100 cursor-pointer rounded flex items-center"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Navigation className="w-4 h-4 mr-2 text-sa-black" />
              <span>{suggestion}</span>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default LocationInput;
