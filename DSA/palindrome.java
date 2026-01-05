
public class palindrome {

    public static void main(String[] args) {
        String str = "hello";
        String rev = "";
        for (char ch : str.toCharArray()) {
            rev = ch + rev;
        }

        if (str.equals(rev)) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Not a palindrome");
        }
    }
}
