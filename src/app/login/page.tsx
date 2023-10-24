"use client";

// Form validation
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

// Supabase
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Nextjs & React
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Radix UI
import { Section } from "@radix-ui/themes";

// Shadcn UI

// Types
const FormSchema = z.object({
    email: z.string().email({
        message: "Por favor, ingrese un correo electrónico válido",
    }),
    password: z.string().min(8, {
        message: "La contraseña debe tener al menos 8 caracteres",
    }),
});

export default function LoginPage() {
    const router = useRouter();
    const supabase = createClientComponentClient();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values);
    };

    useEffect(() => {
        (async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            if (session) {
                router.push("/");
            }
        })();
    }, [supabase, router]);

    return (
        <Section className="min-h-screen grid place-content-center">
            <p>login</p>
        </Section>
    );
}
