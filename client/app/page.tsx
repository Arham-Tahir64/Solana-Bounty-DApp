"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"; // ✅ Import UI Button
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";

export default function Home() {
  const { publicKey, disconnect } = useWallet();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

      {/* 🔥 Solana Wallet UI */}
      <div className="flex flex-col gap-4">
        {publicKey ? (
          <div className="text-center">
            <p className="text-green-500 font-semibold">
              Connected: {publicKey.toBase58()}
            </p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => disconnect()}
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <WalletMultiButton /> // ✅ This button opens the wallet modal
        )}
      </div>
    </div>
  );
}
