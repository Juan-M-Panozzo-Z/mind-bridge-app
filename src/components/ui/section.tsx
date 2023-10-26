import { Section } from "@radix-ui/themes";

export default function SectionComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Section className="bg-background rounded-xl border shadow-sm">
            {children}
        </Section>
    );
}
