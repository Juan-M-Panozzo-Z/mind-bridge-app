import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionComponent from "@/components/ui/section";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { getHealthProf, setHealthProf } from "@/lib/actions/healthprof";
import { getRole } from "@/lib/actions/roles";
import { getSpecialities } from "@/lib/actions/specialities";
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Suspense } from "react";

export default async function SetHealthprof() {
    const role = await getRole();
    const healthprof = await getHealthProf();
    const specialities = await getSpecialities();
    const title = "Perfil de profesional";
    const description = "Aquí podrás ver y editar tu información profesional";

    if (role?.name === "profesional") {
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
                            <form action={setHealthProf} className="space-y-2">
                                <Input
                                value={healthprof?.licence}
                                    type="number"
                                    name="licence"
                                    placeholder="Licencia"
                                />
                                <Select name="speciality">
                                    <SelectTrigger
                                    value={healthprof?.speciality as string}
                                        name="speciality"
                                        className="w-full"
                                    >
                                        <SelectValue
                                            placeholder={
                                                healthprof?.specialities
                                                    ? healthprof?.specialities.name
                                                    : "Especialidad"
                                            }
                                        />
                                        <SelectContent>
                                            {specialities?.map(
                                                (speciality) => (
                                                    <SelectItem
                                                        key={speciality.id}
                                                        value={speciality.id.toString()}
                                                        className="text-foreground"
                                                    >
                                                        {speciality.name}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                                <Input
                                value={healthprof?.startDate}
                                    type="date"
                                    name="startDate"
                                    placeholder="Fecha de inicio"
                                />
                                <Button type="submit">Guardar</Button>
                            </form>
                        </Box>
                    </Container>
                </Suspense>
            </SectionComponent>
        );
    } else {
        return;
    }
}
