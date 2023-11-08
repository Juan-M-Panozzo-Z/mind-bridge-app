import SectionComponent from "@/components/ui/section";
import { Box, Container, Flex, Section } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { Cross, User } from "lucide-react";

export default function FirstStepsPage() {
    return (
        <Section className="md:col-span-3 space-y-4">
            <SectionComponent>
                <Container size="4" className="px-4">
                    <Box className="grid md:grid-cols-2 gap-2">
                        <Flex
                            gap={"2"}
                            direction={"column"}
                            align={"center"}
                            className="border shadow rounded-xl p-4"
                        >
                            <Cross size={72} />
                            <Button>Soy Profesional de la salud</Button>
                        </Flex>
                        <Flex
                            gap={"2"}
                            direction={"column"}
                            align={"center"}
                            className="border shadow rounded-xl p-4"
                        >
                            <User size={72} />
                            <Button>Soy Paciente</Button>
                        </Flex>
                    </Box>
                </Container>
            </SectionComponent>
        </Section>
    );
}
