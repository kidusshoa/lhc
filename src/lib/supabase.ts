import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types.ts";

const supabaseUrl = "https://jxhkurbulaaenzbjhwoc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4aGt1cmJ1bGFhZW56Ympod29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMDk3OTUsImV4cCI6MjAzOTU4NTc5NX0.D1zjB9UD8tcQLd4g1NGLo1Xx4eaWrttPn8lrc2dJvyA";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
