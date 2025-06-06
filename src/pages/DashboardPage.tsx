
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
  Bell,
  Calendar,
  BarChart3
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Fetch real dashboard stats
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return null;

      // Get content jobs count
      const { data: contentJobs, error: contentError } = await supabase
        .from('content_jobs')
        .select('id, processing_status, created_at')
        .eq('user_id', session.user.id);

      if (contentError) throw contentError;

      const totalContent = contentJobs?.length || 0;
      const completedContent = contentJobs?.filter(job => job.processing_status === 'completed').length || 0;
      const thisMonthContent = contentJobs?.filter(job => {
        const jobDate = new Date(job.created_at);
        const now = new Date();
        return jobDate.getMonth() === now.getMonth() && jobDate.getFullYear() === now.getFullYear();
      }).length || 0;

      return {
        totalContent,
        completedContent,
        thisMonthContent,
        earnings: 0, // Reset to 0
        engagement: 0, // Reset to 0
        clicks: 0 // Reset to 0
      };
    },
  });

  // Fetch recent content
  const { data: recentContent = [] } = useQuery({
    queryKey: ['recent-content'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return [];

      const { data, error } = await supabase
        .from('content_jobs')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      return data || [];
    },
  });

  const getContentTitle = (item: any) => {
    if (item.output_content?.content) {
      const content = item.output_content.content;
      const firstLine = content.split('\n')[0];
      return firstLine.replace(/^#\s*/, '').substring(0, 40) + (firstLine.length > 40 ? '...' : '');
    }
    return 'Untitled Content';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-1 flex items-center justify-center">
          <div className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Loading dashboard...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Dashboard
                </h1>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Welcome back! Here's what's happening with your content.
                </p>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Bell className="h-4 w-4" />
                  Notifications
                </Button>
                <Button 
                  onClick={() => navigate('/create')}
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Create Content
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Total Content"
                value={stats?.totalContent || 0}
                icon={<FileText className="h-8 w-8 text-blue-600" />}
                change={0}
                darkMode={darkMode}
              />
              <StatsCard
                title="This Month"
                value={stats?.thisMonthContent || 0}
                icon={<Calendar className="h-8 w-8 text-green-600" />}
                change={0}
                darkMode={darkMode}
              />
              <StatsCard
                title="Total Earnings"
                value={`$${stats?.earnings || 0}`}
                icon={<DollarSign className="h-8 w-8 text-yellow-600" />}
                change={0}
                darkMode={darkMode}
              />
              <StatsCard
                title="Engagement"
                value={`${stats?.engagement || 0}%`}
                icon={<TrendingUp className="h-8 w-8 text-purple-600" />}
                change={0}
                darkMode={darkMode}
              />
            </div>

            {/* Usage Progress and Recent Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Usage This Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <UsageProgress
                    used={stats?.thisMonthContent || 0}
                    limit={100}
                    label="Content Generated"
                    darkMode={darkMode}
                  />
                  <UsageProgress
                    used={0}
                    limit={10}
                    label="Research Queries"
                    darkMode={darkMode}
                    className="mt-4"
                  />
                </CardContent>
              </Card>

              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Recent Content
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/content')}
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentContent.length > 0 ? (
                      recentContent.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-4 w-4 text-blue-600" />
                            <div>
                              <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {getContentTitle(item)}
                              </p>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {new Date(item.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          {getStatusBadge(item.processing_status)}
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          No content created yet
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => navigate('/create')}
                        >
                          Create Your First Content
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} cursor-pointer transition-colors`}
                onClick={() => navigate('/create')}
              >
                <CardContent className="p-6 text-center">
                  <Plus className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Create New Content
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Generate fresh content with AI
                  </p>
                </CardContent>
              </Card>

              <Card 
                className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} cursor-pointer transition-colors`}
                onClick={() => navigate('/content')}
              >
                <CardContent className="p-6 text-center">
                  <FileText className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Content Library
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manage your generated content
                  </p>
                </CardContent>
              </Card>

              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} cursor-pointer transition-colors`}>
                <CardContent className="p-6 text-center">
                  <BarChart3 className={`h-12 w-12 mx-auto mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Analytics
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Track your content performance
                  </p>
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
