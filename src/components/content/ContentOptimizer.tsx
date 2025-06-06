
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import {
  BarChart,
  CheckCircle,
  AlertCircle,
  Search,
  TrendingUp,
  FileText,
  SendHorizontal,
  Calendar,
  Loader,
  BarChart2
} from 'lucide-react';

type ContentOptimizerProps = {
  darkMode: boolean;
};

type OptimizationResult = {
  score: number;
  suggestions: string[];
  statistics: {
    wordCount: number;
    readingTime: number;
    readabilityScore: number;
    keywordDensity: number;
  };
};

const ContentOptimizer: React.FC<ContentOptimizerProps> = ({ darkMode }) => {
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<OptimizationResult | null>(null);
  const [targetPlatform, setTargetPlatform] = useState('website');

  // Handle content optimization
  const analyzeContent = async () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please enter some content to optimize",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock optimization results
    const mockResults: OptimizationResult = {
      score: Math.floor(Math.random() * 30) + 65, // Score between 65-95
      suggestions: [
        "Consider adding more transition words to improve flow.",
        "The content could benefit from more specific examples.",
        "Try using more engaging questions to involve the reader.",
        "Break up longer paragraphs for better readability.",
      ],
      statistics: {
        wordCount: content.split(/\s+/).filter(Boolean).length,
        readingTime: Math.max(1, Math.floor(content.split(/\s+/).filter(Boolean).length / 200)),
        readabilityScore: Math.floor(Math.random() * 20) + 65,
        keywordDensity: keywords.trim() ? (Math.random() * 3) + 1 : 0,
      }
    };
    
    setOptimizationResults(mockResults);
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis complete",
      description: `Content score: ${mockResults.score}/100`,
    });
  };

  // Reset the analysis
  const resetAnalysis = () => {
    setOptimizationResults(null);
  };

  // Automatic optimization suggestion
  const improveContent = () => {
    if (!content.trim()) return;
    
    // Simulate improved content generation
    toast({
      title: "Optimizing content",
      description: "AI is improving your content...",
    });
    
    setTimeout(() => {
      const improvedContent = content + "\n\n" + 
        "I've improved this content by adding more engaging language and better structure. " +
        "The key points are now more clearly articulated, and I've included transition phrases " +
        "to improve the flow between paragraphs. The readability score should now be higher.";
      
      setContent(improvedContent);
      
      toast({
        title: "Content optimized!",
        description: "Your content has been improved",
      });
      
      // Trigger reanalysis
      analyzeContent();
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
              Content to Optimize
            </label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your content here for optimization..."
              className="min-h-[250px]"
            />
          </div>
          
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
              Target Keywords (comma separated)
            </label>
            <Input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g. AI content, SEO, marketing"
            />
          </div>
          
          <div className="mb-6 flex items-center space-x-2">
            <label className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}>
              Optimize for:
            </label>
            <TabsList>
              <TabsTrigger 
                value="website" 
                onClick={() => setTargetPlatform('website')}
                className={targetPlatform === 'website' ? 'active' : ''}
              >
                <FileText className="w-4 h-4 mr-1" />
                Website
              </TabsTrigger>
              <TabsTrigger 
                value="social" 
                onClick={() => setTargetPlatform('social')}
                className={targetPlatform === 'social' ? 'active' : ''}
              >
                <SendHorizontal className="w-4 h-4 mr-1" />
                Social Media
              </TabsTrigger>
              <TabsTrigger 
                value="email" 
                onClick={() => setTargetPlatform('email')}
                className={targetPlatform === 'email' ? 'active' : ''}
              >
                <Calendar className="w-4 h-4 mr-1" />
                Email
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex space-x-3">
            <Button 
              onClick={analyzeContent} 
              className="bg-blue-600 hover:bg-blue-700"
              disabled={isAnalyzing || !content.trim()}
            >
              {isAnalyzing ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Analyze Content
                </>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={improveContent}
              disabled={isAnalyzing || !content.trim()}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Auto Improve
            </Button>
            
            {optimizationResults && (
              <Button 
                variant="outline" 
                onClick={resetAnalysis}
              >
                Clear Analysis
              </Button>
            )}
          </div>
        </div>
        
        <div>
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
            <CardContent className="pt-6">
              <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Optimization Tips
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Use keywords naturally in headings and first paragraph
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Keep paragraphs short for better readability
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Use bulleted lists to break up dense information
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Include a strong call-to-action
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Target a readability grade level of 6-8
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Analysis Results */}
      {optimizationResults && (
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardContent className="py-4 flex flex-col items-center justify-center">
                <BarChart2 className={`h-8 w-8 mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div className="text-3xl font-bold">{optimizationResults.score}</div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Overall Score
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardContent className="py-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">{optimizationResults.statistics.wordCount}</div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Word Count
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardContent className="py-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">{optimizationResults.statistics.readingTime}</div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Min Read
                </p>
              </CardContent>
            </Card>
            
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardContent className="py-4 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold">{optimizationResults.statistics.readabilityScore}</div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Readability
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="suggestions">
            <TabsList>
              <TabsTrigger value="suggestions">Improvement Suggestions</TabsTrigger>
              <TabsTrigger value="seo">SEO Analysis</TabsTrigger>
              <TabsTrigger value="readability">Readability</TabsTrigger>
            </TabsList>
            
            <TabsContent value="suggestions">
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {optimizationResults.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className={`w-5 h-5 mr-2 mt-0.5 ${
                          index % 3 === 0 ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {suggestion}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="seo">
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardContent className="pt-6">
                  {keywords ? (
                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Keyword Analysis
                      </h3>
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Keyword Density
                          </span>
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {optimizationResults.statistics.keywordDensity.toFixed(1)}%
                          </span>
                        </div>
                        <Progress 
                          value={optimizationResults.statistics.keywordDensity * 25} 
                          className="h-2" 
                        />
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Ideal keyword density is between 1-3%. Your content {
                          optimizationResults.statistics.keywordDensity < 1 ? "could use more keywords" :
                          optimizationResults.statistics.keywordDensity > 3 ? "may have keyword stuffing" :
                          "has a good keyword balance"
                        }.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Add target keywords to analyze SEO optimization
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="readability">
              <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Reading Grade Level
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Grade {Math.floor(optimizationResults.statistics.readabilityScore / 10)}
                      </span>
                    </div>
                    <Progress 
                      value={optimizationResults.statistics.readabilityScore} 
                      className="h-2" 
                    />
                  </div>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {optimizationResults.statistics.readabilityScore < 60 ? (
                      "Your content is quite complex. Consider simplifying for broader appeal."
                    ) : optimizationResults.statistics.readabilityScore > 85 ? (
                      "Your content is very easy to read, which is great for general audiences."
                    ) : (
                      "Your content has a good readability level for most online audiences."
                    )}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default ContentOptimizer;
