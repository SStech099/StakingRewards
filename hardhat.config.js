require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
const { mnemonic } = require('./secrets.json');

module.exports = {
  networks: {
    dev: {
      url: "https://babel-api.testnet.iotex.io",
      accounts: ['6523efad680162db51ada4436f1b2fc7d58908248dfe39214f55e9c523047664'],
      chainId: 4690,
      gas: 8500000,
      gasPrice: 1000000000000
    },
  },
  solidity:{
    compilers: [{
            version: "0.6.12",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
        {
            version: "0.8.2",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 999999,
                },
            },
        },
        {
            version: "0.8.7",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    ],
},
};
