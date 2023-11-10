'use server';
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "../database.types";

const supabase = createServerActionClient<Database>({ cookies });

export const getHealthProf = async (profileId : string)  => {
    const { data, error } = await supabase.from("healthprofesionals").select("*").match({ profileId }).single();

    if (error) {
        return;
    }
    return data;
}