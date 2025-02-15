import { useEffect, useState } from "react";
import { getRebalanceStrategy } from "@/utils/gaia";
import { getETHPrice } from "@/utils/priceFeed";

export default function AIStatus() {
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStrategy() {
      setLoading(true);
      const price = await getETHPrice(); // Get current ETH price
      const strategyData = await getRebalanceStrategy(price); // Fetch AI rebalancing strategy
      setStrategy(strategyData);
      setLoading(false);
    }

    fetchStrategy();
  }, []);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h2 className="text-lg font-bold">AI Liquidity Strategy</h2>
      {loading ? (
        <p>Loading AI strategy...</p>
      ) : strategy ? (
        <p>{strategy}</p>
      ) : (
        <p>No strategy available.</p>
      )}
    </div>
  );
}
