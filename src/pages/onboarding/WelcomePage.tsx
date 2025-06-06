
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Sparkles, TrendingUp, Users } from 'lucide-react';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Content Creation",
      description: "Generate viral content for all platforms instantly"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Trend Analysis",
      description: "Stay ahead with real-time trending topics"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Audience Insights",
      description: "Understand your audience better than ever"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0">
        <CardContent className="p-12 text-center">
          <div className="mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to ContentViral Pro!
            </h1>
            <p className="text-gray-600 text-lg">
              You're all set! Let's get you started with your content creation journey.
            </p>
          </div>

          <div className="mb-8 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                  index === currentStep 
                    ? 'bg-blue-50 border-2 border-blue-200 scale-105' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/onboarding/plans')}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-lg"
            >
              Choose Your Plan
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/dashboard')}
              className="w-full h-12"
            >
              Skip for Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePage;
