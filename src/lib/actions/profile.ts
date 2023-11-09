'use server';
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "../database.types";

export const getProfile = async (userId: string)  => {
    const supabase = createServerActionClient<Database>({ cookies });
    const { data, error } = await supabase.from("profiles").select("*").match({ userId }).single();

    if (error) {
        return error.details;
    }
    return data;
}

export const setProfile = async (id: string, formData: FormData) => {
    const supabase = createServerActionClient<Database>({ cookies });
    const profile = {
        userId: id as string,
        du: formData.get("du") as any,
        name: formData.get("name") as string,
        lastname: formData.get("lastname") as string,
        dateOfBirth: formData.get("dateOfBirth") as any,
        email: formData.get("email") as string,
        phone: formData.get("phone") as any,
        created_at: new Date().toISOString() as string,
        updated_at: new Date().toISOString() as string
    }
    const { error } = await supabase.from("profiles").upsert({
        ...profile
    })

    if (error) {
        throw error;
    }
}