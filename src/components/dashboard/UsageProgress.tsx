
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';

interface UsageProgressProps {
  darkMode?: boolean;
}

const UsageProgress: React.FC<UsageProgressProps> = ({ darkMode = false }) => {
  // Mock data - in real app this would come from API
  const usageData = {
    credits: { used: 85, total: 100 },
    content: { used: 12, total: 50 },
    api: { used: 234, total: 1000 }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPercentage = (used: number, total: number) => (used / total) * 100;

  return (
    <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
      <CardHeader>
        <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Usage & Limits
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Credits Usage */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Credits
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {usageData.credits.used} / {usageData.credits.total}
            </span>
          </div>
          <Progress 
            value={getPercentage(usageData.credits.used, usageData.credits.total)}
            className="h-2"
          />
          {getPercentage(usageData.credits.used, usageData.credits.total) >= 75 && (
            <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                You're running low on credits. Consider upgrading your plan.
              </p>
              <Button size="sm" className="mt-1 h-6 text-xs bg-yellow-600 hover:bg-yellow-700">
                Upgrade Now
              </Button>
            </div>
          )}
        </div>

        {/* Content Generations */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Content Created
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {usageData.content.used} this month
            </span>
          </div>
          <Progress 
            value={getPercentage(usageData.content.used, usageData.content.total)}
            className="h-2"
          />
        </div>

        {/* API Calls */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              API Calls
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {usageData.api.used} / {usageData.api.total}
            </span>
          </div>
          <Progress 
            value={getPercentage(usageData.api.used, usageData.api.total)}
            className="h-2"
          />
        </div>

        <Button className="w-full mt-4" variant="outline">
          <TrendingUp className="w-4 h-4 mr-2" />
          View Detailed Analytics
        </Button>
      </CardContent>
    </Card>
  );
};

export default UsageProgress;
