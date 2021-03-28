async function main() {

    await network.provider.request({
      method: "hardhat_reset",
      params: [{
        forking: {
          jsonRpcUrl: "https://rpc-mainnet.maticvigil.com/v1/1cfd7598e5ba6dcf0b4db58e8be484badc6ea08e",
          blockNumber: 12541740
        }
      }]
    })
  
  }
  
  main()
      .then(() => process.exit(0))
      .catch(error => {
          console.error(error)
          process.exit(1)
      })
   