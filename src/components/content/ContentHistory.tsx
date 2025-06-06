
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye, Edit, Trash2, Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

interface ContentItem {
  id: string;
  title: string;
  content: string;
  content_type: string;
  created_at: string;
  user_id: string;
}

type ContentHistoryProps = {
  darkMode: boolean;
};

const ContentHistory: React.FC<ContentHistoryProps> = ({ darkMode }) => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContentHistory();
  }, []);

  const fetchContentHistory = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in to view your content history.",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from('content_jobs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Transform the data to match our interface
      const transformedData: ContentItem[] = (data || []).map(item => ({
        id: item.id,
        title: item.title || 'Untitled Content',
        content: typeof item.output === 'string' ? item.output : JSON.stringify(item.output || ''),
        content_type: item.content_type || 'article',
        created_at: item.created_at,
        user_id: item.user_id
      }));

      setContentItems(transformedData);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: "Error",
        description: "Failed to load content history.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('content_jobs')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setContentItems(prev => prev.filter(item => item.id !== id));
      toast({
        title: "Success",
        description: "Content deleted successfully.",
      });
    } catch (error) {
      console.error('Error deleting content:', error);
      toast({
        title: "Error",
        description: "Failed to delete content.",
        variant: "destructive",
      });
    }
  };

  const handleExport = (content: string, format: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `content.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredItems = contentItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg">Loading content history...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search your content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={fetchContentHistory} variant="outline">
          Refresh
        </Button>
      </div>

      {filteredItems.length === 0 ? (
        <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <CardContent className="p-8 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
              No content found
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {searchTerm ? 'No content matches your search.' : 'Start creating content to see your history here.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="secondary">{item.content_type}</Badge>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleExport(item.content, 'txt')}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-3`}>
                  {item.content.substring(0, 200)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentHistory;
