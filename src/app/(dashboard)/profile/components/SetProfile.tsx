import { getProfile, setProfile } from "@/lib/actions/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionComponent from "@/components/ui/section";
import { Skeleton } from "@/components/ui/skeleton";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Suspense } from "react";
import { getSession } from "@/lib/actions/session";
import { getRole, getRoles } from "@/lib/actions/roles";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import InputComponent from "@/components/Input";
import { Label } from "@/components/ui/label";

export default async function SetProfile() {
    const title = "Perfil de usuario";
    const description = "Aquí podrás ver y editar tu información personal";

    const { session } = await getSession();
    const userId = session?.user.id;
    const profile = await getProfile();
    const roles = await getRoles();
    const role = await getRole();
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
                        <form action={setProfile} className="space-y-2">
                            <Input
                                value={userId as string}
                                type="hidden"
                                name="userId"
                            />
                            <Box className="space-y-1.5">
                                <Label>Rol</Label>
                                <Select name="role">
                                    <SelectTrigger
                                        value={profile?.role as string}
                                        disabled={profile as undefined}
                                        name="role"
                                        className="w-full"
                                    >
                                        <SelectValue
                                            placeholder={
                                                role ? role.name : "Rol"
                                            }
                                        />
                                        <SelectContent>
                                            {roles?.map((role) => (
                                                <SelectItem
                                                    key={role.id}
                                                    value={role.id.toString()}
                                                    disabled={
                                                        profile as undefined
                                                    }
                                                    className="text-foreground"
                                                >
                                                    {role.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                            </Box>
                            <InputComponent
                                value={profile?.du as number}
                                label="Documento unico"
                                type="du"
                                placeholder="Documento unico"
                                name="du"
                            />
                            <InputComponent
                                value={profile?.name as string}
                                label="Nombre"
                                type="text"
                                placeholder="Nombre"
                                name="name"
                            />
                            <InputComponent
                                value={profile?.lastname as string}
                                label="Apellido"
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                            />
                            <InputComponent
                                value={profile?.dateOfBirth as string}
                                label="Fecha de nacimiento"
                                type="date"
                                placeholder="Fecha de nacimiento"
                                name="dateOfBirth"
                            />
                            <InputComponent
                                value={profile?.phone as number}
                                label="Teléfono"
                                type="number"
                                placeholder="Teléfono"
                                name="phone"
                            />
                            {/* <Input
                                value={profile?.name as string}
                                disabled={profile as undefined}
                                type="text"
                                placeholder="Nombre"
                                name="name"
                            />
                            <Input
                                value={profile?.lastname as string}
                                disabled={profile as undefined}
                                type="text"
                                placeholder="Apellido"
                                name="lastname"
                            />
                            <Input
                                value={profile?.dateOfBirth as string}
                                disabled={profile as undefined}
                                type="date"
                                placeholder="Fecha de nacimiento"
                                name="dateOfBirth"
                            />
                            <Input
                                value={profile?.phone as number}
                                disabled={profile as undefined}
                                type="number"
                                placeholder="Teléfono"
                                name="phone"
                            /> */}
                            <Button type="submit">Guardar</Button>
                        </form>
                    </Box>
                </Container>
            </Suspense>
        </SectionComponent>
    );
}
