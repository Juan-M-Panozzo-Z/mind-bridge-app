import { getRole } from "@/lib/actions/roles";
import { Box, Flex } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { BrainCog, Stethoscope, User2 } from "lucide-react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default async function Navbar() {
    const role = await getRole();

    return (
        <section className="bg-background p-4 border-b">
            <Flex align={"center"}>
                <Sidebar />
                <Box className="flex-grow">
                    <Link href="/">
                        <Button
                            variant={"ghost"}
                            className="text-foreground/80"
                        >
                            <BrainCog className="mr-2" />
                            <h1 className="text-lg font-normal">Mind Bridge</h1>
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                                className="text-foreground/80"
                            >
                                {role?.name === "profesional" ? (
                                    <Stethoscope />
                                ) : (
                                    <User2 />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <Link href={"/profile"}>
                                <DropdownMenuItem>Perfil</DropdownMenuItem>
                            </Link>
                            <form action="/auth/logout" method="POST">
                                <DropdownMenuItem>
                                    <button type="submit">Cerrar sesión</button>
                                </DropdownMenuItem>
                            </form>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Box>
            </Flex>
        </section>
    );
}
