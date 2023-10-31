import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabase = createServerComponentClient({ cookies });

export const fetchSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        throw error;
    }

    return data;
};
