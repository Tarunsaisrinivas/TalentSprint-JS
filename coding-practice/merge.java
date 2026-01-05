
import java.util.*;

public class merge {

    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4};
        int[] b = {5, 6, 7, 8};
        int[] c = new int[a.length + b.length];
        int k = 0;
        for (int x : a) {
            c[k++] = x;
        }
        for (int x : b) {
            c[k++] = x;
        }

        Arrays.sort(c);
        System.out.println(Arrays.toString(c));
    }
}
