// find the given integer in the arraylist if present return exists else not exists

import java.util.ArrayList;
import java.util.Arrays;

public class FindArrayList {

    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>(
                Arrays.asList(10, 25, 3, 56, 98, 44, 12)
        );

        int element = 6;

        if (list.contains(element)) {
            System.out.println("Element " + element + " exists in the ArrayList.");
        } else {
            System.out.println("Element " + element + " does NOT exist in the ArrayList.");
        }
    }
}
