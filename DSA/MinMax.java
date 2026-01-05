
import java.util.*;

public class MinMax {

    public static void main(String[] args) {
        ArrayList<Integer> l = new ArrayList<>(Arrays.asList(2, 3, 1, 5, 6));

        int min = l.get(0);
        int max = l.get(0);

        for (int num : l) {

            min = (num < min) ? num : min;
            max = (num > max) ? num : max;

        }

        System.out.println("Minimum element is " + min);
        System.out.println("Maximum element is " + max);
    }
}
