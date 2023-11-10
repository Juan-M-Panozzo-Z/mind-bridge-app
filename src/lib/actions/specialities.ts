import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Database } from '../database.types';

const supabase = createServerActionClient<Database>({ cookies });

export const getSpecialities = async () => {
    const {
        data,
        error
    } = await supabase.from('specialities').select('*');
    if (error) {
        return;
    }
    
    return data;
    };
    