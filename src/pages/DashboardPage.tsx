
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import StatsCard from '@/components/dashboard/StatsCard';
import UsageProgress from '@/components/dashboard/UsageProgress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, TrendingUp, Users, DollarSign, Plus, BarChart3, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const DashboardPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [stats, setStats] = useState({
    contentGenerated: 0,
    engagementRate: 0,
    activeProjects: 0,
    monthlyEarnings: 0
  });
  const [usage, setUsage] = useState({
    contentUsed: 0,
    contentLimit: 100,
    researches: 0,
    researchLimit: 50
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch content generation count
      const { count: contentCount } = await supabase
        .from('content_jobs')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      // Fetch research count (content with input_type 'competitor')
      const { count: researchCount } = await supabase
        .from('content_jobs')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('input_type', 'competitor');

      setStats({
        contentGenerated: contentCount || 0,
        engagementRate: 2.4, // Mock data for now
        activeProjects: 3, // Mock data for now
        monthlyEarnings: 0 // Mock data for now
      });

      setUsage({
        contentUsed: contentCount || 0,
        contentLimit: 100,
        researches: researchCount || 0,
        researchLimit: 50
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                Dashboard
              </h1>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Welcome back! Here's your content creation overview.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Button 
                onClick={() => navigate('/create')}
                className="h-20 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-3"
              >
                <Plus className="h-6 w-6" />
                <span className="text-lg font-semibold">Create Content</span>
              </Button>
              <Button 
                onClick={() => navigate('/content')}
                variant="outline"
                className="h-20 flex items-center justify-center space-x-3"
              >
                <FileText className="h-6 w-6" />
                <span className="text-lg font-semibold">Content Library</span>
              </Button>
              <Button 
                onClick={() => navigate('/analytics')}
                variant="outline"
                className="h-20 flex items-center justify-center space-x-3"
              >
                <BarChart3 className="h-6 w-6" />
                <span className="text-lg font-semibold">Analytics</span>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                icon={FileText}
                title="Content Generated"
                value={stats.contentGenerated.toString()}
                change="+12% from last month"
                darkMode={darkMode}
              />
              <StatsCard
                icon={TrendingUp}
                title="Engagement Rate"
                value={`${stats.engagementRate}%`}
                change="+5% from last month"
                darkMode={darkMode}
              />
              <StatsCard
                icon={Users}
                title="Active Projects"
                value={stats.activeProjects.toString()}
                change="+2 new this month"
                darkMode={darkMode}
              />
              <StatsCard
                icon={DollarSign}
                title="Monthly Earnings"
                value={`$${stats.monthlyEarnings}`}
                change="+8% from last month"
                darkMode={darkMode}
              />
            </div>

            {/* Usage Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Content Generation Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <UsageProgress
                    current={usage.contentUsed}
                    max={usage.contentLimit}
                    label="Content pieces this month"
                    darkMode={darkMode}
                  />
                </CardContent>
              </Card>

              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Research Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <UsageProgress
                    current={usage.researches}
                    max={usage.researchLimit}
                    label="Research queries this month"
                    darkMode={darkMode}
                    className="mb-4"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardHeader>
                <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Generated blog post about "Digital Marketing Trends"
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      2 hours ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Optimized content for SEO
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      5 hours ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Created social media posts
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      1 day ago
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
