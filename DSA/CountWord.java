

public class CountWord {

    public static void main(String[] args) {
        String paragraph = "Hello World";

        // Split by one or more whitespace characters
        String[] noSpace = paragraph.split("\\s+");

        System.out.println("Number of words: " + noSpace.length);
    }
}
