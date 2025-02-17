import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-uniswap-dark to-black">
      <Header />
      <Dashboard />
    </div>
  );
};

export default Index;