import { deleteCircle, fetchCircles } from "@/lib/actions/circles";

import { Box } from "@radix-ui/themes";
import SectionComponent from "@/components/ui/section";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Trash2 } from "lucide-react";

export default async function ListCircles() {
    const circles = await fetchCircles();
    return (
        <SectionComponent>
            <Box className="flex flex-col justify-between">
                <Table>
                    <TableCaption>Circulos creados por el usuario</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Fecha de creación</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {circles.map((circle) => (
                            <TableRow key={circle.id}>
                                <TableCell>{circle.name}</TableCell>
                                <TableCell>
                                    {circle.created_at.toString().split("T")[0]}
                                </TableCell>
                                <TableCell align="right">
                                    <form
                                        action={deleteCircle}
                                        className="inline-block"
                                    >
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={circle.id}
                                        />
                                        <Button variant={"ghost"}>
                                            <Trash2 />
                                        </Button>
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </SectionComponent>
    );
}
