const {ethers} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const ContractFactory = await ethers.getContractFactory("phcancer");

    const contract = await ContractFactory.deploy();

    console.log("Contract deployed to address:", contract.target);
    console.log("Contract deployed by:", deployer.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});