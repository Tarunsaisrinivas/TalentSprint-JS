class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(
        `Amount ${amt} is Deposited and your current balance is ${this.balance}`
      );
    } else {
      console.log("Can't deposit negative amount");
    }
  }
  withdraw(amt) {
    if (amt <= 0) {
      console.log("Can't withdraw negative or zero amount");
    } else if (amt > this.balance) {
      console.log(
        "You can't withdraw that much amount, your current balance is " +
          this.balance
      );
    } else {
      this.balance -= amt;
      console.log(
        `Amount ${amt} is withdrawn. Your current balance is ${this.balance}`
      );
    }
  }
  balanceEnquiry() {
    console.log(`Your current balance is ${this.balance}`);
  }
}
export default BankAccount;
// const acc = new BankAccount(12345, "Tarun", 1000);
// acc.deposit(500);    
// acc.withdraw(200);    
// acc.withdraw(2000);   
// acc.withdraw(-50);   





