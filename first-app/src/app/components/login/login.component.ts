import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private loginService: LoginService) { }
  
    async login(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;

        try {
            await this.loginService.login(email, password);
        } catch (error) {
            console.error("Error trying to login",error);
        }
    }
}
