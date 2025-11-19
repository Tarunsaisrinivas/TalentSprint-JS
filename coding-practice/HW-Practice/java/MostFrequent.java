
public class MostFrequent {

    public static void main(String[] args) {
        int[] arr = {5, 2, 7, 5, 5, 7, 2, 2, 2};

        int maxCount = 0;
        int mostFrequent = arr[0];

        for (int i = 0; i < arr.length; i++) {
            int count = 1;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }

            if (count > maxCount) {
                maxCount = count;
                mostFrequent = arr[i];
            }
        }

        System.out.println("Most Frequent Element: " + mostFrequent);
        System.out.println("Frequency: " + maxCount);
    }
}
