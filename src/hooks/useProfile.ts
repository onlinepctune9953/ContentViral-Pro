
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url?: string | null;
  plan_type?: string;
  credits_remaining?: number;
  credits_limit?: number;
  onboarding_completed?: boolean;
  profile_completion_percentage?: number;
  created_at?: string;
  updated_at?: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) throw new Error('No user found');
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      
      // Map the existing users table data to our Profile interface
      return {
        id: data.id,
        email: data.email,
        full_name: data.full_name,
        plan_type: data.plan_type || 'FRONTEND',
        credits_remaining: 100, // Default values since we're using existing structure
        credits_limit: 100,
        onboarding_completed: false,
        profile_completion_percentage: 50
      } as Profile;
    },
    enabled: !!user?.id,
  });

  const queryClient = useQueryClient();

  const updateProfile = useMutation({
    mutationFn: async (updates: Partial<Profile>) => {
      if (!user?.id) throw new Error('No user found');
      
      const { data, error } = await supabase
        .from('users')
        .update({
          full_name: updates.full_name,
          email: updates.email,
        })
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.id] });
    },
  });

  return {
    profile,
    isLoading,
    error,
    updateProfile: updateProfile.mutate,
    isUpdating: updateProfile.isPending,
  };
};
