/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: tinydaemons.js
 * @author: Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * @notice: web3.js file for tinydaemons.html
 */


"use strict";
// Constants used for JS/web3 crap later
const AVAX_M = 43114;
const AVAX_T = 43113;


// Constants for web3
const AVAX_TESTCA = "0x9CBD8Ea530436bbE6Ef581f2156D619479055D41";

const AVAX_MAINCA = "0x8bb765AE3e2320fd9447889D10b9DC7CE4970DA5";



// the ABI's
const ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

// Add's networks to metamask
async function addNetwork(id) {
  let networkData;
  switch (id) {
    // OP Test-G

    //AVAX-C
    case 43114:
      networkData = [
        {
          chainId: "0xA86A",
          chainName: "Avalanche C-Chain",
          rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
          nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://snowtrace.io"],
        },
      ];
      break;
    //AVAX-C-testnet
    case 43113:
      networkData = [
        {
          chainId: "0xA869",
          chainName: "FUJI (Avalanche)",
          rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
          nativeCurrency: {
            name: "Avalanche",
            symbol: "AVAX",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.snowtrace.io"],
        },
      ];
      break;
    default:
      break;
  }

  // add these
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}

// Address of the selected account
let selectedAccount;

// init() web3modal
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

  if(location.protocol !== 'https:') {
    const alert = document.querySelector("#alert-error-https");
    alert.style.display = "block";
    document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    return;
  }
  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "66e9cad39c594d7d93f5a93104cdf16e", //MaxflowO2 keys might not get milage
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        key: "pk_live_1EBC325C45415739" //MaxflowO2 keys might not get milage
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

// UI for fetchAccountData()
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log("Web3 instance is", web3);

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  console.log("Selected Account is", selectedAccount);


  // Display fully loaded UI for wallet data
  document.querySelector("#prepare").style.display = "none";
  document.querySelector("#connected").style.display = "block";

  // Display address over Disconnect
  var startString = selectedAccount.substring(0,3);
  var dots ="…";
  var endString = selectedAccount.substring(selectedAccount.length - 3)
  var display = startString+dots+endString;
  document.getElementById("addWallet").innerHTML = display;
  //populate NFTs
  await populateNFTs(selectedAccount);
  await populateMICROs(selectedAccount);
  await setNumbers(selectedAccount) //set minted/supply


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
  document.querySelector("#connected").style.display = "none";
  document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled")
}

// "connect button"
async function onConnect() {

  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  fetchAccountData();

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
  const element = document.getElementById('connectwarning');
  element.remove();
  const element2 = document.getElementById('connectwarning2');
  element2.remove();
}

// "disconnect button"
async function onDisconnect() {

  console.log("Killing the wallet connection", provider);

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
  document.querySelector("#prepare").style.display = "block";
  document.querySelector("#connected").style.display = "none";
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

async function swapToEth(hex) {
  try {
    // check if the chain to connect to is installed
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: hex }], // chainId must be in hexadecimal numbers
    });
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask
    // It's Ethereum... it should be there.
   if (error.code === 4902) {
      try {
        console.log("ETH not installed??");
      } catch (addError) {
        console.error(addError);
      }
    }
    console.error(error);
  }
}

//after window is loaded completely
window.onload = function(){
  //hide the preloader
  $(".preloader").fadeOut(1000);
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
}

// fetch times from contract
async function fetchWeb3PSTime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  //const web3 = new Web3("https://rpc.testnet.fantom.network/");
  let tokenContract = await new web3.eth.Contract(ABI, FTM_MAINCA);
  //let tokenContract = await new web3.eth.Contract(ABI, FTM_TESTCA);
  let timeOne = await tokenContract.methods.showPresaleStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// fetch times from contract
async function fetchWeb3STime() {
  const web3 = new Web3("https://rpc.ftm.tools");
  //const web3 = new Web3("https://rpc.testnet.fantom.network/");
  let tokenContract = await new web3.eth.Contract(ABI, FTM_MAINCA);
  //let tokenContract = await new web3.eth.Contract(ABI, FTM_TESTCA);
  let timeOne = await tokenContract.methods.showStart().call();
  if(timeOne == 0) return countDownDate;
  return timeOne;
}

