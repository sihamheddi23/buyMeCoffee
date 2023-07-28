require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/xfEBLmD92pMmG9vm78ILgcJar-F3caXG',
      accounts: ['f833f24ca63860ad5d2c79cf5a91c0ff9d29c452a19001a67ee7a79b7b9cbff3'],
    },
  }
};
