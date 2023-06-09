const { expect } = require('chai');

describe('CapitalizeFirst', function () {
  let stringCapitalizer;

  before(async function () {
    const CapitalizeFirst = await ethers.getContractFactory('CapitalizeFirst');
    stringCapitalizer = await CapitalizeFirst.deploy();
  });

  it('should capitalize the first letter of each string in the array', async function () {
    const input = ['hello', 'world', 'solidity'];
    const expectedOutput = ['Hello', 'World', 'Solidity'];

    const capitalizedStrings = await stringCapitalizer.capitalizeFirst(input);
    expect(capitalizedStrings).to.deep.equal(expectedOutput);
  });

  it('should return an empty array if the input array is empty', async function () {
    const input = [];
    const expectedOutput = [];

    const capitalizedStrings = await stringCapitalizer.capitalizeFirst(input);
    expect(capitalizedStrings).to.deep.equal(expectedOutput);
  });
});
