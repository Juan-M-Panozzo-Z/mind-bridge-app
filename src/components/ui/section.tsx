import { Section } from "@radix-ui/themes";

export default function SectionComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Section
            size={"2"}
            className="bg-background rounded-xl border shadow-sm min-h-[150px]"
        >
            {children}
        </Section>
    );
}
