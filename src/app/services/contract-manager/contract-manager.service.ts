import {Injectable} from '@angular/core';
import {contracts} from './contracts';
import {abiManager} from './abi-manager';

@Injectable()
export class ContractManagerService {

    private managerAddress = '0x8b43eE82E80776192c3A72d3558b7968181fFf09';
    private managerData: any;

    constructor() {
    }

    public deployContract() {
        // window.web3.eth.contract(abi).new(manager, fee, jackpot, owner_fee, { from: owner, data: code, gas: 3000000 });
    }

    /**
     *
     * @param {String} contractAddress
     */
    private _getContractForAddress(contractAddress) {
        return window.web3.eth.contract(abiManager).at(contractAddress);
    }

    public getOwner() {
        if (!this.managerData) {
            this.managerData = this._getContractForAddress(this.managerAddress);
        }
        return new Promise(resolve => {
            this.managerData.owner((error, owner) => {
                resolve(owner);
            });
        });
    }

    private getLotteries() {
        if (!this.managerData) {
            this.managerData = this._getContractForAddress(this.managerAddress);
        }
        return new Promise(resolve => {
            this.managerData.lotteries((error, lotteries) => {
                resolve(lotteries);
            });
        });
    }

    private generateContractsList() {
        return new Promise(resolve => {
            this.managerData = this._getContractForAddress(this.managerAddress);
            this.getLotteries().then(lotteries => {
                resolve(lotteries);
            });
        });
    }

    public getCurrentContracts() {
        return this.generateContractsList();
    }
}
