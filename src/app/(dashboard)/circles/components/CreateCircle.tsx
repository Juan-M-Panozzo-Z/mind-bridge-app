import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import SectionComponent from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { insertCircle } from "@/lib/actions/circles";

export default async function CreateCircle() {
    const title = "Crear círculo";
    const description =
        "Aquí podrás crear un circulo de colegas junto a las familias de un paciente";

    return (
        <SectionComponent>
            <Container size={"4"} className="px-4">
                <Box className="flex flex-col justify-between">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                        <Text size={"1"} className="text-foreground/70">
                            {description}
                        </Text>
                    </Flex>
                    <form action={insertCircle} className="space-y-4 mt-4">
                        <Input
                            type="text"
                            name="name"
                            placeholder="nombre del circulo"
                        />
                        <Input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                        />
                        <Button type="submit">Crear</Button>
                    </form>
                </Box>
            </Container>
        </SectionComponent>
    );
}
