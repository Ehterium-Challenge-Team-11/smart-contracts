// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Import esto importa a Galdappagos.sol como un símbolo global en el archivo
import * as NFT_Emition_Process from "./Galdappagos.sol";

contract Donation {
    address public npoAddress;
    uint256 public donationAmount;
    mapping(address => bool) public donations;
    mapping(address => bool) public nftClaimed;

    event DonationMade(address indexed donor, uint256 amount);
    event NFTClaimed(address indexed donor);

    constructor(address _npoAddress, uint256 _donationAmount) {
        npoAddress = _npoAddress;
        donationAmount = _donationAmount;
    }

    function makeDonation() public payable {
        require(msg.value >= donationAmount, "Insufficient donation amount");

        donations[msg.sender] = true;
        emit DonationMade(msg.sender, msg.value);
    }

    function claimNFT() public {
        require(donations[msg.sender], "No donation made");
        require(!nftClaimed[msg.sender], "NFT already claimed");

        // Mint and transfer NFT to the donor
        // ! TODO: Configure and ensure the correct mint process
        NFT_Emition_Process.safeMint();

        nftClaimed[msg.sender] = true;
        emit NFTClaimed(msg.sender);
    }
}