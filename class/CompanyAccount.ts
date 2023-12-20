import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  public getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.deposit(value)
      console.log('Voce pegou um empréstimo de $: ', value)
    } else {
      throw new Error('Conta Inválida')
    }
  }
}
