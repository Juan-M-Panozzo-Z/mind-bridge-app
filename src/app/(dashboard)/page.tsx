import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionComponent from "@/components/ui/section";
import { Skeleton } from "@/components/ui/skeleton";
import { updateMetadata } from "@/lib/actions/user";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function Home() {
    const title = "Perfil de usuario";
    const description = "Aquí podrás ver y editar tu información personal";

    const supabase = createServerComponentClient({ cookies });
    const userData = (await supabase.auth.getUser()).data.user?.user_metadata;

    return (
        <SectionComponent>
            <Suspense fallback={<Skeleton className="h-72 w-full" />}>
                <Container size={"4"} className="px-4">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                        <Text size={"1"} className="text-foreground/70">
                            {description}
                        </Text>
                    </Flex>
                    <Box className="mt-4">
                        <form action={updateMetadata} className="space-y-2">
                            <Input
                                value={userData?.role}
                                type="text"
                                placeholder="Rol de usuario"
                                name="role"
                            />
                            <Input
                                value={userData?.name}
                                type="text"
                                placeholder="Nombre"
                                name="name"
                            />
                            <Input
                                value={userData?.lastname}
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                            />
                            <Input
                                value={userData?.phone}
                                type="number"
                                placeholder="Teléfono"
                                name="phone"
                            />
                            <Input
                                value={userData?.address}
                                type="text"
                                placeholder="Dirección"
                                name="address"
                            />
                            <Input
                                value={userData?.city}
                                type="text"
                                placeholder="Ciudad"
                                name="city"
                            />
                            <Input
                                value={userData?.state}
                                type="text"
                                placeholder="Provincia"
                                name="state"
                            />
                            <Input
                                value={userData?.country}
                                type="text"
                                placeholder="País"
                                name="country"
                            />
                            <Button type="submit">Guardar</Button>
                        </form>
                    </Box>
                </Container>
            </Suspense>
        </SectionComponent>
    );
}
