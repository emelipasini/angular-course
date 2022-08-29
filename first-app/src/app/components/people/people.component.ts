import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from 'src/app/models/person';

import { PeopleService } from 'src/app/services/people.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    people: Person[];

    constructor(private router: Router, private peopleService: PeopleService) { }

    ngOnInit(): void {
        this.people = this.peopleService.getPeople();
    }

    addPerson() {
        this.router.navigate(["people/create"]);
    }

    deletePerson(index: number) {
        const person: Person = this.people[index];
        if(person) {
            this.peopleService.deletePerson(index);
        }
    }
}
