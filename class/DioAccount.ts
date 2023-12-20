export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  // public setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  public getName = (): string => {
    return this.name
  }

  public deposit(value: number): number {
    if (this.validateStatus()) {
      this.balance += value;
      return this.balance;
    }
    throw new Error('Conta Inválida');
  }

  public withdraw = (requested: number): void => {

    if (!this.validateStatus()) {
      throw new Error('Conta inválida')

    } else if ((this.balance <= requested)) {

      throw new Error('Saque inválido: Você não tem fundos suficientes.')

    } else {
      this.balance -= requested
      console.log('Voce sacou, seu saldo atual é: ', this.balance)
    }
  }

  public getBalance = (): void => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
