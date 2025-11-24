
public class DuplicateArray {

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 3, 7, 1, 9, 5};

        System.out.println("Duplicate values:");

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    System.out.print(arr[i] + " ");
                }
            }
        }
    }
}