// Useful for later you'll see
let presaleStart;
let presaleEnd;

// Update the count down every 1 second
// rewritten to web2 => web3 via contract abi... using FTM for the web3
// all contracts will have same datum
/*
window.setInterval(async () => {

  presaleStart = await fetchWeb3PSTime();
  presaleEnd = await fetchWeb3STime();

  // Get today's date and time in seconds
  var timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // 3 html id's to replace
  var showTime;
  var showText;
  var buttonText;

  // set the variables
  if (presaleStart > timeMeow) {
    showTime = presaleStart;
    showText = "Presale Mint live in: ";
    buttonText = "Not Active";
  } else if (presaleEnd > timeMeow && timeMeow > presaleStart) {
    showTime = presaleEnd;
    showText = "WL Mint active, Mint live in: ";
    buttonText = "Mint 2";
  }

  // Find the distance between now and the count down date
  var distance = showTime - timeMeow;

  if (distance > 0) {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor(distance % 60);

    // Display the results in the elements
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    document.getElementById("clockText").innerHTML = showText;
    document.getElementById("buttonText").innerHTML = buttonText;
  } else {
    // Display the "null" results in the elements
    document.getElementById("demo").innerHTML = " ";
    document.getElementById("clockText").innerHTML = " ";
    document.getElementById("buttonText").innerHTML = "Mint 1";
  }
}, 1000);
*/

// swaps background image depending on chain

// web3 call() for how many have minted on that contract
async function queryMinted(contractAddress) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  //let value = await tokenContract.methods.minterCurrentMints().call();
  let value = await tokenContract.methods.totalSupply().call();
  console.log(value, "has been minted");
  return value;
}

// web3 call() for how many allowed to mint on that contract
async function queryAlloted(contractAddress) {
  const web3 = new Web3(provider);
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  //let value = await tokenContract.methods.minterMaximumCapacity().call();
  let value = await tokenContract.methods.maxSupply().call();
  console.log(value, "to mint on this chain");
  return value;
}

// async to pull CA's
async function getCA() {

  // set locals
  let contractAddress;

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 43114) {
    contractAddress = AVAX_MAINCA;
  } else if (chainId == 43113) {
    contractAddress = AVAX_TESTCA;
  } else {
    console.log("The chainID", chainId, "has no CA set");
  }

  // return the address
  return contractAddress;
}

