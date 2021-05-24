/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 require("dotenv").config();
 const HDWalletProvider = require("@truffle/hdwallet-provider");
 
 mnemonic = process.env.KEY_MNEMONIC;
 infuraKey = process.env.KEY_INFURA_API_KEY;
 
 module.exports = {
   networks: {

     development: {
       host: "127.0.0.1", // Localhost (default: none)
       port: 8545, // Standard Ethereum port (default: none)
       network_id: "*", // Any network (default: none)
     },
 
     live: {
       provider: () => new HDWalletProvider(mnemonic,  `https://mainnet.infura.io/v3/${infuraKey}`),
       network_id: 1,
       gas: 7000000,
       gasPrice: 8000000000,
     },
 
     xdai: {
       provider: function () {
          return new HDWalletProvider(mnemonic, "https://dai.poa.network"); 
      },
       network_id: 100,
       gas: 5000000,
       gasPrice: 2000000000,
     },
 
     rinkeby: {
       provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
       network_id: 4, 
       gas: 5500000, 
       confirmations: 1, 
       timeoutBlocks: 200, 
       skipDryRun: true, 
     },
 
     matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
     },
 
     oasis: {
      provider: () => new HDWalletProvider([privateKey], `https://rpc.oasiseth.org:8545`),
      network_id: 69,
      confirmations: 2,
      timeoutBlocks: 200,
      gasPrice: 0, // 1 Gwei
      gas: 20000000,
      skipDryRun: true
     },

     moonalpha: {
     provider: () => new HDWalletProvider([privateKey], `https://rpc.testnet.moonbeam.network` ),
     network_id: 1287,
     confirmations: 2,
     timeoutBlocks: 200,
     skipDryRun: true,
     gasPrice: 0, // 1 Gwei
     gas: 20000000,
    },

   },
 
   // Useful for private networks
   private: {
     provider: () => new HDWalletProvider(mnemonic, `http://127.0.0.1:8545`),
     network_id: 1512051714758, // This network is yours, in the cloud.
     production: true, // Treats this network as if it was a public net. (default: false)
   },
 
   mocha: {
     // timeout: 100000
   },
 
   // Configure your compilers
   compilers: {
     solc: {
       version: "0.6.2",
     },
   },
   solc: {
     optimizer: {
       enabled: true,
       runs: 200,
     },
   },
 };
 