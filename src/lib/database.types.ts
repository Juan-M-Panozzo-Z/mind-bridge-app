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
          patient: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          owner: string
          password: string
          patient?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          owner?: string
          password?: string
          patient?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "circles_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string
          dateOfBirth: string | null
          du: number
          email: string | null
          id: number
          lastname: string | null
          name: string | null
          phone: number | null
          updated_at: string
          userId: string | null
        }
        Insert: {
          created_at?: string
          dateOfBirth?: string | null
          du: number
          email?: string | null
          id?: number
          lastname?: string | null
          name?: string | null
          phone?: number | null
          updated_at?: string
          userId?: string | null
        }
        Update: {
          created_at?: string
          dateOfBirth?: string | null
          du?: number
          email?: string | null
          id?: number
          lastname?: string | null
          name?: string | null
          phone?: number | null
          updated_at?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_userId_fkey"
            columns: ["userId"]
            isOneToOne: true
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
