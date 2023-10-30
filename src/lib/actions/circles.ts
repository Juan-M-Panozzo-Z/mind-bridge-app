"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../database.types";

const supabase = createServerComponentClient({ cookies });

export const createCircle = async (formData: FormData) => {
    const {
        data: { session },
    } = await supabase.auth.getSession();
    const owner = session?.user?.id;

    const { error } = await supabase.from("circles").insert({
        name: formData.get("name"),
        password: formData.get("password"),
        owner,
        updatedAt: new Date(),
    });

    if (error) {
        throw error;
    }

    return true;
};

export const fetchCircles = async () => {
    const { data, error } = await supabase.from("circles").select("*");

    if (error) {
        throw error;
    }

    console.log(data, error);

    return data;
};
