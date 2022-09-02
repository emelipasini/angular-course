export class Client {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    balance: number;

    constructor(firstname: string, lastname: string, email: string, balance: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.balance = balance;
    }
}