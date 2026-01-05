
import java.util.ArrayList;
import java.util.Arrays;

public class RemoveEvenArrayList {

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(10, 23, 36, 41, 50, 26, 17, 98, 91, 106));
        list.removeIf(i -> i % 2 == 0);
        System.out.println(list);
    }
}
