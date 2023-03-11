# Inxase

```Set beneficiaries to the assets in your wallet.  tokens, ERC-1115 or  NFTs will automatically transfer upon death or loss of keys.
```

Use it was a living will or as a backup for a lost private keys, trust that your assets are not lost forever in your wallet

## documentation on how to install the integration on a dapp.
```
Using RainbowKit is One of the ways for easy and secure Integration of argent wallet by Customizing the wallet list
```

Individual wallets from '@rainbow-me/rainbowkit/wallets' can be imported, together with the connectorsForWallets function, to create your own list of wallets and connectors. This way, you have complete control over which wallets appear and in what sequence.

For example, you may specify that just argent Wallet and generic fallback wallets are displayed.

```javascript
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, mainnet } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [zkSyncTestnet],
  [
    jsonRpcProvider({
      rpc: () => ({ http: "https://zksync2-testnet.zksync.dev	" }),
    }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [ 
      argentWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      metaMaskWallet({ chains })
    ],
  },
]);
```



 [Video Demo](https://vimeo.com/807134249) | 
 [Live Site](https://zk-incase.vercel.app/dashboard) | 

 | ZKsync Era | ------ Deployments ------ |
 | --------------------------------------------- | ------------------------------------------------------------------ |
 | [Contract Address](https://goerli.explorer.zksync.io/address/0x18107cd083DD29ba221A780a30ed98122bc2584D) | 0x18107cd083DD29ba221A780a30ed98122bc2584D |
 | [mockTokenAddress](https://goerli.explorer.zksync.io/address/0xe3253d2Abd5A25f07b5984EF92555e139eA36a5B#code) | 0xe3253d2Abd5A25f07b5984EF92555e139eA36a5B |


## Run Locally

Clone the project

```bash
  git clone https://github.com/nwakaku/zk_Incase.git
```

Go to the project directory

```bash
  cd app
```

```bash
  cd frontend
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn run dev
```


## Authors

- [@Wisdom_Chris](https://www.github.com/nwakaku)


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Technologies

This project is built with the following open source libraries, frameworks and languages. User choice of framework used, available in plain js or typescript.
| Tech | Description |
| --------------------------------------------- | ------------------------------------------------------------------ |
| ------ | ------ React Frontend Environment ------ |
| [Next JS](https://nextjs.org/) | React Framework |
| ------ | ------ CSS Framework ------ |
| [Tailwind](https://tailwindcss.com/) | A utility-first CSS framework |
| ------ | ------ Ethereum Development Environment ------ |
| [Hardhat](https://hardhat.org/) | Ethereum development environment for professionals |
| ------ | ------ Included Libraries ------ |
| [WAGMI](https://wagmi.sh/) | A set of React Hooks for Web3 |
| [RainbowKit](https://www.rainbowkit.com/docs/introduction) | RainbowKit is a React library that makes it easy to add wallet connection to your dapp. |
| [ChainlinkAutomation](https://automation.chain.link/) | Automatic Execution service for your smart contracts


## Details

Connect your wallet and "Add new beneficiary"
On the model pop up you will fill in the following

`Token Address` - (token, ERC1155 or ERC721) That you want to send to the beneficiary.

`Beneficiary` - Set the address of where you want the above asset sent to.  Starts with 0x..

`Amount` - For ERC20 tokens, set how many tokens.  For ERC721 set amount to 1

`Token ID`- For tokens it is set to 0.  For ERC1155 and ERC721 tokens, token 1 and above specific to your NFT. 


Upon approving and submitting the beneficiary, you must `check in yearly` to keep the assets in current wallet or the Chainlink Automation will execute the transaction

When you set the beneficiary, an NFT with the details is sent the wallet address letting them know about the details.  When the contract executes or the beneficiary is removed the NFT will be burned.

You can remove all beneficiaries with the `remove beneficiaries` button that will clear out beneficiaries and execution data.


## Roadmap

- Drop down options for existing tokens in wallet (Pull wallet assets)

- Give a grace period before execution

- Send a reminder to email/calendar when check in date is coming up