// puts the above together with innerHTML rewrite could go innerTEXT as well
async function setNumbers(address) {
  const FTMSCAN_API_KEY = 'J75A2G6SIAQ8FUBXN4D7ECIWGQTPCPU2KE';
  let startBlock = 25639393;

  let contractAddress = '0xf9e393CbD7e8F34FB87127195f1F74E699D3d595';
  let theCount = await queryMinted(contractAddress);
  let theTotal = await queryAlloted(contractAddress);
  //let theString = `${queryMinted}/${queryAlloted}`;
  //console.log(theString);
  //document.getElementById("count").innerHTML = theString;
  document.getElementById("count").innerHTML = theCount;
  document.getElementById("total").innerHTML = theTotal;

  let ca_micro = '0x90B93c7A6DbAeb685878f6fe712Fb0E1cF2babe4';
  let theMicroCount = await queryMinted(ca_micro);
  let totalShares = parseInt(theCount) + 2*(parseInt(theMicroCount)); //total shares
  console.log(totalShares);


  var ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${contractAddress}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  var result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  var tokenList = []
  for (var t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      var index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing

  let Nb = tokenList.length;
  console.log(Nb);

  var ftmscan_query = `https://api.ftmscan.com/api?module=account&action=tokennfttx`
  + `&contractaddress=${ca_micro}&address=${address}&startblock=${startBlock}&endblock=999999999&sort=asc&apikey=${FTMSCAN_API_KEY}`
  // console.log(ftmscan_query)
  var result = await axios.get(ftmscan_query)
  .then(response => {
    // console.log('Axios got a response...');console.log(response);
    return response.data.result
  })
  .catch(error => {
    console.log(error)
  })

  var tokenList = []
  for (var t of result) {
    // Only filter where t.to is this address (t.from sends it away)
    if (t.to.toLowerCase() == address.toLowerCase()) {
      tokenList.push(t.tokenID)} //add token ID if incoming
    if (t.from.toLowerCase() == address.toLowerCase()) {
      var index = tokenList.indexOf(t.tokenID);
      if (index > -1) {tokenList.splice(index, 1)}}} //remove token ID if outgoing

  let Nm = tokenList.length;
  console.log(Nm);

  let userShares = Nb + 2*Nm;
  let sharePercent = 100*userShares/totalShares;
  console.log(sharePercent);

  document.getElementById("yourshare").innerHTML = `<h2>Your holdings represent a <em>${sharePercent.toFixed(3)}%</em> share of the BBC treasury</h2>`;



  }

// async to pull EP's
async function getEP() {

  // set locals
  let endpointAddress;

  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  // if-else if for chainID's aka to for Addresses
  if (chainId == 1) {
    endpointAddress = ETH_EPMAIN;
  } else if (chainId == 56) {
    endpointAddress = BNB_EPMAIN;
  } else if (chainId == 43114) {
    endpointAddress = AVAX_EPMAIN;
  } else if (chainId ==  137) {
    endpointAddress = MATIC_EPMAIN;
  } else if (chainId == 250) {
    endpointAddress = FTM_EPMAIN;
  } else if (chainId == 4) {
    endpointAddress = ETH_EPTEST;
  } else if (chainId == 97) {
    endpointAddress = BNB_EPTEST;
  } else if (chainId == 43113) {
    endpointAddress = AVAX_EPTEST;
  } else if (chainId == 80001) {
    endpointAddress = MATIC_EPTEST;
  } else if (chainId == 4002) {
    endpointAddress = FTM_EPTEST;
  } else if (chainId == 10) {
    endpointAddress = OP_EPMAIN;
  } else if (chainId == 69) {
    endpointAddress = OP_EPTEST;
  } else {
    console.log("The chainID", chainId, "has no endpoint or CA set");
  }

  // return the address
  return endpointAddress;
}


//web3 mint from contract
async function mintBBC() {
  let contractAddress = '0xf9e393CbD7e8F34FB87127195f1F74E699D3d595'; //bbc_contract addy

  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // define tokenContract because why twice?
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);
  let mintAmount = $('#Nmint').val();
  //let ftm = number * 45000000000000000000;
  //let value = await tokenContract.methods.mint([ftm.toString(), number.toString()]).send({ from: selectedAccount });
  // let value = await tokenContract.methods.mint([ftm.toString(), number.toString()]).send({ from: selectedAccount });
  //try AMGOTH way
  let cost = 45000000000000000000;
  let gasLimit = 285000;
  let totalCostWei = String(cost * mintAmount);
  let totalGasLimit = String(gasLimit * mintAmount);
  console.log("Cost: ", totalCostWei);
  console.log("Gas limit: ", totalGasLimit);
  let value= await tokenContract.methods
    .mint(mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: contractAddress,
      from: selectedAccount,
      value: totalCostWei,
    })
}



// web3 send() of both mint functions based off time, yes time
async function spawnTinyDaemon() {

  // set locals
  let contractAddress = await getCA();

  // web3
  const web3 = new Web3(provider);

  // Get account of the connected wallet (refresh)
  let accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];

  // define tokenContract because why twice?
  let tokenContract = await new web3.eth.Contract(ABI, contractAddress);

  // current time -> seconds
  let timeMeow = new Date().getTime();
  timeMeow = parseInt(timeMeow/1000);

  // set the variables via if/else if/else
  if (presaleStart > timeMeow) {
    console.log("Can't mint broski time is", timeMeow, "and WL starts at", presaleStart);
  } else if (presaleEnd > timeMeow && timeMeow >= presaleStart) {
    let number = 2;
    let value = await tokenContract.methods.presaleMint(number).send({ from: selectedAccount });
    if (!value) {
      console.log("presaleMint(2) from", selectedAccount, "failed");
    }
  } else {
    let value = await tokenContract.methods.publicMint().send({ from: selectedAccount });
    if (!value) {
      console.log("publicMint() from", selectedAccount, "failed");
    }
  }
}


