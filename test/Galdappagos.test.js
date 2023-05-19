const { expect } = require("chai");
const { ethers } = require("hardhat");
const { SignerWithAddress } = require('@openzeppelin/test-helpers');
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");


describe("Galdappagos", function () {
    let galdappagos;
    let owner;
    let otherAccount;
    let otherAccount2;


    beforeEach(async () => {
        const Galdappagos = await ethers.getContractFactory("Galdappagos");
        galdappagos = await Galdappagos.deploy();

        await galdappagos.deployed();

        console.log("Galdappagos deployed to:", galdappagos.address);

    });

    it("Should has the correct name and symbol", async function () {
        const [owner, otherAccount] = await ethers.getSigners();

        const total = await galdappagos.balanceOf(owner.address);
        expect(total).to.equal(0);
        expect(await galdappagos.name()).to.equal('Galdappagos');
        expect(await galdappagos.symbol()).to.equal('GAPPG');
    });



    it("should mint a token and set the correct owner and URI", async () => {
        const [owner, otherAccount] = await ethers.getSigners();
        const uri = "token-uri";

        await galdappagos.safeMint(otherAccount.address, uri);

        const tokenId = 0;

        const totalSupply = await galdappagos.totalSupply();
        expect(totalSupply.toNumber()).to.equal(1);

        const ownerToken = await galdappagos.ownerOf(tokenId);
        expect(ownerToken).to.equal(otherAccount.address);

        const tokenUri = await galdappagos.tokenURI(tokenId);
        expect(tokenUri).to.equal(uri);
    });

    /* 
    it("should not allow minting tokens by non-owners", async () => {
        const [, otherAccount,otherAccount2] = await ethers.getSigners();
        const to = otherAccount;
        const from = otherAccount2;
        const uri = "token-uri";

        await expect(
            galdappagos.safeMint(to.address, uri, { from: from.address })
        ).to.be.revertedWith("Ownable: caller is not the owner");

        const totalSupply = await galdappagos.totalSupply();
        expect(totalSupply.toNumber()).to.equal(0);
    });

    */


    it("should return the correct token balance for an address", async () => {
        const [owner, otherAccount] = await ethers.getSigners();
        const uri = "token-uri";

        await galdappagos.safeMint(otherAccount.address, uri);

        const balance = await galdappagos.balanceOf(otherAccount.address);
        expect(balance.toNumber()).to.equal(1);
    });

    /*
  
    it("should return the correct token ID for the given index", async () => {
      const to = accounts[1];
      const uri = "token-uri";
  
      await galdappagos.safeMint(to, uri);
  
      const tokenId = 0;
      const retrievedTokenId = await galdappagos.tokenByIndex(0);
      expect(retrievedTokenId.toNumber()).to.equal(tokenId);
    });
  
    it("should return the correct total supply of tokens", async () => {
      const to = accounts[1];
      const uri1 = "token-uri-1";
      const uri2 = "token-uri-2";
  
      await galdappagos.safeMint(to, uri1);
      await galdappagos.safeMint(to, uri2);
  
      const totalSupply = await galdappagos.totalSupply();
      expect(totalSupply.toNumber()).to.equal(2);
    }); */
});
