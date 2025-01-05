import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_PRIVATE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;