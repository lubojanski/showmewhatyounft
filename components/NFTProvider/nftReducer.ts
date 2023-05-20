import {
  NFTActionType,
  NFTStateContextValue,
  SelectNFT,
  SetNFTs,
} from "./types";

export default function nftReducer(
  state: NFTStateContextValue,
  action: SelectNFT | SetNFTs
): NFTStateContextValue {
  switch (action.type) {
    case NFTActionType.SET_NFTS: {
      return {
        ...state,
        nfts: action.payload,
      };
    }
    case NFTActionType.SELECT_NFT: {
      const newSelected =
        state.selectedId === action.payload ? null : action.payload;

      const newHistoryElement =
        newSelected && state.nfts.find((nft) => nft.tokenId === action.payload);

      const newHistory = newHistoryElement
        ? [...state.history, newHistoryElement]
        : state.history;

      return {
        ...state,
        selectedId: newSelected,
        history: newHistory,
      };
    }
    default:
      return state;
  }
}
