import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ClientsComponent } from './components/clients/clients.component';
import { ClientComponent } from './components/clients/client/client.component';
import { ClientFormComponent } from './components/clients/client-form/client-form.component';

import { AuthService } from './services/auth.service';
import { LoginRoutesGuard } from './guards/login-routes.guard';
import { LogoutRoutesGuard } from './guards/logout-routes.guard';

import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ErrorPageComponent,
        ClientsComponent,
        ClientFormComponent,
        DashboardComponent,
        ClientComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
    ],
    providers: [
        AuthService,
        LoginRoutesGuard,
        LogoutRoutesGuard,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
