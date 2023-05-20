import { useContext } from "react";
import { NFTActionsContext, NFTStateContext } from "./contexts";
import { NFTActionsContextValue, NFTStateContextValue } from "./types";

export * from "./types";

export function useNFTActions(): NFTActionsContextValue {
  const context = useContext(NFTActionsContext);
  if (context === undefined) {
    throw new Error("useNFTActions must be used within an NFTProvider");
  }
  return context;
}

export function useNFTState(): NFTStateContextValue {
  const context = useContext(NFTStateContext);
  if (context === undefined) {
    throw new Error("useNFTActions must be used within an NFTProvider");
  }
  return context;
}

const useNFT = {
  useNFTActions,
  useNFTState,
};

export default useNFT;
