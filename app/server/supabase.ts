import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.NUXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);
