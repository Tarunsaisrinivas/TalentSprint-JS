// counts various types in a given context if capital letters, small letters, digits, special characters etc.
public class CountVariousTypes {
   public static void main(String[] args) {
       String str = "Hello World! 1234 @Java#";
       int capitalLetters = 0;
       int smallLetters = 0;
       int digits = 0;
       int specialCharacters = 0;

       for (char ch : str.toCharArray()) {
           if (Character.isUpperCase(ch)) {
               capitalLetters++;
           } else if (Character.isLowerCase(ch)) {
               smallLetters++;
           } else if (Character.isDigit(ch)) {
               digits++;
           } else if (!Character.isWhitespace(ch)) {
               specialCharacters++;
           }
       }

       System.out.println("Capital Letters: " + capitalLetters);
       System.out.println("Small Letters: " + smallLetters);
       System.out.println("Digits: " + digits);
       System.out.println("Special Characters: " + specialCharacters);
       
       
   }
}
