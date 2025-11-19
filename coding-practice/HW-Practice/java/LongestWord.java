import java.util.*;

public class LongestWord {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter paragraph:");
        String paragraph = sc.nextLine();

        String[] words = paragraph.split("\\s+");// ["This", "is", "a", "sample", "paragraph."]; 

        String longest = "";
        for (String w : words) {
            if (w.length() > longest.length()) {
                longest = w;
            }
        }

        System.out.println("Longest Word: " + longest);
        System.out.println("Length: " + longest.length());
    }
}
