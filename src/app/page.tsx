import Navbar from "@/components/Navbar";
import { Box, Text } from "@radix-ui/themes";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Home() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        return redirect("/login");
    }
    return (
        <main>
            <Box>
                <Text size={"5"}>Hola, {session.user.email}</Text>
            </Box>
        </main>
    );
}
