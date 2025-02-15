import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { defineChain } from "@thirdweb-dev/chains";

// ✅ Corrected Celo Alfajores Chain Definition
const CeloAlfajores = defineChain({
  chainId: 44787, // 🔹 Fixed: 'id' → 'chainId'
  chain: "celo-alfajores",
  name: "Celo Alfajores",
  nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
  rpc: ["https://alfajores-forno.celo-testnet.org"], // 🔹 Fixed: 'rpcUrls' → 'rpc'
  explorers: [
    { name: "CeloScan", url: "https://alfajores.celoscan.io", standard: "EIP3091" },
  ],
  testnet: true,
  shortName: "celoalf",
  slug: "celo-alfajores",
});

const sdk = new ThirdwebSDK(CeloAlfajores, {
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

export async function getLiquidityContract() {
  return await sdk.getContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!);
}
