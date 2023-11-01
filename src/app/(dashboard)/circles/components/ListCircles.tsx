import { deleteCircle, fetchCirclesByOwner } from "@/lib/actions/circles";

import { Box, Container, Flex, Text } from "@radix-ui/themes";
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

import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function ListCircles() {
    const title = "Círculos";
    const description =
        "Aquí podrás ver los círculos que has creado y eliminarlos";

    const circles = await fetchCirclesByOwner();
    return (
        <Suspense fallback={<Skeleton className="min-h-[150px]" />}>
            <SectionComponent>
                <Container size={"4"} className="px-4">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                        <Text size={"1"} className="text-foreground/70">
                            {description}
                        </Text>
                    </Flex>
                    {circles.length > 0 ? (
                        <Table className="mt-4">
                            <TableCaption>
                                Circulos creados por el usuario
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>Paciente</TableHead>
                                    <TableHead>Creación</TableHead>
                                    <TableHead>Ver más</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {circles.map((circle) => (
                                    <TableRow key={circle.id}>
                                        <TableCell>{circle.name}</TableCell>
                                        <TableCell>{circle.patient}</TableCell>
                                        <TableCell>
                                            {
                                                circle.created_at
                                                    .toString()
                                                    .split("T")[0]
                                            }
                                        </TableCell>
                                        <TableCell>
                                            <Link
                                                href={`/circles/${circle.id}`}
                                            >
                                                <Button variant={"ghost"}>
                                                    <ArrowRight className="text-foreground/80" />
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <Box className="flex justify-center items-center mt-4">
                            <Text size={"1"}>No hay círculos creados</Text>
                        </Box>
                    )}
                </Container>
            </SectionComponent>
        </Suspense>
    );
}
