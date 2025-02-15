import { useState, useEffect } from "react";
import { getUniswapLiquidity } from "@/utils/liquidityPositions";
import { useActiveWallet } from "thirdweb/react";

export default function LiquidityPositions() {
  const wallet = useActiveWallet();
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    if (!wallet) return;

    async function fetchPositions() {
      const data = await getUniswapLiquidity(await wallet.getAddress());
      setPositions(data);
    }

    fetchPositions();
  }, [wallet]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-md w-full max-w-lg">
      <h2 className="text-lg font-bold">Your Liquidity Positions</h2>
      {positions.length === 0 ? (
        <p>No active positions found.</p>
      ) : (
        <ul>
          {positions.map((pos, index) => (
            <li key={index}>
              Pool: {pos.poolId} - Amount: {pos.amount} - Status: {pos.inRange ? "In Range" : "Out of Range"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
