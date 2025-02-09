import path from 'path'
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const {PRIVATE_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    core_testnet: {
      accounts: 
        ["15d0fb75571697dc368aca6f95d6d30d714794ab46ff3e9be83a94a82f5a6c59"]
      ,
      url: 'https://rpc.test2.btcs.network',
      chainId: 1114
    }
  }
};

export default config;
