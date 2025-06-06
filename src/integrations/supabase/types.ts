export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      affiliate_links: {
        Row: {
          affiliate_network: string | null
          clicks: number | null
          content_job_id: string | null
          conversions: number | null
          created_at: string | null
          earnings: number | null
          id: string
          original_url: string
          product_id: string | null
          shortened_url: string | null
          user_id: string | null
        }
        Insert: {
          affiliate_network?: string | null
          clicks?: number | null
          content_job_id?: string | null
          conversions?: number | null
          created_at?: string | null
          earnings?: number | null
          id?: string
          original_url: string
          product_id?: string | null
          shortened_url?: string | null
          user_id?: string | null
        }
        Update: {
          affiliate_network?: string | null
          clicks?: number | null
          content_job_id?: string | null
          conversions?: number | null
          created_at?: string | null
          earnings?: number | null
          id?: string
          original_url?: string
          product_id?: string | null
          shortened_url?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_links_content_job_id_fkey"
            columns: ["content_job_id"]
            isOneToOne: false
            referencedRelation: "content_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_links_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_dashboard_stats"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "affiliate_links_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      content_jobs: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: string
          input_content: string | null
          input_type: string | null
          output_content: Json | null
          platforms_generated: string[] | null
          processing_status: string | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          input_content?: string | null
          input_type?: string | null
          output_content?: Json | null
          platforms_generated?: string[] | null
          processing_status?: string | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          input_content?: string | null
          input_type?: string | null
          output_content?: Json | null
          platforms_generated?: string[] | null
          processing_status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_jobs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_dashboard_stats"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "content_jobs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          affiliate_settings: Json | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          plan_type: string | null
          purchased_otos: Json | null
          stripe_customer_id: string | null
          subscription_status: string | null
          usage_limits: Json | null
        }
        Insert: {
          affiliate_settings?: Json | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          plan_type?: string | null
          purchased_otos?: Json | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
          usage_limits?: Json | null
        }
        Update: {
          affiliate_settings?: Json | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          plan_type?: string | null
          purchased_otos?: Json | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
          usage_limits?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      user_dashboard_stats: {
        Row: {
          completed_jobs: number | null
          monthly_jobs: number | null
          plan_type: string | null
          subscription_status: string | null
          total_clicks: number | null
          total_content_jobs: number | null
          total_conversions: number | null
          total_earnings: number | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      check_usage_limit: {
        Args: { user_uuid: string; limit_type: string }
        Returns: boolean
      }
      update_affiliate_stats: {
        Args: {
          link_id: string
          click_increment?: number
          conversion_increment?: number
          earning_amount?: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
