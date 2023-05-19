// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import esto importa ambos archivos como un símbolo global en el archivo
import * as Donation_Process from "./Donation.sol";
import * as Registry_Process from "./UserRegistry.sol";


contract Organization {
    address public owner;
    mapping(address => bool) public registeredUsers;
    mapping(address => uint256) public donations;
    mapping(address => bool) public nftClaimed;

    event UserRegistered(address user);
    event DonationReceived(address donor, uint256 amount);
    event NFTClaimed(address recipient);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerUser(address user) external onlyOwner {
        Registry_Process.registerUser(address, user);
    }

    function receiveDonation() external payable {
        require(registeredUsers[msg.sender], "User is not registered");
        require(msg.value > 0, "Donation amount must be greater than zero");

        donations[msg.sender] += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }
}