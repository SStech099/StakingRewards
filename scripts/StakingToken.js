async function main() {
    const StakingERC20 = await ethers.getContractFactory("StakingToken");
  
    // Start deployment, returning a promise that resolves to a contract object
    const StakingContractERC20 = await StakingERC20.deploy();
    console.log("Contract deployed to address:", StakingContractERC20.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //0xDd97a5ea87ba48cA2850465C298a65b82E06A969