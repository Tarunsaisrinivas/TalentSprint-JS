
// import java.util.Arrays;
// public class MergeArray {
//     public static void main(String[] args) {
//         int[] arr1 = {1, 2, 3, 4, 5};
//         int[] arr2 = {6, 7, 8, 9, 10};
//         int i = 0, j = 0;
//         int[] merge = new int[arr1.length + arr2.length];
//         int k = 0;
//         while (i < arr1.length && j < arr2.length) {
//             if (arr1[i] <= arr2[j]) {
//                 merge[k] = arr1[i];
//                 i++;
//             } else {
//                 merge[k] = arr2[j];
//                 j++;
//             }
//             k++;
//         }
//         while (i < arr1.length) {
//             merge[k] = arr1[i];
//             i++;
//             k++;
//         }
//         while (j < arr2.length) {
//             merge[k] = arr2[j];
//             j++;
//             k++;
//         }
//         System.out.println(Arrays.toString(merge));
//     }
// }
import java.util.Arrays;

public class MergeArray {

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {6, 7, 8, 9, 10};
        int i = 0, j = 0;
        int[] merge = new int[arr1.length + arr2.length];
        int k = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                merge[k++] = arr1[i++];

            } else {
                merge[k++] = arr2[j++];

            }
        }
        while (i < arr1.length) {
            merge[k++] = arr1[i++];

        }
        while (j < arr2.length) {
            merge[k++] = arr2[j++];

        }
        System.out.println(Arrays.toString(merge));
    }
}
