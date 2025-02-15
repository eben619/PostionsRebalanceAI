import axios from "axios";

const UNISWAP_API_URL = "https://api.uniswap.org/v1/liquidityPositions";

export async function getUniswapLiquidity(walletAddress: string) {
  try {
    const response = await axios.get(`${UNISWAP_API_URL}?owner=${walletAddress}`);
    return response.data.positions; // Returns active liquidity positions
  } catch (error) {
    console.error("Error fetching Uniswap positions:", error);
    return [];
  }
}
