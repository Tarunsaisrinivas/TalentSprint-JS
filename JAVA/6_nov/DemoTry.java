import java.util.Scanner;

public class DemoTry {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = 0, b = 0, c = 0;

        try {
            // Validate number of arguments
//            if (args.length < 2) {
//                throw new IllegalArgumentException("Please provide two integer arguments.");
//            }

            // Parse arguments
            a = Integer.parseInt(args[0]);
            b = Integer.parseInt(args[1]);

            // Perform division
            c = a / b;
            System.out.println("Div is " + c);
        } catch (NumberFormatException e) {
            System.out.println("Invalid input: Please enter valid integers.");
            e.printStackTrace();
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
            e.printStackTrace();
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Not enough arguments provided.");
            e.printStackTrace();
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            System.out.println("Unexpected error occurred: " + e.toString());
            e.printStackTrace();
        } finally {
            sc.close();
            System.out.println("Hi batch 70");
            System.out.println("Welcome to Java Exceptions");
        }
    }
}