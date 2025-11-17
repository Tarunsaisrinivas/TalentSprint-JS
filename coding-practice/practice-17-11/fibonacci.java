
public class fibonacci {

    public static void printFibonacci(int n) {
        int a = 0, b = 1;

        for (int i = 0; i < n; i++) {
            System.out.println(a);
            int next = a + b;
            a = b;
            b = next;
        }
    }

    public static void main(String[] args) {
        printFibonacci(10);
    }
}
//66