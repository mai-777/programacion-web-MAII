import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://myedsktzjaefowmjmnds.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15ZWRza3R6amFlZm93bWptbmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDc2NzYsImV4cCI6MjA0MTQ4MzY3Nn0.sNlN-K-yj1hcqf8v7Np7RTmACiroKBly19DDTzk5Tzs"
);
