const { expect } = require("chai");
const { ethers } = require("hardhat");
const { SignerWithAddress } = require('@openzeppelin/test-helpers');
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");


describe("Galdappagos", function () {
    let galdappagos;

    beforeEach(async () => {
        const Galdappagos = await ethers.getContractFactory("Galdappagos");
        galdappagos = await Galdappagos.deploy();

        await galdappagos.deployed();

        console.log("Galdappagos deployed to:", galdappagos.address);

    });

    it("Should has the correct name and symbol", async function () {
        const [owner] = await ethers.getSigners();

        const total = await galdappagos.balanceOf(owner.address);
        expect(total).to.equal(0);
        expect(await galdappagos.name()).to.equal('Galdappagos');
        expect(await galdappagos.symbol()).to.equal('GAPPG');
    });

    it("should mint a token and set the correct owner and URI", async () => {
        const [, otherAccount] = await ethers.getSigners();
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

    
    it("should not allow minting tokens by non-owners", async function () {
        const [, otherAccount,otherAccount2] = await ethers.getSigners();
        const uri = "token-uri";

        await expect(
            galdappagos.connect(otherAccount2).safeMint(otherAccount.address, uri)
        ).to.be.revertedWith("Ownable: caller is not the owner");

        const totalSupply = await galdappagos.totalSupply();
        expect(totalSupply.toNumber()).to.equal(0);
    });

    it("should return the correct token balance for an address", async () => {
        const [, otherAccount] = await ethers.getSigners();
        const uri = "token-uri";

        await galdappagos.safeMint(otherAccount.address, uri);

        const balance = await galdappagos.balanceOf(otherAccount.address);
        expect(balance.toNumber()).to.equal(1);
    });

    it("should return the correct token ID for the given index", async () => {
        const [, otherAccount] = await ethers.getSigners();
        const uri = "token-uri";

        await galdappagos.safeMint(otherAccount.address, uri);

        const tokenId = 0;
        const retrievedTokenId = await galdappagos.tokenByIndex(0);
        expect(retrievedTokenId.toNumber()).to.equal(tokenId);
    });

    it("should return the correct total supply of tokens", async () => {
        const [, otherAccount] = await ethers.getSigners();
        
        const uri1 = "token-uri-1";
        const uri2 = "token-uri-2";

        await galdappagos.safeMint(otherAccount.address, uri1);
        await galdappagos.safeMint(otherAccount.address, uri2);

        const totalSupply = await galdappagos.totalSupply();
        expect(totalSupply.toNumber()).to.equal(2);
    });
});
