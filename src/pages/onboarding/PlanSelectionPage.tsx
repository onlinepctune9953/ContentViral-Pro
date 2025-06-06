
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight } from 'lucide-react';

const PlanSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      id: 'free',
      name: 'Free Starter',
      description: 'Perfect for trying out the platform',
      monthlyPrice: 0,
      yearlyPrice: 0,
      credits: 10,
      features: [
        '10 content generations',
        'Basic templates',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'Great for small content creators',
      monthlyPrice: 29,
      yearlyPrice: 290,
      credits: 100,
      features: [
        '100 content generations',
        'All templates',
        'Priority support',
        'Keyword research'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Perfect for growing businesses',
      monthlyPrice: 97,
      yearlyPrice: 970,
      credits: 500,
      features: [
        '500 content generations',
        'Advanced research',
        'Competitor analysis',
        'API access',
        'Custom templates'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large teams and agencies',
      monthlyPrice: 297,
      yearlyPrice: 2970,
      credits: 2000,
      features: [
        '2000 content generations',
        'White-label options',
        'Team management',
        'Advanced analytics',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billingCycle === 'yearly' && plan.monthlyPrice > 0) {
      const yearlyTotal = plan.monthlyPrice * 12;
      const savings = yearlyTotal - plan.yearlyPrice;
      return Math.round((savings / yearlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Select the plan that best fits your content creation needs
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Save up to 17%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedPlan === plan.id
                  ? 'ring-2 ring-blue-500 shadow-lg scale-105'
                  : 'hover:scale-102'
              } ${plan.popular ? 'border-blue-500' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-gray-900">
                      ${getPrice(plan)}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-gray-500 ml-1">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {getSavings(plan) > 0 && (
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                      Save {getSavings(plan)}%
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <p className="text-center text-sm text-gray-600">
                    <span className="font-semibold text-lg text-gray-900">{plan.credits}</span>
                    {' '}content generations/month
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button
            onClick={() => navigate('/onboarding/tour')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg"
          >
            Continue with {plans.find(p => p.id === selectedPlan)?.name}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-gray-500">
            You can change your plan anytime from your dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanSelectionPage;
