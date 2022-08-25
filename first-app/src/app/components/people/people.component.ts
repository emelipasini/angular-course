import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Person } from '../person/person.component';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css'],
    providers: [PeopleService]
})
export class PeopleComponent implements OnInit {
    // @ViewChild("firstname") firstname: string;

    people: Person[];

    firstname = "";
    lastname = "";
    newPerson: Person;

    constructor(private peopleService: PeopleService) {
        this.peopleService.greet.subscribe((name: string) => {
            console.log(`Hola ${name}!`);
        })
    }

    ngOnInit(): void {
        this.people = this.peopleService.getPeople();
    }

    addPerson() {
        this.newPerson = new Person(this.firstname, this.lastname);
        this.peopleService.addPerson(this.newPerson);
    }

    addNewPerson(newPerson: Person) {
        this.people.push(newPerson);
    }
}
