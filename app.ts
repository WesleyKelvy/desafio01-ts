import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewTypeAccount } from './class/NewTypeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(200)
peopleAccount.getBalance()
peopleAccount.withdraw(145)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.getBalance()
companyAccount.getLoan(150)
companyAccount.withdraw(155)
console.log(companyAccount)


const newTypeAccount: NewTypeAccount = new NewTypeAccount('Felipe', 5)
newTypeAccount.plusTenDeposit(490)
newTypeAccount.getBalance()
console.log(newTypeAccount)