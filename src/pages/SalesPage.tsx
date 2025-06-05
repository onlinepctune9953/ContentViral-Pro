
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, DollarSign, TrendingUp, Users, Star, Shield, Zap } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import AnimatedCounter from '@/components/AnimatedCounter';
import EarningsCalculator from '@/components/EarningsCalculator';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import LiveChatWidget from '@/components/LiveChatWidget';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const SalesPage = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <Badge className="bg-yellow-400 text-black text-lg px-4 py-2 mb-4">
              🔥 LIMITED TIME OFFER - 75% OFF
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">Finally!</span> Turn ONE Piece of Content Into{' '}
            <span className="text-red-400">50+ Viral Posts</span> Across ALL Platforms{' '}
            <span className="text-yellow-400">In Under 60 Seconds!</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 font-medium opacity-90">
            The AI-Powered Content Recycling Engine That's Making Content Creators{' '}
            <span className="text-green-400 font-bold">$10K+ Per Month</span> While Working 80% Less!
          </h2>

          {/* Hero Video */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white text-lg">Watch the 5-Minute Demo</p>
                  <p className="text-gray-300">See how Sarah made $12,847 in 30 days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={scrollToCheckout}
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 rounded-lg font-bold shadow-lg transform hover:scale-105 transition-all"
            >
              Get Instant Access For Just $127
              <span className="block text-sm font-normal opacity-90">(Regular Price $497)</span>
            </Button>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                30-Day Money Back Guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Instant Access
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-black/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg italic">
              "I went from struggling to create content to having a month's worth of posts ready in 30 minutes!" 
              <span className="block text-yellow-400 font-semibold mt-2">- Sarah K., 6-Figure Coach</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter end={50000} duration={2000} />
              <p className="text-gray-600 mt-2">Happy Users</p>
            </div>
            <div>
              <AnimatedCounter end={2500000} prefix="$" duration={2500} />
              <p className="text-gray-600 mt-2">Generated Revenue</p>
            </div>
            <div>
              <AnimatedCounter end={1200000} duration={2200} />
              <p className="text-gray-600 mt-2">Content Pieces Created</p>
            </div>
            <div>
              <AnimatedCounter end={99} suffix="%" duration={1800} />
              <p className="text-gray-600 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Are You <span className="text-red-600">TIRED</span> of Being a Content Slave?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-2 border-red-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  ❌ Spending 20+ Hours Per Week Creating Content
                </h3>
                <p className="text-gray-700">
                  While your competitors are scaling their business, you're stuck creating the same content 
                  over and over for different platforms...
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-red-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  ❌ Missing Out on THOUSANDS in Affiliate Commissions
                </h3>
                <p className="text-gray-700">
                  You know affiliate marketing works, but you don't have time to research products 
                  and create compelling content around them...
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-red-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  ❌ Watching Your Engagement Die Because Content Feels "Robotic"
                </h3>
                <p className="text-gray-700">
                  AI tools make content that gets flagged, sounds fake, and doesn't convert 
                  because it lacks that human touch...
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-red-600 text-white p-8 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold">
              Meanwhile, smart marketers are using ONE piece of content to dominate ALL platforms 
              and making <span className="text-yellow-400">$5K-$15K per month</span> in affiliate commissions...
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing <span className="text-blue-600">ContentViral Pro™</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              The ONLY AI-powered content recycling engine that not only repurposes your content for every 
              major platform but also researches winning content in your niche and automatically inserts 
              money-making affiliate links!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">🔍 AI Content Intelligence</h3>
                <p className="text-gray-700">
                  Research any topic and instantly see what content is ranking, what's missing, 
                  and exactly how to beat the competition
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">🚀 1-Click Multi-Platform Publishing</h3>
                <p className="text-gray-700">
                  Transform one blog post into 20 Twitter threads, 15 LinkedIn posts, 
                  10 Instagram captions, and 5 TikTok scripts instantly
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">💰 Automatic Affiliate Integration</h3>
                <p className="text-gray-700">
                  AI finds and inserts relevant Amazon affiliate links naturally throughout 
                  your content for passive income
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">🤖 Advanced Content Humanizer</h3>
                <p className="text-gray-700">
                  Bypass ALL AI detectors and make your content sound genuinely human 
                  with personality and emotion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Potential Earnings
            </h2>
            <p className="text-xl text-gray-700">
              See how much you could make with ContentViral Pro
            </p>
          </div>
          <EarningsCalculator />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results From Real Users
            </h2>
            <p className="text-xl text-gray-700">
              Join thousands of successful content creators making money with ContentViral Pro
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="checkout" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block mb-6">
              <p className="text-lg font-bold">⚠️ SPECIAL LAUNCH PRICING - Only Available For The Next:</p>
            </div>
            <CountdownTimer />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gray-800 border-gray-700">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6">What This Would Cost Separately:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Content Research Tool:</span>
                    <span>$197/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Multi-Platform Scheduler:</span>
                    <span>$97/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>AI Content Humanizer:</span>
                    <span>$147/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Affiliate Link Manager:</span>
                    <span>$67/month</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Analytics Dashboard:</span>
                    <span>$97/month</span>
                  </li>
                  <li className="border-t border-gray-600 pt-3 flex justify-between text-xl font-bold text-white">
                    <span>Total Value:</span>
                    <span>$605/month ($7,260/year)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-2 text-sm font-bold">
                BEST DEAL
              </div>
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-white mb-6">Your Investment Today:</h3>
                <div className="text-center mb-6">
                  <div className="text-2xl text-gray-300 line-through mb-2">$497</div>
                  <div className="text-5xl font-bold text-yellow-400 mb-2">Just $127</div>
                  <div className="text-green-400 text-xl font-bold">Save $5,633 This Year!</div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-xl py-4 mb-6 font-bold">
                  YES! Give Me ContentViral Pro For Just $127
                </Button>

                <div className="bg-black/20 p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">🎁 Limited-Time Bonuses (Worth $347):</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      500 Viral Content Templates ($97 value)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      30-Day Content Calendar ($147 value)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Affiliate Marketing Masterclass ($97 value)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Money Back Guarantee
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          {/* FAQ content would go here */}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't Let Another Day Pass Without ContentViral Pro
          </h2>
          <p className="text-xl mb-8">
            Join the content creators who are already making $10K+ per month with our system
          </p>
          <Button 
            onClick={scrollToCheckout}
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-4 rounded-lg font-bold"
          >
            Get Started Now - Just $127
          </Button>
        </div>
      </section>

      {/* Components */}
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
      <LiveChatWidget />
    </div>
  );
};

export default SalesPage;
