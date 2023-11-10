import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { Database } from '../database.types';

const supabase = createServerActionClient<Database>({ cookies });

export const getRoles = async () => {
    const {
        data,
        error
    } = await supabase.from('roles').select('*').neq('name', 'administrador');
    if (error) return;
    return data;
    };


export const getNameRole = async (id: string) => {
    const { data, error } = await supabase.from('roles').select('*').eq('id', id).single();
    if (error) return;
    return data;
    }

export const getRole = async () => {
    const userId = (await supabase.auth.getUser()).data.user?.id as string;
    const { data, error } = await supabase.from('profiles').select('role').eq('userId', userId).single();
    if (error) return;
    const role = await getNameRole(data?.role as string);
    return role;
    }
