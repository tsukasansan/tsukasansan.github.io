import {Component, OnInit} from '@angular/core';
import {GethContractService} from '../../services/geth-contract/geth-contract.service';
import {GethContractManagerService} from '../../services/geth-contract-manager/geth-contract-manager.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public contracts = [];

    /**
     *
     * @param {GethContractService} gethContractService
     * @param {GethContractManagerService} gethContractManagerService
     */
    constructor(private contractService: GethContractService,
                private contractManagerService: GethContractManagerService) {
    }

    loadContracts() {
        const currentContracts = this.contractManagerService.getCurrentContract();
        currentContracts.forEach(contract => {
            this.contracts.push(this.contractService.getContract(contract));
        });
    }

    makeLotteryList() {
        this.loadContracts();
    }

    ngOnInit() {
        this.makeLotteryList();
    }
}

declare global {
    interface Window { Web3: any,web3: any
    }
}