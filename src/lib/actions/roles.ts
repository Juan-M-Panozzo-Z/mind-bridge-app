import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Database } from '../database.types';

const supabase = createServerActionClient<Database>({ cookies });

export const getRoles = async () => {
    const {
        data,
        error
    } = await supabase.from('roles').select('*').neq('name', 'admin');
    if (error) return;
    return data;
    };


export const getRole = async (id: string) => {
    const { data, error } = await supabase.from('roles').select('*').eq('id', id).single();
    if (error) return;
    return data;
    }
    