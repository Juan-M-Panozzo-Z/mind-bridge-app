import SectionComponent from "@/components/ui/section";
import { Skeleton } from "@/components/ui/skeleton";
import { getRole } from "@/lib/actions/roles";
import { Container, Flex, Text } from "@radix-ui/themes";
import { Suspense } from "react";

export default async function SetHealthprof() {
    const role = await getRole();
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
                </Container>
                </Suspense>
            </SectionComponent>
        )
    } else {
        return;
    }
}