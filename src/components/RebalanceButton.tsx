import { useActiveWallet } from "thirdweb/react";
import { rebalanceWithSteer } from "@/utils/rebalanceSteer";

export default function RebalanceButton() {
  const wallet = useActiveWallet();

  const handleRebalance = async () => {
    if (!wallet) {
      alert("Connect your wallet first.");
      return;
    }

    try {
      const address = await wallet.getAddress();
      const strategyId = 1;
      const newParams = await fetchGaiaRebalanceParams();

      await rebalanceWithSteer(address, strategyId, newParams);
      alert("AI-based rebalancing executed!");
    } catch (error) {
      console.error("Rebalancing failed:", error);
      alert("Rebalancing failed. Check the console for details.");
    }
  };

  return (
    <button onClick={handleRebalance} className="bg-blue-500 text-white p-2 rounded">
      Rebalance Liquidity with AI & Steer
    </button>
  );
}
