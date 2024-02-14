import { HasFormat } from "../interfaces/interface.js";

export class Payment implements HasFormat{
  constructor(
    readonly recipient:string,
    private details: string,
    public amount: number
    ){}
  format(){
    return `${this.recipient }, for ${ this.details}, Won: Sek ${this.amount}.`
  }
}