import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url);
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const name = String(formData.get("name"));
    const lastName = String(formData.get("lastName"));
    const phone = String(formData.get("phone"));
    const country = String(formData.get("country"));
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
        cookies: () => cookieStore,
    });

    await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                name: name,
                lastName: lastName,
                phone: phone,
                country: country,
                emailRedirectTo: `${requestUrl.origin}/auth/callback`,
            },
        },
    });

    return NextResponse.redirect(requestUrl.origin, {
        status: 301,
    });
}
