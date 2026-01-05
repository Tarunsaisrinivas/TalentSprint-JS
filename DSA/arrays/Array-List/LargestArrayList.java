
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class LargestArrayList {

    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>(
                Arrays.asList(10, 25, 3, 56, 98, 44, 12)
        );

        int largest = Collections.max(list);

        System.out.println("Largest element in ArrayList: " + largest);
    }
}
