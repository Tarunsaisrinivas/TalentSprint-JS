//banking system using OOPS with setter and getter methods with name and balance
class BankAccount {
    private String accountNumber;
    private String customerName;
    private double balance;

    public BankAccount(String accountNumber, String customerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.customerName = customerName;
        this.balance = initialBalance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance or invalid withdrawal amount.");
        }
    }

    public void displayBalance() {
        System.out.println("Current balance: " + balance);
    }
}
public class Banktest {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456789", "John Doe", 1000.0);
        
        System.out.println("Account Holder: " + account.getCustomerName());
        System.out.println("Account Number: " + account.getAccountNumber());
        account.displayBalance();
        
        account.deposit(500.0);
        account.displayBalance();
        
        account.withdraw(200.0);
        account.displayBalance();
        
        account.withdraw(2000.0); 
    }
}