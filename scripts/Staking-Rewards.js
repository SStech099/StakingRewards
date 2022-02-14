async function main() {
    const factory = await ethers.getContractFactory("IoDexFactory");
  
    // Start deployment, returning a promise that resolves to a contract object
    const factoryContract = await factory.deploy("0xCf603aB9471cda375eBB2B04F3c05F537F1a4EeA");
    console.log("Contract deployed to address:", factoryContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });