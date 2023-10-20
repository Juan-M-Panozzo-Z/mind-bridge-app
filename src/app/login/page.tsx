import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function LoginPage() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        return redirect("/");
    }

    return (
        <div>
            <form action="/auth/login" method="POST">
                <input type="text" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <button type="submit">Login</button>
                <button formAction="/auth/sign-up">Sign Up</button>
            </form>
        </div>
    );
}
