import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { ClientsComponent } from "./components/clients/clients.component";
import { ClientComponent } from "./components/clients/client/client.component";
import { ClientFormComponent } from "./components/clients/client-form/client-form.component";

import { LoginRoutesGuard } from "./guards/login-routes.guard";
import { LogoutRoutesGuard } from "./guards/logout-routes.guard";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "login", component: LoginComponent, canActivate: [LogoutRoutesGuard] },
    { path: "register", component: RegisterComponent, canActivate: [LogoutRoutesGuard] },
    {
        path: "clients", component: ClientsComponent, canActivate: [LoginRoutesGuard], children: [
            { path: "", component: ClientComponent },
            { path: "create", component: ClientFormComponent },
            { path: "edit/:id", component: ClientFormComponent }
        ]
    },
    { path: "**", component: ErrorPageComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
