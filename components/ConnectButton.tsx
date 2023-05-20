import { InjectedConnector } from "@wagmi/core";
import { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (!isConnected) {
      connect();
    }
  }, [isConnected, connect]);

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
