import SectionComponent from "@/components/ui/section";
import { Container, Flex, Text } from "@radix-ui/themes";

export default function CirclePage() {
    const title = "Círculo";

    return (
        <section className="md:col-span-3">
            <SectionComponent>
                <Container size={"4"} className="px-4">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                    </Flex>
                </Container>
            </SectionComponent>
        </section>
    );
}
