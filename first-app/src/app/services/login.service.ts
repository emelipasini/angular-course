import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router) {}

    async login(email: string, password: string) {
        try {
            const auth = getAuth();
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            const token = await user.getIdToken();
            this.token = token;
    
            this.router.navigate(["people"]);
        } catch (error) {
            console.error("Error trying to login", error);
        }
    }

    async logout() {
        try {
            const auth = getAuth();
            await signOut(auth);
            this.token = "";
        } catch (error) {
            console.error("Error trying to logout", error);
        }
    }

    getToken() {
        return this.token;
    }

    isLogged() {
        return this.token != null;
    }
}