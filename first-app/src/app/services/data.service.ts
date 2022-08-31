import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

import { Person } from "../models/person";

import { LoginService } from "./login.service";

@Injectable()
export class DataService {
    token: string;

    constructor(private httpClient: HttpClient, private loginService: LoginService) {
        this.token = this.loginService.getToken()
    }

    getPeople() {
        return this.httpClient.get(`${environment.firebase.database}/people.json?auth=${this.token}`);
    }

    savePeople(people: Person[]) {
        this.httpClient.put(`${environment.firebase.database}/people.json?auth=${this.token}`, people).subscribe(
            response => { console.log("response: " + response); },
            error => { console.log("error: " + error); }
        );
    }

    editPerson(index: number, person: Person) {
        const url = `${environment.firebase.database}/people/${index}.json?auth=${this.token}`;
        this.httpClient.put(url, person).subscribe(
            response => console.log("modified", response),
            error => console.log("error", error)
        );
    }

    deletePerson(index: number) {
        this.httpClient.delete(`${environment.firebase.database}/people/${index}.json?auth=${this.token}`).subscribe(
            response => console.log("deleted", response),
            error => console.log("error", error)
        );
    }
}