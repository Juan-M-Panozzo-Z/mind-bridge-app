'use server';
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "../database.types";

const supabase = createServerActionClient<Database>({ cookies });

export const getProfile= async () => {
    const userId = (await supabase.auth.getUser()).data.user?.id;
    const { data, error } = await supabase.from("profiles").select("*").match({ userId: userId }).single();
    if (error) {
        return;
    }
    return data;
}

export const setProfile = async (formData: FormData) => {
    const profile = {
        userId: formData.get("userId") as string,
        role: formData.get("role") as string,
        du: formData.get("du") as any,
        name: formData.get("name") as string,
        lastname: formData.get("lastname") as string,
        dateOfBirth: formData.get("dateOfBirth") as any,
        phone: formData.get("phone") as any,
        created_at: new Date().toISOString() as string,
        updated_at: new Date().toISOString() as string
    }
    const { error } = await supabase.from("profiles").upsert({
        ...profile
    })

    if (error?.details?.includes("already exists")) {
        const {error} = await supabase.from("profiles").update({
            ...profile
        }).match({ du: profile.du })
        if (error) {
            return;
        }
    }
    
    revalidatePath("/profile");
    return;
}