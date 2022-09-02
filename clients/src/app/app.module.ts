import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ClientsComponent } from './components/clients/clients.component';
import { ClientFormComponent } from './components/clients/client-form/client-form.component';

import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ErrorPageComponent,
        ClientsComponent,
        ClientFormComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
