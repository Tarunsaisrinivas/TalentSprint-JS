
import java.util.ArrayList;

public class Frequency {

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(2);
        list.add(4);

        System.out.println("The given list: " + list);

        ArrayList<Integer> visited = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            int element = list.get(i);

            if (visited.contains(element)) {
                continue;
            }

            int count = 0;
            for (int j = 0; j < list.size(); j++) {
                if (list.get(j).equals(element)) {
                    count++;
                }
            }

            visited.add(element);

          
            System.out.println("Element " + element + " occurs " + count + " times");
        }
    }
}
