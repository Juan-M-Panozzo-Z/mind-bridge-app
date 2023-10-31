import CreateCircle from "@/app/(dashboard)/circles/components/CreateCircle";
import { Box, Section, Text } from "@radix-ui/themes";
import ListCircles from "./components/ListCircles";

export default function CirclesPage() {
    return (
        <Section className="md:col-span-3 space-y-4">
            <Text size={"2"}>
                Estos componentes estan en desarrollo, no tener en cuenta la UI
                preliminar
            </Text>
            <Box className="md:col-span-3">
                <CreateCircle />
            </Box>
            <Box className="md:col-span-3">
                <ListCircles />
            </Box>
        </Section>
    );
}
