"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../database.types";

const supabase = createServerComponentClient({ cookies });

export const fetchCircles = async () => {
    const { data, error } = await supabase.from("circles").select("*");

    if (error) {
        throw error;
    }

    return data;
};

export const createCircle = async (formData: FormData) => {
    const {
        data: { session },
    } = await supabase.auth.getSession();
    const owner = session?.user?.id;

    const { error } = await supabase.from("circles").insert({
        ...formData,
        owner,
        updatedAt: new Date(),
    });

    if (error) {
        throw error;
    }

    return true;
};

export const updateCircle = async (circleId: string, formData: FormData) => {
    const { error } = await supabase.from("circles").update({
        ...formData,
        updatedAt: new Date(),
    });

    if (error) {
        throw error;
    }

    return true;
};

export const deleteCircle = async (circleId: string) => {
    const { error } = await supabase
        .from("circles")
        .delete()
        .match({ id: circleId });

    if (error) {
        throw error;
    }

    return true;
};
