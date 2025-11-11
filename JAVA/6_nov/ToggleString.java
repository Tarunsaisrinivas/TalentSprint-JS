import java.util.Scanner;
public class ToggleString {
    public static void main(String[] args) {
    		Scanner sc = new Scanner(System.in);
    		System.out.println("Enter a string in Toggle String type : ");
    		String userInput = sc.next();
        String input = userInput;
        StringBuilder result = new StringBuilder();

        for (char ch : input.toCharArray()) {
            if (Character.isUpperCase(ch)) {
                result.append(Character.toLowerCase(ch));
            } else if (Character.isLowerCase(ch)) {
                result.append(Character.toUpperCase(ch));
            } else {
                result.append(ch); 
            }
        }

        System.out.println("Original: " + input);
        System.out.println("Swapped : " + result.toString());
        sc.close();
    }
}
