import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function Navbar() {
    return (
        <div className="bg-slate-100 p-2 shadow-b-lg">
            <div className="container mx-auto flex justify-end">
                <form action="auth/logout" method="POST">
                    <button className="bg-slate-400 p-2 rounded-lg text-white">
                        Logout
                    </button>
                </form>
            </div>
        </div>
    );
}
