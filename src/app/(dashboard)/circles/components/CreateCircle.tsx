import { Box, Container, Flex, Text } from "@radix-ui/themes";
import SectionComponent from "@/components/ui/section";
import Create from "./FormCreateCircle";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default async function CreateCircle() {
    const title = "Crear círculo";
    const description =
        "Aquí podrás crear un circulo de colegas junto a las familias de un paciente";

    return (
        <Suspense fallback={<Skeleton className="min-h-[80px]" />}>
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
                            <Create />
                        </Box>
                    </Box>
                </Container>
            </SectionComponent>
        </Suspense>
    );
}
