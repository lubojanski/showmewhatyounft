import { createContext } from "react";
import { NFTActionsContextValue, NFTStateContextValue } from "./types";

export const NFTActionsContext = createContext<
  NFTActionsContextValue | undefined
>(undefined);

export const NFTStateContext = createContext<NFTStateContextValue | undefined>(
  undefined
);
