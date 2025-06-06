
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, Sparkles, BarChart3, Users, Zap } from 'lucide-react';

const ProductTourPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      title: "AI Content Generation",
      description: "Create viral content for any platform with our advanced AI",
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      features: [
        "Multi-platform optimization",
        "Trending topic integration",
        "Brand voice matching",
        "Instant generation"
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Track performance and optimize your content strategy",
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      features: [
        "Real-time analytics",
        "Engagement tracking",
        "Competitor analysis",
        "Performance insights"
      ]
    },
    {
      title: "Audience Research",
      description: "Understand your audience and create targeted content",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      features: [
        "Audience segmentation",
        "Behavior analysis",
        "Demographic insights",
        "Interest mapping"
      ]
    },
    {
      title: "Automation Tools",
      description: "Streamline your workflow with powerful automation",
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      features: [
        "Scheduled posting",
        "Bulk content creation",
        "Workflow automation",
        "API integrations"
      ]
    }
  ];

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentTour = tourSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0">
        <CardContent className="p-12">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Step {currentStep + 1} of {tourSteps.length}
            </Badge>
            <div className="flex justify-center mb-6">
              {currentTour.icon}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {currentTour.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {currentTour.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentTour.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {tourSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={nextStep}
              className="flex items-center bg-blue-600 hover:bg-blue-700"
            >
              {currentStep === tourSteps.length - 1 ? (
                <>
                  Get Started
                  <Sparkles className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          <div className="text-center mt-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/dashboard')}
              className="text-gray-500 hover:text-gray-700"
            >
              Skip Tour
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductTourPage;
