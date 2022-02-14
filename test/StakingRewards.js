const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Staking Contract", function() {

  let staking, stakingContract, rewards, rewardContract;
  let owner, addr1, addr2, addr3, addr4, addr5;



  beforeEach(async function() {
    [owner, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();

    rewards = await ethers.getContractFactory("RewardsToken");
    rewardContract = await rewards.deploy(); 

    staking = await ethers.getContractFactory("StakingRewards");
    stakingContract = await staking.deploy(owner.address, addr1.address, addr2.address, addr3.address);

    token = await ethers.getContractFactory("StakingToken");
    Token = await token.deploy();

    await Token.transfer(addr1.address, 500);
    await Token.transfer(addr2.address, 500);
    await Token.transfer(addr3.address, 500);
    await Token.transfer(addr4.address, 500);
    await Token.transfer(addr5.address, 500);
  });
  describe("Deployment", async function() {
    it("Should set the right owner", async function() {
      expect(await rewardContract.owner()).to.equal(owner.address);
    });
    it("Should set the right owner", async function() {
      expect(await Token.owner()).to.equal(owner.address);
    });
    it("Should set the right owner", async function() {
      expect(await stakingContract.owner()).to.equal(owner.address);
    });
    it("Should set the right rewardsToken addresses", async function() {
      expect (await stakingContract.rewardsToken()).to.equal(addr2.address);
    });
    it("Should set the right stakingToken addresses", async function() {
      expect (await stakingContract.stakingToken()).to.equal(addr3.address);
    });
    it("Should set the right rewardsDistribution addresses", async function() {
      expect (await stakingContract.rewardsDistribution()).to.equal(addr1.address);
    });
    it("Should transfer the staking tokens to user on deployment", async function() {
      expect(await Token.balanceOf(addr1.address)).to.equal(500)
    });
    it("Should transfer the staking tokens to user on deployment", async function() {
      expect(await Token.balanceOf(addr2.address)).to.equal(500)
    });
    it("Should have the totalSupply of tokens constant", async function() {
      expect(await Token.totalSupply()).to.equal(10000);
    });
  });  
describe("Calling functions", function() {
  it("Should transfer tokens to wallet address", async function() {
      await Token.connect(addr1).approve(stakingContract.address, 50);
      await stakingContract.connect(addr1).stake(50);
      expect(await Token.balanceOf(addr1)).to.equal(50);
      // expect(await stakingContract.balanceOf(addr1.address)).to.equal(50);
  });
});

});
  




