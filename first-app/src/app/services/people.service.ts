import { EventEmitter } from "@angular/core";
import { Person } from "../components/person/person.component";

export class PeopleService {
    people: Person[] = [
        new Person("Juan", "Perez"),
        new Person("Maria", "Lopez"),
        new Person("Jorge", "Fernandez")
    ];

    getPeople() {
        return this.people;
    }

    addPerson(person: Person) {
        this.people.push(person);
    }

    greet = new EventEmitter<string>();
}