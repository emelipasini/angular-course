import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { IncomeComponent } from './components/income/income.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { AddValueComponent } from './components/add-value/add-value.component';

import { IncomeService } from './services/income.service';
import { OutcomeService } from './services/outcome.service';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    IncomeComponent,
    OutcomeComponent,
    AddValueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IncomeService, OutcomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
