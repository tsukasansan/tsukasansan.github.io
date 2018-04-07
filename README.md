# ETHLottery Client

This projects is an <a href="https://www.ethereum.org/">Ethereum</a> based lottery.

You have 2 ways of running it
<p> 1 - Using <a href="https://metamask.io/">MetaMask</a> For Google Chrome</p> 
<p> 2 - Running your own <a href="https://github.com/ethereum/go-ethereum/wiki/geth">GETH</a> node </p>


#### Option 1
##### Using Chrome, install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">MetaMask</a> create a account, unlock MetaMask and you're ready to go.

#### Option 2
##### Starting your Geth node:
`./geth --testnet --fast --rpc --rpcapi db,eth,net,web3,personal --unlock 0 --password "your_passrd-txt-file" --rpccorsdomain="*" console`


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Run Admin

`geth --preload bin/admin.js --testnet --verbosity 0 console --unlock $OWNER
--preload`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Live official ETHLottery Client demo

There is also a [live demo](https://lifelottery.github.io/) currently running against the main Ethereum network.

Demo requires metamask installed on latest version of google chrome browser.

There is a step by step manual on how to play using the official ETHLottery client.

## official ETHLottery Contract  111111111111

This is the [link](https://github.com/renasboy/ETHLottery) to the official ETHLottery smart contract.


## Inspiration

The project was made by two friends who belive the world should not be in control by a minority of people who take advantage by power.
We all share the same planet and we all want to live!

Life Lottery!
