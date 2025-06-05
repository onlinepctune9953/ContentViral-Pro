
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Bot, Rocket, Crown, Star, Diamond } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const OTO5Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Diamond className="w-16 h-16 text-yellow-200" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The <span className="text-yellow-200">Ultimate Automation Solution</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium opacity-90">
            Set It & Forget It - Make Money While You Sleep With 100% Automation!
          </h2>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gold-100 to-yellow-100 p-8 rounded-lg mb-12 border-2 border-yellow-300">
            <h3 className="text-3xl font-bold text-center mb-6">Imagine This...</h3>
            <div className="text-xl space-y-4">
              <p>✅ Content automatically researched, created, and published 24/7</p>
              <p>✅ Affiliate links automatically inserted for maximum profits</p>
              <p>✅ SEO automatically optimized for top Google rankings</p>
              <p>✅ Social media automatically managed across all platforms</p>
              <p>✅ Analytics automatically tracked and optimized</p>
            </div>
            <div className="text-center mt-8 p-6 bg-green-600 text-white rounded-lg">
              <p className="text-2xl font-bold">
                Wake up to $1,000+ in earnings every single day - completely on autopilot!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Comparison */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Stop Trading Time For Money
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-red-50 border-2 border-red-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">❌ Manual Content Creation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Research & Planning:</span>
                    <span className="font-bold text-red-600">4 hours/day</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Content Creation:</span>
                    <span className="font-bold text-red-600">6 hours/day</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Publishing & Optimization:</span>
                    <span className="font-bold text-red-600">2 hours/day</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Analytics & Adjustments:</span>
                    <span className="font-bold text-red-600">2 hours/day</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">14 Hours/Day</div>
                  <div>Chained to your computer</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 border-2 border-green-200">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">✅ Complete Automation Suite</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>AI Research & Planning:</span>
                    <span className="font-bold text-green-600">Automated</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>AI Content Creation:</span>
                    <span className="font-bold text-green-600">Automated</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Auto Publishing & SEO:</span>
                    <span className="font-bold text-green-600">Automated</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Smart Analytics & Optimization:</span>
                    <span className="font-bold text-green-600">Automated</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-600 text-white rounded-lg text-center">
                  <div className="text-3xl font-bold">15 Minutes/Week</div>
                  <div>Just to check your profits!</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Enterprise-Level Automation Features:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Bot className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">🤖 AI Content Autopilot</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  AI creates, schedules, and publishes 50+ pieces of content daily across 
                  all platforms. Never run out of content again.
                </p>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-sm font-semibold">Automated content creation 24/7/365!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold">⚡ Smart A/B Testing Engine</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Automatically tests headlines, images, posting times, and content types 
                  to maximize engagement and profits.
                </p>
                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-sm font-semibold">AI optimizes for maximum ROI automatically!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold">🚀 Viral Trend Hijacker</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Automatically detects trending topics and creates viral content around 
                  them within minutes of trends starting.
                </p>
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm font-semibold">Be first to every viral trend automatically!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-yellow-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Crown className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-bold">👑 VIP Priority Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Dedicated success manager, priority support, monthly strategy calls, 
                  and exclusive automation training.
                </p>
                <div className="bg-yellow-100 p-3 rounded">
                  <p className="text-sm font-semibold">White-glove service for maximum success!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Automation Success Stories:</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-green-600 mb-2">$47,291</div>
                <div className="text-sm text-gray-600 mb-4">30-Day Automated Earnings</div>
                <p className="text-sm">
                  "Set up automation on Friday, made $47K by month-end. Best investment ever!"
                  <br/><strong>- Michael R.</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.3M</div>
                <div className="text-sm text-gray-600 mb-4">Views in 60 Days</div>
                <p className="text-sm">
                  "Automation found and capitalized on 15 viral trends automatically!"
                  <br/><strong>- Sarah L.</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">4 Hours</div>
                <div className="text-sm text-gray-600 mb-4">Work Week</div>
                <p className="text-sm">
                  "Earning more than my corporate job while working 4 hours per week!"
                  <br/><strong>- David K.</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg border-2 border-yellow-300">
            <h3 className="text-2xl font-bold mb-4">Conservative Automation Projections:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">1,500</div>
                <div className="text-sm">Posts Created Monthly</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">500K</div>
                <div className="text-sm">Monthly Views</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">2%</div>
                <div className="text-sm">Conversion Rate</div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-xl font-bold">$25K</div>
                <div className="text-sm">Monthly Profit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-xl mb-4">⚠️ Ultimate Automation - Only 50 Licenses Available!</p>
            <CountdownTimer />
          </div>

          <div className="bg-white text-black p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Complete Automation Suite + VIP Access</h3>
            <div className="text-4xl font-bold text-red-600 line-through mb-2">$4,997</div>
            <div className="text-6xl font-bold text-orange-600 mb-4">$497</div>
            <p className="text-lg text-red-600 font-bold mb-6">90% Off - Never Available Again at This Price!</p>
            
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg mb-6">
              <h4 className="font-bold mb-3">🎁 VIP Automation Package Includes:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-left">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  Complete automation suite ($3,000 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  VIP success manager ($2,000 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  Monthly strategy calls ($1,200 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  Priority 24/7 support ($800 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  Automation training course ($997 value)
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-orange-600 mr-2" />
                  VIP community access ($497 value)
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl py-4 mb-6">
              YES! Give Me Complete Automation For $497
            </Button>
            
            <div className="bg-green-100 p-4 rounded-lg mb-4">
              <p className="text-sm font-bold text-gray-800">
                🚀 SUCCESS GUARANTEE: Make $10,000 in 90 days or we'll personally work with you until you do!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>💳 Payment Plans: 5 x $99</div>
              <div>🔒 Military-Grade Security</div>
              <div>✅ Lifetime Access</div>
            </div>
          </div>

          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
            No thanks, I prefer doing everything manually
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OTO5Page;
