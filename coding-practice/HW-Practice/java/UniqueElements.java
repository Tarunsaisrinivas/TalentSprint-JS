
public class UniqueElements {

    public static void main(String[] args) {
        int[] arr = {4, 5, 4, 6, 6, 7};

        System.out.print("Unique Elements: ");

        for (int i = 0; i < arr.length; i++) { 
            boolean isUnique = true;

            for (int j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    isUnique = false;
                    break;
                }
            }

            if (isUnique) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}


// Method 2 :
// import java.util.Arrays;

// public class UniqueElements {

//     public static void main(String[] args) {

//         int[] arr = {4, 5, 4, 6, 6, 7};

//         System.out.print("Unique Elements: ");
//         Arrays.stream(arr)
//                 .distinct()
//                 .forEach(n -> System.out.print(n + " "));
//     }
// }
