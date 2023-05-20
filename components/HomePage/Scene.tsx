"use client";
import { Stars } from "@react-three/drei";
import FloatingImage from "../FloatingImage";
import SelectToZoom from "./SelectToZoom";
import { useNFTState } from "../NFTProvider/useNFT";

const Scene = () => {
  const { nfts, selectedId } = useNFTState();

  return (
    <>
      <ambientLight />
      <SelectToZoom>
        {nfts?.map((nft) => (
          <FloatingImage
            key={nft.tokenId}
            id={nft.tokenId}
            imageUrl={nft.image.pngUrl}
            position={nft.position}
            selected={selectedId === nft.tokenId}
          />
        ))}
      </SelectToZoom>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};

export default Scene;
