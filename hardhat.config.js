require("@nomicfoundation/hardhat-toolbox")
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.SEPOLIA_PROJECT_ID}`,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
    }
  }
};
