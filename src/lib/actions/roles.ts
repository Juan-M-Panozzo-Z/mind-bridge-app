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


export const getRole = async (id: string) => {
    const { data, error } = await supabase.from('roles').select('*').eq('id', id).single();
    if (error) return;
    return data;
    }

export const getRoleByUserId = async (userId: string) => {
    const { data, error } = await supabase.from('profiles').select('role').eq('userId', userId).single();
    if (error) return;
    const role = await getRole(data?.role as string);
    return role?.name;
    }
