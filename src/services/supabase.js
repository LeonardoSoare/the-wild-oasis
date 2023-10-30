import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fnwhnqhaapnjbvcbbihp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZud2hucWhhYXBuamJ2Y2JiaWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODg3ODEsImV4cCI6MjAxMzY2NDc4MX0.QQ4CfjUKMP2xsu3_TQXgQ3pYEAVu-1g6DivyNvPy7I8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
