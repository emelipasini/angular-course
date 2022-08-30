import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { Person } from "../models/person";

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) {}

    getPeople() {
        return this.httpClient.get(`${environment.database}/people.json`);
    }

    savePeople(people: Person[]) {
        this.httpClient.put(`${environment.database}/people.json`, people).subscribe(
            response => { console.log("response: " + response); },
            error => { console.log("error: " + error); }
        );
    }

    editPerson(index: number, person: Person) {
        const url = `${environment.database}/people/${index}.json`;
        this.httpClient.put(url, person).subscribe(
            response => console.log("modified", response),
            error => console.log("error", error)
        );
    }

    deletePerson(index: number) {
        this.httpClient.delete(`${environment.database}/people/${index}.json`).subscribe(
            response => console.log("deleted", response),
            error => console.log("error", error)
        );
    }
}