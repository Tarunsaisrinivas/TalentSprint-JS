import java.util.Arrays;
import java.util.Collections;

public class DemoArray {
    public static void main(String[] args) {
        Integer[] num = {10, 44, 23, 56, 33};

        Arrays.sort(num);
        System.out.println("Ascending: " + Arrays.toString(num));

        int se = 33;
        int index = Arrays.binarySearch(num, se);
        System.out.println("Index of " + se + ": " + index);

      
        Arrays.sort(num, Collections.reverseOrder());
        System.out.println("Descending: " + Arrays.toString(num));
    }
}