package src;

import java.util.Scanner;

public class UserLogin {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        UserDAO userDAO = new UserDAO();

        while (true) {
            System.out.println("\n========= MENU =========");
            System.out.println("1. Signup");
            System.out.println("2. Login");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");

            int choice = sc.nextInt();
            sc.nextLine();  // clear buffer

            switch (choice) {

                case 1: // SIGNUP
                    System.out.print("Enter username: ");
                    String newUsername = sc.nextLine();

                    System.out.print("Enter password: ");
                    String newPassword = sc.nextLine();

                    User newUser = new User(newUsername, newPassword);

                    if (userDAO.signup(newUser)) {
                        System.out.println("Signup successful!");
                    } else {
                        System.out.println("Signup failed!");
                    }
                    break;

                case 2: // LOGIN
                    System.out.print("Enter username: ");
                    String loginUser = sc.nextLine();

                    System.out.print("Enter password: ");
                    String loginPassword = sc.nextLine();

                    if (userDAO.login(loginUser, loginPassword)) {
                        System.out.println("Login successful! Welcome " + loginUser);
                    } else {
                        System.out.println("Invalid username or password!");
                    }
                    break;

                case 3:
                    System.out.println("Exiting...");
                    sc.close();
                    return;

                default:
                    System.out.println("Invalid choice! Try again.");
            }
        }
    }
}
