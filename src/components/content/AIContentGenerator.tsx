
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  FileText, 
  Book, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Check, 
  Edit, 
  Download, 
  RefreshCw, 
  Copy, 
  Bookmark,
  Loader,
  SendHorizontal
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Define form validation schema
const formSchema = z.object({
  contentType: z.string(),
  targetPlatform: z.string(),
  promptTemplate: z.string(),
  customInstructions: z.string().min(10, {
    message: "Instructions should be at least 10 characters.",
  }),
  toneOfVoice: z.string(),
  contentLength: z.string(),
});

type AIContentGeneratorProps = {
  darkMode: boolean;
};

const AIContentGenerator: React.FC<AIContentGeneratorProps> = ({ darkMode }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [progress, setProgress] = useState(0);
  const [contentQualityScore, setContentQualityScore] = useState<number | null>(null);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contentType: "blog-post",
      targetPlatform: "website",
      promptTemplate: "informative",
      customInstructions: "",
      toneOfVoice: "professional",
      contentLength: "medium",
    },
  });

  // Content types with icons
  const contentTypes = [
    { value: 'blog-post', label: 'Blog Post', icon: <FileText className="w-4 h-4" /> },
    { value: 'social-post', label: 'Social Media Post', icon: <Instagram className="w-4 h-4" /> },
    { value: 'article', label: 'Article', icon: <Book className="w-4 h-4" /> },
    { value: 'email', label: 'Email', icon: <SendHorizontal className="w-4 h-4" /> },
  ];

  // Platform options
  const platforms = [
    { value: 'website', label: 'Website' },
    { value: 'instagram', label: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
    { value: 'twitter', label: 'Twitter', icon: <Twitter className="w-4 h-4" /> },
    { value: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
  ];

  // Prompt templates
  const promptTemplates = [
    { value: 'informative', label: 'Informative' },
    { value: 'persuasive', label: 'Persuasive' },
    { value: 'storytelling', label: 'Storytelling' },
    { value: 'technical', label: 'Technical' },
    { value: 'promotional', label: 'Promotional' },
  ];

  // Tone options
  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'authoritative', label: 'Authoritative' },
    { value: 'humorous', label: 'Humorous' },
  ];

  // Content length options
  const contentLengths = [
    { value: 'short', label: 'Short (~300 words)' },
    { value: 'medium', label: 'Medium (~600 words)' },
    { value: 'long', label: 'Long (~1200 words)' },
    { value: 'custom', label: 'Custom Length' },
  ];

  // Function to simulate content generation
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsGenerating(true);
    setProgress(0);
    setGeneratedContent('');
    
    try {
      // Simulate AI content generation with progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 15;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 500);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3500));
      
      // Generate mock content based on selected options
      const mockContent = `# ${values.contentType === 'blog-post' ? 'Title: How AI is Transforming Content Creation' : 'Content Generated with AI'}

This is an AI-generated ${values.contentType} for ${values.targetPlatform} using the ${values.promptTemplate} template.

${getLoremIpsum(values.contentLength)}

## Key Points

* AI-driven content creation is revolutionizing marketing
* Content quality and originality remain essential
* Customization helps maintain brand voice
* ${values.toneOfVoice} tone enhances reader engagement

${values.customInstructions ? `\n## Custom Instructions Applied:\n${values.customInstructions}` : ''}`;
      
      clearInterval(progressInterval);
      setProgress(100);
      setGeneratedContent(mockContent);
      
      // Set random quality score between 70-95
      setContentQualityScore(Math.floor(Math.random() * 25) + 70);
      
      toast({
        title: "Content generated successfully!",
        description: `Your ${values.contentType} has been created.`,
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was a problem generating your content.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Helper function to generate lorem ipsum text of different lengths
  const getLoremIpsum = (length: string) => {
    const baseParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    
    switch (length) {
      case 'short': return baseParagraph;
      case 'medium': return `${baseParagraph}\n\n${baseParagraph}`;
      case 'long': return `${baseParagraph}\n\n${baseParagraph}\n\n${baseParagraph}\n\n${baseParagraph}`;
      default: return baseParagraph;
    }
  };

  const copyToClipboard = () => {
    if (!generatedContent) return;
    
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    });
  };

  const saveContent = () => {
    // Simulate saving content
    toast({
      title: "Content saved!",
      description: "Your content has been saved to history",
    });
  };

  const exportContent = (format: string) => {
    // Simulate export
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
      description: "Your file will be downloaded shortly",
    });
  };

  return (
    <div className="space-y-6">
      {!generatedContent ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Content Type */}
              <FormField
                control={form.control}
                name="contentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={darkMode ? "text-white" : ""}>Content Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select content type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {contentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center">
                              {type.icon}
                              <span className="ml-2">{type.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose what type of content you want to create
                    </FormDescription>
                  </FormItem>
                )}
              />

              {/* Target Platform */}
              <FormField
                control={form.control}
                name="targetPlatform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={darkMode ? "text-white" : ""}>Target Platform</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform.value} value={platform.value}>
                            <div className="flex items-center">
                              {platform.icon && platform.icon}
                              <span className={platform.icon ? "ml-2" : ""}>{platform.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Where will this content be published?
                    </FormDescription>
                  </FormItem>
                )}
              />

              {/* Prompt Template */}
              <FormField
                control={form.control}
                name="promptTemplate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={darkMode ? "text-white" : ""}>Prompt Template</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {promptTemplates.map((template) => (
                          <SelectItem key={template.value} value={template.value}>
                            {template.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Choose a pre-defined template for your content
                    </FormDescription>
                  </FormItem>
                )}
              />

              {/* Tone of Voice */}
              <FormField
                control={form.control}
                name="toneOfVoice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={darkMode ? "text-white" : ""}>Tone of Voice</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tones.map((tone) => (
                          <SelectItem key={tone.value} value={tone.value}>
                            {tone.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      How should your content sound?
                    </FormDescription>
                  </FormItem>
                )}
              />

              {/* Content Length */}
              <FormField
                control={form.control}
                name="contentLength"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className={darkMode ? "text-white" : ""}>Content Length</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select length" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {contentLengths.map((length) => (
                          <SelectItem key={length.value} value={length.value}>
                            {length.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      How long should your content be?
                    </FormDescription>
                  </FormItem>
                )}
              />

              {/* Custom Instructions */}
              <FormField
                control={form.control}
                name="customInstructions"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-2">
                    <FormLabel className={darkMode ? "text-white" : ""}>Custom Instructions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add specific instructions for your content..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide any additional details or requirements for your content
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>

            {/* Generation Button */}
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating Content...
                </>
              ) : (
                <>
                  Generate Content with AI
                </>
              )}
            </Button>

            {/* Progress Bar (only shown when generating) */}
            {isGenerating && (
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <p className={`text-xs text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {progress < 100 ? 'Processing your request...' : 'Finalizing content...'}
                </p>
              </div>
            )}
          </form>
        </Form>
      ) : (
        <div className="space-y-6">
          {/* Content Result */}
          <div className="flex justify-between items-center">
            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Generated Content
            </h2>
            <div className="flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" onClick={saveContent}>
                      <Bookmark className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Save to history</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" onClick={() => exportContent('pdf')}>
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Export as PDF</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="outline" onClick={() => setGeneratedContent('')}>
                      <RefreshCw className="w-4 h-4 mr-1" />
                      New
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Create new content</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {/* Content Quality Score */}
          {contentQualityScore && (
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Content Quality Score:
              </span>
              <Badge className={`${contentQualityScore >= 90 ? 'bg-green-500' : contentQualityScore >= 80 ? 'bg-blue-500' : 'bg-yellow-500'}`}>
                {contentQualityScore}/100
              </Badge>
              <Button size="sm" variant="ghost">
                <Edit className="w-3 h-3 mr-1" />
                Optimize
              </Button>
            </div>
          )}
          
          {/* Content Preview */}
          <div className={`p-6 rounded-lg border ${
            darkMode ? 'bg-gray-750 border-gray-700' : 'bg-white border-gray-200'
          } overflow-auto`} style={{ maxHeight: '500px', minHeight: '300px', whiteSpace: 'pre-wrap' }}>
            {generatedContent}
          </div>
          
          {/* Export Options */}
          <div>
            <h3 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Export Options
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={() => exportContent('pdf')}>
                PDF
              </Button>
              <Button size="sm" variant="outline" onClick={() => exportContent('docx')}>
                DOCX
              </Button>
              <Button size="sm" variant="outline" onClick={() => exportContent('html')}>
                HTML
              </Button>
              <Button size="sm" variant="outline" onClick={() => exportContent('md')}>
                Markdown
              </Button>
              <Button size="sm" variant="outline" onClick={() => exportContent('txt')}>
                Plain Text
              </Button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setGeneratedContent('')}>
              Create New Content
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Check className="w-4 h-4 mr-1" />
              Approve & Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIContentGenerator;
