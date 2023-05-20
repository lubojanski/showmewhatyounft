import { useQuery } from "@tanstack/react-query";
import { ReactNode, useMemo, useReducer } from "react";
import { useAccount } from "wagmi";
import { NFTActionsContext, NFTStateContext } from "./Contexts";
import {
  ApiResponse,
  NFTActionType,
  NFTActionsContextValue,
  NFTwithPosition,
} from "./types";
import { getRandomPosition } from "@/utils/getRandomPosition";
import nftReducer from "./nftReducer";

const initalState = {
  nfts: [],
  selectedId: null,
  history: [],
};

const NFTProvider = ({ children }: { children: ReactNode }) => {
  const { isConnected, address } = useAccount();

  const [state, dispatch] = useReducer(nftReducer, initalState);

  useQuery<NFTwithPosition[]>({
    queryKey: ["nft", address],
    queryFn: async () => {
      const res = await fetch(
        // TODO: use env variable
        `https://eth-mainnet.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTsForOwner?owner=0x154B4045F07B48C3B75D73a3f6C7C11Dfec95b4a&withMetadata=true&pageSize=100`
      );
      const json: ApiResponse = await res.json();
      const filteredNftsWithPosition = json.ownedNfts.reduce((acc, nft) => {
        if (nft.image.originalUrl) {
          acc.push({
            ...nft,
            position: getRandomPosition(12, 9),
          });
        }
        return acc;
      }, [] as NFTwithPosition[]);
      dispatch({
        type: NFTActionType.SET_NFTS,
        payload: filteredNftsWithPosition,
      });
      return filteredNftsWithPosition;
    },
    enabled: isConnected && !!address,
    onError: (error: any) => {
      // handle error
      console.log("Mi scusi :", error);
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
  });

  const NFTActions = useMemo<NFTActionsContextValue>(
    () => ({
      select: (id: string | null) =>
        dispatch({ type: NFTActionType.SELECT_NFT, payload: id }),
    }),
    []
  );

  return (
    <NFTStateContext.Provider value={state}>
      <NFTActionsContext.Provider value={NFTActions}>
        {children}
      </NFTActionsContext.Provider>
    </NFTStateContext.Provider>
  );
};

export default NFTProvider;
