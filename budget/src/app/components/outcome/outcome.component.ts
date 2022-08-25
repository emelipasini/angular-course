import { Component, OnInit } from '@angular/core';

import { BudgetValue } from 'src/app/models/budget-value';

import { OutcomeService } from 'src/app/services/outcome.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
    selector: 'app-outcome',
    templateUrl: './outcome.component.html',
    styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {
    outcomes: BudgetValue[] = [];

    totalIncome = 0;

    constructor(private outcomeService: OutcomeService, private incomeService: IncomeService) { }

    ngOnInit(): void {
        this.outcomes = this.outcomeService.outcomes;

        this.totalIncome = this.incomeService.getTotalIncome();
        
        for (const outcome of this.outcomes) {
            outcome.percentage = outcome.value / this.totalIncome;
        }
    }

    deleteValue(value: BudgetValue) {
        this.outcomeService.deleteOutcome(value);
    }
}
