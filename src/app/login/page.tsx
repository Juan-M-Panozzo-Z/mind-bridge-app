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
import { Box, Container, Section } from "@radix-ui/themes";
import { EyeClosedIcon, EyeOpenIcon, UpdateIcon } from "@radix-ui/react-icons";

// Shadcn UI
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        (async () => {
            const { error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });
            if (error) {
                form.setError("email", {
                    message:
                        "El correo electrónico o la contraseña son incorrectos",
                });
                form.setError("password", {
                    message:
                        "El correo electrónico o la contraseña son incorrectos",
                });
            } else {
                router.push("/");
            }
        })();
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

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <Section className="min-h-screen grid place-content-center">
            <Container size="2" className="p-4">
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
                                    <Box className="relative">
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            {...field}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            className="absolute top-0 right-0"
                                            onClick={toggleShowPassword}
                                        >
                                            {showPassword ? (
                                                <EyeOpenIcon />
                                            ) : (
                                                <EyeClosedIcon />
                                            )}
                                        </Button>
                                    </Box>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        disabled={isLoading}
                        variant={"default"}
                        type="submit"
                    >
                        {isLoading && (
                            <UpdateIcon className="animate-spin w-4 h-4 mr-2" />
                        )}
                        Iniciar sesión
                    </Button>
                </form>
            </Form>
            </Container>
        </Section>
    );
}
