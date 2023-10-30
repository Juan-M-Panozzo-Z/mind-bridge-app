"use client";
import { useState } from "react";

import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import SectionComponent from "./ui/section";
import Modal from "./Modal";

export default function CreateCircle() {
    const [open, setOpen] = useState(false);

    const title = "Crear círculo";
    const description =
        "Aquí podrás crear un circulo de colegas junto a las familias de un paciente";

    return (
        <SectionComponent>
            <Container size={"4"} className="px-4">
                <Box className="flex items-center justify-between">
                    <Flex direction={"column"}>
                        <Text size={"2"}>{title}</Text>
                        <Text size={"1"} className="text-foreground/70">
                            {description}
                        </Text>
                    </Flex>
                    <Box>
                        <Button
                            onClick={() => setOpen(true)}
                            type="button"
                            variant={"ghost"}
                            size={"icon"}
                        >
                            <Plus size={24} />
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Modal open={open} setOpen={setOpen} title={title} description={description} />
        </SectionComponent>
    );
}
