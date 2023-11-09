'use server';
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "../database.types";

const supabase = createServerActionClient<Database>({ cookies });


export const getProfile = async (userId: string)  => {
    const { data, error } = await supabase.from("profiles").select("*").match({ userId }).single();

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
    console.log(profile)
    const { error } = await supabase.from("profiles").upsert({
        ...profile
    })

    if (error) {
        const {error, data} = await supabase.from("profiles").update({
            ...profile
        }).match({ du: profile.du })
        console.log(error, data)
    }
}