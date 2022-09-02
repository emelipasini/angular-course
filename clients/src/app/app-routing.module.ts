import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { ClientFormComponent } from "./components/clients/client-form/client-form.component";

const routes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    {
        path: "clients", component: ClientsComponent, children: [
            { path: "create", component: ClientFormComponent },
            { path: "edit", component: ClientFormComponent }
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
