import { BudgetValue } from "../models/budget-value";

export class IncomeService {
    incomes: BudgetValue[] = [
        new BudgetValue("Salario", 45000),
        new BudgetValue("Reembolso", 3600)
    ];

    getTotalIncome() {
        let totalIncome = 0;
        for (const income of this.incomes) {
            totalIncome += income.value;
        }
        return totalIncome;
    }

    addIncome(income: BudgetValue) {
        this.incomes.push(income);
    }

    deleteIncome(income: BudgetValue) {
        const index = this.incomes.indexOf(income);
        this.incomes.splice(index, 1);
    }
}