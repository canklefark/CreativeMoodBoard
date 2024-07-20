import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) throw new Error('Missing env.PUBLIC_SUPABASE_URL');
if (!supabaseAnonKey) throw new Error('Missing env.PUBLIC_SUPABASE_ANON_KEY');

console.log('Initializing Supabase client with URL:', supabaseUrl);

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
