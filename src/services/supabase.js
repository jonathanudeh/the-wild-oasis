import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pkllcdpzloyqqdpzibbc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrbGxjZHB6bG95cXFkcHppYmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NTkxNjcsImV4cCI6MjA3NzQzNTE2N30.L_xUpmQfPHTfinsFeBdZzRJasQrd3U0x5KmQk2i6cjg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
