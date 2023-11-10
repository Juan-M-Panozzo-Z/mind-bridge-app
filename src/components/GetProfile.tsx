import { getProfile } from "../lib/actions/profile";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import GetHealthprof from "./GetHealthprof";
import { getRole } from "@/lib/actions/roles";
import Link from "next/link";

export default async function GetProfile() {
    const role = await getRole();
    const profile = await getProfile()
    if (!profile) {
        return (
            <Link className="col-span-3" href="/profile">
                <Alert variant={"destructive"} className="bg-background">
                <AlertCircle />
                <AlertTitle>¿Primer incio de sesión?</AlertTitle>
                <AlertDescription>
                    Parece que aún no nos conocemos. Por favor, completa tu
                    perfil para poder acceder a todas las funciones que te estan
                    esperando.
                </AlertDescription>
            </Alert>
            </Link>
        );
    } else {
        if (role?.name === "profesional") return <GetHealthprof />;
    }
}
