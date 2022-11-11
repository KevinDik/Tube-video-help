import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = "https://oqofpevgcpzqcfrqnotz.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xb2ZwZXZnY3B6cWNmcnFub3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjgwNzYsImV4cCI6MTk4Mzc0NDA3Nn0.lXRpsCPh5W9s8eYI__84M1k0eMsNvImnNb9Ozu-dov8";
const supabase = createClient(PROJECT_URL, API_KEY)

export default function VideoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
        }
    }
}