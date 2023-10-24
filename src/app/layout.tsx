import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mind Bridge App",
    description: "Generated by Juan Manuel Panozzo Zénere",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme className="bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 min-h-screen">
                    <Navbar />
                    <main className="w-4/5 mx-auto">{children}</main>
                </Theme>
            </body>
        </html>
    );
}
