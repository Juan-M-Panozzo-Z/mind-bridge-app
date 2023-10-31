import { Box } from "@radix-ui/themes";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function InputComponent({
    label,
    name,
    type,
    placeholder,
}: {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
}) {
    return (
        <Box className="space-y-1.5">
            <Label>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </Box>
    );
}
