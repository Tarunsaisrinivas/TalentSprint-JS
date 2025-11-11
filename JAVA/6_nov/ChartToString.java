//  Given a chart of characters, convert it into a ascii  example  A output 65 need with userinput not from chart even we give space or numbers need to show ascii value

// public class ChartToString {
//     public static void main(String[] args) {
//         char[][] chart = {
//             {'A', 'B', 'C'},
//             {'D', 'E', 'F'},
//             {'G', 'H', 'I'}
//         };

//         StringBuilder result = new StringBuilder();

//         for (char[] row : chart) {
//             for (char ch : row) {
//                 result.append(ch).append(" output ").append((int) ch).append("\n");
//             }
//         }

//         System.out.println(result.toString());
//     }
// }
import java.util.Scanner;

public class ChartToString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a character: ");
        char inputChar = scanner.next().charAt(0);
        
        System.out.println(inputChar + " output " + (int) inputChar);
        
        scanner.close();
    }
}