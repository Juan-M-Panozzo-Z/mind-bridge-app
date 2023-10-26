import { Box, Section } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { BrainCog, LogOut } from "lucide-react";

export default function Navbar() {
    return (
        <section className="bg-background p-4 border-b">
            <div className="md:container mx-auto flex justify-between items-center">
                <Box className="flex gap-1 items-center text-foreground/80">
                    <BrainCog />
                    <h1 className="text-lg">Mind Bridge</h1>
                </Box>
                <form action="auth/logout" method="POST">
                    <Button size={"icon"} variant={"ghost"}>
                        <LogOut />
                    </Button>
                </form>
            </div>
        </section>
    );
}
