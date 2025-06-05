
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, TrendingUp, Award, BarChart, CheckCircle } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const OTO3Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Award className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlock <span className="text-yellow-400">Professional-Grade</span> Features
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            Get The Same SEO Tools That Agencies Charge $5,000/Month For!
          </h2>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-100 border-l-4 border-red-400 p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Here's The Problem...</h3>
            <p className="text-xl mb-4">Your content might be amazing, but if Google can't find it, you're invisible.</p>
            <p className="text-xl">While your competitors are ranking #1 for profitable keywords, your content is buried on page 47.</p>
          </div>

          <div className="bg-green-100 border-l-4 border-green-400 p-8 mb-12">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Here's The Solution...</h3>
            <p className="text-xl">
              The Professional SEO Suite gives you the same enterprise-level tools that $10,000/month 
              agencies use to dominate Google rankings for their clients.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional SEO Features Include:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">🔍 Advanced Keyword Research</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Find low-competition, high-traffic keywords that your competitors don't know about. 
                  Access to 2 billion keyword database.
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-sm font-semibold">Alex found a keyword with 45K monthly searches and zero competition!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">📈 Real-Time Rank Tracking</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Monitor your rankings for unlimited keywords across all search engines. 
                  Get alerts when you hit page 1!
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Track 10,000+ keywords and never miss a ranking opportunity!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <BarChart className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">📊 SEO Content Optimization</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  AI analyzes top-ranking pages and tells you exactly what to include 
                  in your content to rank #1.
                </p>
                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-sm font-semibold">Maria's blog post went from page 15 to position #3 in 2 weeks!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold">🏆 Competitor SEO Analysis</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  See exactly which keywords your competitors rank for, their backlink 
                  strategies, and content gaps you can exploit.
                </p>
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm font-semibold">Steal your competitors' best SEO strategies legally!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Calculate Your SEO ROI:</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">10,000</div>
                <div className="text-sm">Monthly Organic Visitors</div>
                <div className="text-xs text-gray-600">(Conservative estimate after SEO)</div>
              </div>
              <div className="p-4 bg-green-100 rounded-lg">
                <div className="text-2xl font-bold text-green-600">2%</div>
                <div className="text-sm">Conversion Rate</div>
                <div className="text-xs text-gray-600">(Industry average)</div>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">$50</div>
                <div className="text-sm">Average Order Value</div>
                <div className="text-xs text-gray-600">(Your products/affiliates)</div>
              </div>
            </div>
            
            <div className="text-center mt-8 p-6 bg-green-600 text-white rounded-lg">
              <div className="text-4xl font-bold">$10,000/Month</div>
              <div className="text-lg">Additional Revenue From SEO</div>
              <div className="text-sm opacity-90">That's $120,000 per year in extra income!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Results:</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">🏢 Digital Marketing Agency</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Keywords Ranking Page 1:</span>
                    <span className="font-bold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Organic Traffic:</span>
                    <span className="font-bold">847K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Client Revenue Increase:</span>
                    <span className="font-bold text-green-600">340%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "We replaced our $2,000/month SEO tools with ContentViral Pro's SEO Suite. 
                  Results are identical but costs 90% less!"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">👤 Solo Content Creator</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Blog Traffic Growth:</span>
                    <span className="font-bold">2,847%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Organic Visitors:</span>
                    <span className="font-bold">127K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Affiliate Income:</span>
                    <span className="font-bold text-green-600">$18K/month</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "I went from 500 monthly visitors to 127K in 6 months. The keyword research 
                  alone is worth 10x the price!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-xl mb-4">⚠️ Professional Upgrade - Limited Time Only!</p>
            <CountdownTimer />
          </div>

          <div className="bg-white text-black p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Professional SEO Suite</h3>
            <div className="text-4xl font-bold text-red-600 line-through mb-2">$997</div>
            <div className="text-6xl font-bold text-blue-600 mb-4">$197</div>
            <p className="text-lg text-red-600 font-bold mb-6">80% Off Professional Pricing!</p>
            
            <div className="bg-blue-100 p-4 rounded-lg mb-6">
              <h4 className="font-bold mb-2">🎁 Professional Bonuses Included:</h4>
              <ul className="text-sm text-left">
                <li className="flex items-center mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  SEO Audit Checklist ($297 value)
                </li>
                <li className="flex items-center mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Link Building Strategies Course ($197 value)
                </li>
                <li className="flex items-center mb-1">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  SEO Content Templates ($147 value)
                </li>
              </ul>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl py-4 mb-4">
              YES! Upgrade To Professional SEO Suite
            </Button>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>💳 Payment Plans Available</div>
              <div>🔒 Secure Checkout</div>
              <div>✅ 60-Day Guarantee</div>
            </div>
          </div>

          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
            No thanks, I'll stick with basic SEO features
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OTO3Page;
