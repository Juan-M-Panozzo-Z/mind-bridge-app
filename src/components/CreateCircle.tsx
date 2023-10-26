import { Box, Container, Flex, Text } from "@radix-ui/themes";
import {PlusCircle} from 'lucide-react'
import { Button } from "./ui/button";
import SectionComponent from "./ui/section";

export default function CreateCircle() {
    return (
        <SectionComponent>
            <Container size={"4"} className="px-4">
                <Box className="flex items-center justify-between">
                    <Flex direction={"column"}>
                        <Text size={"2"}>Crear circulo</Text>
                        <Text size={"1"} className="text-foreground/70">
                            Aquí podrás crear un circulo de colegas junto a las
                            familias de un paciente
                        </Text>
                    </Flex>
                    <Box>
                        <Button type="button" variant={"ghost"} size={"icon"}>
                            <PlusCircle size={24} />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </SectionComponent>
    );
}
