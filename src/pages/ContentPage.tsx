
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AIContentGeneratorWithAPI from '@/components/content/AIContentGeneratorWithAPI';
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
                Content Library
              </h1>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Manage, organize, and view your generated content
              </p>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="history" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="history">Content Library</TabsTrigger>
                <TabsTrigger value="generate">Generate New</TabsTrigger>
                <TabsTrigger value="optimize">Optimize Content</TabsTrigger>
              </TabsList>
              
              <TabsContent value="history">
                <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Your Content Library
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContentHistory darkMode={darkMode} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="generate">
                <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      AI Content Generator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AIContentGeneratorWithAPI darkMode={darkMode} />
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
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
