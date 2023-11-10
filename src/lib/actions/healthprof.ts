'use server';
import { revalidatePath } from 'next/cache'
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "../database.types";
import { getProfile } from "./profile";

const supabase = createServerActionClient<Database>({ cookies });

export const getHealthProf = async () => {
    const profile = await getProfile();
    if (!profile) {
        return;
    }
    const profileId = profile?.id;
    const { data, error } = await supabase.from("healthprofesionals").select(
        `*, specialities: specialities (
            id,
            name
        )`
    ).match({ profileId: profileId }).single();

    if (error) {
        return;
    }
    return data;
}

export const setHealthProf = async (formData: FormData) => {
    const profile = await getProfile();
    if (!profile) {
        return;
    }
    const profileId = profile?.id;
    const healthprof = {
        profileId: profileId,
        licence: formData.get("licence") as unknown as number,
        speciality: formData.get("speciality") as string,
        startDate: formData.get("startDate") as any
    }
    console.log(healthprof)
    const { error, data } = await supabase.from("healthprofesionals").upsert({
        ...healthprof
    })
    
    if (error?.details?.includes("already exists")) {
        const {error} = await supabase.from("healthprofesionals").update({
            ...healthprof
        }).match({ userId: profileId })
        if (error) {
            return;
        }
    }
    
    revalidatePath("/profile");
    return;
}