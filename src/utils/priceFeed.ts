import axios from "axios";

export async function getETHPrice() {
  const response = await axios.get("https://api.chain.link/v1/feeds/eth-usd");
  return response.data.price;
}
