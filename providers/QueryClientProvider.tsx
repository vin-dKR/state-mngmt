"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

// Create a single QueryClient instance
const queryClient = new QueryClient();

interface ClientQueryProviderProps {
    children: ReactNode;
}

export default function ClientQueryProvider({ children }: ClientQueryProviderProps) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
