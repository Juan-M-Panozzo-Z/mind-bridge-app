import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { insertCircle } from "@/lib/actions/circles";
import { Plus } from "lucide-react";

export default async function Create() {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant={"ghost"}>
                    <Plus />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Crear círculo</AlertDialogTitle>
                    <AlertDialogDescription>
                        Aquí podrás crear un circulo de colegas junto a las
                        familias de un paciente
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <form action={insertCircle} className="space-y-4 mt-4">
                    <Input type="text" name="name" placeholder="Nombre" />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                    />
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction type="submit">
                            Crear
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
