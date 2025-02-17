import { Header } from "@/components/Header";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-uniswap-dark to-black">
      <Header />
      <div className="container mx-auto p-6 space-y-8">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-2">What is Uniswap V3?</h3>
            <p className="text-uniswap-gray">
              Uniswap V3 is a decentralized exchange protocol that introduces concentrated liquidity, allowing liquidity providers to allocate capital more efficiently within specific price ranges.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-2">How do I provide liquidity?</h3>
            <p className="text-uniswap-gray">
              You can provide liquidity by clicking the "Add Liquidity" button and selecting your desired token pair and price range. Make sure you understand the concepts of concentrated liquidity before providing funds.
            </p>
          </div>
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-2">What are fee tiers?</h3>
            <p className="text-uniswap-gray">
              Fee tiers represent the percentage of each trade that goes to liquidity providers. Different fee tiers suit different token pairs based on their volatility and trading volume.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;