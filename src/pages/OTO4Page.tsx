
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, DollarSign, TrendingUp, Star, Crown } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const OTO4Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Crown className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Turn This Into a <span className="text-yellow-400">$50K+/Month Business</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            Get The Agency License & Start Charging Clients $2,000-$10,000/Month!
          </h2>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">The Agency Opportunity Is MASSIVE</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-green-600">$127B</div>
                <div className="text-sm">Digital Marketing Industry Size</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600">97%</div>
                <div className="text-sm">Businesses Need Content Help</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="text-3xl font-bold text-purple-600">$5,000</div>
                <div className="text-sm">Average Monthly Client Value</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-8 mb-8">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Here's What's Happening Right Now:</h3>
            <ul className="space-y-2 text-lg">
              <li>• Businesses are spending $2,000-$10,000/month on content creation</li>
              <li>• 73% are unsatisfied with their current content agencies</li>
              <li>• Most agencies deliver slow, expensive, cookie-cutter content</li>
              <li>• You can deliver 10x better results in 10% of the time</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Complete Business-in-a-Box Includes:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">🏢 White-Label Platform</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your logo, your branding, your domain. Clients never know you're using 
                  ContentViral Pro - it looks like your proprietary software.
                </p>
                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-sm font-semibold">Charge premium prices for "custom" AI technology!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">👥 Client Management System</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Manage unlimited clients, set usage limits, create custom packages, 
                  and track performance for each account.
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-sm font-semibold">Scale to 100+ clients with automated management!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">💰 Recurring Revenue System</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Built-in subscription billing, client portals, usage tracking, and 
                  automatic renewals. Perfect recurring revenue model.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Build predictable $50K+/month recurring revenue!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold">⭐ Premium Support & Training</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Complete agency setup training, sales scripts, pricing guides, 
                  and priority support to ensure your success.
                </p>
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm font-semibold">Get your agency to $10K/month in 90 days!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Agency Success Stories:</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-r from-green-50 to-green-100">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">Jennifer Martinez</h3>
                    <p className="text-sm text-gray-600">Content Marketing Agency</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-600">$73,000/month</div>
                  <div className="text-sm text-gray-600">Recurring Revenue in 8 Months</div>
                </div>
                <p className="text-gray-700 text-sm">
                  "I went from freelancer making $3K/month to agency owner making $73K/month. 
                  The white-label platform lets me charge premium prices while delivering 
                  incredible results."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    DP
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">David Park</h3>
                    <p className="text-sm text-gray-600">Digital Marketing Agency</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">47 Clients</div>
                  <div className="text-sm text-gray-600">$187K Monthly Recurring Revenue</div>
                </div>
                <p className="text-gray-700 text-sm">
                  "Started with 3 clients, now have 47 paying $2,000-$8,000/month each. 
                  The client management system handles everything automatically. 
                  I work 4 hours/day max."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-purple-100 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">The Math is Simple:</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">10 Clients</div>
                <div className="text-sm">Conservative Start</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">$3,000</div>
                <div className="text-sm">Average Monthly Fee</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">$30,000</div>
                <div className="text-sm">Monthly Revenue</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">$360,000</div>
                <div className="text-sm">Annual Revenue</div>
              </div>
            </div>
            <p className="text-lg font-semibold">
              That's just with 10 clients at basic pricing. Most agencies scale to 50+ clients!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-xl mb-4">⚠️ Agency License - Limited Spots Available!</p>
            <CountdownTimer />
          </div>

          <div className="bg-white text-black p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Agency License + Business Kit</h3>
            <div className="text-4xl font-bold text-red-600 line-through mb-2">$2,997</div>
            <div className="text-6xl font-bold text-purple-600 mb-4">$297</div>
            <p className="text-lg text-red-600 font-bold mb-6">90% Off Launch Pricing!</p>
            
            <div className="bg-purple-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">🎁 Complete Agency Kit Includes:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-left">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-purple-600 mr-2" />
                  White-label platform ($2,000 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-purple-600 mr-2" />
                  Client management system ($1,500 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-purple-600 mr-2" />
                  Agency setup training ($997 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-purple-600 mr-2" />
                  Sales scripts & pricing guide ($497 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-purple-600 mr-2" />
                  Marketing materials ($497 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-purple-600 mr-2" />
                  Priority agency support ($297 value)
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl py-4 mb-6">
              YES! Start My Agency For Just $297
            </Button>
            
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-sm font-bold text-gray-800">
                💰 ROI GUARANTEE: Make your first $10,000 in 90 days or get a full refund!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>💳 Payment Plans: 3 x $99</div>
              <div>🔒 Secure Checkout</div>
              <div>✅ 90-Day ROI Guarantee</div>
            </div>
          </div>

          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
            No thanks, I'll stick to personal use only
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OTO4Page;
