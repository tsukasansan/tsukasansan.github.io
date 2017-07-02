import {Component, OnInit} from '@angular/core';
import {GethConnectService} from '../../services/geth-connect/geth-connect.service';
import {Connected} from '../../services/geth-connect/connected';

@Component({
    selector: 'app-connection-status',
    templateUrl: './connection-status.component.html',
    styleUrls: ['./connection-status.component.scss']
})

export class ConnectionStatusComponent implements OnInit {

    public isWeb3Connected: Connected;

    constructor(private connectService: GethConnectService) {
    }

    ngOnInit() {
        this.connectService.getConnected().subscribe(connected => {
            this.isWeb3Connected = connected;
        });
    }
}
