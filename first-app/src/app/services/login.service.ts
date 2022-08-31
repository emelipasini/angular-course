import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router) {}

    async login(email: string, password: string) {
        const auth = getAuth();
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredentials.user;
        const token = await user.getIdToken();
        this.token = token;

        this.router.navigate(["people"]);
    }

    getToken() {
        return this.token;
    }
}