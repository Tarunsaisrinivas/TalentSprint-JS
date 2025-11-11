
public class CountString {
    public static void main(String[] args) {
        String str = "Hello World! Welcome to TalentSprint Java Class.";
        String[] words = str.split("\\s+"); 
        int whiteSpace = str.length() - str.replace(" ", "").length();
        int count = words.length;
        int both = count + whiteSpace;
        System.out.println("Number of strings (words) in the given sentence: " + count);
        System.out.println("Number of White Spaces in the given sentence: " + whiteSpace);
        System.out.println("Total count (words + white spaces): " + both);
    }
}
