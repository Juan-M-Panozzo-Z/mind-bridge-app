import InputComponent from "@/components/Input";
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
import { FormControl, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { insertCircle } from "@/lib/actions/circles";
import { Box } from "@radix-ui/themes";
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
                    <InputComponent label="Nombre" name="name" type="text" />
                    <InputComponent label="Paciente" name="patient" type="text" />
                    <InputComponent label="Contraseña" name="password" type="password" />
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
