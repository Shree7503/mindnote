
import { createClient } from '@supabase/supabase-js'
// import "dotenv/config"

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrcWFnZWtvYnBxc2h2ZXBvZW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NTUxMTEsImV4cCI6MjA0MjEzMTExMX0.U9YlW7m5jz0CySIOT8zwhbq5lEb_T0l-dVjAcBrbDqM"
const SUPABASE_URL="https://ekqagekobpqshvepoeop.supabase.co"

const supabaseUrl = SUPABASE_URL
const supabaseKey = SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;