import { Box } from "@radix-ui/themes";
import { CircleDashed } from "lucide-react";

export default function Loading() {
    return (
        <Box className="min-h-screen grid place-content-center text-center">
            <CircleDashed className="animate-spin w-24 h-24 text-background/70 text-center ease-linear" />
        </Box>
    );
}
