
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Link, 
  Upload, 
  Search, 
  Users, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Loader,
  TrendingUp
} from 'lucide-react';

const CreateContentPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputType, setInputType] = useState<string>('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [inputContent, setInputContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const steps = [
    'Choose Input Type',
    'Add Content',
    'Select Platforms',
    'Generate Content'
  ];

  const inputTypes = [
    {
      id: 'url',
      title: 'URL Scraper',
      description: 'Extract content from any webpage',
      icon: <Link className="w-8 h-8 text-blue-600" />,
      color: 'border-blue-200 hover:border-blue-300'
    },
    {
      id: 'text',
      title: 'Text Input',
      description: 'Paste or type your content directly',
      icon: <FileText className="w-8 h-8 text-green-600" />,
      color: 'border-green-200 hover:border-green-300'
    },
    {
      id: 'file',
      title: 'File Upload',
      description: 'Upload documents, images, or videos',
      icon: <Upload className="w-8 h-8 text-purple-600" />,
      color: 'border-purple-200 hover:border-purple-300'
    },
    {
      id: 'keyword',
      title: 'Keyword Research',
      description: 'Find trending topics and keywords',
      icon: <Search className="w-8 h-8 text-orange-600" />,
      color: 'border-orange-200 hover:border-orange-300'
    },
    {
      id: 'competitor',
      title: 'Competitor Analysis',
      description: 'Analyze competitor content and strategies',
      icon: <Users className="w-8 h-8 text-red-600" />,
      color: 'border-red-200 hover:border-red-300'
    }
  ];

  const platforms = [
    { id: 'twitter', name: 'Twitter', icon: '🐦', description: 'Short, engaging tweets' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', description: 'Professional networking' },
    { id: 'instagram', name: 'Instagram', icon: '📸', description: 'Visual storytelling' },
    { id: 'facebook', name: 'Facebook', icon: '👥', description: 'Community engagement' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', description: 'Short-form videos' },
    { id: 'youtube', name: 'YouTube', icon: '📺', description: 'Long-form content' }
  ];

  const trendingTopics = [
    'AI and Machine Learning',
    'Remote Work Tips',
    'Sustainable Living',
    'Mental Health Awareness',
    'Digital Marketing Trends',
    'Cryptocurrency Updates'
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleGenerate = () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      // In real app, this would navigate to results
    }, 3000);
  };

  const getProgressPercentage = () => {
    return ((currentStep + 1) / steps.length) * 100;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return inputType !== '';
      case 1: return inputContent.trim() !== '';
      case 2: return selectedPlatforms.length > 0;
      default: return true;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex`}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                Create AI Content
              </h1>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Generate viral content for any platform in minutes
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        index <= currentStep
                          ? 'bg-blue-600 text-white'
                          : darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-2 ${
                        index < currentStep ? 'bg-blue-600' : darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                {steps.map((step, index) => (
                  <span
                    key={index}
                    className={`${
                      index <= currentStep
                        ? darkMode ? 'text-white' : 'text-gray-900'
                        : darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {step}
                  </span>
                ))}
              </div>
              <Progress value={getProgressPercentage()} className="mt-4 h-2" />
            </div>

            {/* Step Content */}
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} mb-8`}>
              <CardContent className="p-8">
                {/* Step 0: Choose Input Type */}
                {currentStep === 0 && (
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                      How would you like to input your content?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {inputTypes.map((type) => (
                        <div
                          key={type.id}
                          className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                            inputType === type.id
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : `${type.color} ${darkMode ? 'bg-gray-750' : 'bg-white'} hover:shadow-md`
                          }`}
                          onClick={() => setInputType(type.id)}
                        >
                          <div className="flex flex-col items-center text-center space-y-3">
                            {type.icon}
                            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {type.title}
                            </h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {type.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1: Add Content */}
                {currentStep === 1 && (
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                      {inputTypes.find(t => t.id === inputType)?.title}
                    </h2>
                    
                    {inputType === 'url' && (
                      <div className="space-y-4">
                        <Input
                          placeholder="Enter URL to scrape content from..."
                          value={inputContent}
                          onChange={(e) => setInputContent(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    )}

                    {inputType === 'text' && (
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Paste or type your content here..."
                          value={inputContent}
                          onChange={(e) => setInputContent(e.target.value)}
                          className="min-h-40"
                        />
                      </div>
                    )}

                    {inputType === 'keyword' && (
                      <div className="space-y-6">
                        <Input
                          placeholder="Enter keywords or topics..."
                          value={inputContent}
                          onChange={(e) => setInputContent(e.target.value)}
                          className="h-12"
                        />
                        <div>
                          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                            Trending Topics
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {trendingTopics.map((topic) => (
                              <Badge
                                key={topic}
                                variant="outline"
                                className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                                onClick={() => setInputContent(topic)}
                              >
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {inputType === 'file' && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                          Drop files here or click to upload
                        </p>
                        <Button variant="outline">Choose Files</Button>
                      </div>
                    )}

                    {inputType === 'competitor' && (
                      <div className="space-y-4">
                        <Input
                          placeholder="Enter competitor URL or company name..."
                          value={inputContent}
                          onChange={(e) => setInputContent(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Select Platforms */}
                {currentStep === 2 && (
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                      Select platforms for content generation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {platforms.map((platform) => (
                        <div
                          key={platform.id}
                          className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedPlatforms.includes(platform.id)
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : `border-gray-200 ${darkMode ? 'bg-gray-750 hover:border-gray-600' : 'bg-white hover:border-gray-300'} hover:shadow-md`
                          }`}
                          onClick={() => togglePlatform(platform.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{platform.icon}</span>
                            <div>
                              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {platform.name}
                              </h3>
                              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {platform.description}
                              </p>
                            </div>
                            {selectedPlatforms.includes(platform.id) && (
                              <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Generate Content */}
                {currentStep === 3 && (
                  <div className="text-center">
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                      Ready to generate your content
                    </h2>
                    <div className="space-y-6">
                      <div className={`p-6 ${darkMode ? 'bg-gray-750' : 'bg-gray-50'} rounded-lg`}>
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                          Content Summary
                        </h3>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                          Input Type: {inputTypes.find(t => t.id === inputType)?.title}
                        </p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                          Platforms: {selectedPlatforms.map(id => platforms.find(p => p.id === id)?.name).join(', ')}
                        </p>
                      </div>
                      
                      {isProcessing ? (
                        <div className="space-y-4">
                          <Loader className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            AI is generating your content...
                          </p>
                          <Progress value={60} className="w-full" />
                        </div>
                      ) : (
                        <Button
                          onClick={handleGenerate}
                          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg"
                        >
                          Generate Content with AI
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            {!isProcessing && (
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={nextStep}
                  disabled={!canProceed() || currentStep === steps.length - 1}
                  className="flex items-center bg-blue-600 hover:bg-blue-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContentPage;
