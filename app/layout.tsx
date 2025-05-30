import type { Metadata } from "next";
import "./globals.css";
import ClientQueryProvider from "@/providers/QueryClientProvider";


export const metadata: Metadata = {
    title: "State Management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ClientQueryProvider>
                    {children}
                </ClientQueryProvider>
            </body>
        </html>
    );
}
