// scripts/deploy.js
async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const contract = await MyContract.deploy(10, 20); // Pass constructor arguments
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  