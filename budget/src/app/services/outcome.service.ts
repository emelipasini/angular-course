import { BudgetValue } from "../models/budget-value";

export class OutcomeService {
    outcomes: BudgetValue[] = [
        new BudgetValue("Alquiler", 12500),
        new BudgetValue("Supermercado", 4100)
    ];

    getTotalOutcome() {
        let totalOutcome = 0;
        for (const outcome of this.outcomes) {
            totalOutcome += outcome.value;
        }
        return totalOutcome;
    }

    addOutcome(outcome: BudgetValue) {
        this.outcomes.push(outcome);
    }

    deleteOutcome(outcome: BudgetValue) {
        const index = this.outcomes.indexOf(outcome);
        this.outcomes.splice(index, 1);
    }
}