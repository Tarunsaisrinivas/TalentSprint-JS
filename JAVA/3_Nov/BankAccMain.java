// need the bank account class with customer account no,name, amount and account type = savings , current;
// deposit() withdraw() accept and display and savings account having interest of 3% and need display after interest , current interest 5% display interest

class BankAcc extends BankApp{
	
	String accType;
	public BankAcc(String accNo, String name, int amount, String accType) {
		super(accNo, name, amount);
		this.accType = accType;
	}
}
class SavingsAcc extends BankAcc{
	 double interest=0.03;
	public SavingsAcc(String accNo, String name, int amount, String accType) {
		super(accNo, name, amount, accType);
	}
	void display() {
		System.out.println("Account No: "+accNo);
		System.out.println("Name: "+name);
		System.out.println("Amount: "+amount);
		System.out.println("Account Type: "+accType);
		System.out.println("Interest: "+(amount*interest));
		System.out.println("Total Amount after interest: "+(amount+(amount*interest)));
	}
}
class CurrentAcc extends BankAcc{
	double interest=0.05;
	public CurrentAcc(String accNo, String name, int amount, String accType) {
		super(accNo, name, amount, accType);
	}
	void display() {
		System.out.println("Account No: "+accNo);
		System.out.println("Name: "+name);
		System.out.println("Amount: "+amount);
		System.out.println("Account Type: "+accType);
		System.out.println("Interest: "+(amount*interest));
		System.out.println("Total Amount after interest: "+(amount+(amount*interest)));
	}
}
class  BankApp{
	String accNo;
	String name;
	int amount;
	
	public BankApp(String accNo, String name, int amount) {
	    this.accNo = accNo;
	    this.name = name;
	    this.amount = amount;
	}
	public void deposit(int amt) {
		if(amt>0){

		amount+=amt;
		}
		else {
			System.out.println("Deposit amount must be positive.");
		}
	}
	public void withdraw(int amt) {
		if(amt>0 && amt<=amount){
		amount-=amt;
		}
		else {
			System.out.println("Insufficient balance or invalid amount.");
		}
	}
}
public class BankAccMain {
	public static void main(String[] args) {
		SavingsAcc sa=new SavingsAcc("S001", "Alice", 10000, "Savings");
		System.out.println("------------display alice---------------");
		sa.display();
		System.out.println();
		CurrentAcc ca=new CurrentAcc("C001", "Bob", 20000, "Current");
		System.out.println("------------display bob---------------");
		ca.display();
		ca.deposit(5000);
		System.out.println("\nAfter depositing 5000 in Current Account:");
		System.out.println("------------display deposit---------------");
		ca.display();
		ca.withdraw(3000);
		System.out.println("\nAfter withdrawing 3000 from Current Account:");
		System.out.println("------------display withdraw---------------");
		ca.display();
	}
}