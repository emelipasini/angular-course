import { Component } from '@angular/core';

import { BudgetValue } from 'src/app/models/budget-value';

import { IncomeService } from 'src/app/services/income.service';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
    selector: 'app-add-value',
    templateUrl: './add-value.component.html',
    styleUrls: ['./add-value.component.css']
})
export class AddValueComponent {
    type = "in";
    name = "";
    value = 0;

    constructor(private incomeService: IncomeService, private outcomeService: OutcomeService) { }

    setType(evt: Event) {
        this.type = (evt.target as any).value;
    }

    addBudgetValue() {
        if(!this.name || !this.value) return;

        const newBudgetValue = new BudgetValue(this.name, this.value);
        if(this.type === "in") {
            this.incomeService.addIncome(newBudgetValue);
        }
        else {
            const totalIncome = this.incomeService.getTotalIncome();
            newBudgetValue.percentage = newBudgetValue.value / totalIncome;
            this.outcomeService.addOutcome(newBudgetValue);
        }
    }
}
