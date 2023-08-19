const { expect } = require("chai");

describe("DoublyLinkedList", function () {

  beforeEach(async () => {
    const DoublyLinkedList = await ethers.getContractFactory("DoublyLinkedList");
    dll = await DoublyLinkedList.deploy();
  });

  describe("Append", () => {
    it("Should append a node to the list", async () => {
      await dll.append(1);
      const current = await dll.getAtIndex(1)
      expect(current).to.equal(1);
    });
  });

  describe("Remove", () => {
    it("should remove a node to the list", async () => {
      await dll.append(1);
      await dll.append(2);
      await dll.append(3);

      await dll.remove(1);
      const current = await dll.getAtIndex(0)
      expect(current).to.equal(2);
    })
  });
  
  describe("Get the length", () => {
    it("should return the length of the list", async () => {
      await dll.append(0);
      await dll.append(20);

      const length = await dll.getLength();

      expect(length).to.equal(2)
    });
  })
});
