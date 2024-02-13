export class Invoice {
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.name} for ${this.details} owes $${this.amount}`;
    }
}
;
