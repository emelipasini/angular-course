import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/client';

import { ClientService } from 'src/app/services/clients.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
    providers: [ClientService]
})
export class ClientComponent implements OnInit {
    clients: Client[] = [];

    constructor(private clientService: ClientService, private router: Router) { }
  
    ngOnInit(): void {
        this.clientService.getAll().subscribe(
            response => this.clients = response
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

    addClient() {
        this.router.navigate(["/clients/create"]);
    }
}
