import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    user = new User("", "");

    constructor(private authService: AuthService, private router: Router) { }

    async register(form: NgForm) {
        try {
            if(!form.valid) return;
            
            const value = form.value;
            await this.authService.register(value.email, value.password);
            this.router.navigate([""]);
        } catch (error) {
            console.error("There was an error trying to register the user", error);
        }
    }
}
