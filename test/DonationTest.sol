// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Donation.sol";

contract DonationTest {
    DonationContract donationContract;
    address constant npoAddress = address(0x456);
    uint256 constant donationAmount = 1 ether;

    function beforeEach() public {
        donationContract = new Donation(npoAddress, donationAmount);
    }

    function testMakeDonation() public payable {
        // Make a donation
        donationContract.makeDonation{value: donationAmount}();

        // Verify the donation is recorded
        bool donationMade = donationContract.donations(msg.sender);
        Assert.equal(donationMade, true, "Donation should be recorded");
    }

    function testClaimNFT() public {
        // Make a donation
        donationContract.makeDonation{value: donationAmount}();

        // Claim NFT
        donationContract.claimNFT();

        // Verify the NFT is claimed
        bool nftClaimed = donationContract.nftClaimed(msg.sender);
        Assert.equal(nftClaimed, true, "NFT should be claimed");
    }
}

