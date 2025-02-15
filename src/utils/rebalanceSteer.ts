import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { Chain } from "@thirdweb-dev/chains";

const CeloAlfajores: Chain = {
  chainId: 44787,
  chain: "CELO",
  name: "Celo Alfajores",
  shortName: "alfajores",
  slug: "celo-alfajores",
  testnet: true,
  nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
  rpc: ["https://alfajores-forno.celo-testnet.org"],
  explorers: [
    { name: "CeloScan", url: "https://alfajores.celoscan.io", standard: "EIP3091" }, // ✅ Fixed
  ],
};

const sdk = new ThirdwebSDK(CeloAlfajores, {
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

export async function rebalanceWithSteer(walletAddress: string, strategyId: number, params: string) {
  const contract = await sdk.getContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!);
  return await contract.call("rebalanceWithSteer", [strategyId, params], { from: walletAddress });
}
