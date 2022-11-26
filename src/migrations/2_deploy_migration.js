const Auth = artifacts.require("./auth.sol");
 
module.exports = function (deployer) {
  deployer.deploy(Auth);
};