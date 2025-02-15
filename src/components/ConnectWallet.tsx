import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

export default function ConnectWallet() {
  return (
    <div className="flex justify-center">
      <ConnectButton client={client} />
    </div>
  );
}
// 