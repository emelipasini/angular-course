import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from 'src/app/models/client';

import { ClientService } from 'src/app/services/clients.service';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.css'],
    providers: [ClientService]
})
export class ClientFormComponent {
    @ViewChild("formClient") formClient!: NgForm;
    @ViewChild("closeButton") closeForm!: ElementRef;

    client = new Client("", "", "", 0);
    title: string;
    id: string;
  
    constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) {
        this.id = this.route.snapshot.params["id"];
        if(this.id) {
            this.title = "Editar cliente"
            this.clientService.getById(this.id).subscribe(
                response => this.client = response as unknown as Client
            );
        } else {
            this.title = "Nuevo cliente";
        }
    }

    saveClient(form: NgForm) {
        if(!form.valid) return;

        if(this.id) {
            const client = form.value;
            client.id = this.id;
            this.clientService.update(client);
        }
        else {
            this.clientService.create(form.value);
        }
        this.router.navigate(["/clients"]);
    }

    deleteClient() {
        this.clientService.delete(this.id);
    }
}
