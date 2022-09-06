import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user = new User("", "");

    constructor(private authService: AuthService, private router: Router) { }

    async login(form: NgForm) {
        if(!form.valid) return;
        
        const value = form.value;
        await this.authService.login(value.email, value.password);
        this.router.navigate([""]);
    }
}
