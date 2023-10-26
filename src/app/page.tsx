import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateCircle from '../components/CreateCircle';

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
            <CreateCircle />
        </main>
    );
}
