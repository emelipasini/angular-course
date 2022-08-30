import { Injectable } from "@angular/core";

import { Person } from "../models/person";

import { DataService } from "./data.service";

@Injectable()
export class PeopleService {
    people: Person[] = [];

    constructor(private dataService: DataService) {}

    setPeople(people: Person[]) {
        this.people = people;
    }

    getPeople() {
        return this.dataService.getPeople();
    }

    addPerson(person: Person) {
        if(this.people === null) { this.people = []; }
        this.people.push(person);
        this.dataService.savePeople(this.people);
    }

    editPerson(index: number, person: Person) {
        const personToEdit: Person = this.people[index];
        if(personToEdit) {
            this.people[index] = person;
            this.dataService.editPerson(index, person);
        }
    }

    deletePerson(index: number) {
        this.people.splice(index, 1);
        this.dataService.deletePerson(index);
        this.reSavePeople();
    }

    reSavePeople() {
        if(this.people !== null) {
            this.dataService.savePeople(this.people);
        }
    }
}