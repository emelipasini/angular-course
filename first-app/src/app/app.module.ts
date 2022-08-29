import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonFormComponent } from './components/people/person-form/person-form.component';

import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HomeComponent,
    PersonFormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
