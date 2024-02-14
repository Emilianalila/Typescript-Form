import { HasFormat } from "../interfaces/interface.js"

export class Invoice implements HasFormat{
  constructor(
    readonly name:string,
    private details: string,
    public amount: number
    ){}
  format(){
    return `${this.name},for ${this.details}, owes $${this.amount}`
  }
}