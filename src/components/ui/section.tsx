import { Section } from "@radix-ui/themes";

export default function SectionComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Section
            size={"1"}
            className="bg-background rounded-lg drop-shadow min-h-[80px]"
        >
            {children}
        </Section>
    );
}