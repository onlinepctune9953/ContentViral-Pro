
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Copy, Download, Wand2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type ContentRepurposerProps = {
  darkMode: boolean;
};

const platforms = {
  'twitter': { name: 'Twitter/X', limit: 280, format: 'thread' },
  'linkedin': { name: 'LinkedIn', limit: 3000, format: 'professional' },
  'instagram': { name: 'Instagram', limit: 2200, format: 'visual' },
  'tiktok': { name: 'TikTok', limit: 150, format: 'script' },
  'youtube': { name: 'YouTube', limit: 5000, format: 'description' },
  'facebook': { name: 'Facebook', limit: 63206, format: 'engaging' },
  'pinterest': { name: 'Pinterest', limit: 500, format: 'pin' },
  'reddit': { name: 'Reddit', limit: 40000, format: 'discussion' }
};

const ContentRepurposer: React.FC<ContentRepurposerProps> = ({ darkMode }) => {
  const [originalContent, setOriginalContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [repurposedContent, setRepurposedContent] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleRepurpose = async () => {
    if (!originalContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter some content to repurpose.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPlatforms.length === 0) {
      toast({
        title: "Error", 
        description: "Please select at least one platform.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const results: {[key: string]: string} = {};

    try {
      for (const platform of selectedPlatforms) {
        const platformInfo = platforms[platform as keyof typeof platforms];
        
        const prompt = `Repurpose the following content for ${platformInfo.name}:

Original Content:
${originalContent}

Requirements:
- Platform: ${platformInfo.name}
- Character limit: ${platformInfo.limit}
- Format style: ${platformInfo.format}
- Make it engaging and platform-appropriate
- Include relevant hashtags if applicable
- Maintain the core message but adapt the tone and style

Repurposed Content:`;

        const { data, error } = await supabase.functions.invoke('generate-content', {
          body: { 
            prompt,
            content_type: `${platform}_post`,
            title: `${platformInfo.name} Post`
          }
        });

        if (error) throw error;
        results[platform] = data.content || `Error generating content for ${platformInfo.name}`;
      }

      setRepurposedContent(results);
      toast({
        title: "Success",
        description: `Content repurposed for ${selectedPlatforms.length} platform(s)!`,
      });

    } catch (error) {
      console.error('Error repurposing content:', error);
      toast({
        title: "Error",
        description: "Failed to repurpose content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (content: string, platform: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: `${platforms[platform as keyof typeof platforms].name} content copied to clipboard.`,
    });
  };

  const exportContent = () => {
    const exportData = Object.entries(repurposedContent)
      .map(([platform, content]) => {
        const platformName = platforms[platform as keyof typeof platforms].name;
        return `=== ${platformName} ===\n\n${content}\n\n`;
      })
      .join('');

    const blob = new Blob([exportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'repurposed-content.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
        <CardHeader>
          <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
            <Wand2 className="mr-2 h-5 w-5" />
            Content Repurposer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Original Content
            </label>
            <Textarea
              placeholder="Paste your blog post, article, or any content you want to repurpose..."
              value={originalContent}
              onChange={(e) => setOriginalContent(e.target.value)}
              rows={8}
              className={`${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
              Select Platforms
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Object.entries(platforms).map(([key, platform]) => (
                <Button
                  key={key}
                  variant={selectedPlatforms.includes(key) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePlatformToggle(key)}
                  className="justify-start"
                >
                  {platform.name}
                </Button>
              ))}
            </div>
          </div>

          <Button 
            onClick={handleRepurpose}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Repurposing Content...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Repurpose Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {Object.keys(repurposedContent).length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Repurposed Content
            </h3>
            <Button onClick={exportContent} variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export All
            </Button>
          </div>

          {Object.entries(repurposedContent).map(([platform, content]) => {
            const platformInfo = platforms[platform as keyof typeof platforms];
            return (
              <Card key={platform} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {platformInfo.name}
                      </CardTitle>
                      <Badge variant="secondary">
                        {content.length}/{platformInfo.limit} chars
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(content, platform)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} whitespace-pre-wrap`}>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ContentRepurposer;
