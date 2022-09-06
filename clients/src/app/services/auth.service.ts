import { Injectable } from "@angular/core";

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { map } from "rxjs/operators";

import { User } from 'src/app/models/user';

@Injectable()
export class AuthService {
    user = new User("", "");

    constructor(private angularAuth: AngularFireAuth) { }

    async login(email: string, password: string) {
        try {
            const auth = getAuth();
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            if(user.email) {
                this.user.email = user.email;
            }
            return;
        } catch (error) {
            console.error("There was an error trying to login the user", error);
        }
    }

    getLoggedUser() {
        return this.angularAuth.authState.pipe(map(auth => auth));
    }

    logout() {
        this.angularAuth.signOut();
    }
}
