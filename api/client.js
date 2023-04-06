// import {createClient} from '@supabase/supabase-js';

// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// const ANON_KEY = import.meta.env.VITE_ANON_KEY;

// export const supabase = createClient(SUPABASE_URL, ANON_KEY);

import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xjknlbjtailjaxpektsn.supabase.co';
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqa25sYmp0YWlsamF4cGVrdHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3Njk2MzUsImV4cCI6MTk5NDM0NTYzNX0.J5dYQ6n1BAQhxSlcjF2GMAvm0ndFRnhhD-nUBWUiU34';

export const supabase = createClient(SUPABASE_URL, ANON_KEY);
