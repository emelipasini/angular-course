import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { initializeApp } from 'firebase/app';

import { User } from './models/user';

import { AuthService } from './services/auth.service';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'clients';

    isLoggedIn = false;
    userLogged = new User("", "");

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        initializeApp(environment.firebase);

        this.authService.getLoggedUser().subscribe((response: any) => {
            if(response) {
                this.isLoggedIn = true;
                this.userLogged.email = response.multiFactor.user.email;
            }
        });
    }

    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.userLogged.email = "";
        this.router.navigate(["/login"]);
    }
}
