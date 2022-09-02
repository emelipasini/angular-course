import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client';

import { ClientService } from 'src/app/services/clients.service';
@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css'],
    providers: [ClientService]
})
export class ClientsComponent implements OnInit {
    clients: Client[] = [];

    constructor(private clientService: ClientService) { }
  
    ngOnInit(): void {
        this.clientService.getAll().subscribe(
            response => this.clients = response,
        );
    }

    getTotalBalance() {
        let totalBalance = 0;
        if(this.clients.length > 0) {
            for (const client of this.clients) {
                totalBalance += client.balance;
            }
        }
        return totalBalance;
    }
}
