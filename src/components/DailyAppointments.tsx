"use client";
import { useState } from "react";

import { Box, Container, Flex, Text } from "@radix-ui/themes";
import SectionComponent from "./ui/section";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import Modal from "./Modal";

export default function DailyAppointments() {
    const [open, setOpen] = useState(false);

    const title = "Encuentros del día";
    const description = "Aquí podrás ver los encuentros que tienes y realizar un seguimiento de los mismos."

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
                            <Search size={24} />
                        </Button>
                    </Box>
                </Box>
            </Container>
            <Modal open={open} setOpen={setOpen} title={title} description={description} />
        </SectionComponent>
    );
}
