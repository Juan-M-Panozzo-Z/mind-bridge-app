import { fetchCircles } from "@/lib/actions/circles";

import CreateCircle from "@/components/CreateCircle";
import Navbar from "@/components/Navbar";
import { Box } from "@radix-ui/themes";
export default async function CirclesPage() {
    const circles = await fetchCircles();
    console.log(circles)

    return (
        <main>
            <Navbar />
            <section className="container grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto mt-4">
                <Box className="md:col-span-3">
                    <CreateCircle />
                </Box>
            </section>
        </main>
    );
}
