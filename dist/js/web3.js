/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: The Ghosts web3.js edition
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js framework
 */


'use strict';
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"MaxSplaining","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooLateBoomer","type":"error"},{"inputs":[{"internalType":"uint256","name":"yourTime","type":"uint256"},{"internalType":"uint256","name":"hitTime","type":"uint256"}],"name":"TooSoonJunior","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeRemoved","type":"event"},{"anonymous":false,"inputs":[],"name":"PayeesReset","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"length","type":"uint256"}],"name":"PresaleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberToMint","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"teamMints","type":"uint256"}],"name":"SetStartNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ThankYou","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_old","type":"string"},{"indexed":false,"internalType":"string","name":"_new","type":"string"}],"name":"UpdatedBaseURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint16","name":"value","type":"uint16"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"royalatiesSet","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"RevealProvenanceImages","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealProvenanceJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RevealStartID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newAddresses","type":"address[]"}],"name":"addBatchWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSplit","type":"address"},{"internalType":"uint256","name":"newShares","type":"uint256"}],"name":"addSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"declineOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"enableWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterPresaleFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsCapacity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minterTeamMintsMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"myAddress","type":"address"}],"name":"myWhitelistStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paySplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quant","type":"uint256"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"pushDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"pushOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"releasable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"newAddresses","type":"address[]"}],"name":"removeBatchWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"remove","type":"address"}],"name":"removeSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"role","type":"bytes4"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_base","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mintingCap","type":"uint256"},{"internalType":"uint256","name":"teamMints","type":"uint256"}],"name":"setLlamasEngine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"number","type":"uint256"}],"name":"setMintFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDisplay","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"setPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setPresaleFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"json","type":"string"}],"name":"setProvenance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"uint16","name":"permille","type":"uint16"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"permille","type":"uint16"}],"name":"setRoyaltiesThis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"toggle","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showPresaleStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"theList","type":"address[]"}],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newDeveloper","type":"address"}],"name":"transferDeveloper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
const CA ='0xFe8b28CF3C311929A7DEF2fB08396E5635d7d4E1';
//const CA = '0x13a087D74ff5b796039E79cC8069CB4F3C589156';
const AVAX ='https://data-seed-prebsc-2-s2.binance.org:8545'
//const AVAX = 'https://api.avax.network/ext/bc/C/rpc';

// Useful for later you'll see
let presaleStart;
let saleStart;
let presaleFees;
let saleFees;

window.onload = async function() {
  presaleStart = await fetchPreSaleTime();
  saleStart = await fetchSaleTime();
  await setNumbers();
  presaleFees = await queryPresaleFees();
  saleFees = await queryFees();
}

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Add's networks to metamask
async function addNetwork(id) {
  let networkData;
  switch (id) {
    //AVAX-C
    case 43114:
      networkData = [
        {
          chainId: '0xA86A',
          chainName: 'Avalanche C-Chain',
          rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
          nativeCurrency: {
            name: 'Avalanche',
            symbol: 'AVAX',
            decimals: 18,
          },
          blockExplorerUrls: ['https://snowtrace.io'],
        },
      ];
      break;
    //BNB Testnet
    case 97:
      networkData = [
        {
          chainId: '0x61',
          chainName: 'Binance Scam Chain Testnet',
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          nativeCurrency: {
            name: 'Binance',
            symbol: 'BNB',
            decimals: 18,
          },
          blockExplorerUrls: ['https://testnet.bscscan.com'],
        },
      ];
      break;
    default:
      break;
  }

  // add these
  return window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: networkData,
  });
}

// Address of the selected account
let selectedAccount;

// init() web3modal
function init() {

  console.log('Initializing example');
  console.log('WalletConnectProvider is', WalletConnectProvider);
  console.log('Fortmatic is', Fortmatic);
  console.log('window.web3 is', window.web3, 'window.ethereum is', window.ethereum);

  if(location.protocol !== 'https:') {
    const alert = document.querySelector('#alert-error-https');
    alert.style.display = 'block';
    document.querySelector('#btn-connect').setAttribute('disabled', 'disabled');
    return;
  }
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: '66e9cad39c594d7d93f5a93104cdf16e', //MaxflowO2 keys might not get milage
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        key: 'pk_live_1EBC325C45415739' //MaxflowO2 keys might not get milage
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log('Web3Modal instance is', web3Modal);
}

