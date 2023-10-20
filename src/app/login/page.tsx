import { Container, Section } from "@radix-ui/themes";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        return redirect("/");
    }

    return (
        <Section className="min-h-screen grid place-content-center">
            <Container className="border rounded p-4">
                <form action="/auth/login" method="POST">
                    <input type="text" name="email" />
                    <input type="password" name="password" />
                    <button type="submit">Login</button>
                </form>
            </Container>
        </Section>
    );
}
