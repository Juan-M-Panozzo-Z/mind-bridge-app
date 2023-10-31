import { Box, Container, Flex, Text } from "@radix-ui/themes";
import SectionComponent from "@/components/ui/section";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CreateCircle() {
    const title = "Crear círculo";
    const description =
        "Aquí podrás crear un circulo de colegas junto a las familias de un paciente";

    return (
        <SectionComponent>
            <Container size={"4"} className="px-4">
                <Box className="flex justify-between items-center">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                        <Text size={"1"} className="text-foreground/70">
                            {description}
                        </Text>
                    </Flex>
                    <Box>
                        <Link href={"/circles/create"}>
                            <Button variant={"ghost"}>
                                <Plus />
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </SectionComponent>
    );
}