let isAllowed;

// UI for fetchAccountData()
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log('Web3 instance is', web3);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  console.log('Selected Account is', selectedAccount);


  // Display fully loaded UI for wallet data
  document.querySelector('#prepare').style.display = 'none';
  document.querySelector('#connected').style.display = 'block';

  // Display address over Disconnect
  var startString = selectedAccount.substring(0,5);
  var dots ='…';
  var endString = selectedAccount.substring(selectedAccount.length - 5);
  var display = startString+dots+endString;
  document.getElementById('addWallet').innerHTML = '<h6>'+display+'</h6>';

  // capture allowed status
  await allowed();

}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */


async function refreshAccountData() {

  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector('#connected').style.display = 'none';
  document.querySelector('#prepare').style.display = 'block';

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector('#btn-connect').setAttribute('disabled', 'disabled');
  await fetchAccountData(provider);
  document.querySelector('#btn-connect').removeAttribute('disabled');
}

// 'connect button'
async function onConnect() {

  console.log('Opening a dialog', web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log('Could not get a wallet connection', e);
    return;
  }

  // Shit to do on connection
  swapChain(97, '0x61');
  //swapChain(43114, '0xA86A');
  fetchAccountData();
  allowed();

  // Subscribe to accounts change
  provider.on('accountsChanged', (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on('chainChanged', (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on('networkChanged', (networkId) => {
    fetchAccountData();
  });
}

// 'disconnect button'
async function onDisconnect() {

  console.log('Killing the wallet connection', provider);

  // TODO: Which providers have close method?
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

  // Set the UI back to the initial state
  document.querySelector('#prepare').style.display = 'block';
  document.querySelector('#connected').style.display = 'none';
}

// These set/swap chains immediately... useful later in this plethora of wtf
async function swapChain(network, hex) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // if it is not, then install it into the user MetaMask
    if (error.code === 4902) {
      try {
        addNetwork(network);
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

// web3 call() for how many allowed to mint on that contract
async function queryPresaleFees() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterPresaleFees().call();
  console.log(value, 'for presale');
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryFees() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterFees().call();
  console.log(value, 'for fees');
  return value;
}

// web3 call() for presale start time
async function fetchPreSaleTime() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let timeOne = await tokenContract.methods.showPresaleStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// web3 call() for sale start time
async function fetchSaleTime() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let timeOne = await tokenContract.methods.showStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

async function allowed() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  isAllowed = tokenContract.methods.myWhitelistStatus(selectedAccount).call();
  if (isAllowed) {
    buttonText = 'Mint';
  } else if (!isAllowed) {
    buttonText = 'Not Allowed';
  }
}

// Update the count down every 1 second
// rewritten to web2 => web3 via contract abi...

let buttonText;

window.setInterval(async () => {

  // Get today's date and time in seconds
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  var showText;
  var cost;
  var days;
  var hours;
  var minutes;
  var seconds;
  var cost;

  // set the variables
  if (presaleStart > timeMeow) {
    // Set text Elements
    showText = 'Presale Mint live in: ';
    buttonText = 'Not Active';

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor((presaleStart - timeMeow) / (60 * 60 * 24));
    hours = Math.floor(((presaleStart - timeMeow) % (60 * 60 * 24)) / (60 * 60));
    minutes = Math.floor(((presaleStart - timeMeow) % (60 * 60)) / (60));
    seconds = Math.floor((presaleStart - timeMeow) % 60);

    // Display elements
    document.getElementById('demo').innerText = days + 'd ' + hours + 'h '
    + minutes + 'm ' + seconds + 's ';
    document.getElementById('clockText').innerText = showText;
    document.getElementById('buttonText').innerText = buttonText;
    document.querySelector('#thePrice').style.display = 'none';
    document.querySelector('#mintQuant').style.display = 'none';
  } else if (saleStart > timeMeow && timeMeow > presaleStart) {
    // Set text elements
    showText = 'WL Mint active, Mint live in: ';

    // Set Number elements
    cost = (presaleFees / Math.pow(10,18)).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    days = Math.floor((saleStart - timeMeow) / (60 * 60 * 24));
    hours = Math.floor(((saleStart - timeMeow) % (60 * 60 * 24)) / (60 * 60));
    minutes = Math.floor(((saleStart - timeMeow) % (60 * 60)) / (60));
    seconds = Math.floor((saleStart - timeMeow) % 60);

    // Display elements
    document.getElementById('demo').innerText = days + 'd ' + hours + 'h '
    + minutes + 'm ' + seconds + 's ';
    document.getElementById('clockText').innerText = showText;
    document.getElementById('buttonText').innerText = buttonText;
    document.querySelector('#thePrice').innerText = `${cost} AVAX`;
    document.querySelector('#mintQuant').style.display = 'none';
  } else {
    // Set the text elements
    // TO-DO add ${quant} to this...
    //buttonText = 'Mint ${quant}';
    buttonText = 'Mint';

    // Set Number elements
    cost = (saleFees / Math.pow(10,18)).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Display elements
    document.querySelector('#buttonText').innerText = buttonText;
    document.querySelector('#thePrice').innerText = `${cost} AVAX`;
    document.querySelector('#clockText').style.display = 'none';
    document.querySelector('#demo').style.display = 'none';
    document.querySelector('#mintQuant').style.display = 'inline';
  }
}, 1000);


// web3 call() for how many have minted on that contract
async function queryMinted() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterMinted().call();
  console.log(value, 'has been minted');
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted() {
  const web3 = new Web3(AVAX);
  let tokenContract = await new web3.eth.Contract(ABI, CA);
  let value = await tokenContract.methods.minterCapacity().call();
  console.log(value, 'to mint on this chain');
  return value;
}

// puts the above together with innerTEXT
async function setNumbers() {
  let theCount = await queryMinted();
  let theTotal = await queryAlloted();
  let counts = document.querySelectorAll('#count');
  counts.forEach(innards => {
    innards.innerText = `${theCount}`;
  });
  let totals = document.querySelectorAll('#total');
  totals.forEach(innards => {
    innards.innerText = `${theTotal}`;
  });
}

// web3 mint from contract
async function mintFallen() {

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // define tokenContract (high mileage)
  let tokenContract = await new web3.eth.Contract(ABI, CA);

  // current time -> seconds
  let timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // set the variables via if/else if/else
  if (presaleStart > timeMeow) {
    console.log('Too soon junior', timeMeow, 'and WL mints start at', presaleStart);
  } else if (saleStart > timeMeow && timeMeow >= presaleStart) {
    let value = await tokenContract
                        .methods
                        .minterPresaleFees()
                        .call()
    if (!value) {
      console.log(`.minterPresaleFees() failed`);
    }
    let mint = await tokenContract
                       .methods
                       .presaleMint()
                       .send({ from: selectedAccount, value: value })
                       .on(
                         'transactionHash',
                         function(hash) {
                           //console.log(`https://testnet.bscscan.com/tx/${hash}`);
                           console.log(`https://snowtrace.io/tx/${hash}`);
                         }
                       );
    if (!mint) {
      console.log('.presaleMint() from', selectedAccount, 'failed');
    }
    await allowed();
  } else {
    console.log('mint/else')
    let value = await tokenContract
                        .methods
                        .minterFees()
                        .call()
    if (!value) {
      console.log(`.minterFees() failed`);
    }
    let mint = await tokenContract
                       .methods
                       .publicMint(1)
                       .send({ from: selectedAccount, value: value })
                       .on(
                         'transactionHash',
                         function(hash) {
                           //console.log(`https://testnet.bscscan.com/tx/${hash}`);
                           console.log(`https://snowtrace.io/tx/${hash}`);
                         }
                       );
    if (!mint) {
      console.log('.publicMint() from', selectedAccount, 'failed');
    }
  }
  await setNumbers();
}

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector('#btn-connect').addEventListener('click', onConnect);
  document.querySelector('#btn-disconnect').addEventListener('click', onDisconnect);
  document.querySelector('#btn-mint').addEventListener('click', mintFallen);
});
