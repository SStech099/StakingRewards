async function main() {
    const Staking = await ethers.getContractFactory("StakingRewards");
  
    // Start deployment, returning a promise that resolves to a contract object
    const StakingContract = await Staking.deploy("", "", "", "");
    console.log("Contract deployed to address:", StakingContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
