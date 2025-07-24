import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Account = {
  id: string
  title: string
  price: number
  category: 'premium' | 'regular'
  images: string[]
  details: Record<string, string>
  created_at: string
  updated_at: string
}

export type NewsItem = {
  id: string
  content: string
  is_active: boolean
  created_at: string
}

export type BannerImage = {
  id: string
  image_url: string
  title: string
  is_active: boolean
  order_index: number
}