import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from 'src/app/models/person';

import { PeopleService } from 'src/app/services/people.service';

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
    title: string;
    people: Person[];
    index: number;

    firstname = "";
    lastname = "";
    newPerson: Person;

    constructor(private router: Router, private route: ActivatedRoute, private peopleService: PeopleService) {
        this.peopleService.greet.subscribe((name: string) => {
            console.log(`Hola ${name}!`);
        })
    }

    ngOnInit(): void {
        this.people = this.peopleService.getPeople();

        this.index = this.route.snapshot.params["id"];
        if(this.index) {
            this.title = "Editar persona:";
            const person = this.peopleService.findPerson(this.index);
            if(person) {
                this.firstname = person.firstname;
                this.lastname = person.lastname;
            }
        } else {
            this.title = "Nueva persona:";
        }
    }

    addPerson() {
        if(!this.firstname || !this.lastname) return;
        this.newPerson = new Person(this.firstname, this.lastname);

        if(this.index) {
            this.peopleService.editPerson(this.index, this.newPerson);
            this.router.navigate(["people"]);
        } else {
            this.peopleService.addPerson(this.newPerson);
            this.router.navigate(["people"]);
        }
    }
}
