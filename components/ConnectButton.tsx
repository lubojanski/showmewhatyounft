import { InjectedConnector } from "@wagmi/core";
import { useAccount, useConnect } from "wagmi";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  if (isConnected) {
    return null;
  }

  return (
    <button
      className="bg-white p-2 rounded-sm text-black"
      onClick={() => connect()}
    >
      {isConnected ? address : "Connect"}
    </button>
  );
};

export default ConnectButton;
