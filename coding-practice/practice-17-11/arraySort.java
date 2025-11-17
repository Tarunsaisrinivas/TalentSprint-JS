
// public class arraySort {

//     public static void sortArray(int[] arr) {
//         int n = arr.length;

//         for (int i = 0; i < n - 1; i++) {
//             for (int j = 0; j < n - i - 1; j++) {
//                 if (arr[j] > arr[j + 1]) {
//                     int temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                 }
//             }
//         }

//         System.out.print("Ascending Order: ");
//         for (int num : arr) {
//             System.out.print(num + " ");
//         }
//         System.out.println();

//         int start = 0, end = n - 1;
//         while (start < end) {
//             int temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//             start++;
//             end--;
//         }

//         // Print descending
//         System.out.print("Descending Order: ");
//         for (int num : arr) {
//             System.out.print(num + " ");
//         }
//         System.out.println();
//     }

//     public static void main(String[] args) {
//         int[] array = {64, 34, 25, 12, 22, 11, 90};
//         sortArray(array);
//     }
// }


public class arraySort {

    public static void sortArray(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;

            // inner loop
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }

        System.out.print("Ascending Order: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();

        int start = 0, end = n - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

        // Print Descending
        System.out.print("Descending Order: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] array = {64, 34, 25, 12, 22, 11, 90};

        sortArray(array);
    }
}
