import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for the Incase contract`);

    // Initialize the wallet.
    const wallet = new Wallet("2681881ef2ddd24cd569a5e5df1f34ac3f765f37ad7cffce76a9a7ee3c1fe7b8");

    // Create deployer object and load the artifact of the contract you want to deploy.
    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact("Incase");

    // Estimate contract deployment fee
    const deploymentFee = await deployer.estimateDeployFee(artifact, []);

    // // OPTIONAL: Deposit funds to L2
    // // Comment this block if you already have funds on zkSync.
    // const depositHandle = await deployer.zkWallet.deposit({
    //     to: deployer.zkWallet.address,
    //     token: utils.ETH_ADDRESS,
    //     amount: deploymentFee.mul(2),
    // });
    // // Wait until the deposit is processed on zkSync
    // await depositHandle.wait();

    // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
    const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
    console.log(`The deployment is estimated to cost ${parsedFee} ETH`);

    const incaseContract = await deployer.deploy(artifact, []);

    // Show the contract info.
    const contractAddress =incaseContract.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

    // Deployment Of Mock Token //
    const mock_artifact = await deployer.loadArtifact("MockToken");

    const MockToken_Contract = await deployer.deploy(mock_artifact, []);

    //Show the contract Info.
    const mockContractAddress = MockToken_Contract.address;
    console.log(`${mock_artifact.contractName} was deployed to ${mockContractAddress}`);
}