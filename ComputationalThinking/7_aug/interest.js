import BankAccount from "./BankAccount.js";

class SavingsAccount extends BankAccount{
    constructor(accountNumber, accountHolderName, balance , interestRate = 0) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = interestRate;
    }
    addInterest(){
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(`Interest of ${interest} added. Your current balance is ${this.balance}`);

    }
}
const acc = new SavingsAccount(12345, "Tarun", 1000, 5);
acc.deposit(500);
acc.withdraw(200);
acc.addInterest();
acc.balanceEnquiry();