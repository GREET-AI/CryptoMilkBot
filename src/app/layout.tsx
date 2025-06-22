import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Navbar } from "@/components/layout/navbar";
import { SolanaWalletProvider } from "@/components/providers/wallet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MilkBot - Milk Your Profits",
  description: "The ultimate Solana memecoin trading platform. Get alerts, track profits, and milk the market with @cryptokopo's signals.",
  keywords: "solana, memecoin, trading, crypto, milkbot, cryptokopo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <SolanaWalletProvider>
          <div className="min-h-screen bg-secondary/20">
            <Navbar />
            {children}
          </div>
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
