import { Component, Input } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent {
    @Input() person: Person;
    @Input() index: number;

    // @Output() sendNewPerson = new EventEmitter<Person>();

    // firstname = "";
    // lastname = "";
    // newPerson: Person;

    // addPerson() {
    //     this.newPerson = new Person(this.firstname, this.lastname);
    //     this.sendNewPerson.emit(this.newPerson);
    // }

    constructor(private peopleService: PeopleService) {}

    emitGreeting() {
        this.peopleService.greet.emit(this.person.firstname);
    }
}

export class Person {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
