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
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Types
const formSchema = z.object({
    email: z.string().email({
        message: "Por favor, ingrese un correo electrónico válido",
    }),
    password: z.string().min(8, {
        message: "La contraseña debe tener al menos 8 caracteres",
    }),
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres",
    }),
    lastName: z.string().min(2, {
        message: "El apellido debe tener al menos 2 caracteres",
    }),
    phone: z
        .string()
        .min(10, {
            message: "El teléfono debe tener al menos 10 caracteres",
        })
        .optional(),
    country: z
        .string()
        .min(2, {
            message: "El país debe tener al menos 2 caracteres",
        })
        .optional(),
});

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const supabase = createClientComponentClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            lastName: "",
            phone: "",
            country: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Section className="min-h-screen flex items-center justify-center">
            <Container size="1" className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Registro</CardTitle>
                        <CardDescription>
                            Por favor, ingrese sus datos para registrarse
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Nombre
                                                <span className="text-red-500 ml-1">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="John"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Apellido
                                                <span className="text-red-500 ml-1">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Doe"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Correo Electrónico
                                                <span className="text-red-500 ml-1">
                                                    *
                                                </span>
                                            </FormLabel>
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
                                            <FormLabel>
                                                Contraseña
                                                <span className="text-red-500 ml-1">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Box className="relative">
                                                    <Input
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        placeholder="********"
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        className="absolute top-0 right-0"
                                                        onClick={
                                                            toggleShowPassword
                                                        }
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
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Teléfono</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="1234567890"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>País</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="México"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Box className="flex flex-col gap-4">
                                    <Button type="submit">Registrarse</Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={() => router.push("/login")}
                                    >
                                        Volver al inicio de sesión
                                    </Button>
                                </Box>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </Container>
        </Section>
    );
}
