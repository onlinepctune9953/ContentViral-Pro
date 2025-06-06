
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from '@/hooks/use-toast';

type ContentHistoryProps = {
  darkMode: boolean;
};

type ContentItem = {
  id: string;
  title: string;
  createdAt: string;
  platform: string;
  status: 'published' | 'draft' | 'scheduled' | 'archived';
  contentType: string;
  version: number;
  score: number;
};

const ContentHistory: React.FC<ContentHistoryProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  
  // Mock content history data
  const mockContentItems: ContentItem[] = [
    {
      id: '1',
      title: '10 Ways AI is Transforming Content Creation',
      createdAt: '2025-05-15',
      platform: 'blog',
      status: 'published',
      contentType: 'blog-post',
      version: 2,
      score: 92
    },
    {
      id: '2',
      title: 'The Future of Content Marketing in 2025',
      createdAt: '2025-05-12',
      platform: 'linkedin',
      status: 'published',
      contentType: 'article',
      version: 1,
      score: 87
    },
    {
      id: '3',
      title: 'How to Optimize Your Content for SEO',
      createdAt: '2025-05-10',
      platform: 'blog',
      status: 'draft',
      contentType: 'blog-post',
      version: 3,
      score: 78
    },
    {
      id: '4',
      title: 'Introducing Our New Product Line',
      createdAt: '2025-05-08',
      platform: 'twitter',
      status: 'scheduled',
      contentType: 'social-post',
      version: 1,
      score: 85
    },
    {
      id: '5',
      title: 'Content Creation Best Practices',
      createdAt: '2025-05-05',
      platform: 'instagram',
      status: 'archived',
      contentType: 'social-post',
      version: 2,
      score: 81
    }
  ];

  // Filter content based on search term and filters
  const filteredContent = mockContentItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === null || 
      item.status === statusFilter;
    
    const matchesPlatform = platformFilter === null || 
      item.platform === platformFilter;
    
    return matchesSearch && matchesStatus && matchesPlatform;
  });

  // Handle content actions
  const handleEdit = (id: string) => {
    toast({
      title: "Edit Content",
      description: `Editing content with ID ${id}`,
    });
  };

  const handleCopy = (id: string) => {
    toast({
      title: "Content copied",
      description: "Content duplicated to your drafts",
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Content deleted",
      description: "Content has been moved to trash",
      variant: "destructive",
    });
  };

  // Get platform icon
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'blog':
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
      case 'published':
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Published
          </Badge>
        );
      case 'draft':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 flex items-center gap-1">
            <Edit className="w-3 h-3" />
            Draft
          </Badge>
        );
      case 'scheduled':
        return (
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Scheduled
          </Badge>
        );
      case 'archived':
        return (
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Archived
          </Badge>
        );
      default:
        return <Badge>{status}</Badge>;
    }
  };

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
              <DropdownMenuItem onClick={() => setStatusFilter('published')}>
                Published
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('draft')}>
                Draft
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('scheduled')}>
                Scheduled
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('archived')}>
                Archived
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
              <DropdownMenuItem onClick={() => setPlatformFilter('blog')}>
                <FileText className="h-4 w-4 mr-2" />
                Blog
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
                    <div className={`p-1.5 rounded-md ${
                      item.platform === 'blog' ? 'bg-purple-100 text-purple-600' :
                      item.platform === 'linkedin' ? 'bg-blue-100 text-blue-600' :
                      item.platform === 'twitter' ? 'bg-sky-100 text-sky-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      {getPlatformIcon(item.platform)}
                    </div>
                    <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {getStatusBadge(item.status)}
                    
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Created: {item.createdAt}
                    </span>
                    
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Version: {item.version}
                    </span>
                    
                    <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {item.contentType}
                    </Badge>
                    
                    <Badge className={
                      item.score >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      item.score >= 80 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }>
                      Score: {item.score}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  <Button size="sm" variant="ghost" onClick={() => handleEdit(item.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => handleCopy(item.id)}>
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
