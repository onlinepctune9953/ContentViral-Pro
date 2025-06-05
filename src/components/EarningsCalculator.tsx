
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EarningsCalculator = () => {
  const [postsPerWeek, setPostsPerWeek] = useState(10);
  const [avgCommission, setAvgCommission] = useState(25);
  const [conversionRate, setConversionRate] = useState(2);

  const calculateEarnings = () => {
    const postsPerMonth = postsPerWeek * 4;
    const clicksPerPost = 100; // Average clicks per post
    const totalClicks = postsPerMonth * clicksPerPost;
    const conversions = (totalClicks * conversionRate) / 100;
    const monthlyEarnings = conversions * avgCommission;
    const yearlyEarnings = monthlyEarnings * 12;

    return {
      monthly: monthlyEarnings,
      yearly: yearlyEarnings
    };
  };

  const earnings = calculateEarnings();

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Earnings Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Posts per week</label>
            <input
              type="range"
              min="5"
              max="50"
              value={postsPerWeek}
              onChange={(e) => setPostsPerWeek(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center font-bold text-lg">{postsPerWeek}</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Avg Commission ($)</label>
            <input
              type="range"
              min="10"
              max="100"
              value={avgCommission}
              onChange={(e) => setAvgCommission(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center font-bold text-lg">${avgCommission}</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Conversion Rate (%)</label>
            <input
              type="range"
              min="1"
              max="10"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center font-bold text-lg">{conversionRate}%</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Potential Earnings:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl font-bold text-green-600">${earnings.monthly.toLocaleString()}</div>
              <div className="text-gray-700">Per Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">${earnings.yearly.toLocaleString()}</div>
              <div className="text-gray-700">Per Year</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Start Earning Today - Get ContentViral Pro
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsCalculator;
