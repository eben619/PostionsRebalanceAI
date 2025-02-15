** RebalanceAI - AI-Powered Liquidity Rebalancer

RebalanceAI is an autonomous liquidity rebalancing platform that optimizes Uniswap liquidity positions using AI-driven strategies. It integrates Steer Protocol, StakeKit, and Chainlink price feeds to monitor, analyze, and adjust liquidity in real-time, ensuring capital efficiency and automated treasury management.

** AI-Powered Liquidity Rebalancing – Uses Gaia AI to determine optimal rebalancing strategies.

✅ Multi-Protocol Integration – Supports Uniswap, StakeKit, and Steer Protocol for strategy execution.
✅ Automated Pre-Approval System – Allows users to sign transactions in advance for seamless execution.
✅ Real-Time Market Data – Fetches live price data using Chainlink oracles.
✅ User-Friendly Dashboard – View active liquidity positions, rebalancing status, and past transactions.
✅ Wallet Connectivity – Supports MetaMask, Coinbase Wallet, Rainbow, Rabby, and Zerion via Thirdweb.

** Tech Stack

Frontend: Next.js, TypeScript, TailwindCSS
Blockchain: Solidity, Ethers.js, Thirdweb SDK
AI Integration: Gaia AI
Protocols Used: Uniswap v3, Steer Protocol, StakeKit
Oracles: Chainlink Price Feeds


** Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/eben619/rebalance-ai.git

2️⃣ Install Dependencies

npm install
# OR
yarn install

** Create .env.local

You need to set up environment variables in a .env.local file at the root of your project:

NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
NEXT_PUBLIC_CONTRACT_ADDRESS=your_liquidity_contract_address
NEXT_PUBLIC_CHAINFLOW_API_KEY=your_chainflow_api_key
NEXT_PUBLIC_STAKEKIT_API_KEY=your_stakekit_api_key
NEXT_PUBLIC_CHAINLINK_ORACLE_URL=your_chainlink_oracle_endpoint

4️⃣ Run the Development Server
npm run dev
# OR
yarn dev

** Environment Variables Explanation

Variable	                                          Description
NEXT_PUBLIC_THIRDWEB_CLIENT_ID	Thirdweb Client ID for wallet authentication.
NEXT_PUBLIC_CONTRACT_ADDRESS	Address of the smart contract handling rebalancing.
NEXT_PUBLIC_CHAINFLOW_API_KEY	API key for interacting with Chainflow services.
NEXT_PUBLIC_STAKEKIT_API_KEY	API key for StakeKit protocol integration.
NEXT_PUBLIC_CHAINLINK_ORACLE_URL	Chainlink oracle URL for fetching real-time price data.


