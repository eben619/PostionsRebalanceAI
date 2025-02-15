import ConnectWallet from "@/components/ConnectWallet";
import LiquidityPositions from "@/components/LiquidityPositions";
import RebalanceButton from "@/components/RebalanceButton";
import StakeFunds from "@/components/StakeFunds";
import AIStatus from "@/components/AIStatus";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Liquidity Rebalancer</h1>
      <ConnectWallet />
      <AIStatus />
      <LiquidityPositions />
      <RebalanceButton />
      <StakeFunds />
    </div>
  );
}
