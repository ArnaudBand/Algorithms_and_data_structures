const { expect } = require("chai");

describe("DoublyLinkedList", function () {

  beforeEach(async () => {
    const DoublyLinkedList = await ethers.getContractFactory("DoublyLinkedList");
    dll = await DoublyLinkedList.deploy();
  });

  describe("Append", () => {
    it("Should append a node to the list", async () => {
      await dll.append(1);
      expect(await dll.get(1)).to.equal(1);
    });
  })
  
});
