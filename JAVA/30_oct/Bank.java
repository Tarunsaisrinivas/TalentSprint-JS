import java.util.Scanner;

class BankApp {
	private int balance = 0;
	private String name;

	void deposit(int amount) {
		if (amount > 0) {

			balance += amount;
		} else {
			System.out.println("Need in positive value input");
		}

	}

	void withdraw(int amount) {
		if (amount <= balance && amount > 0) {

			balance -= amount;
		} else {
			System.out.println("Insufficient");
		}
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "BankApp [balance=" + balance + ", name=" + name + "]";
	}

}

public class Bank {
	public static void main(String[] args) {
		BankApp myBank = new BankApp();
		myBank.setName("Tarun");
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the deposit value ");
		int dep = sc.nextInt();
		myBank.deposit(dep);
		System.out.println("Balance after deposit: " + myBank.getName() + " " + myBank.getBalance());
		System.out.println(myBank);
		myBank.withdraw(2000);
		System.out.println(myBank);

//        System.out.println("Balance after withdrawal: " + myBank.getName() +" "+myBank.getBalance());
		myBank.getBalance();
		myBank.deposit(-400);
		myBank.withdraw(-100);
//        System.out.println("Balance of user: " + myBank.getName() +" "+myBank.getBalance());

	}
}