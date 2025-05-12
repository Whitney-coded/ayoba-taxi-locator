
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { CarTaxiFront, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/components/ui/use-toast';

interface LocationInputProps {
  onLocationSelected?: (location: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationSelected }) => {
  const { t } = useLanguage();
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isMobile = useIsMobile();

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
    
    // Show toast notification instead of navigating
    toast({
      title: t('destinationSelected'),
      description: suggestion,
    });
  };

  return (
    <div className="relative mb-4">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-2`}>
        <div className={`${isMobile ? 'w-full mb-2' : 'flex-grow'}`}>
          <div className="relative">
            <Input
              placeholder={t('whereToGo')}
              value={destination}
              onChange={handleInputChange}
              className="bg-white border-quantum-purple pl-9"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
            />
            <CarTaxiFront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-quantum-purple" size={16} />
          </div>
        </div>
      </div>
      
      {isInputFocused && suggestions.length > 0 && (
        <Card className="absolute z-20 w-full mt-1 p-2 shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index} 
              className="p-2 hover:bg-gray-100 cursor-pointer rounded flex items-center"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <Navigation className="w-4 h-4 mr-2 text-quantum-purple" />
              <span>{suggestion}</span>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};

export default LocationInput;
