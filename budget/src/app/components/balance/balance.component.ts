import { Component, OnInit } from '@angular/core';

import { BudgetValue } from 'src/app/models/budget-value';

import { IncomeService } from 'src/app/services/income.service';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
    incomes: BudgetValue[] = [];
    outcomes: BudgetValue[] = [];

    totalIncome = 0;
    totalOutcome = 0;
    totalPercentage = 0;
    balance = 0;

    constructor(private incomeService: IncomeService, private outcomeService: OutcomeService) { }

    ngOnInit(): void {
        this.incomes = this.incomeService.incomes;
        this.outcomes = this.outcomeService.outcomes;

        this.totalIncome = this.incomeService.getTotalIncome();
        this.totalOutcome = this.outcomeService.getTotalOutcome();

        this.totalPercentage = this.totalOutcome / this.totalIncome;
        this.balance = this.totalIncome - this.totalOutcome;
    }
}
