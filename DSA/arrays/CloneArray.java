
import java.util.Arrays;

public class CloneArray {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int[] clone = arr.clone();
        System.out.println(Arrays.toString(arr));
        
        System.out.println(Arrays.equals(arr, clone));
    }
}
