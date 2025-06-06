
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, TrendingUp, Target, BarChart3, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type ViralContentAnalyzerProps = {
  darkMode: boolean;
};

const ViralContentAnalyzer: React.FC<ViralContentAnalyzerProps> = ({ darkMode }) => {
  const [niche, setNiche] = useState('');
  const [competitorUrl, setCompetitorUrl] = useState('');
  const [customContent, setCustomContent] = useState('');
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'trends' | 'competitor' | 'score'>('trends');

  const analyzeTrends = async () => {
    if (!niche.trim()) {
      toast({
        title: "Error",
        description: "Please enter a niche to analyze.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const prompt = `Analyze viral content trends for the "${niche}" niche. Provide:

1. Top 5 trending topics this month
2. Most engaging content formats
3. Best posting times and frequency
4. Popular hashtags and keywords
5. Content gaps and opportunities
6. Viral content patterns and hooks

Format the response as a comprehensive analysis with actionable insights.`;

      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { 
          prompt,
          content_type: 'trend_analysis',
          title: `Viral Trends Analysis: ${niche}`
        }
      });

      if (error) throw error;

      setAnalysisResults({
        type: 'trends',
        niche: niche,
        content: data.content,
        score: Math.floor(Math.random() * 20) + 80 // Mock viral score 80-100
      });

      toast({
        title: "Analysis Complete!",
        description: "Viral content trends analyzed successfully.",
      });

    } catch (error) {
      console.error('Error analyzing trends:', error);
      toast({
        title: "Error",
        description: "Failed to analyze trends. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const analyzeCompetitor = async () => {
    if (!competitorUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a competitor URL to analyze.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const prompt = `Analyze the competitor content strategy for: ${competitorUrl}

Provide insights on:
1. Their top-performing content types
2. Posting frequency and timing
3. Engagement strategies and patterns
4. Content themes and topics
5. Gaps in their strategy you can exploit
6. Best practices to replicate
7. Recommendations for outperforming them

Note: This is a simulated analysis based on common patterns for this type of content.`;

      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { 
          prompt,
          content_type: 'competitor_analysis',
          title: `Competitor Analysis: ${competitorUrl}`,
          input_type: 'competitor'
        }
      });

      if (error) throw error;

      setAnalysisResults({
        type: 'competitor',
        url: competitorUrl,
        content: data.content,
        score: Math.floor(Math.random() * 25) + 75 // Mock competitive score 75-100
      });

      toast({
        title: "Analysis Complete!",
        description: "Competitor analysis completed successfully.",
      });

    } catch (error) {
      console.error('Error analyzing competitor:', error);
      toast({
        title: "Error",
        description: "Failed to analyze competitor. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const scoreContent = async () => {
    if (!customContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter content to score.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const prompt = `Analyze this content for viral potential and provide a detailed score:

Content to analyze:
${customContent}

Provide:
1. Overall viral score (0-100)
2. Emotional impact rating
3. Shareability factors
4. Engagement potential
5. Improvement suggestions
6. Hashtag recommendations
7. Best platforms for this content
8. Optimal posting times

Be specific and actionable in your recommendations.`;

      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { 
          prompt,
          content_type: 'viral_score',
          title: 'Content Viral Score Analysis'
        }
      });

      if (error) throw error;

      setAnalysisResults({
        type: 'score',
        content: data.content,
        originalContent: customContent,
        score: Math.floor(Math.random() * 30) + 70 // Mock score 70-100
      });

      toast({
        title: "Scoring Complete!",
        description: "Content viral potential analyzed successfully.",
      });

    } catch (error) {
      console.error('Error scoring content:', error);
      toast({
        title: "Error",
        description: "Failed to score content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Viral Potential';
    if (score >= 80) return 'High Potential';
    if (score >= 70) return 'Good Potential';
    return 'Needs Work';
  };

  return (
    <div className="space-y-6">
      <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
        <CardHeader>
          <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
            <TrendingUp className="mr-2 h-5 w-5" />
            Viral Content Analyzer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-1 mb-6">
            {[
              { key: 'trends', label: 'Trend Analysis', icon: TrendingUp },
              { key: 'competitor', label: 'Competitor Analysis', icon: Search },
              { key: 'score', label: 'Content Scoring', icon: BarChart3 }
            ].map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={activeTab === key ? "default" : "outline"}
                onClick={() => setActiveTab(key as any)}
                className="flex-1"
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>

          {activeTab === 'trends' && (
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Niche/Industry
                </label>
                <Input
                  placeholder="e.g., fitness, digital marketing, cooking..."
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className={`${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
                />
              </div>
              <Button onClick={analyzeTrends} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Trends...
                  </>
                ) : (
                  <>
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Analyze Viral Trends
                  </>
                )}
              </Button>
            </div>
          )}

          {activeTab === 'competitor' && (
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Competitor URL or Username
                </label>
                <Input
                  placeholder="e.g., @competitor_account or website.com"
                  value={competitorUrl}
                  onChange={(e) => setCompetitorUrl(e.target.value)}
                  className={`${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
                />
              </div>
              <Button onClick={analyzeCompetitor} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Competitor...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Analyze Competitor
                  </>
                )}
              </Button>
            </div>
          )}

          {activeTab === 'score' && (
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Content to Score
                </label>
                <Textarea
                  placeholder="Paste your content here to get a viral potential score..."
                  value={customContent}
                  onChange={(e) => setCustomContent(e.target.value)}
                  rows={6}
                  className={`${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
                />
              </div>
              <Button onClick={scoreContent} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Scoring Content...
                  </>
                ) : (
                  <>
                    <Target className="mr-2 h-4 w-4" />
                    Score Viral Potential
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {analysisResults && (
        <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Analysis Results
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">
                  Score: {analysisResults.score}/100
                </Badge>
                <Badge className={getScoreColor(analysisResults.score)}>
                  {getScoreLabel(analysisResults.score)}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} whitespace-pre-wrap`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {analysisResults.content}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ViralContentAnalyzer;
