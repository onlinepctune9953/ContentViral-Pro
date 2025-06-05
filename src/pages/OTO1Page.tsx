
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X, TrendingUp, Search, BarChart, Target } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const OTO1Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <section className="bg-red-600 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            WAIT! Don't Leave Money On The Table...
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            Unlock The <span className="text-yellow-400">"Unfair Advantage"</span> That Top Marketers 
            Use To Dominate ANY Niche In 24 Hours!
          </h2>
        </div>
      </section>

      {/* Reveal Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-lg mb-12">
            <p className="text-xl mb-4">You just secured ContentViral Pro, which is amazing...</p>
            <p className="text-xl mb-4">But I have to be honest with you...</p>
            <p className="text-2xl md:text-3xl font-bold text-red-600 text-center p-6 bg-white rounded-lg">
              The REAL money is made when you can PREDICT what content will go viral BEFORE you create it.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">Here's The Secret That Changed Everything:</h3>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
              <p className="text-xl">
                While everyone else is guessing what to post, our Advanced Research Suite 
                analyzes 10,000+ viral posts per minute to show you EXACTLY what content 
                will explode in your niche!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            With The Advanced Research Suite, You Get:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold">🔥 Trend Hijacking Algorithm</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Be the FIRST to jump on viral trends in your niche. Our AI monitors 50+ platforms 
                  24/7 and alerts you the moment something starts trending.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">💰 User Result: Sarah made $3,247 in one week by being first to a viral trend!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">🕵️ Competitor Content Scraper</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  See your competitors' best-performing content, engagement rates, and posting 
                  schedules. Reverse-engineer their success!
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">💰 User Result: Mike increased engagement 400% by copying winning competitor strategies!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <BarChart className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">📊 Viral Prediction Score</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Every piece of content gets a 1-100 viral score BEFORE you post it. 
                  Only post content with 80+ scores for guaranteed viral success!
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">💰 User Result: Jessica's posts now average 50K+ views using only 90+ scored content!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">🎯 Keyword Gap Analysis</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Find profitable keywords your competitors are missing. Dominate untapped 
                  opportunities with zero competition!
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">💰 User Result: David found a gap keyword that generated 100K views in 48 hours!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Here's Proof This Works:</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="bg-gray-900 p-4 rounded mb-4">
              <div className="text-green-400 font-mono text-sm">
                COMPETITOR ANALYSIS RESULTS<br/>
                ================================<br/>
                Top Performing Post: "5 Minute Weight Loss Hack"<br/>
                Engagement Rate: 15.7%<br/>
                Views: 2.3M<br/>
                Gap Opportunity: "3 Minute Version" - 0 competition<br/>
                Viral Score Prediction: 94/100
              </div>
            </div>
            <p className="text-lg">
              This client used our competitor scraper to find a content gap in the weight loss niche 
              and created a post that got <span className="font-bold text-red-600">2.3M views</span> and 
              generated <span className="font-bold text-green-600">$18,429 in affiliate commissions!</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg">
              <div className="text-2xl font-bold">$47,281</div>
              <div className="text-sm">Generated in 30 days using trend alerts</div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-2xl font-bold">847%</div>
              <div className="text-sm">Average engagement increase</div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded-lg">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Content success rate with viral scores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-red-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-xl mb-4">⚠️ This Offer Expires When You Leave This Page!</p>
            <CountdownTimer />
          </div>

          <div className="bg-white text-black p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Advanced Research Suite</h3>
            <div className="text-4xl font-bold text-red-600 line-through mb-2">$297</div>
            <div className="text-6xl font-bold text-green-600 mb-4">$97</div>
            <p className="text-lg text-red-600 font-bold mb-6">Save $200 - One-Time Upgrade Only!</p>
            
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-xl py-4 mb-4">
              YES! Add Advanced Research Suite For Just $97
            </Button>
            
            <p className="text-sm text-gray-600">
              ✓ Instant Access ✓ 30-Day Guarantee ✓ No Monthly Fees
            </p>
          </div>

          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
            No thanks, I'll stick with basic research (and miss out on viral prediction)
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OTO1Page;
