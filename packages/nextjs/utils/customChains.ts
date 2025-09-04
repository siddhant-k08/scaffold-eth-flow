import { defineChain } from "viem";

// TODO: Add Chain details here.
export const flowTestnet = defineChain({
  id: 545,
  name: "Flow Testnet",
  nativeCurrency: { name: "Flow", symbol: "FLOW", decimals: 18 },
  rpcUrls: {
    default: {
      // TODO: Add Flow RPC URL
      http: [process.env.NEXT_PUBLIC_FLOW_RPC_URL || "https://testnet.evm.nodes.onflow.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Flow Testnet Explorer",
      // TODO: Add Explorer URL
      url: "https://evm-testnet.flowscan.io/",
    },
  },
});
