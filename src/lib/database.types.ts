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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      circles: {
        Row: {
          createdAt: string
          id: string
          name: string
          owner: string
          password: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          name: string
          owner: string
          password?: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          owner?: string
          password?: string
          updatedAt?: string
        }
        Relationships: []
      }
      patients: {
        Row: {
          createdAt: string
          dni: number
          id: string
          lastName: string
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          dni: number
          id: string
          lastName: string
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          dni?: number
          id?: string
          lastName?: string
          name?: string
          updatedAt?: string
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
