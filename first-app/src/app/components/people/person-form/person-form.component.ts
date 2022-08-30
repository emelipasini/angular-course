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

    constructor(private router: Router, private route: ActivatedRoute, private peopleService: PeopleService) {}

    ngOnInit(): void {
        this.index = this.route.snapshot.params["id"];
        if(this.index) {
            this.title = "Editar persona:";

            this.peopleService.getPeople().subscribe(
                response => {
                    this.people = response as unknown as Person[];
                    this.peopleService.setPeople(this.people);

                    const person = this.people[this.index];
                    if(person) {
                        this.firstname = person.firstname;
                        this.lastname = person.lastname;
                    }
                },
                error => console.log("error", error)
            );
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
