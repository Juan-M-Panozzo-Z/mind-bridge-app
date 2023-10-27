import { Box, Section } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { BrainCog, LogOut } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Navbar() {
    return (
        <section className="bg-background p-4 border-b">
            <div className="mx-auto flex justify-between items-center">
                <Box className="flex gap-1 items-center text-foreground/80">
                    <Sidebar />
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
