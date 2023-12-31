import CreateCircle from "@/app/(dashboard)/circles/components/CreateCircle";
import { Section } from "@radix-ui/themes";
import ListCircles from "./components/ListCircles";

export default function CirclesPage() {
    return (
        <Section size={"1"} className="md:col-span-3 space-y-4">
            <CreateCircle />
            <ListCircles />
        </Section>
    );
}
