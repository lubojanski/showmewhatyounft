export interface NFTActionsContextValue {
  select: (id: string | null) => void;
}

export interface NFTStateContextValue {
  nfts: NFTwithPosition[];
  selectedId: string | null;
  history: NFTwithPosition[];
}

export interface NFT {
  tokenId: string;
  name: string;
  image: {
    cachedUrl: string;
    contentType: string;
    originalUrl: string;
    pngUrl: string;
    size: number;
    thumbnailUrl: string;
  };
}

export type NFTwithPosition = NFT & {
  position: [x: number, y: number, z: number];
};

export interface ApiResponse {
  blockHash: string;
  ownedNfts: NFT[];
}

export enum NFTActionType {
  SELECT_NFT = "SELECT_NFT",
  SET_NFTS = "SET_NFTS",
}

export interface SelectNFT {
  type: NFTActionType.SELECT_NFT;
  payload: string | null;
}

export interface SetNFTs {
  type: NFTActionType.SET_NFTS;
  payload: NFTwithPosition[];
}
