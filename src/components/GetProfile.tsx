import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/lib/database.types";
import { getProfile } from "../lib/actions/profile";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle, ArrowRight } from "lucide-react";

export default async function GetProfile() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;
    const response = await getProfile(userId as string);

    if (!response) {
        return (
            <Alert className="col-span-3">
                <AlertCircle />
                <AlertTitle>¿Primer incio de sesión?</AlertTitle>
                <AlertDescription>
                    Parece que aún no nos conocemos. Por favor, completa tu
                    perfil para poder acceder a todas las funciones que te estan
                    esperando.
                </AlertDescription>
            </Alert>
        );
    }

    return;
}
