
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Search, 
  Filter, 
  Copy, 
  Edit, 
  Trash2, 
  FileText, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Calendar,
  ChevronDown,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from '@/hooks/use-toast';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

type ContentHistoryProps = {
  darkMode: boolean;
};

type ContentItem = {
  id: string;
  input_content: string;
  output_content: any;
  created_at: string;
  processing_status: string;
  platforms_generated: string[];
};

const ContentHistory: React.FC<ContentHistoryProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  
  // Fetch content jobs from Supabase
  const { data: contentItems = [], isLoading, error } = useQuery({
    queryKey: ['content-history'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_jobs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

  // Filter content based on search term and filters
  const filteredContent = contentItems.filter(item => {
    const title = item.output_content?.content || 'Untitled Content';
    const matchesSearch = searchTerm === '' || 
      title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === null || 
      item.processing_status === statusFilter;
    
    const matchesPlatform = platformFilter === null || 
      (item.platforms_generated && item.platforms_generated.includes(platformFilter));
    
    return matchesSearch && matchesStatus && matchesPlatform;
  });

  // Handle content actions
  const handleEdit = (id: string) => {
    toast({
      title: "Edit Content",
      description: `Editing content with ID ${id}`,
    });
  };

  const handleCopy = async (item: ContentItem) => {
    const content = item.output_content?.content || '';
    if (content) {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Content copied",
        description: "Content copied to clipboard",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('content_jobs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Content deleted",
        description: "Content has been deleted",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete content",
        variant: "destructive",
      });
    }
  };

  // Get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'website':
        return <FileText className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Completed
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Pending
          </Badge>
        );
      case 'failed':
        return (
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            Failed
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getContentTitle = (item: ContentItem) => {
    if (item.output_content?.content) {
      const content = item.output_content.content;
      const firstLine = content.split('\n')[0];
      return firstLine.replace(/^#\s*/, '').substring(0, 60) + (firstLine.length > 60 ? '...' : '');
    }
    return 'Untitled Content';
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Loading your content...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <AlertCircle className={`mx-auto h-12 w-12 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
        <h3 className={`mt-4 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Error loading content
        </h3>
        <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Please try refreshing the page
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Status
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                All Statuses
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setStatusFilter('completed')}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('pending')}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('failed')}>
                Failed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Platform
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setPlatformFilter(null)}>
                All Platforms
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setPlatformFilter('website')}>
                <FileText className="h-4 w-4 mr-2" />
                Website
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPlatformFilter('linkedin')}>
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPlatformFilter('twitter')}>
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPlatformFilter('instagram')}>
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <Card
              key={item.id}
              className={`p-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} hover:shadow-md transition-shadow`}
            >
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md bg-blue-100 text-blue-600`}>
                      {getPlatformIcon(item.platforms_generated?.[0] || 'website')}
                    </div>
                    <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {getContentTitle(item)}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {getStatusBadge(item.processing_status)}
                    
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Created: {new Date(item.created_at).toLocaleDateString()}
                    </span>
                    
                    {item.platforms_generated?.map((platform) => (
                      <Badge key={platform} className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(item.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleCopy(item)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-10 border rounded-lg border-dashed">
            <AlertCircle className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`mt-4 text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No content found
            </h3>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {searchTerm || statusFilter || platformFilter ? 
                'No content matches your search filters.' : 
                'You haven\'t created any content yet.'}
            </p>
            {(searchTerm || statusFilter || platformFilter) && (
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter(null);
                  setPlatformFilter(null);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentHistory;
