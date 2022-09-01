import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";

import { environment } from 'src/environments/environment';

import { LoginService } from './services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private loginService: LoginService) {}

    ngOnInit(): void {
        initializeApp({
            apiKey: environment.firebase.apiKey,
            authDomain: environment.firebase.authDomain
        });
    }

    async logout() {
        try {
            await this.loginService.logout();
        } catch (error) {
            console.error("Error trying to logout",error);
        }
    }

    isLogged() {
        return this.loginService.isLogged();
    }
}
