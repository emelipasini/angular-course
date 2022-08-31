import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        initializeApp({
            apiKey: environment.firebase.apiKey,
            authDomain: environment.firebase.authDomain
        });
    }
}
