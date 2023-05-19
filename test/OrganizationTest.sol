// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Organization.sol";

contract TestOrganization {
    Organization private organization;
    address private user1;
    address private user2;

    function beforeEach() public {
        organization = new Organization();
        user1 = address(0x1);
        user2 = address(0x2);
    }

    function testUserRegistration() public {
        // Register user1
        organization.registerUser(user1);
        Assert.isTrue(organization.registeredUsers(user1), "User1 should be registered");

        // Register user2
        organization.registerUser(user2);
        Assert.isTrue(organization.registeredUsers(user2), "User2 should be registered");
    }

    function testDonationAndNFTClaim() public {
        uint256 donationAmount = 1 ether;

        // Register user1
        organization.registerUser(user1);

        // Make a donation from user1
        organization.receiveDonation{value: donationAmount}();
        Assert.equal(organization.donations(user1), donationAmount, "User1 donation amount should match");

        // Claim NFT by user1
        organization.claimNFT();
        Assert.isTrue(organization.nftClaimed(user1), "User1 should have claimed the NFT");
    }

    function testDonationWithoutRegistration() public {
        uint256 donationAmount = 1 ether;

        // Make a donation from an unregistered user
        (bool success, ) = address(organization).call{value: donationAmount}(abi.encodeWithSignature("receiveDonation()"));
        Assert.isFalse(success, "Donation from unregistered user should fail");
    }
}