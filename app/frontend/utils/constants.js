import contractStuff from "../contracts/contract.json";
import erc20abi from "../contracts/mockToken.json";

export const contractAbi = contractStuff;
export const ercTokenAbi = erc20abi;

export const mockTokenAddress = "0xe3253d2Abd5A25f07b5984EF92555e139eA36a5B";
export const ERC721MockAddress = '0x9AfFDF8A6b23f42d25EEFF5d79d2b3DEf5092D0E';
export const ERC1155MockAddress = '0xAB45D1cDDf5e32781071c94127c519510819B422';

//current
// export const contractAddress = "0xEA5228D57Cf4B8D36BD347ddEA4f7aC95dd05449";
// export const contractAddress = "0x6C92Eee89D9f68535b0da13875F4B23d6EBEac32";

export const contractAddress = "0x18107cd083DD29ba221A780a30ed98122bc2584D";


export const contractConfig = {
  address: contractAddress,
  abi: contractAbi,
  watch: true,
  chainId: 280,
};

export const contractRecklessWriteConfig = {
    address: contractAddress,
    abi: contractAbi,
    mode: "recklesslyUnprepared",
}

export const contractWriteConfig = {
    address: contractAddress,
    abi: contractAbi,
}

export const NFTABI =
    [
        {
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ]
