export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      circles: {
        Row: {
          created_at: string
          id: string
          name: string
          owner: string
          password: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          owner: string
          password: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          owner?: string
          password?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "circles_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
