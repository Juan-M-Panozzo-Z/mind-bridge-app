import SetProfile from "./components/SetProfile";
import SetHealthprof from "./components/SetHealthprof";
import { Section } from "@radix-ui/themes";

export default function ProfilePage() {
    return (
        <Section size={"1"} className="col-span-3 space-y-4">
            <SetProfile />
            <SetHealthprof />
        </Section>
    )
}