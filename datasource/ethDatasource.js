const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum address used for API requests
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Custom EtherDataSource class extending RESTDataSource
class EtherDataSource extends RESTDataSource {
  // Constructor sets baseURL for API requests
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Gets ETH balance for the eth_address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets total ETH supply
  async totalSupplyOfEther() {
    return this.get(`?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`);
  }

  // Gets latest ETH price
  async getLatestEthereumPrice() {
    return this.get(`?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`);
  }

  // Estimates block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
