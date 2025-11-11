//H.W
import java.io.IOException; 
class ThrowsExample {
    static void readFile() throws IOException {
  
//        throw new IOException("File not found"); // gets the output as File not found
    	 	System.out.println("File read successfully!");
    }

    public static void main(String[] args) {
        try {
            readFile();
        } catch (java.io.IOException e) {
            System.out.println("Exception caught: " + e.getMessage());
        }
    }
}
