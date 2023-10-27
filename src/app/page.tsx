import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateCircle from "../components/CreateCircle";
import { Box } from "@radix-ui/themes";
import DailyAppointments from "@/components/DailyAppointments";

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
            <Navbar />
            <section className="container grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-4">
                <Box className="md:col-span-1">
                    <CreateCircle />
                </Box>
                <Box className="md:col-span-2">
                    <DailyAppointments />
                </Box>
            </section>
        </main>
    );
}
