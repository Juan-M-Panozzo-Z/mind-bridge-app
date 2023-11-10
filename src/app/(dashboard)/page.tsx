import GetProfile from "@/components/GetProfile";
import Dashboard from "./profile/components/Dashboard";
import { Flex, Section } from "@radix-ui/themes";

export default async function Home() {
    return (
        <>
            <GetProfile />
            <Section size={"1"} className="md:col-span-3 gap-4 grid md:grid-cols-2 lg:grid-cols-3">
            <Dashboard />
            </Section>
        </>
    );
}
