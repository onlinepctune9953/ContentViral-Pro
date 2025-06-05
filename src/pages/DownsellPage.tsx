
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

interface DownsellPageProps {
  originalProduct: string;
  originalPrice: number;
  downsellProduct: string;
  downsellPrice: number;
  features: string[];
  urgency: string;
}

const DownsellPage: React.FC<DownsellPageProps> = ({
  originalProduct,
  originalPrice,
  downsellProduct,
  downsellPrice,
  features,
  urgency
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <section className="bg-red-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            WAIT! Last Chance...
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            I Don't Want You to Miss Out Completely
          </h2>
        </div>
      </section>

      {/* Last Chance Message */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-8 mb-12">
            <p className="text-xl mb-4">
              I noticed you passed on the <strong>{originalProduct}</strong> for ${originalPrice}...
            </p>
            <p className="text-xl mb-4">
              I totally understand - maybe the timing isn't right or the investment feels too big.
            </p>
            <p className="text-2xl font-bold text-red-600">
              But I don't want you to leave empty-handed!
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold mb-6">Special Last-Chance Offer:</h3>
            <h4 className="text-2xl font-bold text-blue-600 mb-4">{downsellProduct}</h4>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="text-2xl text-gray-500 line-through">${originalPrice}</div>
              <div className="text-4xl font-bold text-green-600">${downsellPrice}</div>
              <div className="bg-red-600 text-white px-3 py-1 rounded">
                {Math.round(((originalPrice - downsellPrice) / originalPrice) * 100)}% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Here's What You Get:
          </h2>
          
          <Card className="p-6 mb-8">
            <CardContent className="p-0">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-red-100 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-red-600">Limited Time Warning!</h3>
            </div>
            <p className="text-lg text-red-800">{urgency}</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Miss This Final Opportunity</h2>
          
          <div className="bg-white text-black p-8 rounded-lg mb-8">
            <div className="text-5xl font-bold text-green-600 mb-4">${downsellPrice}</div>
            <p className="text-lg text-gray-700 mb-6">One-time payment - Lifetime access</p>
            
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-4 mb-4">
              YES! Give Me {downsellProduct} For ${downsellPrice}
            </Button>
            
            <p className="text-sm text-gray-600">
              ✓ Instant Access ✓ 30-Day Guarantee ✓ No Monthly Fees
            </p>
          </div>

          <p className="text-lg opacity-90 mb-4">
            This is truly your last chance to get any upgrade at a discount.
          </p>
          
          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
            No thanks, take me to my purchase
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DownsellPage;
