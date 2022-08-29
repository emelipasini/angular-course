import { EventEmitter } from "@angular/core";

import { Person } from "../models/person";

export class PeopleService {
    people: Person[] = [
        new Person("Juan", "Perez"),
        new Person("Maria", "Lopez"),
        new Person("Jorge", "Fernandez")
    ];

    getPeople() {
        return this.people;
    }

    findPerson(index: number) {
        const person: Person = this.people[index];
        return person;
    }

    addPerson(person: Person) {
        this.people.push(person);
    }

    editPerson(index: number, person: Person) {
        const personToEdit: Person = this.people[index];
        if(personToEdit) {
            this.people[index] = person;
        }
    }

    deletePerson(index: number) {
        this.people.splice(index, 1);
    }

    greet = new EventEmitter<string>();
}