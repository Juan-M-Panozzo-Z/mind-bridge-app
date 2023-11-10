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
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      healthprofesionals: {
        Row: {
          created_at: string
          id: string
          licence: number
          profileId: string
          speciality: string
          startDate: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          licence: number
          profileId: string
          speciality: string
          startDate: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          licence?: number
          profileId?: string
          speciality?: string
          startDate?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "healthprofesionals_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "healthprofesionals_speciality_fkey"
            columns: ["speciality"]
            isOneToOne: false
            referencedRelation: "specialities"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string
          dateOfBirth: string | null
          du: number
          id: string
          lastname: string | null
          name: string | null
          phone: number | null
          role: string | null
          updated_at: string | null
          userId: string
        }
        Insert: {
          created_at?: string
          dateOfBirth?: string | null
          du: number
          id?: string
          lastname?: string | null
          name?: string | null
          phone?: number | null
          role?: string | null
          updated_at?: string | null
          userId: string
        }
        Update: {
          created_at?: string
          dateOfBirth?: string | null
          du?: number
          id?: string
          lastname?: string | null
          name?: string | null
          phone?: number | null
          role?: string | null
          updated_at?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_userId_fkey"
            columns: ["userId"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      specialities: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
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
