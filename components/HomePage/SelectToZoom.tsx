import { PropsWithChildren } from "react";
import { useNFTActions, useNFTState } from "../NFTProvider/useNFT";

const SelectToZoom = ({ children }: PropsWithChildren) => {
  const { select } = useNFTActions();
  const { selectedId } = useNFTState();
  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        select(e.object.name);
      }}
      onPointerMissed={(e) => {
        if (selectedId) {
          select(null);
        }
      }}
    >
      {children}
    </group>
  );
};

export default SelectToZoom;
