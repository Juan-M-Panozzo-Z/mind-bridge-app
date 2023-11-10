import { Box } from "@radix-ui/themes";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function InputComponent({
    label,
    name,
    type,
    placeholder,
    value,
}: {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    value?: any;
}) {
    return (
        <Box className="space-y-1.5">
            <Label>{label}</Label>
            <Input
                disabled={value as undefined}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </Box>
    );
}
