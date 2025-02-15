import axios from "axios";
import { getUniswapLiquidity } from "./uniswap";

export async function getRebalanceStrategy(walletAddress: string) {
  try {
    const positions = await getUniswapLiquidity(walletAddress); // Fetch user’s Uniswap liquidity
    if (!positions.length) return "No active liquidity positions found.";

    const response = await axios.post(
      process.env.NEXT_PUBLIC_GAIA_AI_ENDPOINT!,
      {
        action: "rebalance",
        positions: positions, // Send Uniswap positions to Gaia
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GAIA_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.strategy; // Returns AI strategy
  } catch (error) {
    console.error("Error fetching rebalancing strategy:", error);
    return "AI strategy not available.";
  }
}
