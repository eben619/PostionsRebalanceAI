export async function fetchGaiaRebalanceParams() {
    const response = await fetch("https://api.gaia.com/rebalance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GAIA_API_KEY}`,
      },
      body: JSON.stringify({
        strategyId: 1,
        marketData: {},
      }),
    });
  
    const data = await response.json();
    return data.rebalanceParams;
  }
  