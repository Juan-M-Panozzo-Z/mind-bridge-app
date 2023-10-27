import { Box, Container, Flex, Text } from "@radix-ui/themes";
import SectionComponent from "./ui/section";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

export default function DailyAppointments() {
    return (
        <SectionComponent>
            <Container size={"4"} className="px-4">
                <Box className="flex items-center justify-between">
                    <Flex direction={"column"}>
                        <Text size={"2"}>Encuentros del día</Text>
                        <Text size={"1"} className="text-foreground/70">
                            Aquí podrás ver los encuentros que tienes y realizar
                            un seguimiento de los mismos.
                        </Text>
                    </Flex>
                    <Box></Box>
                </Box>
            </Container>
        </SectionComponent>
    );
}
