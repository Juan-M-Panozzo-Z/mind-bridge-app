"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "../database.types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const supabase = createServerActionClient<Database>({ cookies });

export const fetchCircles = async () => {
    const { data, error } = await supabase.from("circles").select();

    if (error) {
        throw error;
    }

    return data;
};

export const insertCircle = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    const { data } = await supabase.auth.getSession();
    const owner = data.session?.user.id as string;

    const { error } = await supabase.from("circles").insert({
        name,
        password,
        owner,
    });

    if (error) {
        console.error(error);
        return;
    }

    return redirect("/circles");
};

export const deleteCircle = async (formData: FormData) => {
    const id = formData.get("id") as string;
    const { error } = await supabase.from("circles").delete().match({ id });

    if (error) {
        console.error(error);
        return;
    }

    return revalidatePath("/circles");
};

export const updateCircle = async (formData: FormData) => {
    const id = formData.get("id") as string;

    console.log(id);

    return;
};
