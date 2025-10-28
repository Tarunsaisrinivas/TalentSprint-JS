import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
    	Scanner sc = new Scanner(System.in);
    	System.out.println("Enter the first number : ");
    	int start = sc.nextInt();
    	System.out.println("Enter the Second number : ");
    	int end = sc.nextInt();
    	System.out.println("The palindrome numbers are :");
    	 int low = Math.min(start, end);
     int high = Math.max(start, end);
     int count = 0;


    	for (int n = low ; n <= high; n++) {
    		int real = n;
    		int rev  = 0;
    		
    		while(real !=0) {
    			int digit = real % 10;
    			rev = rev *10 + digit;
    			real = real/10;
    			
    		}
    		
    		
    		if (n == rev ) {
    			count ++;
    			System.out.println("Palindrome Number "+ n);
    		}
    		
    	}   
    	System.out.println("---Count---");
    	System.out.println("count"+count);
    	
//    	for (int n = end; n <= start; n++) {
//    		int real = n;
//    		int rev  = 0;
//    		while(real !=0) {
//    			int digit = real % 10;
//    			rev = rev *10 + digit;
//    			real = real/10;
//    			
//    		}
//    	
//    		if (n == rev ) {
//    			count ++;
//    			System.out.println(n);
//    		}
//    	}
  
    
    }
}

  