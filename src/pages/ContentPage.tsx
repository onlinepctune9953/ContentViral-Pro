
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AIContentGenerator from '@/components/content/AIContentGenerator';
import ContentOptimizer from '@/components/content/ContentOptimizer';
import ContentHistory from '@/components/content/ContentHistory';

const ContentPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                AI Content Studio
              </h1>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Create, optimize, and manage your content with our advanced AI tools
              </p>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="generate" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="generate">Generate Content</TabsTrigger>
                <TabsTrigger value="optimize">Optimize Content</TabsTrigger>
                <TabsTrigger value="history">Content History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="generate">
                <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      AI Content Generator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AIContentGenerator darkMode={darkMode} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="optimize">
                <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Content Optimizer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContentOptimizer darkMode={darkMode} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Content History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContentHistory darkMode={darkMode} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
