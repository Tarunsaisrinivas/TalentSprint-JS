public class prime {
    public static boolean isPrime(int num) {
        if (num <= 1 || num % 2 == 0) return false;
        if (num == 2) return true;
        for (int i = 3; i <= Math.sqrt(num); i+=2) {
            if (num % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(32));
    }
}
// 3 steps