import { Component, OnInit } from '@angular/core';

import { BudgetValue } from 'src/app/models/budget-value';

import { IncomeService } from 'src/app/services/income.service';

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
    incomes: BudgetValue[] = [];

    constructor(private incomeService: IncomeService) { }

    ngOnInit(): void {
        this.incomes = this.incomeService.incomes;
    }

    deleteValue(value: BudgetValue) {
        this.incomeService.deleteIncome(value);
    }
}
