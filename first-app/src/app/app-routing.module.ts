import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

import { PeopleComponent } from './components/people/people.component';
import { PersonFormComponent } from './components/people/person-form/person-form.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "people", component: PeopleComponent, children: [
            { path: "create", component: PersonFormComponent },
            { path: ":id", component: PersonFormComponent }
        ]
    },
    { path: "login", component: LoginComponent},
    { path: "**", component: ErrorComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
