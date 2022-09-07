import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class LoginRoutesGuard implements CanActivate {
    constructor(private router: Router, private angularFireAuth: AngularFireAuth) {}

    canActivate() {
        return this.angularFireAuth.authState.pipe(
            map(auth => {
                if(!auth) {
                    this.router.navigate(["/login"]);
                    return false;
                }
                return true;
            })
        );
    }
}
