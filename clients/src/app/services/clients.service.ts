import { Injectable } from "@angular/core";
import { Firestore, collectionData, collection, CollectionReference, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Client } from "../models/client";

@Injectable()
export class ClientService {
    clientsCollection: CollectionReference<any>;
    clients: Observable<any[]>;

    constructor(private firestore: Firestore) {
        this.clientsCollection = collection(this.firestore, "clients");
        this.clients = collectionData(this.clientsCollection);
    }

    getAll() {
        return collectionData(this.clientsCollection, { idField: "id" }) as Observable<Client[]>;
    }

    getById(id: string) {
        const client = doc(this.firestore, `clients/${id}`);
        return docData(client, { idField: "id" });
    }

    create(client: Client) {
        return addDoc(this.clientsCollection, client);
    }

    update(client: Client) {
        const clientToEdit = doc(this.firestore, `clients/${client.id}`);
        return updateDoc(clientToEdit, { ...client });
    }

    delete(id: string) {
        const client = doc(this.firestore, `clients/${id}`);
        return deleteDoc(client);
    }
}
