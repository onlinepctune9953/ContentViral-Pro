
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface ExitIntentPopupProps {
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full relative animate-scale-in">
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 bg-transparent hover:bg-gray-100 text-gray-500 p-1"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">WAIT!</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't Leave Empty Handed!
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Get an exclusive <span className="text-red-600 font-bold">20% discount</span> on 
            ContentViral Pro - but only for the next 10 minutes!
          </p>
          
          <div className="bg-yellow-100 p-4 rounded-lg mb-6">
            <div className="text-2xl font-bold text-gray-900">
              <span className="line-through text-gray-500">$127</span>{' '}
              <span className="text-green-600">$97</span>
            </div>
            <p className="text-sm text-gray-600">Use code: SAVE20</p>
          </div>

          <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3 mb-4">
            Claim My 20% Discount Now
          </Button>
          
          <button 
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            No thanks, I'll pay full price later
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;
