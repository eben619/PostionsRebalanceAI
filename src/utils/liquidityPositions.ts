export async function getUniswapLiquidity(walletAddress: string) {
    const response = await fetch(`https://api.uniswap.org/v2/liquidity/${walletAddress}`);
    const data = await response.json();
    return data.positions;
  }
  