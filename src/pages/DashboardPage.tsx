
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import UsageProgress from '@/components/dashboard/UsageProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Mock data - in real app this would come from API
  const stats = [
    {
      title: "Content Created",
      value: "47",
      change: "+12% from last month",
      changeType: "positive" as const,
      icon: FileText
    },
    {
      title: "Total Earnings",
      value: "$2,847",
      change: "+23% from last month",
      changeType: "positive" as const,
      icon: DollarSign
    },
    {
      title: "Engagement Rate",
      value: "8.2%",
      change: "+0.5% from last week",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Audience Reached",
      value: "24.5K",
      change: "+18% from last month",
      changeType: "positive" as const,
      icon: Users
    }
  ];

  const recentContent = [
    {
      id: 1,
      title: "5 AI Tools That Will Change Marketing Forever",
      platform: "LinkedIn",
      status: "published",
      engagement: "342 likes, 89 comments",
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      title: "The Future of Content Creation with AI",
      platform: "Twitter",
      status: "processing",
      engagement: "Generating...",
      createdAt: "4 hours ago"
    },
    {
      id: 3,
      title: "How to 10x Your Social Media Reach",
      platform: "Instagram",
      status: "published",
      engagement: "1.2K likes, 156 comments",
      createdAt: "1 day ago"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'failed': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      published: 'bg-green-100 text-green-800',
      processing: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              Welcome back! 👋
            </h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Here's what's happening with your content today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
                icon={stat.icon}
                darkMode={darkMode}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Content */}
            <div className="lg:col-span-2">
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Recent Content
                    </CardTitle>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Create New
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentContent.map((content) => (
                      <div
                        key={content.id}
                        className={`p-4 rounded-lg border ${
                          darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
                        } hover:shadow-md transition-shadow`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {content.title}
                          </h3>
                          {getStatusIcon(content.status)}
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {content.platform}
                          </Badge>
                          <Badge className={`text-xs ${getStatusBadge(content.status)}`}>
                            {content.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {content.engagement}
                          </span>
                          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {content.createdAt}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Usage & Quick Actions */}
            <div className="space-y-6">
              <UsageProgress darkMode={darkMode} />
              
              {/* Quick Actions */}
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Create AI Content
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Audience Insights
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