// web3 send() of traversing chains

async function getChainID() {
  // web3
  const web3 = new Web3(provider);

  // chainId
  const chainId = await web3.eth.getChainId();

  return chainId;
}

// these are the primary swappers comment out main or test nets...
async function hitETH() {
  let value = "ETH";
  await swapToEth("0x1");
  //await swapToEth("0x4");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitFTM() {
  let value = "FTM";
  await swapChain(FTM_M, "0xfa");
  //await swapChain(FTM_T, "0xfa2");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitAVAX() {
  let value = "AVAX";
  await swapChain(AVAX_M, "0xA86A");
  //await swapChain(AVAX_T, "0xA869");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitMATIC() {
  let value = "MATIC";
  await swapChain(MATIC_M, "0x89");
  //await swapChain(MATIC_T, "0x13881");
  displayTokenName();
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitBNB() {
  let value = "BSC";
  await swapChain(BNB_M, "0x38");
  //await swapChain(BNB_T, "0x61");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

async function hitOP() {
  let value = "OP";
  await swapChain(BNB_M, "0xA");
  //await swapChain(BNB_T, "0x45");
  let chainID = await getChainID();
  console.log("Chain ID is", chainID);
  //changeBG(value);
  //await setNumbers();
}

// JQuery function for #traversefrom
$(document).ready(async function() {
  $('#traversefrom').change(async function() {
     var value = $(this).val();
     // if-else if for swapping chains
     if (value == "ETH") {
       hitETH();
     } else if (value == "FTM") {
       hitFTM();
     } else if (value == "AVAX") {
       hitAVAX();
     } else if (value == "MATIC") {
       hitMATIC();
     } else if (value == "BSC") {
       hitBNB();
     } else if (value == "OP") {
       hitOP();
     }
  });
});

// the traverse function
async function traverseTinyDaemon() {
  // let's grab the values...
  let to = $('#traverseto').val();
  let tokenID = $('#tinydaemonid').val();

  //what to send
  traverseThis(tokenID, to);
}

// display proper token names for donate button
async function displayTokenName() {
  // locals
  let chainId = await getChainID();
  let displayName;

  // display names for the donate span
if (chainId == 43114 || chainId == 43113) {
    displayName = "AVAX";
  } else {
    displayName = "";
    console.log("We're not in Kansas anymore, Toto. You be on chain", chainId);
  }
  //document.getElementById("token").innerHTML = displayName;
}

// ready your breakfast and eat hardy, for tonight we eat ramen...


//BitDaemons loader


let timeRequested = 0;

// master event listener... combines all the shit above.
window.addEventListener('load', async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  //document.querySelector("#btn-refreshNFTs").addEventListener("click", refreshNFTs);
  //document.querySelector("#ETH").addEventListener("click", hitETH);
  //document.querySelector("#FTM").addEventListener("click", hitFTM);
  //document.querySelector("#AVAX").addEventListener("click", hitAVAX);
  //document.querySelector("#MATIC").addEventListener("click", hitMATIC);
  //document.querySelector("#BSC").addEventListener("click", hitBNB);
  //document.querySelector("#OP").addEventListener("click", hitOP);
  document.querySelector("#btn-mint").addEventListener("click", mintBBC);
  //document.querySelector("#btn-buyNFT").addEventListener("click", spawnTinyDaemon);
  //document.querySelector("#btn-traverseNFT").addEventListener("click", traverseTinyDaemon);
  //document.querySelector("#btn-Donate").addEventListener("click", ramenIsOnTheMenu);

});
