## ShowMeWhatYouNFT about:
This is a test assessment project.
The goal was to build a React.js application according to provided designs, 
allow users to connect their MetaMask wallet and display the NFTs as animations using Three.js

Technologies used:

Next.js - to fit the technology used by the company, but also as personal favourite starter.
Wagmi.sh - react hooks to connect to web3
RainbowKit - nice UI library for wallet connection
Three.js - JavaScript 3D library
TailwindCSS - A utility-first CSS framework with atomic styles classes
React Query (Tanstack Query) - asynchronous state management

## To run locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## TODOs:

- make scene responsive
- better calculate position of the images to keep them on the screen and not stucked together
- scale down image sizes if the number of returned nfts grows
- proxy API call if needed, to hide AlchemyID
- add accessibility
