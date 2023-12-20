import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  public plusTenDeposit = (value: number): void => {
    this.deposit(value + 10)
  }
}