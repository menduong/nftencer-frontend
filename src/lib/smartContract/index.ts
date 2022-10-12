/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import BEP20FixedSupplyABI from './abi/BEP20FixedSupply';
import NFTDigitalABI from './abi/NFTDigital';
import SimpleExchangeNFTABI from './abi/SimpleExchangeNFT';

export type MiddlewareMethods = {
  [key in 'sending' | 'transactionHash' | 'receipt']?: () => void;
};

const GAS_LIMIT = process.env.GAS_LIMIT;
class SmartContract {
  private _ABI: object;
  private _address: string;
  private _account: string | null;
  private _contract: any;

  constructor(ABI: object, address: string) {
    this._account = null;
    this._ABI = ABI;
    this._address = address;
  }

  async initialize(account: string | null) {
    if (!window.web3?.eth) return;
    this._account = account;
    this._contract = await new window.web3.eth.Contract(this._ABI, this._address);
  }

  async call(method: string, ...args: any[]) {
    if (!this._contract) return;
    return this._contract.methods[method](...args).call({ from: this._account });
  }

  async send(method: string, ...args: any[]) {
    if (!this._contract || !window.web3?.eth) return;
    const gasPrice = await window.web3.eth.getGasPrice();

    return this._contract.methods[method](...args).send({
      from: this._account,
      gas: GAS_LIMIT,
      gasPrice: gasPrice,
    });
  }

  async sendWithMiddleware(method: string, middlewareMethods: MiddlewareMethods, ...args: any[]) {
    if (!this._contract || !window.web3?.eth) return;
    const gasPrice = await window.web3.eth.getGasPrice();
    return this._contract.methods[method](...args)
      .send({
        from: this._account,
        gas: GAS_LIMIT,
        gasPrice: gasPrice,
      })
      .on('sending', () => {
        middlewareMethods.sending && middlewareMethods.sending();
      })
      .on('TransactionHash', () => {
        middlewareMethods.transactionHash && middlewareMethods.transactionHash();
      })
      .on('receipt', () => {
        middlewareMethods.receipt && middlewareMethods.receipt();
    });
  }

  async sendBNB(method: string, value: number, middlewareMethods: MiddlewareMethods, ...args: any[]) {
    if (!this._contract || !window.web3?.eth) return;
    const gasPrice = await window.web3.eth.getGasPrice();
    return this._contract.methods[method](...args)
      .send({
        from: this._account,
        gas: GAS_LIMIT,
        gasPrice: gasPrice,
        value: value,
      })
      .on('sending', () => {
        middlewareMethods.sending && middlewareMethods.sending();
      })
      .on('transactionHash', () => {
        middlewareMethods.transactionHash && middlewareMethods.transactionHash();
      })
      .on('receipt', () => {
        middlewareMethods.receipt && middlewareMethods.receipt();
      });
  }

  get methods() {
    return this._contract.methods;
  }

  get account() {
    return this._account;
  }
}

export const BUSDContract = new SmartContract(BEP20FixedSupplyABI, process.env.BUSD_CONTRACT_ADDRESS || '');
export const CONTContract = new SmartContract(BEP20FixedSupplyABI, process.env.CONT_CONTRACT_ADDRESS || '');
export const NFTContract = new SmartContract(NFTDigitalABI, process.env.NFT_CONTRACT_ADDRESS || '');
export const SimpleExchangeContract = new SmartContract(
  SimpleExchangeNFTABI,
  process.env.SIMPLE_EXCHANGE_ADDRESS || ''
);

// // Follow steps to create and sell NFT token
// // 1. Upload files and json data
// // Call api to backend then receive URI of NFT token
// // 2. Create NFT on blockchain
// const player = '0x04AF59e12D4dE0A057D8E9EFAe226Ff1570b0935'; // owner NFT address
// const tokenURI = 'https://game.example/item-id-8u5h2m.json'; // URI is received when call above API
// const idNFT = NFTContract.send('create', player, tokenURI);

// // 3. Approve for sell NFT token
// const simpleExchangeAddress = '0x4F2B42b1D055506DD7b170F9992286f5c167f4EE'; // you can get the address on explorer
// NFTContract.send('approve', simpleExchangeAddress, idNFT);

// // 4. Sell NFT token on SimpleExchange
// // note BMP token have 2 decimals so if you want to set price = 100 BMP
// // you need to send price = 10000
// const price = 10000; // 100 BMP
// SimpleExchangeContract.send('sellToken', idNFT, price);

// // =======================================================================
// // Follow steps to buy NFT
// // 1. Approve BMP to buy NFT
// BEP20Contract.send('increaseAllowance', simpleExchangeAddress, price);

// // 2. Payment and purchase of NFT
// SimpleExchangeContract.send('buyToken', idNFT);
