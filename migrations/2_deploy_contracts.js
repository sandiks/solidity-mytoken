var MyAdvCoin = artifacts.require("./MyAdvancedToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyAdvCoin);
};
