import {
    BrainCog,
    CircleDashed,
    Cross,
    Divide,
    HomeIcon,
    PanelLeftOpen,
    User,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger>
                <PanelLeftOpen className="mr-4" />
            </SheetTrigger>
            <SheetContent side={"left"} className="w-56">
                <SheetHeader>
                    <SheetTitle>
                        <Box className="flex gap-1 items-center text-foreground/80">
                            <BrainCog />
                            <h1 className="text-lg font-medium">Mind Bridge</h1>
                        </Box>
                    </SheetTitle>
                </SheetHeader>
                <Box className="grid gap-4 py-8">
                    <Link href="/" className="flex items-center">
                        <HomeIcon className="mr-2"/>
                        <span className="font-normal text-xs">
                            Inicio
                        </span>
                    </Link>
                    <Link href="/" className="flex items-center">
                        <User className="mr-2"/>
                        <span className="font-normal text-xs">
                            Pacientes
                        </span>
                    </Link>
                    <Link href="/" className="flex items-center">
                        <CircleDashed className="mr-2"/>
                        <span className="font-normal text-xs">
                            Circulos
                        </span>
                    </Link>
                    <Link href="/" className="flex items-center">
                        <Cross className="mr-2"/>
                        <span className="font-normal text-xs">
                            Evoluciones
                        </span>
                    </Link>
                </Box>
            </SheetContent>
        </Sheet>
    );
}
