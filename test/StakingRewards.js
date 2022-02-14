const { expect } = require("chai");
const { ethers } = require("hardhat");

let token,lpStaking,tokenStaking;
let owner,user1,user2,user3,user4,user5;

async function getAddresses() {
  [owner,user1,user2,user3,user4,user5] = await ethers.getSigners();
}
function toWei(n) {
  return ethers.utils.parseEther(n);
}

function toEth(n) {
  return ethers.utils.formatEther(n);
}

async function deploy() {
//   const Token = await ethers.getContractFactory("NFT4PlayToken");
//   token = await Token.deploy(owner.address,false);
//   await token.deployed();
  const LpStaking = await ethers.getContractFactory("StakingRewards");
  lpStaking = await LpStaking.deploy(owner.address,owner.address,token.address,token.address);
  await lpStaking.deployed();


  const TokenStaking = await ethers.getContractFactory("NFT4PlayStaking");
  tokenStaking = await TokenStaking.deploy(owner.address,owner.address,token.address);
  await tokenStaking.deployed();
  await token.transfer(user1.address,toWei("500000"));
  await token.transfer(user2.address,toWei("500000"));
  await token.transfer(user3.address,toWei("500000"));
  await token.transfer(user4.address,toWei("500000"));
  await token.transfer(user5.address,toWei("500000"));
}


describe("Deploying Contracts", async() => {

  it("Contracts Deployed", async() => {
      await getAddresses();
      await deploy();
  }).timeout("150s")
});


// describe("LP staking", function () {

//   it("check staking ", async function () {
//     await token.connect(user1).approve(lpStaking.address,toWei("200000"));
//     await lpStaking.connect(user1).stake(toWei("200000"));
//     expect(await lpStaking.balanceOf(user1.address)).to.equal(toWei("200000"));
//   });
// });


// describe("Token staking", function () {


//   it("check token staking ", async function () {
//     await token.connect(user2).approve(tokenStaking.address,toWei("250000"));
//     await tokenStaking.connect(user2).stake(toWei("250000"));
//     expect(await tokenStaking.balanceOf(user2.address)).to.equal(toWei("250000"));
//   });


//   it("check token staking ", async function () {
//     await tokenStaking.updateMinStakeAmount(toWei("100000"));
//     await token.connect(user3).approve(tokenStaking.address,toWei("100000"));
//     await tokenStaking.connect(user3).stake(toWei("100000"));
//     expect(await tokenStaking.balanceOf(user3.address)).to.equal(toWei("100000"));
//   });


// });
// describe ("Notify Reward", function () {
//     await token.connect(user4).approve(tokenStaking.address,toWei("200000"));
//     await tokenStaking.connect(user4).stake(toWei("200000"));
//     await token.connect(user5).approve(tokenStaking.address,toWei("200000"));
//     await tokenStaking.connect(user5).stake(toWei("200000"));
//     const twentytwoDays = 22 * 24 * 60 * 60;
//     await ethers.provider.send('evm_increaseTime', [twentytwoDays]);
//     await ethers.provider.send('evm_mine');
//     await token.transfer(tokenStaking.address, toWei("100"));
//     await tokenStaking.notifyRewardAmount(toWei("100"));
//     await tokenStaking.connect(user5).withdraw(toWei("100"), false);
//     const eightDays = 8 * 24 * 60 * 60;
//     await ethers.provider.send('evm_increaseTime', [eightDays]);
//     await ethers.provider.send('evm_mine');


//     //balance > minstake

//     //fee = (200000*10**18)*7/100 = 14000*10**18

//     //amount = 500000*10**18 - 14000*10**18 = 486000

//     expect(await tokenStaking.balanceOf(user4.address)).to.equal(toWei("200000"));
//     await tokenStaking.connect(user4).withdraw(toWei("200000"), true);
//     expect(await tokenStaking.balanceOf(user4.address)).to.equal(toWei("0"));
//     expect(await token.balanceOf(user4.address)).to.equal(toWei("486000"));//7% fees is charged
//     console.log(await tokenStaking.rewardEarned(user4.address));
//     await tokenStaking.connect(user4).getReward();
//     await tokenStaking.connect(user5).claim(false);
//     console.log(await tokenStaking.rewardEarned(user5.address));//the reward earned for user5(without paying fees) is less than user4
//     //this means that no reward is generated during the cooldown period
//   });

// });

