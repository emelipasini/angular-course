import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { LoginService } from "./login.service";

@Injectable()
export class GuardianService implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.loginService.isLogged()) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}