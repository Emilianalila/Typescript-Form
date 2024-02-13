import { HasFormatter } from "../interfaces/hasFormatter.js"; 

export class Invoice implements HasFormatter {
   constructor(
    readonly name: string,
    private details: string,
    public amount: number,
    ){}

  format(){// the interface has to return something otherwise it doesnt work, and it has to be an string.
    return `${this.name} for ${this.details} owes $${this.amount}`;
  }
};