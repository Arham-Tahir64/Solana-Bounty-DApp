import type { Metadata } from "next";
import "./globals.css";
import WalletContextProvider from "./providers"; 

export const metadata: Metadata = {
  title: "Solana DApp",
  description: "A Next.js Solana Wallet Integration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider> {/* ✅ Ensure modal provider is wrapped */}
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
