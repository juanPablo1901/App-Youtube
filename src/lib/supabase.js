import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://beqnearjubrdrwvrhdmx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlcW5lYXJqdWJyZHJ3dnJoZG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4MjgxMTQsImV4cCI6MjA3OTQwNDExNH0.q65lxFnfWdobiYFxpDipp845tC_PjkQrfaObNs3Qcik'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)