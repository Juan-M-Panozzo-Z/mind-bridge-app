'use server';
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
    const { data, error } = await supabase.from("healthprofesionals").select("*").match({ profileId });

    if (error) {
        return;
    }
    return data;
}