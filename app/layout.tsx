"use client";
import { WagmiConfig } from "wagmi";
import "./globals.css";
import { Inter } from "next/font/google";
import wagmiConfig from "../utils/wagmiConfig";
import NFTProvider from "../components/NFTProvider/NFTProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <NFTProvider>{children}</NFTProvider>
          </QueryClientProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
