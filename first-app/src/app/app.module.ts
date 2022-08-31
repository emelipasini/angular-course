import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

import { PeopleComponent } from './components/people/people.component';
import { PersonFormComponent } from './components/people/person-form/person-form.component';

import { PeopleService } from './services/people.service';
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PeopleComponent,
        PersonFormComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        PeopleService,
        DataService,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
