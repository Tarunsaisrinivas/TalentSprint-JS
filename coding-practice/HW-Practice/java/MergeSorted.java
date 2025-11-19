public class MergeSorted {

    public static void main(String[] args) {
        int[] a = {1, 4, 7};
        int[] b = {2, 3, 5, 6};

        int i = 0, j = 0;
        int[] merged = new int[a.length + b.length];
        int k = 0;
     
        while (i < a.length && j < b.length) {
            merged[k++] = (a[i] < b[j]) ? a[i++] : b[j++];
        }

        while (i < a.length) {
            merged[k++] = a[i++];
        }
        while (j < b.length) {
            merged[k++] = b[j++];
        }


        // System.out.println(Arrays.toString(merged));
        for (int num : merged) {
            System.out.print(num + " ");
        }

    }
}
