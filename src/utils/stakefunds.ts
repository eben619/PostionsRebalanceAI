import { ethers } from "ethers";
import { StakeKitSDK } from "@stakekit/sdk";

const STAKEKIT_API_KEY = process.env.NEXT_PUBLIC_STAKEKIT_API_KEY;

if (!STAKEKIT_API_KEY) {
  throw new Error("StakeKit API key is missing. Set NEXT_PUBLIC_STAKEKIT_API_KEY in .env.local");
}

const stakeKit = new StakeKitSDK({ apiKey: STAKEKIT_API_KEY });

/**
 * Deposit funds into StakeKit yield strategies.
 */
export async function depositFunds(walletAddress: string, amount: string, strategyId: string) {
  try {
    const tx = await stakeKit.deposit({
      user: walletAddress,
      strategyId,
      amount: ethers.utils.parseUnits(amount, 18), // Convert to wei
    });

    console.log("Deposit transaction:", tx);
    return tx;
  } catch (error) {
    console.error("Error depositing funds:", error);
    return null;
  }
}

/**
 * Withdraw funds from StakeKit.
 */
export async function withdrawFunds(walletAddress: string, amount: string) {
  try {
    const tx = await stakeKit.withdraw({
      user: walletAddress,
      amount: ethers.utils.parseUnits(amount, 18), // Convert to wei
    });

    console.log("Withdraw transaction:", tx);
    return tx;
  } catch (error) {
    console.error("Error withdrawing funds:", error);
    return null;
  }
}

/**
 * Fetch available yield strategies from StakeKit.
 */
export async function getStakeKitStrategies() {
  try {
    const strategies = await stakeKit.getStrategies();
    return strategies;
  } catch (error) {
    console.error("Error fetching yield strategies:", error);
    return [];
  }
}
