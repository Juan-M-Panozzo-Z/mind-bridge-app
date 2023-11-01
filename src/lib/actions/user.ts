"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "../database.types";

export const updateMetadata = async (formData: FormData) => {
    const supabase = createServerActionClient<Database>({ cookies });
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase.auth.updateUser({
        data,
    });

    if (error) {
        throw error;
    }

    return;
};
