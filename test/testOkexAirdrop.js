async function main() {

/** 
const { expect } = require('chai')
const { ethers } = require('hardhat')
const truffleAssert = require('truffle-assertions')
const itemsFacet = require('../artifacts/contracts/Aavegotchi/facets/ItemsFacet.sol/ItemsFacet.json')

const account1= "0xF23f6Bd1a912c34D1d06C3989441D88Ec0204917"

describe("checkBalance", function(){

it("Should increment current allocated token balance by 1", async function(){
  const userCurrentWearables= await itemsFacet.itemBalances(account1)
}


})
**/
const diamondAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d'

const items = await ethers.getContractAt('contracts/Aavegotchi/facets/ItemsFacet.sol:ItemsFacet', diamondAddress)

const account1= "0x7887829d28c2dc8C22BdFBa8325B14C2453cB4B6"

  const userCurrentWearables= await items.itemBalancesWithTypes(account1)
  console.log(userCurrentWearables);


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
 