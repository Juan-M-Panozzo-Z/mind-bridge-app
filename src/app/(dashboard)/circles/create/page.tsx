import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionComponent from "@/components/ui/section";
import { insertCircle } from "@/lib/actions/circles";
import { Box, Container, Flex, Section, Text } from "@radix-ui/themes";
import Link from "next/link";

export default async function createCircle() {
    const title = "Crear círculo";
    const description =
        "Aquí podrás crear un circulo de colegas junto a las familias de un paciente";

    return (
        <Section className="md:col-span-3">
            <SectionComponent>
                <Container size={"4"} className="px-4">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                        <Text size={"1"} className="text-foreground/70">
                            {description}
                        </Text>
                    </Flex>
                    <form action={insertCircle} className="space-y-4 mt-4">
                        <Input type="text" name="name" placeholder="Nombre" />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                        />

                        <Box className="space-x-2">
                            <Button type="submit">Crear</Button>
                            <Link href={"/circles"}>
                                <Button variant={"secondary"}>Cancelar</Button>
                            </Link>
                        </Box>
                    </form>
                </Container>
            </SectionComponent>
        </Section>
    );
}
