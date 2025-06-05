
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp, Target, BarChart3, AlertTriangle } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const OTO2Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            You're About To Make a <span className="text-yellow-400">$10,000 Mistake...</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            Unless You Let Our AI Turn Your Content Into a 24/7 Money-Making Machine!
          </h2>
        </div>
      </section>

      {/* Mistake Reveal */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 mb-12">
            <p className="text-xl mb-4">Look, ContentViral Pro will help you create amazing content...</p>
            <p className="text-xl mb-4">But if you're not monetizing every single piece of content you create, you're leaving THOUSANDS on the table.</p>
            <div className="bg-red-600 text-white p-6 rounded-lg text-center">
              <p className="text-2xl md:text-3xl font-bold">
                Our top users make $500-2000 PER POST with the Monetization Maximizer!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Without Monetization Maximizer:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Missing 90% of affiliate opportunities</li>
                <li>• Stuck with low-commission Amazon links</li>
                <li>• No idea which content makes money</li>
                <li>• Manually searching for products to promote</li>
                <li>• Leaving $1000s on the table monthly</li>
              </ul>
              <div className="mt-4 p-4 bg-red-200 rounded">
                <p className="font-bold">Average Monthly Earnings: $247</p>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">✅ With Monetization Maximizer:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AI finds highest-paying affiliate opportunities</li>
                <li>• Connected to 20+ high-commission networks</li>
                <li>• Real-time earnings tracking per post</li>
                <li>• Automatic product recommendations</li>
                <li>• Maximized revenue from every piece of content</li>
              </ul>
              <div className="mt-4 p-4 bg-green-200 rounded">
                <p className="font-bold">Average Monthly Earnings: $8,947</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Turn Every Post Into Profit With:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">💳 Smart Affiliate Integration</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Not just Amazon - connect ClickBank, ShareASale, Commission Junction, and 20+ 
                  high-paying affiliate networks automatically.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Example: Switch from 3% Amazon to 50% ClickBank commission = 1,667% earnings increase!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">🎯 Product Recommendation AI</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  AI analyzes your content and suggests the HIGHEST commission products that 
                  perfectly match your audience's needs.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Jennifer's fitness posts now earn $1,200+ each thanks to AI product matching!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">📈 Commission Optimizer</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Automatically swaps low-commission products for high-paying alternatives 
                  without changing your content's meaning.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Auto-optimization increased Mark's earnings by 340% without any extra work!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">🔗 Advanced Link Tracking</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  See exactly which content makes money, what products convert best, 
                  and scale what works for maximum profit.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Track every click, conversion, and commission down to the penny!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Income Proof */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Real Income Screenshots:</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
                <h3 className="font-bold">Amazon Affiliate Dashboard</h3>
                <div className="text-2xl font-bold">$4,287.42</div>
                <div className="text-sm">Last 30 Days - Before Optimization</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <h3 className="font-bold">ClickBank + Multi-Network</h3>
                <div className="text-2xl font-bold">$18,943.17</div>
                <div className="text-sm">Last 30 Days - After Monetization Maximizer</div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Same content, 342% more income!</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold mb-4">Top Earners This Month:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <span>Sarah K. - Fitness</span>
                  <span className="font-bold text-green-600">$12,847</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <span>Mike R. - Tech</span>
                  <span className="font-bold text-green-600">$9,431</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <span>Lisa M. - Business</span>
                  <span className="font-bold text-green-600">$15,629</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-100 rounded">
                  <span>David P. - Finance</span>
                  <span className="font-bold text-green-600">$21,983</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700">
            These are real earnings from users who upgraded to the Monetization Maximizer!
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-xl mb-4">⚠️ This Offer Only Available On This Page!</p>
            <CountdownTimer />
          </div>

          <div className="bg-white text-black p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Monetization Maximizer</h3>
            <div className="text-4xl font-bold text-red-600 line-through mb-2">$497</div>
            <div className="text-6xl font-bold text-green-600 mb-4">$147</div>
            <p className="text-lg text-red-600 font-bold mb-6">One-Time Investment - Lifetime Access!</p>
            
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-4 mb-4">
              YES! Add Monetization Maximizer For Just $147
            </Button>
            
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <p className="text-sm font-bold text-gray-800">
                💰 GUARANTEE: If this doesn't pay for itself in the first 30 days, we'll refund it AND let you keep it!
              </p>
            </div>
          </div>

          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
            No thanks, I'll leave thousands on the table with basic monetization
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OTO2Page;
