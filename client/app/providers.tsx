"use client";

import { ReactNode } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"; // ✅ Import Modal Provider
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

export default function WalletContextProvider({ children }: { children: ReactNode }) {
  const wallets = [new PhantomWalletAdapter()];
  const endpoint = clusterApiUrl("devnet");

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider> {/* ✅ Fix: Wrap Modal Provider */}
      </WalletProvider>
    </ConnectionProvider>
  );
}
