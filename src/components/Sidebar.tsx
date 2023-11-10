import { getRole } from "@/lib/actions/roles";
import {
    BrainCog,
    CircleDashed,
    Cross,
    HomeIcon,
    PanelLeftOpen,
    User,
} from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Box, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Sidebar() {
    const role = await getRole();
    return (
        <Sheet>
            <SheetTrigger>
                <Button size={"icon"} variant={"ghost"}>
                    <PanelLeftOpen />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-56">
                <SheetHeader>
                    <SheetTitle>
                        <Box className="flex gap-1 items-center text-foreground/80">
                            <BrainCog />
                            <Text size={"3"} className="font-medium">
                                Mind Bridge
                            </Text>
                        </Box>
                    </SheetTitle>
                    <SheetDescription>{role?.name}</SheetDescription>
                </SheetHeader>
                <Box className="grid gap-4 py-8">
                    <SheetClose asChild>
                        <Link href="/" className="flex items-center">
                            <HomeIcon className="mr-2" />
                            <span className="font-normal text-xs">Inicio</span>
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/" className="flex items-center">
                            <User className="mr-2" />
                            <span className="font-normal text-xs">
                                Pacientes
                            </span>
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/circles" className="flex items-center">
                            <CircleDashed className="mr-2" />
                            <span className="font-normal text-xs">
                                Circulos
                            </span>
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/" className="flex items-center">
                            <Cross className="mr-2" />
                            <span className="font-normal text-xs">
                                Evoluciones
                            </span>
                        </Link>
                    </SheetClose>
                </Box>
            </SheetContent>
        </Sheet>
    );
}
