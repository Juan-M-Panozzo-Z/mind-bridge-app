"use client";

// Form validation
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

// Supabase
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Nextjs & React
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Radix UI
import { Section } from "@radix-ui/themes";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    const [showPassword, setShowPassword] = useState(false);

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
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo Electrónico</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="correo@ejemplo.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant={"default"} type="submit">
                        Iniciar sesión
                    </Button>
                </form>
            </Form>
        </Section>
    );
}
