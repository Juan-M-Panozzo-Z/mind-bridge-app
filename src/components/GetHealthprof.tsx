import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/database.types";
import { getHealthProf } from "../lib/actions/healthprof";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default async function GetHealthprof() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;
    const response = await getHealthProf(userId as string);

    if (!response) {
        return (
            <Link  className="col-span-3" href="/profile">
                <Alert variant={"destructive"} className="bg-background">
                <AlertCircle />
                <AlertTitle>Haz iniciado sesión como Profesional</AlertTitle>
                <AlertDescription>
                    Parece que aún no haz terminado de completar tus datos. Por
                    favor, completa tus datos como profesional para poder
                    acceder a todas las funciones que te estan esperando.
                </AlertDescription>
            </Alert>
            </Link>
        );
    }

    return;
}
