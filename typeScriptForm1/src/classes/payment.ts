import { HasFormatter } from "../interfaces/hasFormatter.js"; 

export class Payment implements HasFormatter {
    constructor( 
     readonly recipient: string,
     private details: string,
     public amount: number,
    ){}

    format(){// the interface has to return something otherwise it doesnt work
    return `${this.recipient} for ${this.details} won $${this.amount}`;
  }
};