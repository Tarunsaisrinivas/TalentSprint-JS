import java.util.Scanner;

public class swap {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = sc.nextInt();

        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        System.out.println("\nBefore swapping:");
        System.out.println("a = " + a + ", b = " + b);

       a = a + b;
        b = a - b;
        a = a - b;


        System.out.println("\nAfter swapping:");
        System.out.println("a = " + a + ", b = " + b);

    }
}
