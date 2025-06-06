
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Retrieve OpenAI API key from environment variables
const openaiApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contentType, platform, promptTemplate, customInstructions, toneOfVoice, contentLength } = await req.json();

    // Create the supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get session to identify the user
    const {
      data: { session },
    } = await supabaseClient.auth.getSession();

    if (!session) {
      return new Response(
        JSON.stringify({ error: 'Authentication required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check for API key
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create system prompt based on inputs
    const systemPrompt = `You are an expert content creator specializing in ${contentType} creation for ${platform}. 
Your writing style is ${toneOfVoice} and you're creating ${contentLength} content.
You're using the ${promptTemplate} content template.

Additional custom requirements: ${customInstructions || "None provided"}

Generate high-quality, engaging content that is optimized for the platform.
Include a title, main content body, and any platform-specific elements (hashtags for social media, etc.).
Format the response in Markdown.`;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Create a ${contentType} for ${platform} about ${customInstructions || "a relevant topic"}` }
        ],
        temperature: 0.7,
        max_tokens: contentLength === 'short' ? 500 : contentLength === 'medium' ? 1000 : 2000,
      }),
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(`OpenAI API error: ${data.error.message}`);
    }

    const generatedContent = data.choices[0].message.content;

    // Save content job to database
    const { data: contentJob, error: dbError } = await supabaseClient
      .from('content_jobs')
      .insert({
        user_id: session.user.id,
        input_type: 'ai-generation',
        input_content: JSON.stringify({ 
          contentType, 
          platform, 
          promptTemplate, 
          customInstructions, 
          toneOfVoice, 
          contentLength 
        }),
        output_content: { content: generatedContent },
        processing_status: 'completed',
        platforms_generated: [platform],
        completed_at: new Date().toISOString()
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue even if DB save fails - don't block the user
    }

    // Calculate a mock quality score between 70-95
    const qualityScore = Math.floor(Math.random() * 25) + 70;

    return new Response(
      JSON.stringify({ 
        content: generatedContent,
        qualityScore,
        jobId: contentJob?.id || null
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in generate-content function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
