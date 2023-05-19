// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract UserRegistry {
    mapping(address => address) public walletToUser;

    function registerUser(address wallet) public {
        require(walletToUser[wallet] == address(0), "Wallet already registered");
        walletToUser[wallet] = msg.sender;
    }
}