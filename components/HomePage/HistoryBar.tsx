import { useNFTState } from "../NFTProvider/useNFT";

const HistoryBar = () => {
  const { history } = useNFTState();

  return (
    <div className="absolute w-full p-2 bottom-0 left-0 bg-white/25">
      <p className="text-black text-xl">History:</p>
      <div className="flex flex-row flex-wrap gap-2 overflow-hidden">
        {/* using i because there can be multiple images with same tokenId 
         not using nextjs/image because it is required to specify all the possible domains for the urls in the config file, and they are not known at build time
        */}
        {history.map((item, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={`selection history item - ${item.tokenId}`}
            key={`history-${i}`}
            src={item?.image.originalUrl}
            className="w-8 h-8"
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryBar;
