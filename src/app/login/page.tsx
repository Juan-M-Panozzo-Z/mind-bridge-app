"use client";

// Form validation
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

// Supabase
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// HCaptcha
import HCaptcha from "@hcaptcha/react-hcaptcha";

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

// Lucide Icons
import { Eye, EyeOff } from "lucide-react";

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
    const [captchaToken, setCaptchaToken] = useState();
    const [size, setSize] = useState<"normal" | "compact">("compact");
    const captcha = useRef();

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
                options: { captchaToken },
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
                // @ts-ignore
                captcha.current?.resetCaptcha();
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

        getWindowsSize();
    }, [supabase, router]);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const isLoading = form.formState.isSubmitting;

    const getWindowsSize = () => {
        if (window.innerWidth <= 768) {
            setSize("compact");
        } else {
            setSize("normal");
        }
    };

    return (
        <Section className="min-h-screen flex items-center justify-cente">
            <Container size="1" className="p-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">
                            Bienvenido/a a MindBridge
                        </CardTitle>
                        <CardDescription>
                            Inicia sesión para continuar con tu cuenta
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
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Correo Electrónico
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

                                <FormItem className="flex justify-center">
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
                                </FormItem>

                                <Box className="flex flex-col gap-4">
                                    <Button
                                        disabled={isLoading}
                                        variant={"default"}
                                        type="submit"
                                    >
                                        Iniciar sesión
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={() => router.push("/register")}
                                    >
                                        ¿No tienes una cuenta? Regístrate
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
        </Section>
    );
}
