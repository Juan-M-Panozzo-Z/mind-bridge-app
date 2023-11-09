"use client";

// Form validation
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

// Supabase
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Nextjs & React
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Radix UI
import { Box, Container, Section } from "@radix-ui/themes";

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
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// HCaptcha
// import HCaptcha from "@hcaptcha/react-hcaptcha";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Lucide Icons
import { Eye, EyeOff } from "lucide-react";

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
    // const [captchaToken, setCaptchaToken] = useState();
    // const [size, setSize] = useState<"normal" | "compact">("compact");
    // const captcha = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const router = useRouter();
    const supabase = createClientComponentClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            // name: "",
            // lastName: "",
            // phone: "",
            // country: "",
        },
    });

    // useEffect(() => {
    //     getWindowsSize();
    // }, []);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const {
            data: { user },
        } = await supabase.auth.signUp({
            email: values.email,
            password: values.password,
            // options: {
            // captchaToken,
            // data: {
            // name: values.name,
            // lastName: values.lastName,
            // phone: values.phone,
            // country: values.country,
            // },
            // },
        });
        if (user) {
            // @ts-ignore
            // captcha.current?.resetCaptcha();
            setShowAlert(true);
            form.reset();
        }
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    // const getWindowsSize = () => {
    //     if (window.innerWidth <= 768) {
    //         setSize("compact");
    //     } else {
    //         setSize("normal");
    //     }
    // };

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
                                {/* <FormField
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
                                /> */}
                                {/* <FormField
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
                                /> */}
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
                                                            <Eye />
                                                        ) : (
                                                            <EyeOff />
                                                        )}
                                                    </Button>
                                                </Box>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* <FormField
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
                                /> */}
                                {/* <FormField
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
                                /> */}
                                {/* <FormItem className="flex justify-center">
                                    <HCaptcha
                                        size={size}
                                        languageOverride="es"
                                        ref={captcha as any}
                                        sitekey={
                                            process.env
                                                .NEXT_PUBLIC_HCAPTCHA_SITE_KEY!
                                        }
                                        onVerify={(token) =>
                                            setCaptchaToken(token as any)
                                        }
                                    />
                                </FormItem> */}
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
                    <CardFooter className="text-center flex justify-center">
                        <CardDescription>
                            Este sitio está protegido por{" "}
                            <Link href="https://www.hCaptcha.com">
                                hCaptcha
                            </Link>
                            <br />
                            <Link
                                href="https://hcaptcha.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Política de Privacidad
                            </Link>
                            {" | "}
                            <Link
                                href="https://hcaptcha.com/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                Términos de Servicio{" "}
                            </Link>
                        </CardDescription>
                    </CardFooter>
                </Card>
            </Container>
            <AlertDialog open={showAlert}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>¡Registro exitoso!</AlertDialogTitle>
                        <AlertDialogDescription>
                            En unos instantes vas a recibir un correo
                            electrónico para confirmar tu cuenta y poder iniciar
                            sesión.
                            <br />
                            No olvides revisar tu bandeja de spam.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setShowAlert(false)}>
                            Cerrar
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Section>
    );
}
