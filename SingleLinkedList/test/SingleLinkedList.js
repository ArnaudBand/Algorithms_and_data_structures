const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("", function () {
  let SingleLinkedList;
  let singleLinkedList;

  beforeEach(async function () {
    SingleLinkedList = await ethers.getContractFactory("SingleLinkedList");
    singleLinkedList = await SingleLinkedList.deploy();
    // await singleLinkedList.deployed();
  });

  describe("Append", function () {
    it("should push a value to the list", async function () {
      await singleLinkedList.append(1);
      await singleLinkedList.append(2);
      await singleLinkedList.append(3);

      const secondNode = await singleLinkedList.get(1);
      expect(secondNode).to.equal(1);
    });
  });

  describe("Remove", () => {
    it("should remove a value from the list", async () => {
      await singleLinkedList.append(0);
      await singleLinkedList.append(1);
      await singleLinkedList.remove(1);
      const secondNode = await singleLinkedList.get(1);
      expect(secondNode).to.equal(0);
    });
  });

  describe("Insert", () => {
    it("should insert a value into the list", async () => {
      await singleLinkedList.append(0);
      await singleLinkedList.append(2);
      const current = await singleLinkedList.insert(1, 1);
      const secondNode = await singleLinkedList.get(1);
      expect(secondNode).to.equal(0);
    });
  });

  describe("Traversal", () => {
    it("should traverse the list", async () => {
      await singleLinkedList.append(0);
      await singleLinkedList.append(1);
      await singleLinkedList.append(2);
      await singleLinkedList.append(3);
      await singleLinkedList.append(4);
      await singleLinkedList.append(5);

      await singleLinkedList.traversal();

      const current = await singleLinkedList.get(4);

      expect(current).to.equal(3);
    });
  });

  describe("Search", () => {
    it("should search in the list", async () => {
      await singleLinkedList.append(0);
      await singleLinkedList.append(1);
      await singleLinkedList.append(2);
      await singleLinkedList.append(3);

     const current = await singleLinkedList.search(5);

      // await singleLinkedList.get(0);

      expect(current).to.equal(0);
    })
  })
});