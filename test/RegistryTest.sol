// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/UserRegistry.sol";

contract UserRegistryTest {
    UserRegistry userRegistry;

    function beforeEach() public {
        userRegistry = new UserRegistry();
    }

    function testRegisterUser() public {
        // Register a user
        address wallet = address(0x123);
        userRegistry.registerUser(wallet);

        // Verify the user is registered
        address registeredUser = userRegistry.walletToUser(wallet);
        Assert.equal(registeredUser, msg.sender, "User should be registered");
    }
}