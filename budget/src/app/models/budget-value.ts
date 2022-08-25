export class BudgetValue {
    name: string;
    value: number;
    percentage?: any;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}
